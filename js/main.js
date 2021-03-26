/* eslint-disable no-shadow */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-labels */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
import NotaFiscal from './NotaFiscal.js';
import Produto from './Produto.js';
import listaDeAtos from './listaDeAtos.js';
import LinhaTabela from './LinhaTabela.js';
import Relatorio from './Relatorio.js';
import UI from './UI.js';
import Calculo from './Calculo.js';
import Dinero from '../node_modules/dinero.js/build/esm/dinero.js';

Dinero.defaultCurrency = 'BRL';
Dinero.globalLocale = 'pt-br';
Dinero.defaultPrecision = 4;

// const din1 = Dinero({ amount: 2 });
// const din2 = Dinero({ amount: 3 });
// const valor = (din1.add(din2)).getAmount();
// console.log(valor);

const empresa = JSON.parse(window.localStorage.getItem('empresa'));

const removeNotasFiscaisDeOutrasEmpresas = (notasFiscais) => {
  const cnpjSoNumeros = empresa.cnpjFormatado.replace(/[!"#$%&'() * +,-./: ;<=>?@[\]^ `{|}~]/g, '');
  const nfsEmpresaSelecionada = notasFiscais.filter((nf) => nf.name.includes(cnpjSoNumeros));
  return nfsEmpresaSelecionada;
};

// Remove as notas canceladas com final (-nfce e -nfe) deixando apenas as
// notas fiscais com final(-can)
const removeNotasFiscaisCanceladas = (notasFiscais) => {
  const nfsCanceladas = notasFiscais.filter((nf) => nf.name.includes('-can'));
  const chavesDeAcesso = nfsCanceladas.map((nfCancelada) => nfCancelada.name.replace('-can.xml', '-nf'));

  // semNFCanc (Sem Nota Fiscal Cancelada)
  const semNFCanc = notasFiscais.filter((nf) => !chavesDeAcesso.includes(nf.name.substr(0, 47)));
  return semNFCanc;
};

const eCombustivelValido = (nomeProduto) => {
  if (nomeProduto === 'GASOLINA COMUM' || nomeProduto === 'GASOLINA ADITIVADA'
    || nomeProduto === 'DIESEL COMUM' || nomeProduto === 'DIESEL S10') {
    return true;
  }
  return false;
};

const retornaProdutosValidos = (domNotaFiscal) => {
  const produtosNotaFiscal = Array.from(domNotaFiscal.querySelectorAll('prod'));
  const produtosValidos = [];

  produtosNotaFiscal.forEach((produto) => {
    const nomeProduto = produto.querySelector('xProd').textContent;

    if (eCombustivelValido(nomeProduto)) {
      const qtdVendida = produto.querySelector('qCom').textContent;
      const valUnidProd = produto.querySelector('vUnCom').textContent;
      const valTotVendido = produto.querySelector('vProd').textContent;
      produtosValidos.push(new Produto(nomeProduto, qtdVendida, valUnidProd, valTotVendido));
    }
  });

  return produtosValidos;
};

const retornaChaveDeAcessoDaNFInutilizada = (dom) => {
  const ano = dom.querySelector('ano').textContent;
  const cnpj = dom.querySelector('CNPJ').textContent;
  const modelo = dom.querySelector('mod').textContent;
  let serie = dom.querySelector('serie').textContent;

  if (serie.length === 1) {
    serie = `00${serie}`;
  } else if (serie.length === 2) {
    serie = `0${serie}`;
  }
  const inicial = dom.querySelector('nNFIni').textContent;
  const final = dom.querySelector('nNFFin').textContent;
  const nomeDoAquivo = `${ano}${cnpj}${modelo}${serie}${inicial}${final}-inu`;

  return nomeDoAquivo;
};

const retornaUmObjetoNotaFiscalClassificado = (domNotaFiscal, index) => {
  const rootElementDoArquivo = domNotaFiscal.documentElement.tagName;
  let chaveAcesso;
  let classificacaoNF;
  let notaFiscal;

  if (rootElementDoArquivo === 'retInutNFe') {
    chaveAcesso = retornaChaveDeAcessoDaNFInutilizada(domNotaFiscal);
    classificacaoNF = 'Inutilizada';
    notaFiscal = new NotaFiscal(index, chaveAcesso, classificacaoNF);
  } else if (rootElementDoArquivo === 'retEnvEvento') {
    chaveAcesso = domNotaFiscal.querySelector('chNFe').textContent;
    classificacaoNF = 'Cancelada';
    notaFiscal = new NotaFiscal(index, chaveAcesso, classificacaoNF);
  } else if (rootElementDoArquivo === 'nfeProc') {
    const produtosValidos = retornaProdutosValidos(domNotaFiscal);
    const qtdProdutosValidos = produtosValidos.length;

    if (qtdProdutosValidos > 0) {
      classificacaoNF = 'Válida';
      chaveAcesso = domNotaFiscal.querySelector('infNFe').getAttribute('Id');
      const dataEmissao = domNotaFiscal.querySelector('dhEmi').textContent;
      notaFiscal = new NotaFiscal(index, chaveAcesso, classificacaoNF);
      notaFiscal.preencheNotaFiscalValida(dataEmissao, produtosValidos, empresa);
    } else {
      classificacaoNF = 'Sem Combustível';
      chaveAcesso = domNotaFiscal.querySelector('infNFe').getAttribute('Id');
      notaFiscal = new NotaFiscal(index, chaveAcesso, classificacaoNF);
    }
  }

  return notaFiscal;
};

// Criar uma função que le os arquivos
// -- Nessa função tem que cria os objetos das notas e retornar os ojetos
const retornaObjetosDoTipoNotaFiscal = (arquivosNotaFiscal) => {
  const parser = new DOMParser();
  const objetosNotaFiscal = [];

  arquivosNotaFiscal.forEach((arquivo, index) => {
    const reader = new FileReader();

    reader.onload = () => {
      const xmlString = reader.result;
      const domNotaFiscal = parser.parseFromString(xmlString, 'application/xml');
      const notaFiscal = retornaUmObjetoNotaFiscalClassificado(domNotaFiscal, index);
      objetosNotaFiscal.push(notaFiscal);
    };

    reader.readAsText(arquivo);
  });

  return objetosNotaFiscal;
};

const retornaOAto = (dataDeEmissao) => {
  let objAto;

  outerLoop:
  for (let i = 0; i < listaDeAtos.length; i += 1) {
    for (let j = 0; j < listaDeAtos[i].length; j += 1) {
      const dataDeInicioDoAtoAtual = listaDeAtos[i][j].dataInicio;
      const dataDeFimDoAtoAtual = listaDeAtos[i][j].dataFim;

      if (((dataDeEmissao.valueOf() >= dataDeInicioDoAtoAtual.valueOf())
        && (dataDeEmissao.valueOf() <= dataDeFimDoAtoAtual.valueOf()))) {
        const atoObjHelper = listaDeAtos[i][j];
        objAto = atoObjHelper;
        break outerLoop;
      }
    }
  }
  return objAto;
};

const retornaValoresPresumidos = (produtos, ato) => {
  produtos.forEach((produto) => {
    const p = produto;
    if (produto.nomeDoProduto === 'GASOLINA COMUM') {
      p.valorPresumido = ato.produtoImposto.gac;
    } else if (produto.nomeDoProduto === 'GASOLINA ADITIVADA') {
      p.valorPresumido = ato.produtoImposto.gap;
    } else if (produto.nomeDoProduto === 'DIESEL COMUM') {
      p.valorPresumido = ato.produtoImposto.oleoDisel;
    } else if (produto.nomeDoProduto === 'DIESEL S10') {
      p.valorPresumido = ato.produtoImposto.d10;
    }
  });

  const valoresPresumidos = produtos.map((produto) => produto.valorPresumido);
  return valoresPresumidos;
};

// Helper Functions
const retornaNumeroSequencial = (nf) => nf.indexNotaFiscal + 1;
const retornaNomeNotaFiscal = (nf) => nf.chaveDeAcesso;
const retornaDataDeEmissao = (nf) => nf.dataEmissao;
const retornaAtoEAno = (ato) => `${ato.numeroAto}/${ato.ano}`;

const retornaNomeCombustiveis = (produtos) => {
  const nomesCombustiveis = produtos.map((produto) => produto.nomeDoProduto);
  return nomesCombustiveis;
};

const retornaValoresPraticados = (produtos) => {
  const valoresPraticados = produtos.map((produto) => produto.valorPraticado);
  return valoresPraticados;
};

const retornaQtdLitros = (produtos) => {
  const qtdLitros = produtos.map((produto) => produto.getQtdVendida());
  return qtdLitros;
};

const retornaValoresTotaisPraticados = (produtos) => {
  const valorTotalPraticado = produtos.map((produto) => produto.valorTotalPraticado);
  return valorTotalPraticado;
};

let competencia;
const guardaCompetencia = (dataEmissao) => {
  let mes = dataEmissao.getMonth() + 1;
  const ano = dataEmissao.getFullYear();

  if (mes <= 9) {
    mes = `0${mes}`;
  }

  const mesAno = `${mes}/${ano}`;

  if (competencia !== mesAno) {
    console.log(`Competencia Atual: ${competencia}`);
    console.log(`Nova Competencia: ${mesAno}`);
    competencia = mesAno;
  }
};

const preparaLinhasTabela = (notasFiscais) => {
  const linhasTabela = [];

  notasFiscais.forEach((nf) => {
    if (nf.statusNotaFiscal === 'Válida') {
      const { produtos } = nf;
      const numeroSequencial = retornaNumeroSequencial(nf);
      const nota = retornaNomeNotaFiscal(nf);
      const dataEmissao = retornaDataDeEmissao(nf);
      guardaCompetencia(dataEmissao);
      const combustiveis = retornaNomeCombustiveis(produtos);
      const ato = retornaOAto(dataEmissao);
      const atoAno = retornaAtoEAno(ato);
      const valoresPresumidos = retornaValoresPresumidos(produtos, ato);
      const valorPraticado = retornaValoresPraticados(produtos);
      const difPresumidoEPraticado = Calculo.calculaDiferencaEntrePresumidoEPraticado(produtos);
      const litros = retornaQtdLitros(produtos);
      const valorTotalPresumido = Calculo.calculaValorTotalPresumido(produtos);
      const valorTotalPraticado = retornaValoresTotaisPraticados(produtos);
      const difTotPresuETotVendido = Calculo.calculaDifEntreTotalPresumidoETotalPraticado(produtos);
      const valorRestituicao = Calculo.calculaIcmsRestituicao(difTotPresuETotVendido);
      const statusNotaFiscal = 'Válida';

      linhasTabela.push(new LinhaTabela(numeroSequencial, nota, dataEmissao, combustiveis,
        atoAno, valoresPresumidos, valorPraticado, difPresumidoEPraticado, litros,
        valorTotalPresumido, valorTotalPraticado, difTotPresuETotVendido, valorRestituicao,
        statusNotaFiscal));
    } else {
      linhasTabela.push(nf);
    }
  });

  return linhasTabela;
};

const retornaRelatorio = (linhasTabela, somatorias, competencia) => {
  const valorPresumido = somatorias[0];
  const valorPraticado = somatorias[1];
  const somaDiferenca = somatorias[2];
  const somaIcm = somatorias[3];
  const relatorio = new Relatorio(linhasTabela, valorPresumido,
    valorPraticado, somaDiferenca, somaIcm);

  relatorio.competencia = competencia;

  return relatorio;
};

document.addEventListener('DOMContentLoaded', () => {
  UI.mostraNomeDaEmpresaNaTela(empresa);
  UI.mostraCnpjDaEmpresaNaTela(empresa);
  UI.mostraTipoDeNotaNaTela(empresa);
});

document.querySelector('#geraRelatorioPdf').addEventListener('click', () => {
  const controles = document.querySelector('#controles');
  controles.style.display = 'none';
  window.print();
});

window.addEventListener('afterprint', () => {
  const controles = document.querySelector('#controles');
  controles.style.display = '';
});

document.querySelector('#notasFiscais').addEventListener('change', (event) => {
  const arquivos = Array.from(event.target.files);
  const arquivosSelecionados = removeNotasFiscaisDeOutrasEmpresas(arquivos);
  const arquivosParaClassificacao = removeNotasFiscaisCanceladas(arquivosSelecionados);
  const objetosNotaFiscal = retornaObjetosDoTipoNotaFiscal(arquivosParaClassificacao);

  setTimeout(() => {
    const linhasTabela = preparaLinhasTabela(objetosNotaFiscal);
    const somatorias = Calculo.retornaAsSomatorias(linhasTabela);
    const relatorio = retornaRelatorio(linhasTabela, somatorias, competencia);
    UI.mostraRelatorio(relatorio);
  }, 50000);
});

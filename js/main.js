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

const empresa = JSON.parse(window.localStorage.getItem('empresa'));
const cnpjSoNumeros = empresa.cnpjFormatado.replace(/[!"#$%&'() * +,-./: ;<=>?@[\]^ __`{|}~]/g, '');

const mostraNomeDaEmpresaNaTela = () => {
  const { nomeEmpresa } = empresa;
  const divNome = document.querySelector('#nome-empresa');
  divNome.textContent = nomeEmpresa;
};

const mostraCnpjDaEmpresaNaTela = () => {
  const { cnpjFormatado } = empresa;
  const divCnpj = document.querySelector('#cnpj-empresa');
  divCnpj.textContent = cnpjFormatado;
};

const removeNotasFiscaisDeOutrasEmpresas = (notasFiscais) => {
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

const nfTemCombustivel = (domNotaFiscal) => {
  const produtosNotaFiscal = Array.from(domNotaFiscal.querySelectorAll('xProd'));
  const valoresPresumidos = [];

  produtosNotaFiscal.forEach((produto) => {
    const nomeProduto = produto.textContent;

    if (nomeProduto === 'GASOLINA COMUM') {
      valoresPresumidos.push(true);
    } else if (nomeProduto === 'GASOLINA ADITIVADA') {
      valoresPresumidos.push(true);
    } else if (nomeProduto === 'DIESEL COMUM') {
      valoresPresumidos.push(true);
    } else if (nomeProduto === 'DIESEL S10') {
      valoresPresumidos.push(true);
    } else {
      valoresPresumidos.push(false);
    }
  });

  // Ou seja se tiver pelomenos um combustível nessa Nota Fiscal ela vai ser considerada válida
  if (valoresPresumidos.includes(true)) {
    return true;
  }
  return false;
};

const retornaAClassificacaoDaNotaFiscal = (domNotaFiscal) => {
  const rootElementDoArquivo = domNotaFiscal.documentElement.tagName;
  let classificacaoNF;

  if (rootElementDoArquivo === 'retInutNFe') {
    classificacaoNF = 'Inutilizada';
  } else if (rootElementDoArquivo === 'retEnvEvento') {
    classificacaoNF = 'Cancelada';
  } else if (rootElementDoArquivo === 'nfeProc') {
    if (nfTemCombustivel(domNotaFiscal)) {
      classificacaoNF = 'Válida';
    } else {
      classificacaoNF = 'Sem Combustível';
    }
  }
  return classificacaoNF;
};

const eCombustivelValido = (nomeProduto) => {
  if (nomeProduto === 'GASOLINA COMUM' || nomeProduto === 'GASOLINA ADITIVADA'
    || nomeProduto === 'DIESEL COMUM' || nomeProduto === 'DIESEL S10') {
    return true;
  }
  return false;
};

const retornaListaDeProdutosValidos = (dom) => {
  const produtosNotaFiscal = Array.from(dom.querySelectorAll('prod'));
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

const retornaAChaveDeAcessoDaNotaFiscal = (dom) => {
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

const preencheInfosRestantesDasNF = (nfClassificada, dom) => {
  const chaveAcesso = dom.querySelector('infNFe').getAttribute('Id');
  const dataEmissao = dom.querySelector('dhEmi').textContent;
  const produtos = retornaListaDeProdutosValidos(dom);
  nfClassificada.adicionaEstesValoresNaNotaFiscal(chaveAcesso, dataEmissao, produtos, empresa);

  return nfClassificada;
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
      const classificacaoNF = retornaAClassificacaoDaNotaFiscal(domNotaFiscal);
      let novoObjeto = new NotaFiscal(index, classificacaoNF);

      if (classificacaoNF === 'Válida') {
        novoObjeto = preencheInfosRestantesDasNF(novoObjeto, domNotaFiscal);
      } else if (classificacaoNF === 'Inutilizada') {
        const chaveDeAcesso = retornaAChaveDeAcessoDaNotaFiscal(domNotaFiscal);
        novoObjeto.__chaveDeAcesso = chaveDeAcesso;
      } else if (classificacaoNF === 'Cancelada') {
        const chaveDeAcesso = domNotaFiscal.querySelector('chNFe').textContent;
        novoObjeto.__chaveDeAcesso = chaveDeAcesso;
      } else if (classificacaoNF === 'Sem Combustível') {
        const chaveDeAcesso = domNotaFiscal.querySelector('infNFe').getAttribute('Id');
        novoObjeto.__chaveDeAcesso = chaveDeAcesso;
      }

      objetosNotaFiscal.push(novoObjeto);
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
      // const anoDeInicioDoAtoAtual = dataDeInicioDoAtoAtual.getFullYear();
      // const anoEmissao = dataDeEmissao.getFullYear();

      // if (anoDeInicioDoAtoAtual === anoEmissao) {
      if (((dataDeEmissao.valueOf() >= dataDeInicioDoAtoAtual.valueOf())
        && (dataDeEmissao.valueOf() <= dataDeFimDoAtoAtual.valueOf()))) {
        const atoObjHelper = listaDeAtos[i][j];
        objAto = atoObjHelper;
        // eslint-disable-next-line no-labels
        break outerLoop;
      }
      // }
    }
  }
  return objAto;
};

const retornaOsValoresPresumidos = (produtos, ato) => {
  const valoresPresumidos = [];

  produtos.forEach((produto) => {
    if (produto.nomeDoProduto === 'GASOLINA COMUM') {
      valoresPresumidos.push(ato.produtoImposto.gac);
    } else if (produto.nomeDoProduto === 'GASOLINA ADITIVADA') {
      valoresPresumidos.push(ato.produtoImposto.gap);
    } else if (produto.nomeDoProduto === 'DIESEL COMUM') {
      valoresPresumidos.push(ato.produtoImposto.oleoDisel);
    } else if (produto.nomeDoProduto === 'DIESEL S10') {
      valoresPresumidos.push(ato.produtoImposto.d10);
    }
  });
  return valoresPresumidos;
};

const calculaDifEntreTotalPresumidoEVendido = (valorTotalPresumido, valorTotalVendido) => {
  const qtdDeCalculos = valorTotalPresumido.length;
  const diferenca = [];
  for (let i = 0; i < qtdDeCalculos; i += 1) {
    const dif = UI.retornaValorTruncado(valorTotalPresumido[i] - valorTotalVendido[i]);
    diferenca.push(dif);
  }
  return diferenca;
};

const calculaARestituicao = (difValorPresumidoEVendido) => {
  const valoresAseremRestituidos = [];

  difValorPresumidoEVendido.forEach((dif) => {
    let diferenca = dif;
    diferenca = parseFloat(dif);
    const restiuicao = UI.retornaValorTruncado(diferenca * 0.25);
    valoresAseremRestituidos.push(restiuicao);
  });

  return valoresAseremRestituidos;
};

const preparaLinhasTabela = (notasFiscaisCompletas) => {
  const linhasTabela = [];

  notasFiscaisCompletas.forEach((nf) => {
    if (nf.statusNotaFiscal === 'Válida') {
      const numeroSequencial = (nf.indexNotaFiscal + 1);
      const nota = nf.__chaveDeAcesso;
      const dataDeEmissao = nf.__dataEmissao;
      const combustiveis = nf.__produtos.map((produto) => produto.nomeDoProduto);
      const objetoAto = retornaOAto(dataDeEmissao);
      const atoAno = `${objetoAto.numeroAto}/${objetoAto.dataInicio.getFullYear()}`;
      const valoresPresumidos = retornaOsValoresPresumidos(nf.__produtos, objetoAto);
      const valorPraticado = nf.__produtos.map((produto) => produto.valorDaUnidadeDoProduto);
      const difPresumidoEPraticado = nf.__produtos.map((produto, i) =>
        UI.retornaValorTruncado((valoresPresumidos[i] - valorPraticado[i])));
      const litros = nf.__produtos.map((produto) => produto.qtdVendidaDoProduto);
      const valorTotalPresumido = nf.__produtos.map((produto, i) =>
        UI.retornaValorTruncado(produto.qtdVendidaDoProduto * valoresPresumidos[i]));
      const valorTotalVendido = nf.__produtos.map((produto) =>
        UI.retornaValorTruncado(produto.valorTotalVendidoDoProduto));
      const difValorPresumidoEVendido = calculaDifEntreTotalPresumidoEVendido(valorTotalPresumido, valorTotalVendido);
      const valorAserRestituido = calculaARestituicao(difValorPresumidoEVendido);

      linhasTabela.push(new LinhaTabela(numeroSequencial, nota, dataDeEmissao, combustiveis,
        atoAno, valoresPresumidos, valorPraticado, difPresumidoEPraticado, litros,
        valorTotalPresumido, valorTotalVendido, difValorPresumidoEVendido, valorAserRestituido, 'Válida'));
    } else {
      linhasTabela.push(nf);
    }
  });

  return linhasTabela;
};

const retornaRelatorio = (linhasTabela) => {
  let valorPresumido = 0;
  let vandidoAoConsumidor = 0;
  let somaDiferenca = 0;
  let somaIcm = 0;

  linhasTabela.forEach((linhaTabela) => {
    if (linhaTabela.statusNotaFiscal === 'Válida') {
      const valoresPresumidos = linhaTabela.valorTotalPresumido;

      // eslint-disable-next-line no-shadow
      const somaValPre = valoresPresumidos.reduce((valorAtual, linhaTabela) =>
        (linhaTabela + valorAtual), 0);
      valorPresumido += somaValPre;

      const valoresVendidos = linhaTabela.valorTotalVendido;
      // eslint-disable-next-line no-shadow
      const somaValVendi = valoresVendidos.reduce((valorAtual, linhaTabela) =>
        (linhaTabela + valorAtual), 0);
      vandidoAoConsumidor += somaValVendi;

      const diferencas = linhaTabela.difEntreTotPresumidoEVendido;
      // eslint-disable-next-line no-shadow
      const somaDiferencas = diferencas.reduce((valorAtual, linhaTabela) =>
        (linhaTabela + valorAtual), 0);
      somaDiferenca += somaDiferencas;

      const icms = linhaTabela.icmsASerRestituido;
      // eslint-disable-next-line no-shadow
      const somaIcms = icms.reduce((valorAtual, linhaTabela) => (linhaTabela + valorAtual), 0);
      somaIcm += somaIcms;
    }
  });

  return new Relatorio(linhasTabela, valorPresumido, vandidoAoConsumidor, somaDiferenca, somaIcm);
};

document.addEventListener('DOMContentLoaded', () => {
  mostraNomeDaEmpresaNaTela();
  mostraCnpjDaEmpresaNaTela();
});

document.querySelector('#notasFiscais').addEventListener('change', (event) => {
  const arquivos = Array.from(event.target.files);
  const arquivosSelecionados = removeNotasFiscaisDeOutrasEmpresas(arquivos);
  const arquivosParaClassificacao = removeNotasFiscaisCanceladas(arquivosSelecionados);
  const ObjetosNotaFiscal = retornaObjetosDoTipoNotaFiscal(arquivosParaClassificacao);
  setTimeout(() => {
    const linhasTabela = preparaLinhasTabela(ObjetosNotaFiscal);
    const relatorio = retornaRelatorio(linhasTabela);
    UI.mostraRelatorio(relatorio);
  }, 1000);
});

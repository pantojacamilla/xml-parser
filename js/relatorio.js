/* eslint-disable import/extensions */
import NotaFiscal from './NotaFiscal.js';
import Produto from './Produto.js';
import UI from './Ui.js';
import listaDeAtos from './atos.js';

// class Relatorio {
//   numeroSequencial;
//   notaFiscal;
//   valorTotalPresumido;
//   diferencaEntreValorPresumidoEValorDeVenda;
//   icmsASerRestituido;
//   valorTotalPresumidoNoMes;
//   valorTotalPraticadoNoMes;
//   diferencaEntreOTotalPresumidoEOPraticado;
//   valorDeIcmsASerDistituidoNoMes;
// }

let somaDosValoresPresumidos;
let somaValoresVendidosAoConsumidor;
let somaDasDiferencas;
let somaDoIcmsRestituido;

class LinhaRelatorio {
  constructor(numeroSequencial, notaFiscal, ato, valorPresumido, valorTotalPresumido,
    diferencaEntreValorPresumidoEValorDeVenda, icmsASerRestituido) {
    this.numeroSequencial = numeroSequencial;
    this.notaFiscal = notaFiscal;
    this.ato = ato;
    this.valorPresumido = valorPresumido;
    this.valorTotalPresumido = valorTotalPresumido;
    this.diferencaEntreValorPresumidoEValorDeVenda = diferencaEntreValorPresumidoEValorDeVenda;
    this.icmsASerRestituido = icmsASerRestituido;
  }
}

const objetoEmpresa = JSON.parse(window.localStorage.getItem('empresa'));
const cnpjSoNumeros = objetoEmpresa.cnpjFormatado.replace(/[!"#$%&'() * +,-./: ;<=>?@[\]^ _`{|}~]/g, '');

const mostraNomeDaEmpresaNaTela = () => {
  const { nomeEmpresa } = objetoEmpresa;
  const divNome = document.querySelector('#nome-empresa');
  divNome.textContent = nomeEmpresa;
};

const mostraCnpjDaEmpresaNaTela = () => {
  const { cnpjFormatado } = objetoEmpresa;
  const divCnpj = document.querySelector('#cnpj-empresa');
  divCnpj.textContent = cnpjFormatado;
};

const removeNotasFiscaisDeOutrasEmpresas = (notasFiscais) => {
  const nfsEmpresaSelecionada = notasFiscais.filter((nf) => nf.name.includes(cnpjSoNumeros));
  return nfsEmpresaSelecionada;
};

// Remove as notas canceladas (-nfce e -nfe) deixando as -can
const removeNotasFiscaisCanceladas = (notasFiscais) => {
  let nfsCanceladas = notasFiscais.filter((nf) => nf.name.includes('-can'));
  nfsCanceladas = nfsCanceladas.map((nfCancelada) => nfCancelada.name.replace('-can.xml', '-nf'));

  // semNFCanc (Sem Nota Fiscal Cancelada)
  const semNFCanc = notasFiscais.filter((nf) => !nfsCanceladas.includes(nf.name.substr(0, 47)));
  return semNFCanc;
};

const retornaOTipoDeNotaFiscal = (rootElement) => {
  let tipoDeNotaFiscal;

  if (rootElement === 'retInutNFe') {
    tipoDeNotaFiscal = 'Inutilizada';
  } else if (rootElement === 'retEnvEvento') {
    tipoDeNotaFiscal = 'Cancelada';
  } else if (rootElement === 'nfeProc') {
    tipoDeNotaFiscal = 'Válida';
  }
  return tipoDeNotaFiscal;
};

const validaNomeDoProduto = (produto) => {
  let resultado;
  const nomeProduto = produto.querySelector('xProd').textContent;

  if (nomeProduto === 'GASOLINA COMUM') {
    resultado = true;
  } else if (nomeProduto === 'GASOLINA ADITIVADA') {
    resultado = true;
  } else if (nomeProduto === 'DIESEL COMUM') {
    resultado = true;
  } else if (nomeProduto === 'DIESEL S10') {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
};

const leNotasFiscaisValidas = (dom) => {
  const produtos = dom.querySelectorAll('det');
  const notasFiscais = [];
  const produtosValidos = [];

  for (let i = 0; i < produtos.length; i += 1) {
    const resultadoValidacao = validaNomeDoProduto(produtos[i]);
    if (resultadoValidacao === true) {
      const nomeProd = produtos[i].querySelector('xProd').textContent;
      const qtdComercializada = produtos[i].querySelector('qCom').textContent;
      const valorVenda = produtos[i].querySelector('vUnCom').textContent;
      const valorTotProd = produtos[i].querySelector('vProd').textContent;
      produtosValidos.push(new Produto(nomeProd, qtdComercializada, valorVenda, valorTotProd));
    }
  }

  if (produtosValidos.length > 0) {
    const dataEmissao = dom.querySelector('dhEmi').textContent;
    const chaveDeAcesso = dom.querySelector('infNFe').getAttribute('Id');
    notasFiscais.push(new NotaFiscal(chaveDeAcesso, dataEmissao, produtosValidos, objetoEmpresa));
    return notasFiscais;
  }
  return false;
};

const retornaOAto = (dataEmissao) => {
  const dataDeEmissao = new Date(dataEmissao);
  let objAto;

  for (let i = 0; i < listaDeAtos.length; i += 1) {
    for (let j = 0; j < listaDeAtos[i].length; j += 1) {
      const dataInicial = listaDeAtos[i][j].dataInicio;
      const dataFinal = listaDeAtos[i][j].dataFim;

      const dataDeInicioDoAtoAtual = new Date(`${dataInicial}T01:00:00-03:00`);
      const dataDeFimDoAtoAtual = new Date(`${dataFinal}T23:59:59-03:00`);

      const anoDeInicioDoAtoAtual = dataDeInicioDoAtoAtual.getFullYear();
      const anoEmissao = dataDeEmissao.getFullYear();

      if (anoDeInicioDoAtoAtual === anoEmissao) {
        if (((dataDeEmissao >= dataDeInicioDoAtoAtual) && (dataDeEmissao <= dataDeFimDoAtoAtual))) {
          const atoObjHelper = listaDeAtos[i][j];
          objAto = atoObjHelper;
          break;
        }
      }
    }
  }
  return objAto;
};

const preparaLinhaRelatorio = (dom, index, notaFiscal, tableRelatorio) => {
  const numeroSequencial = index + 1;
  const listaProdutos = notaFiscal[0].produtos;
  const dataEmi = notaFiscal[0].dataEmissao;

  if (listaProdutos.length > 1) {
    const linhasProdutos = [];

    const nomeArquivo = dom.querySelector('infNFe').getAttribute('Id');
    console.log(nomeArquivo);
    console.log(notaFiscal);
    console.log(listaDeAtos);

    const objAto = retornaOAto(dataEmi);

    for (let i = 0; i < listaProdutos.length; i += 1) {
      const { nomeProduto } = listaProdutos[i];
      const { qtdComercializadaDoProduto } = listaProdutos[i];
      let totalPresumido; // TotalPresumido
      let valorPresumido;

      if (nomeProduto === 'GASOLINA COMUM') {
        valorPresumido = objAto.produtoImposto.gac;
        totalPresumido = (qtdComercializadaDoProduto * valorPresumido);
      } else if (nomeProduto === 'GASOLINA ADITIVADA') {
        valorPresumido = objAto.produtoImposto.gap;
        totalPresumido = (qtdComercializadaDoProduto * valorPresumido);
      } else if (nomeProduto === 'DIESEL COMUM') {
        valorPresumido = objAto.produtoImposto.oleoDisel;
        totalPresumido = (qtdComercializadaDoProduto * valorPresumido);
      } else if (nomeProduto === 'DIESEL S10') {
        valorPresumido = objAto.produtoImposto.d10;
        totalPresumido = (qtdComercializadaDoProduto * valorPresumido);
      }

      const { valorTotalDoProduto } = listaProdutos[i];
      const difValorPresumidoEValorDeVenda = totalPresumido - valorTotalDoProduto;
      const icmsARestituir = difValorPresumidoEValorDeVenda * 0.25;

      linhasProdutos.push(new LinhaRelatorio(numeroSequencial, notaFiscal,
        objAto, valorPresumido, totalPresumido, difValorPresumidoEValorDeVenda, icmsARestituir));
    }
    const qtdProdutosNaNota = listaProdutos.length;
    UI.mostraNFComMultiplosProdutos(linhasProdutos, numeroSequencial,
      qtdProdutosNaNota, dom, tableRelatorio);
  } else {
    const nomeArquivo = dom.querySelector('infNFe').getAttribute('Id');
    console.log(nomeArquivo);
    console.log(notaFiscal);
    console.log(listaDeAtos);

    const objAto = retornaOAto(dataEmi);

    const { nomeProduto } = listaProdutos[0];
    const { qtdComercializadaDoProduto } = listaProdutos[0];
    let totalPresumido; // TotalPresumido
    let valorPresumido;

    if (nomeProduto === 'GASOLINA COMUM') {
      valorPresumido = objAto.produtoImposto.gac;
      totalPresumido = (qtdComercializadaDoProduto * valorPresumido);
    } else if (nomeProduto === 'GASOLINA ADITIVADA') {
      valorPresumido = objAto.produtoImposto.gap;
      totalPresumido = (qtdComercializadaDoProduto * valorPresumido);
    } else if (nomeProduto === 'DIESEL COMUM') {
      valorPresumido = objAto.produtoImposto.oleoDisel;
      totalPresumido = (qtdComercializadaDoProduto * valorPresumido);
    } else if (nomeProduto === 'DIESEL S10') {
      valorPresumido = objAto.produtoImposto.d10;
      totalPresumido = (qtdComercializadaDoProduto * valorPresumido);
    }

    const { valorTotalDoProduto } = listaProdutos[0];
    const difValorPresumidoEValorDeVenda = totalPresumido - valorTotalDoProduto;
    const icmsARestituir = difValorPresumidoEValorDeVenda * 0.25;

    const linhaProduto = (new LinhaRelatorio(numeroSequencial, notaFiscal,
      objAto, valorPresumido, totalPresumido, difValorPresumidoEValorDeVenda, icmsARestituir));

    UI.mostraNFComUmProduto(linhaProduto, dom, tableRelatorio);
  }




};

// Criar uma função que le os arquivos
// -- Nessa função tem que cria os objetos das notas e retornar os ojetos
const classificaAsNotaFiscais = (notasFiscais) => {
  const parser = new DOMParser();
  // let notaLidasValidas;

  notasFiscais.forEach((notaFiscal, index) => {
    const reader = new FileReader();

    reader.onload = () => {
      const xmlString = reader.result;
      const dom = parser.parseFromString(xmlString, 'application/xml');
      const rootElementDoArquivo = dom.documentElement.tagName;
      // Inutilizada, Cancelada e Válida
      const tipoDeNotaFiscal = retornaOTipoDeNotaFiscal(rootElementDoArquivo);
      const tableRelatorio = document.querySelector('#relatorio');

      if (tipoDeNotaFiscal === 'Inutilizada') {
        UI.mostraNFInutilizada(dom, index, tableRelatorio);
        // return;
      } else if (tipoDeNotaFiscal === 'Cancelada') {
        UI.mostraNFCancelada(dom, index, tableRelatorio);
        // return;
      } else if (tipoDeNotaFiscal === 'Válida') {
        const notaResultante = leNotasFiscaisValidas(dom);
        if (notaResultante !== false) {
          preparaLinhaRelatorio(dom, index, notaResultante, tableRelatorio);

          // mostra (dom, index, tableRelatorio, notaResultante)
          // ver dentro de UI quantos produtos tem e como se arrumar para mostrar os proutos
        } else {
          UI.mostraNFCValidaSemCombustível(dom, index, tableRelatorio);
        }
      }
    };
    reader.readAsText(notaFiscal);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  mostraNomeDaEmpresaNaTela();
  mostraCnpjDaEmpresaNaTela();
});

document.querySelector('#notasFiscais').addEventListener('change', (event) => {
  const notasFiscais = Array.from(event.target.files);
  const notasFiscaisDaEmpresaSelecionada = removeNotasFiscaisDeOutrasEmpresas(notasFiscais);
  const notasFiscaisNaoCanceladas = removeNotasFiscaisCanceladas(notasFiscaisDaEmpresaSelecionada);
  classificaAsNotaFiscais(notasFiscaisNaoCanceladas);
});

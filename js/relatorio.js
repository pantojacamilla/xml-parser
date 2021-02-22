/* eslint-disable import/extensions */
import NotaFiscal from './NotaFiscal.js';
import Produto from './Produto.js';
import UI from './Ui.js';

class Relatorio {
  numeroSequencial;
  notaFiscal;
  valorTotalPresumido;
  diferencaEntreValorPresumidoEValorDeVenda;
  icmsASerRestituido;
  valorTotalPresumidoNoMes;
  valorTotalPraticadoNoMes;
  diferencaEntreOTotalPresumidoEOPraticado;
  valorDeIcmsASerDistituidoNoMes;
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
    // console.log(nomeProduto);
  } else if (nomeProduto === 'DIESEL COMUM') {
    resultado = true;
    // console.log(nomeProduto);
  } else if (nomeProduto === 'GASOLINA ADITIVADA') {
    resultado = true;
    // console.log(nomeProduto);
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
  } else {
    return false;
  }

  // Se tiver só um produto criar só esse produtos mas somente
  // se a função de validação do nome retornar positivo
  // Eu quero retornar para a classe ui
  // um objet notaFiscal com um monte de produto dentro
};

// Criar uma função que le os arquivos
// -- Nessa função tem que cria os objetos das notas e retornar os ojetos
const leAsNotasFiscais = (notasFiscais) => {
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
        const nomeArquivo = dom.querySelector('infNFe').getAttribute('Id');
        console.log(nomeArquivo);
        const resultado = leNotasFiscaisValidas(dom);
        if (resultado != false) {

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
  leAsNotasFiscais(notasFiscaisNaoCanceladas);
});

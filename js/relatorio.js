/* eslint-disable import/extensions */
import NotaFiscal from './NotaFiscal.js';
import Produto from './Produto.js';
import UI from './Ui.js';

// class Relatorio {
//   numeroSequencial;
//   //empresa empresa
//   //produduto: Produto
//   valorTotalPresumido;
//   diferencaEntreValorPresumidoEValorDeVenda;
//   icmsASerRestituido;
//   valorTotalPresumidoNoMes;
//   valorTotalPraticadoNoMes;
//   diferencaEntreOTotalPresumidoEOPraticado;
//   valorDeIcmsASerDistituidoNoMes;
// }

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

// Remove as notas canceladas -nfce e -nfe deixando as -can
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

// Criar uma função que le os arquivos
// -- Nessa função tem que cria os objetos das notas e retornar os ojetos
const leAsNotasFiscais = (notasFiscais) => {
  const parser = new DOMParser();

  notasFiscais.forEach((notaFiscal, index) => {
    const reader = new FileReader();
    // const produtos = [];
    reader.onload = () => {
      const xmlString = reader.result;
      const dom = parser.parseFromString(xmlString, 'application/xml');
      const rootElementDoArquivo = dom.documentElement.tagName;
      const tipoDeNotaFiscal = retornaOTipoDeNotaFiscal(rootElementDoArquivo);
      const tableRelatorio = document.getElementById('relatorio');

      if (tipoDeNotaFiscal === 'Inutilizada') {
        UI.mostraNFInutilizada(dom, index, tableRelatorio);
        // return;
      } else if (tipoDeNotaFiscal === 'Cancelada') {
        UI.mostraNFCancelada(dom, index, tableRelatorio);
        // return;
      } else if (tipoDeNotaFiscal === 'Válida') {
        // normal
        // return;
      }
      // const nf = new NotaFiscal();
      /*
        Se o arquivo não tiver produto mandar para a classe UI
        uma tag que identifique aquele doc para que a classe
        mostre na tela a mensagem de inutilizado ou cancelado
      */
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

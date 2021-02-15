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

document.addEventListener('DOMContentLoaded', () => {
  mostraNomeDaEmpresaNaTela();
  mostraCnpjDaEmpresaNaTela();
});

document.querySelector('#notasFiscais').addEventListener('change', (event) => {
  const notasFiscais = Array.from(event.target.files);
  const notasFiscaisDaEmpresaSelecionada = removeNotasFiscaisDeOutrasEmpresas(notasFiscais);
  const notasFiscaisNaoCanceladas = removeNotasFiscaisCanceladas(notasFiscaisDaEmpresaSelecionada);
});

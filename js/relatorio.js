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

const mostraNomeDaEmpresaNaTela = (nomeEmpresa) => {
  const divNome = document.querySelector('#nome-empresa');
  divNome.innerHTML = nomeEmpresa;
};

const mostraCnpjDaEmpresaNaTela = (cnpj) => {
  const divCnpj = document.querySelector('#cnpj-empresa');
  divCnpj.innerHTML = cnpj;
};

document.addEventListener('DOMContentLoaded', () => {
  const objetoEmpresa = JSON.parse(window.localStorage.getItem('empresa'));
  const { nomeEmpresa } = objetoEmpresa;
  const { cnpj } = objetoEmpresa;
  mostraNomeDaEmpresaNaTela(nomeEmpresa);
  mostraCnpjDaEmpresaNaTela(cnpj);
});

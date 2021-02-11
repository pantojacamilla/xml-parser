// eslint-disable-next-line import/extensions
import Empresa from './empresa.js';

// 1º criar um objeto empresa com as informações contidas no select [ok]
const criaUmObjetoEmpresa = (infoEmpresa) => {
  let empresa = {};
  if (infoEmpresa === 0) {
    empresa = new Empresa('F S S COMERCIO VAREJISTA DE COMB E LUBRIFICANTES LTDA', '07.533.992/0001-61');
  } else {
    empresa = new Empresa('ALESAT COMBUSTIVEIS S.A.', '23.314.594/0035-50');
  }
  return empresa;
};

// Guardar o objeto empresa no local storage

document.querySelector('#selecao-empresa').addEventListener('submit', (e) => {
  e.preventDefault();
  const infoEmpresa = parseInt(document.querySelector('#empresa').value, 10);
  console.log(criaUmObjetoEmpresa(infoEmpresa));
  window.open('relatorio.html');
});

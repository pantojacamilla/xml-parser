// eslint-disable-next-line import/extensions
import Empresa from './empresa.js';

const criaUmObjetoEmpresa = (empresaSelecionada) => {
  let empresa = {};
  if (empresaSelecionada === 0) {
    empresa = new Empresa('F S S COMERCIO VAREJISTA DE COMB E LUBRIFICANTES LTDA', '07.533.992/0001-61');
  } else {
    empresa = new Empresa('ALESAT COMBUSTIVEIS S.A.', '23.314.594/0035-50');
  }
  return empresa;
};

const adicionaEmpresaAoLocalStorage = (objetoEmpresa) => {
  window.localStorage.setItem('empresa', JSON.stringify(objetoEmpresa));
};

// Botão enviar é clicado
document.querySelector('#selecao-empresa').addEventListener('submit', (e) => {
  e.preventDefault();
  const empresaSelecionada = parseInt(document.querySelector('#empresa').value, 10);
  const obejtoEmpresa = criaUmObjetoEmpresa(empresaSelecionada);
  adicionaEmpresaAoLocalStorage(obejtoEmpresa);
  // window.open('relatorio.html');
  window.location.replace('relatorio.html');
});

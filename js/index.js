import Empresa from './Empresa.js';

// const adicionaEmpresaAoLocalStorage = (objetoEmpresa) => {
//   window.localStorage.setItem('empresa', JSON.stringify(objetoEmpresa));
// };

// Botão enviar é clicado
document.querySelector('#selecao-empresa').addEventListener('submit', (e) => {
  e.preventDefault();
  const empresaSelecionada = document.querySelector('#empresa').value;
  const obejtoEmpresa = Empresa.retornaObjetoEmpresa(empresaSelecionada);

  console.log(obejtoEmpresa);

  // adicionaEmpresaAoLocalStorage(obejtoEmpresa);
  // // window.open('relatorio.html');
  // window.location.replace('./relatorio.html');
});

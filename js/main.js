const fileListInputNotasFiscais = document.getElementById('inputNotasFiscais');
let i;
// Início do Programa
document.querySelector('#inputNotasFiscais').addEventListener('change', (e) => {
  const arrayNotasFiscais = [];

  // Transforma o FileFist em um array
  for (i = 0; i < fileListInputNotasFiscais.files.length; i += 1) {
    arrayNotasFiscais.push(fileListInputNotasFiscais.files[i]);
  }
});

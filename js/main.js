// Início do Programa

// Acess the CNPJ in local storage here
const empresa = JSON.parse(window.localStorage.getItem('empresa'));

const retornaSoOsNumerosDoCNPJ = () => {
  const regexCNPJ = /[!"#$%& '() * +,-./: ;<=>?@[\]^ `{|}~]/g;
  return empresa.cnpj.replace(regexCNPJ, '');
};

// Esse arquivo pertence a essa empresa e portanto deve ser considerado?
const isFileValid = (nomeArquivo) => {
  // Does it include the "_" (this might be used to validate if a NF is -inu OR NOT)
  // Does it include the CNPJ on it?

  const cnpj = retornaSoOsNumerosDoCNPJ();
  const retorno = (nomeArquivo.includes(cnpj)) ? 'true' : 'false';
  return retorno;
};

document.querySelector('#inputNotasFiscais').addEventListener('change', (event) => {
  const arquivos = Array.from(event.target.files);
  arquivos.forEach((arquivo, index) => {
    console.log(`${arquivo.name} ${isFileValid(arquivo.name)} N:${index}`);
  });
});

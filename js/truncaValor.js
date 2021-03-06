const truncaValor = (valor) => {
  const val = valor.toString();
  const pontoCaractere = '.';
  const indexDoPonto = val.indexOf(pontoCaractere);
  const qtdNumerosUtilizados = (indexDoPonto + 5);
  const valorTruncado = val.substr(0, qtdNumerosUtilizados);

  return parseFloat(valorTruncado);
};

export default truncaValor;

/* eslint-disable import/extensions */
import Dinero from '../node_modules/dinero.js/build/esm/dinero.js';

const truncaValor = (valor) => {
  Dinero.defaultCurrency = 'BRL';
  Dinero.globalLocale = 'pt-br';
  Dinero.defaultPrecision = 4;
  Dinero.globalFormat = '$0,0.0000';

  // Trunca o valor
  const val = valor.toString();
  const pontoCaractere = '.';
  const indexDoPonto = val.indexOf(pontoCaractere);
  const qtdNumerosUtilizados = (indexDoPonto + 5);
  const valorTruncado = val.substr(0, qtdNumerosUtilizados);
  const resultado = Number(valorTruncado);

  return resultado;
};

export default truncaValor;

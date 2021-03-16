/* eslint-disable import/extensions */
import Dinero from '../node_modules/dinero.js/build/esm/dinero.js';

const truncaValor = (valor) => {
  Dinero.defaultCurrency = 'BRL';
  Dinero.globalLocale = 'pt-br';
  Dinero.defaultPrecision = 4;

  let resultado;
  const valorEmString = valor.toString();

  if (valorEmString.includes('.')) {
    // Trunca o valor
    const pontoCaractere = '.';
    const indexDoPonto = valorEmString.indexOf(pontoCaractere);
    const qtdDeDigitosNecessaria = (indexDoPonto + 5);
    const stringTruncada = valorEmString.substr(0, qtdDeDigitosNecessaria);

    // Testar quantas casas decimais ficaram
    const tamanhoString = valorEmString.length;
    const qtdCasasDecimais = tamanhoString - (indexDoPonto + 1);

    // Retirar o sinal de ponto do número para que as casas decimais sejam mantidas
    const stringSemPontuacao = stringTruncada.replace(/[!"#$%&'() * +,-./: ;<=>?@[\]^ `{|}~]/g, '');
    const valorNumerico = Number(stringSemPontuacao);

    let amount;
    let format;
    if (qtdCasasDecimais === 1) {
      amount = valorNumerico * (10 ** 3);
      format = '$0,0.00';
    } else if (qtdCasasDecimais === 2) {
      amount = valorNumerico * (10 ** 2);
      format = '$0,0.00';
    } else if (qtdCasasDecimais === 3) {
      amount = valorNumerico * 10;
      format = '$0,0.0000';
    } else if (qtdCasasDecimais === 4) {
      amount = valorNumerico;
      format = '$0,0.0000';
    }

    resultado = Dinero({ amount, format });
  } else {
    const valorNumerico = Number(valorEmString);
    const valorFinal = (valorNumerico * (10 ** 4));
    resultado = Dinero({ amount: valorFinal, format: '$0,0.00' });
  }

  return resultado;
};

export default truncaValor;

const retornaValorFormatado = (valor) => {
  let resultado;
  const valorEmString = valor.toString();

  if (valorEmString.includes('.')) {
    // "Trunca" a string após a 4ª casa decimas
    const caracterePonto = '.';
    const indexDoPonto = valorEmString.indexOf(caracterePonto);
    const qtdDeDigitosNecessaria = (indexDoPonto + 5);
    const stringTruncada = valorEmString.substr(0, qtdDeDigitosNecessaria);

    // Testar quantas casas decimais ficaram
    const tamanhoString = stringTruncada.length;
    const qtdCasasDecimais = tamanhoString - (indexDoPonto + 1);

    // Retirar o sinal de ponto do número para que as casas decimais sejam mantidas
    const stringSemPontuacao = stringTruncada.replace(/[!"#$%&'() * +,-./: ;<=>?@[\]^ `{|}~]/g, '');
    const valorNumerico = Number(stringSemPontuacao);

    let amount;
    if (qtdCasasDecimais === 1) {
      amount = valorNumerico * (10 ** 3);
    } else if (qtdCasasDecimais === 2) {
      amount = valorNumerico * (10 ** 2);
    } else if (qtdCasasDecimais === 3) {
      amount = valorNumerico * 10;
    } else if (qtdCasasDecimais === 4) {
      amount = valorNumerico;
    }

    resultado = amount;
  } else {
    const valorNumerico = Number(valorEmString);
    const amount = (valorNumerico * (10 ** 4));
    resultado = amount;
  }

  return resultado;
};

export default retornaValorFormatado;

/* eslint-disable import/extensions */
import retornaDinero from './retornaDinero.js';

export default class Calculo {
  static calculaDiferencaEntrePresumidoEPraticado(produtos) {
    const diferencaEntreValores = [];

    produtos.forEach((produto) => {
      // usar a função de subtracao e que retorna objetos Dinero
      const dif = (produto.valorPresumido - produto.valorPraticado);
      diferencaEntreValores.push(dif);
    });

    return diferencaEntreValores;
  }

  static calculaValorTotalPresumido(produtos) {
    const totalPresumido = [];

    produtos.forEach((produto) => {
      // usar a função de multiplicacao e que retorna objetos Dinero
      const total = retornaDinero((produto.qtdVendida * produto.valorPresumido));
      // eslint-disable-next-line no-param-reassign
      produto.valorTotalPresumido = total;
      totalPresumido.push(total);
    });

    return totalPresumido;
  }

  static calculaDifEntreTotalPresumidoETotalPraticado(produtos) {
    const diferencaTotalPresumidoETotalPraticado = [];

    produtos.forEach((produto) => {
      const diferenca = retornaDinero((produto.valorTotalPresumido - produto.valorTotalPraticado));
      diferencaTotalPresumidoETotalPraticado.push(diferenca);
    });

    return diferencaTotalPresumidoETotalPraticado;
  }

  static calculaIcmsRestituicao(diferencaTotalPresumidoETotalPraticado) {
    const valoresAseremRestituidos = [];

    diferencaTotalPresumidoETotalPraticado.forEach((dif) => {
      const restiuicao = retornaDinero(dif * 0.25);
      valoresAseremRestituidos.push(restiuicao);
    });

    return valoresAseremRestituidos;
  }

  static retornaAsSomatoria(linhasTabela) {
    const lt = linhasTabela;
    let valorPresumido = 0;
    let valorPraticado = 0;
    let somaDiferenca = 0;
    let somaIcm = 0;

    lt.forEach((linha) => {
      if (linha.statusNotaFiscal === 'Válida') {
        const valoresPresumidos = linha.valorTotalPresumido;
        const somaPresumidos = valoresPresumidos.reduce((soma, valorAtual) => soma + valorAtual, 0);
        valorPresumido += somaPresumidos;

        const valoresPraticados = linha.valorTotalPraticado;
        const somaValPrati = valoresPraticados.reduce((soma, valorAtual) => soma + valorAtual, 0);
        valorPraticado += somaValPrati;

        const diferencas = linha.difEntreTotPresumidoEPraticado;
        const somaDiferencas = diferencas.reduce((soma, valorAtual) => soma + valorAtual, 0);
        somaDiferenca += somaDiferencas;

        const icms = linha.icmsRestituicao;
        const somaIcms = icms.reduce((soma, valorAtual) => soma + valorAtual, 0);
        somaIcm += somaIcms;
      }
    });

    const somatorias = [];
    somatorias.push(valorPresumido, valorPraticado, somaDiferenca, somaIcm);
    return somatorias;
  }
}

/* eslint-disable import/extensions */
import truncaValor from './truncaValor.js';

export default class Calculo {
  static calculaDiferencaEntrePresumidoEPraticado(produtos) {
    const diferencaEntreValores = [];

    produtos.forEach((produto) => {
      const dif = truncaValor((produto.valorPresumido - produto.valorPraticado));
      diferencaEntreValores.push(dif);
    });

    return diferencaEntreValores;
  }

  static calculaValorTotalPresumido(produtos) {
    const totalPresumido = [];

    produtos.forEach((produto) => {
      const total = truncaValor((produto.qtdVendida * produto.valorPresumido));
      // eslint-disable-next-line no-param-reassign
      produto.valorTotalPresumido = total;
      totalPresumido.push(total);
    });

    return totalPresumido;
  }

  static calculaDifEntreTotalPresumidoETotalPraticado(produtos) {
    const diferencaTotalPresumidoETotalPraticado = [];

    produtos.forEach((produto) => {
      const diferenca = truncaValor((produto.valorPresumido * produto.valorPraticado));
      diferencaTotalPresumidoETotalPraticado.push(diferenca);
    });

    return diferencaTotalPresumidoETotalPraticado;
  }

  static calculaIcmsRestituicao(diferencaTotalPresumidoETotalPraticado) {
    const valoresAseremRestituidos = [];

    diferencaTotalPresumidoETotalPraticado.forEach((dif) => {
      const restiuicao = truncaValor(dif * 0.25);
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

        const diferencas = linha.difEntreTotPresumidoEVendido;
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

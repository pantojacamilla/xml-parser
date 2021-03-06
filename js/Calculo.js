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

  // const calculaRestituicao = (difValorPresumidoEVendido) => {
  //   const valoresAseremRestituidos = [];

  //   difValorPresumidoEVendido.forEach((dif) => {
  //     let diferenca = dif;
  //     diferenca = parseFloat(dif);
  //     const restiuicao = truncaValor(diferenca * 0.25);
  //     valoresAseremRestituidos.push(restiuicao);
  //   });

  //   return valoresAseremRestituidos;
  // };

  static calculaIcmsRestituicao(diferencaTotalPresumidoETotalPraticado) {
    const valoresAseremRestituidos = [];

    diferencaTotalPresumidoETotalPraticado.forEach((dif) => {
      const restiuicao = truncaValor(dif * 0.25);
      valoresAseremRestituidos.push(restiuicao);
    });

    return valoresAseremRestituidos;
  }
}

/* eslint-disable import/extensions */
import Dinero from '../node_modules/dinero.js/build/esm/dinero.js';

Dinero.defaultCurrency = 'BRL';
Dinero.globalLocale = 'pt-br';
Dinero.defaultPrecision = 4;
export default class Calculo {
  static calculaDiferencaEntrePresumidoEPraticado(produtos) {
    const diferencaEntreValores = [];

    produtos.forEach((produto) => {
      const dif = produto.valorPresumido.subtract(produto.valorPraticado);
      diferencaEntreValores.push(dif);
    });

    return diferencaEntreValores;
  }

  static calculaValorTotalPresumido(produtos) {
    const totalPresumido = [];

    produtos.forEach((produto) => {
      const p = produto;
      const total = p.valorPresumido.multiply(p.getQtdVendida());
      p.valorTotalPresumido = total;
      totalPresumido.push(total);
    });

    return totalPresumido;
  }

  static calculaDifEntreTotalPresumidoETotalPraticado(produtos) {
    const diferencaTotalPresumidoETotalPraticado = [];

    produtos.forEach((produto) => {
      const diferenca = produto.valorTotalPresumido.subtract(produto.valorTotalPraticado);
      diferencaTotalPresumidoETotalPraticado.push(diferenca);
    });

    return diferencaTotalPresumidoETotalPraticado;
  }

  static calculaIcmsRestituicao(diferencaTotalPresumidoETotalPraticado) {
    const valoresAseremRestituidos = [];

    diferencaTotalPresumidoETotalPraticado.forEach((dif) => {
      const restiuicao = dif.percentage(25);
      valoresAseremRestituidos.push(restiuicao);
    });

    return valoresAseremRestituidos;
  }

  // static mostraOvalor(arraysDeValores) {
  //   arraysDeValores.forEach((valor) => {
  //     console.log(valor.getPrecision());
  //     console.log(valor.getAmount());
  //     console.log(valor.toFormat('$0,0.0000'));
  //   });
  // }

  static calculaSomatorioValorPresumido(valoresPresumidos) {
    let somatorio = 0;
    valoresPresumidos.forEach((valorPresumido) => {
      somatorio = valorPresumido.add(Dinero({ amount: somatorio })).getAmount();
    });
    return somatorio;
  }

  static calculaSomatorioValorPraticado(valoresPraticados) {
    let somatorio = 0;
    valoresPraticados.forEach((valorPraticado) => {
      somatorio = valorPraticado.add(Dinero({ amount: somatorio })).getAmount();
    });
    return somatorio;
  }

  static calculaSomatorioDiferenca(somaDiferencas) {
    let somatorio = 0;
    somaDiferencas.forEach((somaDiferenca) => {
      somatorio = somaDiferenca.add(Dinero({ amount: somatorio })).getAmount();
    });
    return somatorio;
  }

  static calculaSomatorioIcms(somaIcms) {
    let somatorio = 0;
    somaIcms.forEach((somaIcm) => {
      somatorio = somaIcm.add(Dinero({ amount: somatorio })).getAmount();
    });
    return somatorio;
  }

  static retornaAsSomatorias(linhasTabela) {
    const lt = linhasTabela;

    let valorPresumido = 0;
    let valorPraticado = 0;
    let somaDiferenca = 0;
    let somaIcm = 0;

    lt.forEach((linha) => {
      if (linha.statusNotaFiscal === 'Válida') {
        const valoresPresumidos = linha.valorPresumido;
        valorPresumido += Calculo.calculaSomatorioValorPresumido(valoresPresumidos);

        const valoresPraticados = linha.valorPraticado;
        valorPraticado += Calculo.calculaSomatorioValorPraticado(valoresPraticados);

        const somaDiferencas = linha.difEntreTotPresumidoEPraticado;
        somaDiferenca += Calculo.calculaSomatorioDiferenca(somaDiferencas);

        const somaIcms = linha.icmsRestituicao;
        somaIcm += Calculo.calculaSomatorioIcms(somaIcms);

        // Calculo.mostraOvalor(valPresumidos);
        // Calculo.mostraOvalor(linha.valorPraticado);
        // Calculo.mostraOvalor(linha.difEntreTotPresumidoEPraticado);
        // Calculo.mostraOvalor(linha.icmsRestituicao);
      }
    });

    // console.log(valorPresumido);
    // console.log(valorPraticado);
    // console.log(somaDiferenca);
    // console.log(somaIcm);
    const valor1 = Dinero({ amount: valorPresumido });
    const valor2 = Dinero({ amount: valorPraticado });
    const valor3 = Dinero({ amount: somaDiferenca });
    const valor4 = Dinero({ amount: somaIcm });

    const somatorias = [];
    somatorias.push(valor1, valor2, valor3, valor4);
    return somatorias;
  }
}

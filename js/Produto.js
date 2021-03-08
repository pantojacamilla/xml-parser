/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import truncaValor from './truncaValor.js';

export default class Produto {
  valorPresumido;
  valorTotalPresumido;

  constructor(nomeDoProduto, qtdVendida,
    valorPraticado, valorTotalPraticado) {
    this.nomeDoProduto = nomeDoProduto; // <xProd>
    this.qtdVendida = truncaValor(qtdVendida); // <qCom>
    this.valorPraticado = truncaValor(valorPraticado); // <vUnCom>
    this.valorTotalPraticado = truncaValor(valorTotalPraticado); // <vProd>
  }

  get valorPresumido() {
    return this.valorPresumido;
  }

  /**
   * @param {any} valorPresumidovalorPresumido
   */
  set valorPresumido(valorPresumido) {
    this.valorPresumido = valorPresumido;
  }

  get valorTotalPresumido() {
    return this.valorTotalPresumido;
  }

  /**
   * @param {any} valorTotalPresumido
   */
  set valorTotalPresumido(valorTotalPresumido) {
    this.valorTotalPresumido = valorTotalPresumido;
  }
}

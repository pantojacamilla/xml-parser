/* eslint-disable import/extensions */
export default class Produto {
  valorPresumido;
  valorTotalPresumido;

  constructor(nomeDoProduto, qtdVendida, valorPraticado, valorTotalPraticado) {
    this.nomeDoProduto = nomeDoProduto; // <xProd>
    this.qtdVendida = qtdVendida; // <qCom>
    this.valorPraticado = valorPraticado; // <vUnCom> //Dinero
    this.valorTotalPraticado = valorTotalPraticado; // <vProd> //Dinero
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

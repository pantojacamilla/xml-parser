/* eslint-disable import/extensions */
import retornaDinero from './retornaDinero.js';
import retornaValorFormatado from './retornaValorFormatado.js';
export default class Produto {
  valorPresumido;
  valorTotalPresumido;

  constructor(nomeDoProduto, qtdVendida, valorPraticado, valorTotalPraticado) {
    this.nomeDoProduto = nomeDoProduto; // <xProd>
    this.qtdVendida = retornaValorFormatado(qtdVendida); // <qCom>
    this.valorPraticado = retornaDinero(valorPraticado); // <vUnCom> //Dinero
    this.valorTotalPraticado = retornaDinero(valorTotalPraticado); // <vProd> //Dinero
  }

  getQtdVendida() {
    return (this.qtdVendida / 10000);
  }

  get valorPresumido() {
    return this.valorPresumido;
  }

  /**
   * @param {any} valorPresumido
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
    this.valorTotalPresumido = retornaDinero(valorTotalPresumido);
  }
}

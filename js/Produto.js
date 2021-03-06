/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import truncaValor from './truncaValor.js';

export default class Produto {
  constructor(nomeDoProduto, qtdVendidaDoProduto,
    valorDaUnidadeDoProduto, valorTotalVendidoDoProduto) {
    this.nomeDoProduto = nomeDoProduto; // <xProd>
    this.qtdVendidaDoProduto = truncaValor(qtdVendidaDoProduto); // <qCom>
    this.valorDaUnidadeDoProduto = truncaValor(valorDaUnidadeDoProduto); // <vUnCom>
    this.valorTotalVendidoDoProduto = truncaValor(valorTotalVendidoDoProduto); // <vProd>
  }
}

export default class Produto {
  constructor(nomeDoProduto, qtdVendidaDoProduto,
    valorDaUnidadeDoProduto, valorTotalVendidoDoProduto) {
    this.nomeDoProduto = nomeDoProduto; // <xProd>
    this.qtdVendidaDoProduto = qtdVendidaDoProduto; // <qCom>
    this.valorDaUnidadeDoProduto = valorDaUnidadeDoProduto; // <vUnCom>
    this.valorTotalVendidoDoProduto = valorTotalVendidoDoProduto; // <vProd>
  }
}

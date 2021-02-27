export default class Produto {
  constructor(nomeDoProduto, qtdVendidaDoProduto,
    valorDaUnidadeDoProduto, valorTotalVendidoDoProduto) {
    this.nomeDoProduto = nomeDoProduto; // <xProd>
    this.qtdVendidaDoProduto = parseFloat((qtdVendidaDoProduto)); // <qCom>
    this.valorDaUnidadeDoProduto = parseFloat((valorDaUnidadeDoProduto)); // <vUnCom>
    this.valorTotalVendidoDoProduto = parseFloat(valorTotalVendidoDoProduto);
    // <vProd>
  }
}

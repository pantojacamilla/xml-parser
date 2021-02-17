export default class Produto {
  constructor(nomeProduto, qtdComercializadaDoProduto,
    valorDeVendaDoProduto, valorTotalDoProduto) {
    this.nomeProduto = nomeProduto; // <xProd>
    this.qtdComercializadaDoProduto = qtdComercializadaDoProduto; // <qCom>
    this.valorDeVendaDoProduto = valorDeVendaDoProduto; // <vUnCom>
    this.valorTotalDoProduto = valorTotalDoProduto; // <vProd>
  }
}

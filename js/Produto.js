/* eslint-disable class-methods-use-this */
export default class Produto {
  constructor(nomeDoProduto, qtdVendidaDoProduto,
    valorDaUnidadeDoProduto, valorTotalVendidoDoProduto) {
    this.nomeDoProduto = nomeDoProduto; // <xProd>
    this.qtdVendidaDoProduto = this.retornaOValorTruncado(qtdVendidaDoProduto); // <qCom>
    this.valorDaUnidadeDoProduto = this.retornaOValorTruncado(valorDaUnidadeDoProduto);
    // <vUnCom>
    this.valorTotalVendidoDoProduto = this.retornaOValorTruncado(valorTotalVendidoDoProduto);
    // <vProd>
  }

  retornaOValorTruncado(valor) {
    const pontoCaractere = '.';
    const indexDoPonto = valor.indexOf(pontoCaractere);
    const qtdNumerosUtilizados = (indexDoPonto + 5);
    const valorTruncado = valor.substr(0, qtdNumerosUtilizados);

    return parseFloat(valorTruncado);
  }
}

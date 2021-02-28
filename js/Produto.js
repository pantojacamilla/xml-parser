export default class Produto {
  constructor(nomeDoProduto, qtdVendidaDoProduto,
    valorDaUnidadeDoProduto, valorTotalVendidoDoProduto) {
    this.nomeDoProduto = nomeDoProduto; // <xProd>
    this.qtdVendidaDoProduto = retornaOValorTruncado(qtdVendidaDoProduto); // <qCom>
    this.valorDaUnidadeDoProduto = retornaOValorTruncado(valorDaUnidadeDoProduto); // <vUnCom>
    this.valorTotalVendidoDoProduto = retornaOValorTruncado(valorTotalVendidoDoProduto);
    // <vProd>
  }


  retornaOValorTruncado(valor) {
    const pontoCaractere = '.';
    const indexDoPonto = valor.indexOf(pontoCaractere);
    const qtdNumerosUtilizados = (indexDoPonto + 5);
    const valorTruncado = valor.substr(0, qtdNumerosUtilizados);

    return parseFloat(valorTruncado);
  };

}

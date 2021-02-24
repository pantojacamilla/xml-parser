export default class NotaFiscal {
  constructor(indexNotaFiscal, statusNotaFiscal, dom) {
    this.indexNotaFiscal = indexNotaFiscal;
    // Inutilizada || Cancelada || Não Contém Combustível || Válida
    this.statusNotaFiscal = statusNotaFiscal;
    this.dom = dom;
  }

  adicionaEstesValoresNaNotaFiscal(chaveDeAcesso, dataEmissao,
    produtos, empresa) {
    this.chaveDeAcesso = chaveDeAcesso;
    this.dataEmissao = new Date(dataEmissao);
    this.produtos = produtos;
    this.empresa = empresa;
  }

  // Somatório do valor apenas dos combustíveis em uma nota fiscal
  valorTotalDaNota() {
    // eslint-disable-next-line max-len
    const total = this.produtos.reduce((valTotal, produto) => produto.valorTotalVendidoDoProduto + valTotal, 0);
    return total;
  }

  tipoDeNotaFiscal() {
    if (this.empresa.nome === 'F S S COMERCIO VAREJISTA DE COMB E LUBRIFICANTES LTDA') {
      return 'Entrada';
    }
    return 'Saída';
  }
}

// dataEmissao, produtos, empresa, tipoDeNota
// < emi >
// produto:Produto
// empresa:Empresa
// tipoDeNota; //(entrada ou saída)

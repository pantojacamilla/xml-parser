export default class NotaFiscal {

  _chaveDeAcesso;
  _dataEmissao;
  _produtos;
  _empresa;

  constructor(indexNotaFiscal, statusNotaFiscal) {
    this.indexNotaFiscal = indexNotaFiscal;
    // Inutilizada || Cancelada || Não Contém Combustível || Válida
    this.statusNotaFiscal = statusNotaFiscal;
  }

  get chaveDeAcesso() {
    return this._chaveDeAcesso;
  }

  set chaveDeAcesso(chaveAcesso) {
    this._chaveDeAcesso = chaveAcesso;
  }

  get dataEmissao() {
    return this._dataEmissao;
  }

  set dataEmissao(dataEmissao) {
    this._dataEmissao = dataEmissao;
  }

  get produtos() {
    return this._produtos;
  }

  set produtos(produtos) {
    this._produtos = produtos;
  }

  get empresa() {
    return this.empresa;
  }

  set empresa(empresa) {
    this._empresa = empresa;
  }

  adicionaEstesValoresNaNotaFiscal(chaveDeAcesso, dataEmissao,
    produtos, empresa) {
    this._chaveDeAcesso = chaveDeAcesso;
    this._dataEmissao = new Date(dataEmissao);
    this._produtos = produtos;
    this._empresa = empresa;
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

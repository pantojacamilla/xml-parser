export default class NotaFiscal {

  __chaveDeAcesso;
  __dataEmissao;
  __produtos;
  __empresa;

  constructor(indexNotaFiscal, statusNotaFiscal) {
    this.indexNotaFiscal = indexNotaFiscal;
    // Inutilizada || Cancelada || Não Contém Combustível || Válida
    this.statusNotaFiscal = statusNotaFiscal;
  }

  get chaveDeAcesso() {
    return this.__chaveDeAcesso;
  }

  set chaveDeAcesso(chaveAcesso) {
    this.__chaveDeAcesso = chaveAcesso;
  }

  get dataEmissao() {
    return this.__dataEmissao;
  }

  set dataEmissao(dataEmissao) {
    this.__dataEmissao = dataEmissao;
  }

  get produtos() {
    return this.__produtos;
  }

  set produtos(produtos) {
    this.__produtos = produtos;
  }

  get empresa() {
    return this.empresa;
  }

  set empresa(empresa) {
    this.__empresa = empresa;
  }

  adicionaEstesValoresNaNotaFiscal(chaveDeAcesso, dataEmissao,
    produtos, empresa) {
    this.__chaveDeAcesso = chaveDeAcesso;
    this.__dataEmissao = new Date(new Date(dataEmissao).toDateString());
    this.__produtos = produtos;
    this.__empresa = empresa;
  }

  static tipoDeNotaFiscal() {
    if (this.empresa.nome === 'F S S COMERCIO VAREJISTA DE COMB E LUBRIFICANTES LTDA') {
      return 'Entrada';
    }
    return 'Saída';
  }
}

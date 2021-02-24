export default class NotaFiscal {
  constructor(statusNotaFiscal, dom) {
    this.statusNotaFiscal = statusNotaFiscal; // Inutilizada || Cancelada || Valida
    this.dom = dom;
  }

  adicionaEstesValoresNaNotaFiscal(chaveDeAcesso, dataEmissao,
    produtos, empresa) {
    this.chaveDeAcesso = chaveDeAcesso;
    this.dataEmissao = dataEmissao;
    this.produtos = produtos;
    this.empresa = empresa;
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

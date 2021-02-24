export default class NotaFiscal {
  constructor(chaveDeAcesso, dataEmissao, produtos, empresa) {
    this.chaveDeAcesso = chaveDeAcesso;
    this.dataEmissao = dataEmissao;
    this.produtos = produtos;
    this.empresa = empresa;
  }

  tipoDeNotaFiscal; // Inutilizada || Cancelada || Valida
  // tipo de nota fiscal

  // tipoDeNotaFiscal() {
  //   if (this.empresa.nome === 'F S S COMERCIO VAREJISTA DE COMB E LUBRIFICANTES LTDA') {
  //     return 'Entrada';
  //   }
  //   return 'Saída';
  // }
}

// dataEmissao, produtos, empresa, tipoDeNota
// < emi >
// produto:Produto
// empresa:Empresa
// tipoDeNota; //(entrada ou saída)

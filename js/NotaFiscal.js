export default class NotaFiscal {
  tipoDeNota() {
    if (this.empresa.nome === 'F S S COMERCIO VAREJISTA DE COMB E LUBRIFICANTES LTDA') {
      return 'Entrada';
    }
    return 'Saída';
  }
}

// < emi >
// produto:Produto
// empresa:Empresa
// tipoDeNota; //(entrada ou saída)

export default class NotaFiscal {
  dataEmissao;
  produtos;
  empresa;

  tipoDeNota() {
    if (this.empresa.nome == 'F S S COMERCIO VAREJISTA DE COMB E LUBRIFICANTES LTDA') {
      return 'Entrada';
    } else {
      return 'Saída';
    }
  }
}

// < emi >
// produto:Produto
// empresa:Empresa
// tipoDeNota; //(entrada ou saída)
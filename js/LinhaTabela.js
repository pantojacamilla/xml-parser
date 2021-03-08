export default class LinhaTabela {
  constructor(numeroSequencial, nota, dataEmissao, combustiveis, atoAno, valorPresumido,
    valorPraticado, difPresumidoEVenda, qtdLitros, valorTotalPresumido, valorTotalPraticado,
    difEntreTotPresumidoEVendido, icmsRestituicao, statusNotaFiscal) {
    this.numeroSequencial = numeroSequencial;
    this.nota = nota;
    this.dataEmissao = dataEmissao;
    this.combustiveis = combustiveis; // []
    this.atoAno = atoAno;
    this.valorPresumido = valorPresumido; // []
    this.valorPraticado = valorPraticado; // []
    this.difPresumidoEVenda = difPresumidoEVenda; // []
    this.qtdLitros = qtdLitros; // []
    this.valorTotalPresumido = valorTotalPresumido; // []
    this.valorTotalPraticado = valorTotalPraticado; // []
    this.difEntreTotPresumidoEVendido = difEntreTotPresumidoEVendido; // []
    this.icmsRestituicao = icmsRestituicao; // []
    this.statusNotaFiscal = statusNotaFiscal;
  }
}

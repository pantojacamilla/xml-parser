export default class LinhaTabela {
  constructor(numeroSequencial, nota, dataEmissao, combustiveis, atoAno, valorPresumido,
    valorPraticado, difPresumidoEPraticado, qtdLitros, valorTotalPresumido, valorTotalPraticado,
    difEntreTotPresumidoEPraticado, icmsRestituicao, statusNotaFiscal) {
    this.numeroSequencial = numeroSequencial;
    this.nota = nota;
    this.dataEmissao = dataEmissao;
    this.combustiveis = combustiveis; // []
    this.atoAno = atoAno;
    this.valorPresumido = valorPresumido; // []
    this.valorPraticado = valorPraticado; // []
    this.difPresumidoEPraticado = difPresumidoEPraticado; // []
    this.qtdLitros = qtdLitros; // []
    this.valorTotalPresumido = valorTotalPresumido; // []
    this.valorTotalPraticado = valorTotalPraticado; // []
    this.difEntreTotPresumidoEPraticado = difEntreTotPresumidoEPraticado; // []
    this.icmsRestituicao = icmsRestituicao; // []
    this.statusNotaFiscal = statusNotaFiscal;
  }
}

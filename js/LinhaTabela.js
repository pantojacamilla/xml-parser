export default class LinhaTabela {
  constructor(numeroSequencial, nota, dataEmissao, combustiveis, atoAno, valorPresumido,
    qtdLitros, valorTotalPresumido,
    valorTotalVendido, difEntreTotPresumidoEVendido, icmsASerRestituido, statusNotaFiscal) {
    this.numeroSequencial = numeroSequencial;
    this.nota = nota;
    this.dataEmissao = dataEmissao;
    this.combustiveis = combustiveis;
    this.atoAno = atoAno;
    this.valorPresumido = valorPresumido;
    this.qtdLitros = qtdLitros;
    this.valorTotalPresumido = valorTotalPresumido;
    this.valorTotalVendido = valorTotalVendido;
    this.difEntreTotPresumidoEVendido = difEntreTotPresumidoEVendido;
    this.icmsASerRestituido = icmsASerRestituido;
    this.statusNotaFiscal = statusNotaFiscal;
  }
}
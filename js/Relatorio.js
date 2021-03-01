export default class Relatorio {
  constructor(linhasTabela, somaDosValoresPresumidos, somaValoresVendidosAoConsumidor,
    somaDasDiferencas, somaDoIcmsRestituido) {
    this.linhasTabela = linhasTabela;
    this.somaDosValoresPresumidos = somaDosValoresPresumidos;
    this.somaValoresVendidosAoConsumidor = somaValoresVendidosAoConsumidor;
    this.somaDasDiferencas = somaDasDiferencas;
    this.somaDoIcmsRestituido = somaDoIcmsRestituido;
  }
}

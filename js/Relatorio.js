export default class Relatorio {
  constructor(linhasTabela, somaValoresPresumidos, somaValoresPraticados, somaDiferencas,
    somaIcmsRestituido) {
    this.linhasTabela = linhasTabela;
    this.somaValoresPresumidos = somaValoresPresumidos;
    this.somaValoresPraticados = somaValoresPraticados;
    this.somaDiferencas = somaDiferencas;
    this.somaIcmsRestituido = somaIcmsRestituido;
  }
}

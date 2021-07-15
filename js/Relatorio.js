export default class Relatorio {
  competencia;

  constructor(linhasTabela, somaValoresPresumidos, somaValoresPraticados, somaDiferencas,
    somaIcmsRestituido) {
    this.linhasTabela = linhasTabela;
    this.somaValoresPresumidos = somaValoresPresumidos;
    this.somaValoresPraticados = somaValoresPraticados;
    this.somaDiferencas = somaDiferencas;
    this.somaIcmsRestituido = somaIcmsRestituido;
  }

  get competencia() {
    return this.competencia;
  }

  /**
   * @param {any} competencia
   */
  set competencia(competencia) {
    this.competencia = competencia;
  }
}

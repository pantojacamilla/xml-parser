export default class Ato {
  constructor(numeroAto, dataInicio, dataFim, produtoImposto, ano) {
    this.numeroAto = numeroAto;
    this.dataInicio = new Date(`${dataInicio}T00:00:00-03:00`);
    this.dataFim = new Date(`${dataFim}T00:00:00-03:00`);
    this.produtoImposto = produtoImposto;
    this.ano = ano;
  }
}

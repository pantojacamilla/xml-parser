export default class Ato {
  constructor(numeroAto, dataInicio, dataFim, produtoImposto) {
    this.numeroAto = numeroAto;
    this.dataInicio = new Date(`${dataInicio}T01:00:00-03:00`);
    this.dataFim = new Date(`${dataFim}T23:59:59-03:00`);
    this.produtoImposto = produtoImposto;
  }
}

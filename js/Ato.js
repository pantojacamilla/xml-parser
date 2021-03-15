/* eslint-disable import/extensions */
import retornaData from './retornaData.js';

export default class Ato {
  constructor(numeroAto, dataInicio, dataFim, produtoImposto, ano) {
    this.numeroAto = numeroAto;
    this.dataInicio = retornaData(dataInicio);
    this.dataFim = retornaData(dataFim);
    this.produtoImposto = produtoImposto;
    this.ano = ano;
  }
}

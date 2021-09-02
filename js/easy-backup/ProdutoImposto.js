import retornaDinero from './retornaDinero.js';

export default class ProdutoImposto {
  constructor(gac, gap, d10, oleoDisel) {
    this.gac = retornaDinero(gac);
    this.gap = retornaDinero(gap);
    this.d10 = retornaDinero(d10);
    this.oleoDisel = retornaDinero(oleoDisel);
  }
}

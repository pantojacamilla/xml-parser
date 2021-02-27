export default class ProdutoImposto {
  constructor(gac, gap, d10, oleoDisel) {
    this.gac = parseFloat(gac);
    this.gap = parseFloat(gap);
    this.d10 = parseFloat(d10);
    this.oleoDisel = parseFloat(oleoDisel);
  }
}

/* eslint-disable import/extensions */
import retornaData from './retornaData.js';

export default class NotaFiscal {
  dataEmissao;
  produtos;
  empresa;

  constructor(indexNotaFiscal, chaveDeAcesso, statusNotaFiscal) {
    this.indexNotaFiscal = indexNotaFiscal;
    this.chaveDeAcesso = chaveDeAcesso;
    // Inutilizada || Cancelada || Não Contém Combustível || Válida
    this.statusNotaFiscal = statusNotaFiscal;
  }

  get dataEmissao() {
    return this.dataEmissao;
  }

  /**
   * @param {any} dataEmissao
   */
  set dataEmissao(dataEmissao) {
    this.dataEmissao = dataEmissao;
  }

  get produtos() {
    return this.produtos;
  }

  /**
   * @param {any} produtos
   */
  set produtos(produtos) {
    this.produtos = produtos;
  }

  get empresa() {
    return this.empresa;
  }

  /**
   * @param {any} empresa
   */
  set empresa(empresa) {
    this.empresa = empresa;
  }

  preencheNotaFiscalValida(dataEmissao, produtos, empresa) {
    this.dataEmissao = retornaData(dataEmissao);
    this.produtos = produtos;
    this.empresa = empresa;
  }
}

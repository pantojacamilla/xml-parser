export default class Empresa {
  //   Informações iniciais da empresa:
  // . CNPJ
  // . Tipo empresa: Matriz/Filial
  // . Nome empresarial
  // . Nome fantasia

  constructor(cnpj, nomeEmpresarial, nomeFantasia, tipoEmpresa) {
    this.cnpj = cnpj;
    this.nomeEmpresarial = nomeEmpresarial;
    this.nomeFantasia = nomeFantasia;
    this.tipoEmpresa = tipoEmpresa; // matriz ou filial
  }
}

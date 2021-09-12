export default class Empresa {
  constructor(cnpj, nomeEmpresarial, nomeFantasia, tipoEmpresa) {
    this.cnpj = cnpj;
    this.nomeEmpresarial = nomeEmpresarial;
    this.nomeFantasia = nomeFantasia;
    this.tipoEmpresa = tipoEmpresa; // matriz ou filial
  }

  static retornaObjetoEmpresa(empresaSelecionada) {
    let cnpj;
    let nomeEmpresarial;
    let nomeFantasia;
    let tipoEmpresa;

    if (empresaSelecionada == 1) {
      cnpj = '07.533.992/0001-61';
      nomeEmpresarial = 'A F S S COMERCIO VAREJISTA DE COMBUSTIVEIS E LUBRIFICANTES LTDA';
      nomeFantasia = 'POSTO SAO JERONIMO';
      tipoEmpresa = 'Matriz';
    }

    if (empresaSelecionada == 2) {
      cnpj = '07.533.992/0002-42';
      nomeEmpresarial = 'A F S S COMERCIO VAREJISTA DE COMBUSTIVEIS E LUBRIFICANTES LTDA';
      nomeFantasia = 'POSTO KM 29';
      tipoEmpresa = 'Filial';
    }

    if (empresaSelecionada == 3) {
      cnpj = '23.314.594/0035-50';
      nomeEmpresarial = 'ALESAT COMBUSTIVEIS S.A.';
      nomeFantasia = 'ALESAT COMBUSTIVEIS S.A.';
      tipoEmpresa = 'Filial';
    }

    return new Empresa(cnpj, nomeEmpresarial, nomeFantasia, tipoEmpresa);
  }
}

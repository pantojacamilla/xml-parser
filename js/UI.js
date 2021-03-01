export default class UI {
  static mostraRelatorio(relatorio) {
    const linhasRelatorio = relatorio.linhasTabela;

    linhasRelatorio.forEach((linhaRelatorio) => {
      if (linhaRelatorio.statusNotaFiscal === 'Inutilizada') {
        UI.mostraNotaInutilizada(linhaRelatorio);
      } else if (linhaRelatorio.statusNotaFiscal === 'Cancelada') {
        UI.mostraNotaCancelada(linhaRelatorio);
      } else if (linhaRelatorio.statusNotaFiscal === 'Sem Combustível') {
        UI.mostraNotaSemCombustivel(linhaRelatorio);
      } else {
        UI.mostraProdutos(linhaRelatorio);
      }
    });

    UI.mostraSomatorias(relatorio);
  }

  static mostraSomatorias(relatorio) {
    const somaPresumidos = document.querySelector('#somaPresumidos');
    somaPresumidos.textContent = `Soma dos valores presumidos: ${relatorio.somaDosValoresPresumidos}`;

    const somaVendidos = document.querySelector('#somaVendidos');
    somaVendidos.textContent = `Soma dos valores praticados: ${relatorio.somaValoresVendidosAoConsumidor}`;

    const somaDiferencas = document.querySelector('#somaDiferencas');
    somaDiferencas.textContent = `Soma das diferenças entre os valores Presumidos e praticados: ${relatorio.somaDasDiferencas}`;

    const somaIcms = document.querySelector('#somaIcms');
    somaIcms.textContent = `Soma dos ICMS: ${relatorio.somaDoIcmsRestituido}`;
  }

  static mostraNotaInutilizada(linhaRelatorio) {
    const row = document.createElement('tr');
    let td = document.createElement('td');

    // Número de sequencia
    td.textContent = linhaRelatorio.indexNotaFiscal + 1;
    row.appendChild(td);

    // Nome do arquivo
    td = document.createElement('td');
    td.textContent = linhaRelatorio.__chaveDeAcesso;
    row.appendChild(td);

    // Mensagem
    td = document.createElement('td');
    td.setAttribute('colspan', '11');
    td.textContent = 'NOTA FISCAL INUTILIZADA';
    row.appendChild(td);

    if ((linhaRelatorio.indexNotaFiscal + 1) % 2 === 1) {
      row.setAttribute('class', 'grey');
    }

    const tabelaRelatorio = document.querySelector('tbody');
    tabelaRelatorio.appendChild(row);
  }

  static mostraNotaCancelada(linhaRelatorio) {
    const row = document.createElement('tr');
    let td = document.createElement('td');

    // Número Sequencial
    td.innerHTML = linhaRelatorio.indexNotaFiscal + 1;
    row.appendChild(td);

    // Nome do arquivo
    td = document.createElement('td');
    td.textContent = linhaRelatorio.__chaveDeAcesso;
    row.appendChild(td);

    // Mensagem
    td = document.createElement('td');
    td.setAttribute('colspan', '11');
    td.textContent = 'NOTA FISCAL CANCELADA';
    row.appendChild(td);

    if ((linhaRelatorio.indexNotaFiscal + 1) % 2 === 1) {
      row.setAttribute('class', 'grey');
    }

    const tabelaRelatorio = document.querySelector('tbody');
    tabelaRelatorio.appendChild(row);
  }

  static mostraNotaSemCombustivel(linhaRelatorio) {
    const row = document.createElement('tr');
    let td = document.createElement('td');

    //  Número sequencial
    td.textContent = linhaRelatorio.indexNotaFiscal + 1;
    row.appendChild(td);

    // Nome do arquivo
    td = document.createElement('td');
    td.textContent = linhaRelatorio.__chaveDeAcesso;
    row.appendChild(td);

    // Mensagem
    td = document.createElement('td');
    td.setAttribute('colspan', '11');
    td.textContent = 'NÃO CONTÉM COMBUSTÍVEL';
    row.appendChild(td);

    if ((linhaRelatorio.indexNotaFiscal + 1) % 2 === 1) {
      row.setAttribute('class', 'grey');
    }

    const tabelaRelatorio = document.querySelector('tbody');
    tabelaRelatorio.appendChild(row);
  }

  static mostraProdutos(linhaRelatorio) {
    const qtdProdutosNaNotaFical = linhaRelatorio.combustiveis.length;

    if (qtdProdutosNaNotaFical > 1) {
      // UI.mostraMultiplosProdutos(linhaRelatorio);
    } else {
      UI.mostraLinhaComUmProduto(linhaRelatorio);
    }
  }

  static criaLinhaTabela(dado, linha, validacao) {
    const data = dado;
    const td = document.createElement('td');
    td.textContent = data;
    if (validacao === true) {
      if (data > 0) {
        td.setAttribute('class', 'positivo');
      } else {
        td.setAttribute('class', 'negativo');
      }
    }
    const row = linha;
    row.appendChild(td);
  }

  static mostraLinhaComUmProduto(linhaRelatorio) {
    const linha = document.createElement('tr');

    // Número sequencial
    const { numeroSequencial } = linhaRelatorio;
    this.criaLinhaTabela(numeroSequencial, linha);

    // Nome do arquivo
    const { nota } = linhaRelatorio;
    this.criaLinhaTabela(nota, linha);

    // Data de emissão
    const dataEmissao = this.formataData(linhaRelatorio.dataEmissao);
    this.criaLinhaTabela(dataEmissao, linha);

    // Combustível
    const combustiveis = linhaRelatorio.combustiveis[0];
    this.criaLinhaTabela(combustiveis, linha);

    // Ato/Ano
    const { atoAno } = linhaRelatorio;
    this.criaLinhaTabela(atoAno, linha);

    // Valor Presumido
    const valorPresumido = linhaRelatorio.valorPresumido[0];
    this.criaLinhaTabela(valorPresumido, linha);

    // Valor Praticado
    const valorDeVenda = linhaRelatorio.valorDeVenda[0];
    this.criaLinhaTabela(valorDeVenda, linha);

    // Diferença entre (Presumido - Praticado)
    const difPresumidoEVenda = linhaRelatorio.difPresumidoEVenda[0];
    this.criaLinhaTabela(difPresumidoEVenda, linha, true);

    // Quantidade de litros
    const qtdLitros = linhaRelatorio.qtdLitros[0];
    this.criaLinhaTabela(qtdLitros, linha);

    // Valor total Presumido
    const { valorTotalPresumido } = linhaRelatorio;
    this.criaLinhaTabela(valorTotalPresumido, linha);

    // Valor total vendido
    const { valorTotalVendido } = linhaRelatorio;
    this.criaLinhaTabela(valorTotalVendido, linha);

    // Diferença entre TOTAL presumido e TOTAL vendido
    const { difEntreTotPresumidoEVendido } = linhaRelatorio;
    this.criaLinhaTabela(difEntreTotPresumidoEVendido, linha, true);

    // Icms a ser restituído
    const { icmsASerRestituido } = linhaRelatorio;
    this.criaLinhaTabela(icmsASerRestituido, linha, true);

    if ((linhaRelatorio.numeroSequencial) % 2 === 1) {
      linha.setAttribute('class', 'grey');
    }

    const tabelaRelatorio = document.querySelector('tbody');
    tabelaRelatorio.appendChild(linha);
  }

  static mostraMultiplosProdutos(linhaRelatorio) {
    let row = document.createElement('tr');
    let td = document.createElement('td');

    const qtdProdutos = linhaRelatorio.combustiveis.length;

    // Número sequencial
    td = document.createElement('td');
    td.setAttribute('rowspan', (qtdProdutos + 1));
    td.textContent = linhaRelatorio.numeroSequencial;
    row.appendChild(td);

    // Nome do arquivo
    td = document.createElement('td');
    td.setAttribute('rowspan', (qtdProdutos + 1));
    td.textContent = linhaRelatorio.nota;
    row.appendChild(td);

    // Data de emissão
    td = document.createElement('td');
    td.setAttribute('rowspan', (qtdProdutos + 1));
    td.textContent = UI.dateParse(linhaRelatorio.dataEmissao);
    row.appendChild(td);

    if ((linhaRelatorio.numeroSequencial) % 2 === 1) {
      row.setAttribute('class', 'grey');
    }

    const tabelaRelatorio = document.querySelector('tbody');
    tabelaRelatorio.appendChild(row);

    for (let i = 0; i < qtdProdutos; i += 1) {
      row = document.createElement('tr');

      // Combustiveis
      td = document.createElement('td');
      td.textContent = linhaRelatorio.combustiveis[i];
      row.appendChild(td);

      // Ato/Ano
      td = document.createElement('td');
      td.textContent = linhaRelatorio.atoAno;
      row.appendChild(td);

      // Valor Presumido
      td = document.createElement('td');
      td.textContent = linhaRelatorio.valorPresumido[i];
      row.appendChild(td);

      // Valor Praticado
      td = document.createElement('td');
      td.textContent = linhaRelatorio.valorDeVenda[i];
      row.appendChild(td);

      // Diferença entre (Presumido - Praticado)
      td = document.createElement('td');
      const difPeP = linhaRelatorio.difPresumidoEVenda[i];
      td.textContent = difPeP;
      if (difPeP > 0) {
        td.setAttribute('class', 'positivo');
      } else {
        td.setAttribute('class', 'negativo');
      }
      row.appendChild(td);

      // Quantidade de litros
      td = document.createElement('td');
      td.textContent = linhaRelatorio.qtdLitros[i];
      row.appendChild(td);

      // Valor total Presumido
      td = document.createElement('td');
      td.textContent = linhaRelatorio.valorTotalPresumido[i];
      row.appendChild(td);

      // Valor total vendido
      td = document.createElement('td');
      td.textContent = linhaRelatorio.valorTotalVendido[i];
      row.appendChild(td);

      // Diferença entre TOTAL presumido e TOTAL vendido
      td = document.createElement('td');
      const diferenca = linhaRelatorio.difEntreTotPresumidoEVendido[i];
      td.textContent = diferenca;
      if (diferenca > 0) {
        td.setAttribute('class', 'positivo');
      } else {
        td.setAttribute('class', 'negativo');
      }
      row.appendChild(td);

      // Icms a ser restituído
      td = document.createElement('td');
      const icms = linhaRelatorio.icmsASerRestituido[i];
      td.textContent = icms;
      if (icms > 0) {
        td.setAttribute('class', 'positivo');
      } else {
        td.setAttribute('class', 'negativo');
      }
      row.appendChild(td);

      if ((linhaRelatorio.numeroSequencial) % 2 === 1) {
        row.setAttribute('class', 'grey');
      }

      // const tabelaRelatorio = document.querySelector('tbody');
      tabelaRelatorio.appendChild(row);
    }
  }

  static formataData(data) {
    let dia = data.getDate();
    let mes = data.getMonth() + 1;

    if (dia <= 9) {
      dia = `0${dia}`;
    }

    if (mes <= 9) {
      mes = `0${mes}`;
    }

    const ano = data.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    return dataFormatada;
  }
}

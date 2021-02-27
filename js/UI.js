export default class UI {

  static mostraRelatorio(relatorio) {
    let tabelaRelatorio = document.querySelector('tbody');
    let row = document.createElement('tr');
    let td = document.createElement('td');
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
  };

  static mostraNotaInutilizada = (linhaRelatorio) => {
    let row = document.createElement('tr');
    let td = document.createElement('td');

    // Número de sequencia
    td.textContent = linhaRelatorio.indexNotaFiscal + 1
    row.appendChild(td);

    // Nome do arquivo
    td = document.createElement('td');
    td.textContent = linhaRelatorio._chaveDeAcesso;
    row.appendChild(td);

    // Mensagem
    td = document.createElement('td');
    td.setAttribute('colspan', '9');
    td.textContent = 'NOTA FISCAL INUTILIZADA';
    row.appendChild(td);

    if ((linhaRelatorio.indexNotaFiscal + 1) % 2 === 1) {
      row.setAttribute('class', 'grey')
    }
    const tabelaRelatorio = document.querySelector('tbody');
    tabelaRelatorio.appendChild(row);
  };


  static mostraNotaCancelada = (linhaRelatorio) => {
    let row = document.createElement('tr');
    let td = document.createElement('td');

    // Número Sequencial
    td.innerHTML = linhaRelatorio.indexNotaFiscal + 1;
    row.appendChild(td);

    // Nome do arquivo
    td = document.createElement('td');
    td.textContent = linhaRelatorio._chaveDeAcesso;
    row.appendChild(td);

    // Mensagem
    td = document.createElement('td');
    td.setAttribute('colspan', '9');
    td.textContent = 'NOTA FISCAL CANCELADA';
    row.appendChild(td);

    if ((linhaRelatorio.indexNotaFiscal + 1) % 2 === 1) {
      row.setAttribute('class', 'grey')
    }

    const tabelaRelatorio = document.querySelector('tbody');
    tabelaRelatorio.appendChild(row);
  };

  static mostraNotaSemCombustivel = (linhaRelatorio) => {
    let row = document.createElement('tr');
    let td = document.createElement('td');

    //  Número sequencial
    td.textContent = linhaRelatorio.indexNotaFiscal + 1;
    row.appendChild(td);

    // Nome do arquivo
    td = document.createElement('td');
    td.textContent = linhaRelatorio._chaveDeAcesso;
    row.appendChild(td);

    // Mensagem
    td = document.createElement('td');
    td.setAttribute('colspan', '9');
    td.textContent = 'NÃO CONTÉM COMBUSTÍVEL';
    row.appendChild(td);

    if ((linhaRelatorio.indexNotaFiscal + 1) % 2 === 1) {
      row.setAttribute('class', 'grey')
    }

    const tabelaRelatorio = document.querySelector('tbody');
    tabelaRelatorio.appendChild(row);
  }

  static mostraProdutos = (linhaRelatorio) => {
    let td = document.createElement('td');

    const qtdProdutosNaNotaFical = linhaRelatorio.combustiveis.length;
    if (qtdProdutosNaNotaFical > 1) {
      UI.mostraMultiplosProdutos(linhaRelatorio);
    } else {
      UI.mostraLinhaComUmProduto(linhaRelatorio);
    }
  };

  static mostraMultiplosProdutos = (linhaRelatorio) => {
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
      row.setAttribute('class', 'grey')
    }

    let tabelaRelatorio = document.querySelector('tbody');
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

      // Diferença entre presumido e vendido
      td = document.createElement('td');
      td.textContent = linhaRelatorio.difEntreTotPresumidoEVendido[i];
      row.appendChild(td);

      // Icms a ser restituído
      td = document.createElement('td');
      td.textContent = linhaRelatorio.icmsASerRestituido[i];
      row.appendChild(td);

      if ((linhaRelatorio.numeroSequencial) % 2 === 1) {
        row.setAttribute('class', 'grey')
      }

      tabelaRelatorio = document.querySelector('tbody');
      tabelaRelatorio.appendChild(row);
    }
  };

  static mostraLinhaComUmProduto = (linhaRelatorio) => {
    let row = document.createElement('tr');

    // Número sequencial
    let td = document.createElement('td');
    td.textContent = linhaRelatorio.numeroSequencial;
    row.appendChild(td);

    // Nome do arquivo
    td = document.createElement('td');
    td.textContent = linhaRelatorio.nota;
    row.appendChild(td);

    // Data de emissão
    td = document.createElement('td');
    td.textContent = UI.dateParse(linhaRelatorio.dataEmissao);
    row.appendChild(td);

    // Combustível
    td = document.createElement('td');
    td.textContent = linhaRelatorio.combustiveis[0];
    row.appendChild(td);

    // Ato/Ano
    td = document.createElement('td');
    td.textContent = linhaRelatorio.atoAno;
    row.appendChild(td);

    // Valor Presumido
    td = document.createElement('td');
    td.textContent = linhaRelatorio.valorPresumido[0];
    row.appendChild(td);

    // Quantidade de litros
    td = document.createElement('td');
    td.textContent = linhaRelatorio.qtdLitros[0];
    row.appendChild(td);

    // Valor total Presumido
    td = document.createElement('td');
    td.textContent = linhaRelatorio.valorTotalPresumido[0];
    row.appendChild(td);

    // Valor total vendido
    td = document.createElement('td');
    td.textContent = linhaRelatorio.valorTotalVendido[0];
    row.appendChild(td);

    // Diferença entre presumido e vendido
    td = document.createElement('td');
    td.textContent = linhaRelatorio.difEntreTotPresumidoEVendido[0];
    row.appendChild(td);

    // Icms a ser restituído
    td = document.createElement('td');
    td.textContent = linhaRelatorio.icmsASerRestituido[0];
    row.appendChild(td);

    if ((linhaRelatorio.numeroSequencial) % 2 === 1) {
      row.setAttribute('class', 'grey')
    }

    const tabelaRelatorio = document.querySelector('tbody');
    tabelaRelatorio.appendChild(row);
  };


  static dateParse = (data) => {
    let dia = data.getDate();
    let mes = data.getMonth();


    if (dia <= 9) {
      dia = `0${data.getDate()}`;
    } else {
      dia = `${data.getDate()}`;
    }

    if (mes <= 9) {
      mes = `0${data.getMonth()}`;
    } else {
      mes = `${data.getMonth()}`;
    }

    let ano = data.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada
  };

}

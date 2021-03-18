// /* eslint-disable import/extensions */
// import Dinero from '../node_modules/dinero.js/build/esm/dinero.js';
// import truncaValor from './retornaDinero.js';

export default class UI {
  static mostraSomatorias(relatorio) {
    const { somaValoresPresumidos } = relatorio;
    const somaPresumidos = document.querySelector('#somaPresumidos');
    somaPresumidos.textContent = somaValoresPresumidos.toFormat('$0,0.0000');

    const { somaValoresPraticados } = relatorio;
    const somaPraticado = document.querySelector('#somaPraticado');
    somaPraticado.textContent = somaValoresPraticados.toFormat('$0,0.0000');

    const somaDasDiferencas = relatorio.somaDiferencas;
    const somaDiferencas = document.querySelector('#somaDiferencas');
    somaDiferencas.textContent = somaDasDiferencas.toFormat('$0,0.0000');

    const somaDosIcms = relatorio.somaIcmsRestituido;
    const somaIcms = document.querySelector('#somaIcms');
    somaIcms.textContent = somaDosIcms.toFormat('$0,0.0000');
  }

  static mostraNotaInutilizada(linhaRelatorio) {
    const row = document.createElement('tr');
    let td = document.createElement('td');

    // Número de sequencia
    td.textContent = linhaRelatorio.indexNotaFiscal + 1;
    row.appendChild(td);

    // Nome do arquivo
    td = document.createElement('td');
    td.textContent = linhaRelatorio.chaveDeAcesso;
    row.appendChild(td);

    // Mensagem
    td = document.createElement('td');
    td.setAttribute('colspan', '11');
    td.textContent = 'NOTA FISCAL INUTILIZADA';
    row.appendChild(td);

    if ((linhaRelatorio.indexNotaFiscal + 1) % 2 === 1) {
      row.setAttribute('class', 'grey');
    }

    const tabelaRelatorio = document.querySelector('#tabela-relatorio');
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
    td.textContent = linhaRelatorio.chaveDeAcesso;
    row.appendChild(td);

    // Mensagem
    td = document.createElement('td');
    td.setAttribute('colspan', '11');
    td.textContent = 'NOTA FISCAL CANCELADA';
    row.appendChild(td);

    if ((linhaRelatorio.indexNotaFiscal + 1) % 2 === 1) {
      row.setAttribute('class', 'grey');
    }

    const tabelaRelatorio = document.querySelector('#tabela-relatorio');
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
    td.textContent = linhaRelatorio.truncaValorchaveDeAcesso;
    row.appendChild(td);

    // Mensagem
    td = document.createElement('td');
    td.setAttribute('colspan', '11');
    td.textContent = 'NÃO CONTÉM COMBUSTÍVEL';
    row.appendChild(td);

    if ((linhaRelatorio.indexNotaFiscal + 1) % 2 === 1) {
      row.setAttribute('class', 'grey');
    }

    const tabelaRelatorio = document.querySelector('#tabela-relatorio');
    tabelaRelatorio.appendChild(row);
  }

  static mostraProdutos(linhaRelatorio) {
    const qtdProdutosNaNotaFical = linhaRelatorio.combustiveis.length;

    if (qtdProdutosNaNotaFical > 1) {
      UI.mostraMultiplosProdutos(linhaRelatorio);
    } else {
      UI.mostraLinhaComUmProduto(linhaRelatorio);
    }
  }

  static criaLinhaTabela(dado, linha, opcao1, opcao2) {
    const data = dado;
    const td = document.createElement('td');

    if (opcao2 === 'dinero') {
      td.textContent = data.toFormat('$0,0.0000');
    } else {
      td.textContent = data;
    }

    if (opcao1 === true) {
      if (data.isPositive()) {
        td.setAttribute('class', 'positivo');
      } else {
        td.setAttribute('class', 'negativo');
      }
    }

    if (Number.isInteger(opcao1) === true) {
      td.setAttribute('rowspan', (opcao1 + 1));
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
    this.criaLinhaTabela(valorPresumido, linha, '', 'dinero');

    // Valor Praticado
    const valorPraticado = linhaRelatorio.valorPraticado[0];
    this.criaLinhaTabela(valorPraticado, linha, '', 'dinero');

    // Diferença entre (Presumido - Praticado)
    const difPresumidoEPraticado = linhaRelatorio.difPresumidoEPraticado[0];
    this.criaLinhaTabela(difPresumidoEPraticado, linha, true, 'dinero');

    // Quantidade de litros
    const qtdLitros = linhaRelatorio.qtdLitros[0];
    this.criaLinhaTabela(qtdLitros, linha);

    // Valor total Presumido
    const valorTotalPresumido = linhaRelatorio.valorTotalPresumido[0];
    this.criaLinhaTabela(valorTotalPresumido, linha, '', 'dinero');

    // Valor total vendido
    const valorTotalPraticado = linhaRelatorio.valorTotalPraticado[0];
    this.criaLinhaTabela(valorTotalPraticado, linha, '', 'dinero');

    // Diferença entre TOTAL presumido e TOTAL vendido
    const difEntreTotPresumidoEPraticado = linhaRelatorio.difEntreTotPresumidoEPraticado[0];
    this.criaLinhaTabela(difEntreTotPresumidoEPraticado, linha, true, 'dinero');

    // Icms a ser restituído
    const icmsRestituicao = linhaRelatorio.icmsRestituicao[0];
    this.criaLinhaTabela(icmsRestituicao, linha, true, 'dinero');

    if ((linhaRelatorio.numeroSequencial) % 2 === 1) {
      linha.setAttribute('class', 'grey');
    }

    const tabelaRelatorio = document.querySelector('#tabela-relatorio');
    tabelaRelatorio.appendChild(linha);
  }

  static mostraMultiplosProdutos(linhaRelatorio) {
    let linha = document.createElement('tr');
    const qtdProdutos = linhaRelatorio.combustiveis.length;

    // Número sequencial
    const { numeroSequencial } = linhaRelatorio;
    this.criaLinhaTabela(numeroSequencial, linha, qtdProdutos);

    // Nome do arquivo
    const { nota } = linhaRelatorio;
    this.criaLinhaTabela(nota, linha, qtdProdutos);

    // Data de emissão
    const dataEmissao = this.formataData(linhaRelatorio.dataEmissao);
    this.criaLinhaTabela(dataEmissao, linha, qtdProdutos);

    if ((linhaRelatorio.numeroSequencial) % 2 === 1) {
      linha.setAttribute('class', 'grey');
    }

    const tabelaRelatorio = document.querySelector('#tabela-relatorio');
    tabelaRelatorio.appendChild(linha);

    for (let i = 0; i < qtdProdutos; i += 1) {
      linha = document.createElement('tr');

      // Combustível
      const combustiveis = linhaRelatorio.combustiveis[i];
      this.criaLinhaTabela(combustiveis, linha);

      // Ato/Ano
      const { atoAno } = linhaRelatorio;
      this.criaLinhaTabela(atoAno, linha);

      // Valor Presumido
      const valorPresumido = linhaRelatorio.valorPresumido[i];
      this.criaLinhaTabela(valorPresumido, linha, '', 'dinero');

      // Valor Praticado
      const valorPraticado = linhaRelatorio.valorPraticado[i];
      this.criaLinhaTabela(valorPraticado, linha, '', 'dinero');

      // Diferença entre (Presumido - Praticado)
      const difPresumidoEPraticado = linhaRelatorio.difPresumidoEPraticado[i];
      this.criaLinhaTabela(difPresumidoEPraticado, linha, true, 'dinero');

      // Quantidade de litros
      const qtdLitros = linhaRelatorio.qtdLitros[i];
      this.criaLinhaTabela(qtdLitros, linha);

      // Valor total Presumido
      const valorTotalPresumido = linhaRelatorio.valorTotalPresumido[i];
      this.criaLinhaTabela(valorTotalPresumido, linha, '', 'dinero');

      // Valor total vendido
      const valorTotalPraticado = linhaRelatorio.valorTotalPraticado[i];
      this.criaLinhaTabela(valorTotalPraticado, linha, '', 'dinero');

      // Diferença entre TOTAL presumido e TOTAL vendido
      const difEntreTotPresumidoEPraticado = linhaRelatorio.difEntreTotPresumidoEPraticado[i];
      this.criaLinhaTabela(difEntreTotPresumidoEPraticado, linha, true, 'dinero');

      // Icms a ser restituído
      const icmsRestituicao = linhaRelatorio.icmsRestituicao[i];
      this.criaLinhaTabela(icmsRestituicao, linha, true, 'dinero');

      if ((linhaRelatorio.numeroSequencial) % 2 === 1) {
        linha.setAttribute('class', 'grey');
      }

      tabelaRelatorio.appendChild(linha);
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
}

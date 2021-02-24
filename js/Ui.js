export default class UI {
  static mostraNFInutilizada(dom, index, tableRelatorio) {
    const row = document.createElement('tr');
    let td = document.createElement('td');

    /**
     * Mostrar o Número sequencial do arquivo [ok]
     * Mostrar a numeracao da nota            [ok]
     * juntar as noutras colunas e dizer que foi inutilizada
     */

    // Número sequecial
    td.innerHTML = index + 1;
    row.appendChild(td);

    // Nome do arquivo
    td = document.createElement('td');

    const ano = dom.querySelector('ano').textContent;
    const cnpj = dom.querySelector('CNPJ').textContent;
    const modelo = dom.querySelector('mod').textContent;
    let serie = dom.querySelector('serie').textContent;
    if (serie.length === 1) {
      serie = `00${serie}`;
    } else if (serie.length === 2) {
      serie = `0${serie}`;
    }
    const inicial = dom.querySelector('nNFIni').textContent;
    const final = dom.querySelector('nNFFin').textContent;

    const nomeDoAquivo = `${ano}${cnpj}${modelo}${serie}${inicial}${final}-inu`;
    td.textContent = nomeDoAquivo;
    row.appendChild(td);

    td = document.createElement('td');
    td.setAttribute('colspan', '9');
    td.textContent = 'NOTA FISCAL INUTILIZADA';
    row.appendChild(td);

    tableRelatorio.children[1].appendChild(row);
  }

  static mostraNFCancelada(dom, index, tableRelatorio) {
    const row = document.createElement('tr');
    let td = document.createElement('td');

    // Número sequecial
    td.innerHTML = index + 1;
    row.appendChild(td);

    // Nome do arquivo
    td = document.createElement('td');
    td.textContent = dom.querySelector('chNFe').textContent;
    row.appendChild(td);

    td = document.createElement('td');
    td.setAttribute('colspan', '9');
    td.textContent = 'NOTA FISCAL CANCELADA';
    row.appendChild(td);

    tableRelatorio.children[1].appendChild(row);
  }

  static mostraNFCValidaSemCombustível(dom, index, tableRelatorio) {
    const row = document.createElement('tr');
    let td = document.createElement('td');

    // Número sequecial
    td.innerHTML = index + 1;
    row.appendChild(td);

    // Nome do arquivo
    td = document.createElement('td');
    td.textContent = dom.querySelector('infNFe').getAttribute('Id');
    row.appendChild(td);

    td = document.createElement('td');
    td.setAttribute('colspan', '9');
    td.textContent = 'NÃO CONTÉM COMBUSTÍVEL';
    row.appendChild(td);

    tableRelatorio.children[1].appendChild(row);
  }

  static mostraNFComUmProduto(linhaProduto, dom, tableRelatorio) {
    const row = document.createElement('tr');
    let td = document.createElement('td');

    // Número sequecial
    td = document.createElement('td');
    td.textContent = linhaProduto.numeroSequencial;
    row.appendChild(td);

    // Display Nome Da Nota
    td = document.createElement('td');
    const nomeNota = linhaProduto.notaFiscal[0].chaveDeAcesso;
    td.textContent = nomeNota;
    row.appendChild(td);

    // Display Data de Emissão
    td = document.createElement('td');
    let { dataEmissao } = linhaProduto.notaFiscal[0];
    dataEmissao = new Date(dataEmissao);
    td.textContent = `${dataEmissao.getDate()}/${dataEmissao.getMonth()}/${dataEmissao.getFullYear()}`;
    row.appendChild(td);

    // Display nome dos produtos
    td = document.createElement('td');
    const { nomeProduto } = linhaProduto.notaFiscal[0].produtos[0];
    td.textContent = nomeProduto;
    row.appendChild(td);

    // Display Número e Ano ato
    td = document.createElement('td');
    const { ato } = linhaProduto;
    const dataDeInicioDoAtoAtual = new Date(`${ato.dataInicio}T01:00:00-03:00`);
    td.textContent = `${ato.numeroAto}/${dataDeInicioDoAtoAtual.getFullYear()}`;
    row.appendChild(td);

    // Display Qtde de Litros
    td = document.createElement('td');
    const { qtdComercializadaDoProduto } = linhaProduto.notaFiscal[0].produtos[0];
    td.textContent = `${qtdComercializadaDoProduto} LT`;
    row.appendChild(td);

    // Display Valor Presumido
    td = document.createElement('td');
    const { valorPresumido } = linhaProduto;
    td.textContent = `R$ ${valorPresumido.toFixed(4)}`;
    row.appendChild(td);

    // Display total valor Presumido
    td = document.createElement('td');
    const { valorTotalPresumido } = linhaProduto;
    td.textContent = `R$ ${valorTotalPresumido.toFixed(4)}`;
    row.appendChild(td);

    // Display Valor vendido ao consumidor
    td = document.createElement('td');
    const { valorTotalDoProduto } = linhaProduto.notaFiscal[0].produtos[0];
    td.textContent = `R$ ${Number(valorTotalDoProduto).toFixed(4)}`;
    row.appendChild(td);

    // Display a diferenca entre os valores presumidos
    td = document.createElement('td');
    const { diferencaEntreValorPresumidoEValorDeVenda } = linhaProduto;
    if (diferencaEntreValorPresumidoEValorDeVenda > 0) {
      td.style.backgroundColor = 'lime';
    } else {
      td.style.backgroundColor = 'red';
    }
    td.textContent = `R$ ${Math.abs(diferencaEntreValorPresumidoEValorDeVenda).toFixed(4)}`;
    row.appendChild(td);

    // Display valor a ser restituido
    td = document.createElement('td');
    const { icmsASerRestituido } = linhaProduto;
    if (icmsASerRestituido > 0) {
      td.style.backgroundColor = 'lime';
    } else {
      td.style.backgroundColor = 'red';
    }
    td.textContent = `R$ ${Math.abs(icmsASerRestituido).toFixed(4)}`;
    row.appendChild(td);

    tableRelatorio.children[1].appendChild(row);
  }

  static mostraNFComMultiplosProdutos(linhasProdutos, numeroSequencial,
    qtdProdutosNaNota, dom, tableRelatorio) {
    let row = document.createElement('tr');
    let td = document.createElement('td');

    for (let i = 0; i < qtdProdutosNaNota; i += 1) {
      row = document.createElement('tr');
      td = document.createElement('td');

      // Número sequecial
      td = document.createElement('td');
      td.textContent = linhasProdutos[i].numeroSequencial;
      row.appendChild(td);

      // Display Nome Da Nota
      td = document.createElement('td');
      const nomeNota = linhasProdutos[i].notaFiscal[0].chaveDeAcesso;
      td.textContent = nomeNota;
      row.appendChild(td);

      // Display Data de Emissão
      td = document.createElement('td');
      let { dataEmissao } = linhasProdutos[i].notaFiscal[0];
      dataEmissao = new Date(dataEmissao);
      td.textContent = `${dataEmissao.getDate()}/${dataEmissao.getMonth()}/${dataEmissao.getFullYear()}`;
      row.appendChild(td);

      // Display Combustíveis
      td = document.createElement('td');
      const { nomeProduto } = linhasProdutos[i].notaFiscal[0].produtos[i];
      td.textContent = nomeProduto;
      row.appendChild(td);

      // Display Número e Ano ato
      td = document.createElement('td');
      const { ato } = linhasProdutos[i];
      const dataDeInicioDoAtoAtual = new Date(`${ato.dataInicio}T01:00:00-03:00`);
      td.textContent = `${ato.numeroAto}/${dataDeInicioDoAtoAtual.getFullYear()}`;
      row.appendChild(td);

      // Display Valor Presumido
      td = document.createElement('td');
      const { valorPresumido } = linhasProdutos[i];
      td.textContent = `R$ ${valorPresumido.toFixed(4)}`;
      row.appendChild(td);

      // Display Qtde de Litros
      td = document.createElement('td');
      const { qtdComercializadaDoProduto } = linhasProdutos[i].notaFiscal[0].produtos[i];
      td.textContent = `${qtdComercializadaDoProduto} LT`;
      row.appendChild(td);

      // Display total valor Presumido
      td = document.createElement('td');
      const { valorTotalPresumido } = linhasProdutos[i];
      td.textContent = `R$ ${valorTotalPresumido.toFixed(4)}`;
      row.appendChild(td);

      // Display Valor vendido ao consumidor
      td = document.createElement('td');
      const { valorTotalDoProduto } = linhasProdutos[i].notaFiscal[0].produtos[i];
      td.textContent = `R$ ${Number(valorTotalDoProduto).toFixed(4)}`;
      row.appendChild(td);

      // Display a diferenca entre os valores presumidos
      td = document.createElement('td');
      const { diferencaEntreValorPresumidoEValorDeVenda } = linhasProdutos[i];
      if (diferencaEntreValorPresumidoEValorDeVenda > 0) {
        td.style.backgroundColor = 'lime';
      } else {
        td.style.backgroundColor = 'red';
      }
      td.textContent = `R$ ${Math.abs(diferencaEntreValorPresumidoEValorDeVenda).toFixed(4)}`;
      row.appendChild(td);

      // Display valor a ser restituido
      td = document.createElement('td');
      const { icmsASerRestituido } = linhasProdutos[i];
      if (icmsASerRestituido > 0) {
        td.style.backgroundColor = 'lime';
      } else {
        td.style.backgroundColor = 'red';
      }
      td.textContent = `R$ ${Math.abs(icmsASerRestituido).toFixed(4)}`;
      row.appendChild(td);

      tableRelatorio.children[1].appendChild(row);
    }
  }
}

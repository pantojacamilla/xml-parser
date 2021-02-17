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

  static mostraNFCValida(xmlString) {

  }
}
/* eslint-disable import/extensions */
/* eslint-disable eol-last */
import Ato from './Ato.js';
import ProdutoImposto from './ProdutoImposto.js';

const listaDeAtos = [];
let produtoImposto;
const atos2016 = [];
const atos2017 = [];
// const atos2018 = [];
// const atos2019 = [];
// const atos2020 = [];

// 2016
produtoImposto = new ProdutoImposto(4.0670, 4.0670, 3.4430, 3.3490);
atos2016.push(new Ato('024', '2017-01-01', '2017-01-15', produtoImposto, 2016));

// 2017
// 001 (2017)
produtoImposto = new ProdutoImposto(4.0670, 4.0670, 3.4430, 3.3490);
atos2017.push(new Ato('001', '2017-01-16', '2017-01-31', produtoImposto, 2017));

// 002 (2017)
produtoImposto = new ProdutoImposto(4.1040, 4.1040, 3.5050, 3.4010);
atos2017.push(new Ato('002', '2017-02-01', '2017-02-15', produtoImposto, 2017));

// 003 (2017)
produtoImposto = new ProdutoImposto(4.1040, 4.1040, 3.5050, 3.4010);
atos2017.push(new Ato('003', '2017-02-16', '2017-02-28', produtoImposto, 2017));

// 004 (2017)
produtoImposto = new ProdutoImposto(4.1040, 4.1040, 3.5050, 3.4010);
atos2017.push(new Ato('004', '2017-03-01', '2017-03-15', produtoImposto, 2017));

// 005 (2017)
produtoImposto = new ProdutoImposto(4.1040, 4.1040, 3.5050, 3.4010);
atos2017.push(new Ato('005', '2017-03-16', '2017-03-31', produtoImposto, 2017));

// 006 (2017)
produtoImposto = new ProdutoImposto(4.0430, 4.0430, 3.4520, 3.3810);
atos2017.push(new Ato('006', '2017-04-01', '2017-04-15', produtoImposto, 2017));

// 007 (2017)
produtoImposto = new ProdutoImposto(4.0430, 4.0430, 3.4520, 3.3810);
atos2017.push(new Ato('007', '2017-04-16', '2017-04-30', produtoImposto, 2017));

// 008 (2017)
produtoImposto = new ProdutoImposto(4.0430, 4.0430, 3.4520, 3.3810);
atos2017.push(new Ato('008', '2017-05-01', '2017-05-15', produtoImposto, 2017));

// 009 (2017)
produtoImposto = new ProdutoImposto(4.0430, 4.0430, 3.4520, 3.3810);
atos2017.push(new Ato('009', '2017-05-16', '2017-05-31', produtoImposto, 2017));

// 010 (2017)
produtoImposto = new ProdutoImposto(4.0430, 4.0430, 3.4520, 3.3810);
atos2017.push(new Ato('010', '2017-06-01', '2017-06-15', produtoImposto, 2017));

// 011 (2017)
produtoImposto = new ProdutoImposto(4.0430, 4.0430, 3.4520, 3.3810);
atos2017.push(new Ato('011', '2017-06-16', '2017-06-30', produtoImposto, 2017));

// 012 (2017)
produtoImposto = new ProdutoImposto(4.0430, 4.0430, 3.4520, 3.3810);
atos2017.push(new Ato('012', '2017-07-01', '2017-07-15', produtoImposto, 2017));

// 013 (2017)
produtoImposto = new ProdutoImposto(3.8360, 3.8360, 3.2960, 3.2080);
atos2017.push(new Ato('013', '2017-07-16', '2017-07-31', produtoImposto, 2017));

// 014 (2017)
produtoImposto = new ProdutoImposto(3.8360, 3.8360, 3.2960, 3.2080);
atos2017.push(new Ato('014', '2017-08-01', '2017-08-15', produtoImposto, 2017));

// 015 (2017)
produtoImposto = new ProdutoImposto(3.8360, 3.8360, 3.2960, 3.2080);
atos2017.push(new Ato('015', '2017-08-16', '2017-08-31', produtoImposto, 2017));

// 016 (2017)
produtoImposto = new ProdutoImposto(3.8360, 3.8360, 3.2960, 3.2080);
atos2017.push(new Ato('016', '2017-09-01', '2017-09-15', produtoImposto, 2017));

// 017 (2017)
produtoImposto = new ProdutoImposto(3.9710, 3.9710, 3.3360, 3.2390);
atos2017.push(new Ato('017', '2017-09-16', '2017-09-30', produtoImposto, 2017));

// 018 (2017)
produtoImposto = new ProdutoImposto(3.9710, 3.9710, 3.3360, 3.2390);
atos2017.push(new Ato('018', '2017-10-01', '2017-10-15', produtoImposto, 2017));

// 019 (2017)
produtoImposto = new ProdutoImposto(3.9710, 3.9710, 3.3360, 3.2390);
atos2017.push(new Ato('019', '2017-10-16', '2017-10-31', produtoImposto, 2017));

// 020 (2017)
produtoImposto = new ProdutoImposto(3.9710, 3.9710, 3.3360, 3.2390);
atos2017.push(new Ato('020', '2017-11-01', '2017-11-15', produtoImposto, 2017));

// 021 (2017)
produtoImposto = new ProdutoImposto(3.9710, 3.9710, 3.3360, 3.2390);
atos2017.push(new Ato('021', '2017-11-16', '2017-11-30', produtoImposto, 2017));

// 022 (2017)
produtoImposto = new ProdutoImposto(3.9710, 3.9710, 3.3360, 3.2390);
atos2017.push(new Ato('022', '2017-12-01', '2017-12-15', produtoImposto, 2017));

// 023 (2017)
produtoImposto = new ProdutoImposto(3.9710, 3.9710, 3.3360, 3.2390);
atos2017.push(new Ato('023', '2017-12-16', '2017-12-31', produtoImposto, 2017));

// 024 (2017)
produtoImposto = new ProdutoImposto(3.9710, 3.9710, 3.3360, 3.2390);
atos2017.push(new Ato('024', '2018-01-01', '2018-01-15', produtoImposto, 2017));

listaDeAtos.push(atos2016, atos2017);

export default listaDeAtos;

// 2018
// 2019
// 2020
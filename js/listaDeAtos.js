/* eslint-disable import/extensions */
/* eslint-disable eol-last */
import Ato from './Ato.js';
import ProdutoImposto from './ProdutoImposto.js';

const listaDeAtos = [];
let produtoImposto;
const atos2015 = [];
const atos2016 = [];
const atos2017 = [];
const atos2018 = [];
const atos2019 = [];
const atos2020 = [];

// 2015
produtoImposto = new ProdutoImposto(3.8240, 3.8240, 3.2480, 3.2100);
atos2015.push(new Ato('025', '2016-01-01', '2016-01-15', produtoImposto, 2015));

// 2016
produtoImposto = new ProdutoImposto(3.8240, 3.8240, 3.2480, 3.2100);
atos2016.push(new Ato('001', '2016-01-16', '2016-01-31', produtoImposto, 2016));

produtoImposto = new ProdutoImposto(3.8240, 3.8240, 3.2480, 3.2100);
atos2016.push(new Ato('002', '2016-02-01', '2016-02-15', produtoImposto, 2016));

produtoImposto = new ProdutoImposto(3.8240, 3.8240, 3.2480, 3.2100);
atos2016.push(new Ato('003', '2016-02-16', '2016-02-29', produtoImposto, 2016));

produtoImposto = new ProdutoImposto(3.8240, 3.8240, 3.2480, 3.2100);
atos2016.push(new Ato('004', '2016-03-01', '2016-03-15', produtoImposto, 2016));

produtoImposto = new ProdutoImposto(3.8240, 3.8240, 3.2480, 3.2100);
atos2016.push(new Ato('005', '2016-03-16', '2016-03-31', produtoImposto, 2016));

produtoImposto = new ProdutoImposto(3.8240, 3.8240, 3.2480, 3.2100);
atos2016.push(new Ato('006', '2016-04-01', '2016-04-15', produtoImposto, 2016));

produtoImposto = new ProdutoImposto(3.8240, 3.8240, 3.2480, 3.2100);
atos2016.push(new Ato('007', '2016-04-16', '2016-04-30', produtoImposto, 2016));

produtoImposto = new ProdutoImposto(3.8240, 3.8240, 3.2480, 3.2100);
atos2016.push(new Ato('008', '2016-05-01', '2016-05-15', produtoImposto, 2016));

produtoImposto = new ProdutoImposto(3.8240, 3.8240, 3.2480, 3.2100);
atos2016.push(new Ato('009', '2016-05-16', '2016-05-31', produtoImposto, 2016));

produtoImposto = new ProdutoImposto(3.8240, 3.8240, 3.2480, 3.2100);
atos2016.push(new Ato('010', '2016-06-01', '2016-06-15', produtoImposto, 2016));

produtoImposto = new ProdutoImposto(3.9720, 3.9720, 3.3450, 3.2740);
atos2016.push(new Ato('011', '2016-06-16', '2016-06-30', produtoImposto, 2016));

produtoImposto = new ProdutoImposto(3.9720, 3.9720, 3.3450, 3.2740);
atos2016.push(new Ato('012', '2016-07-01', '2016-07-15', produtoImposto, 2016));

produtoImposto = new ProdutoImposto(3.9720, 3.9720, 3.3450, 3.2740);
atos2016.push(new Ato('013', '2016-07-16', '2016-07-31', produtoImposto, 2016));

produtoImposto = new ProdutoImposto(3.9720, 3.9720, 3.3450, 3.2740);
atos2016.push(new Ato('014', '2016-08-01', '2016-08-15', produtoImposto, 2016));

produtoImposto = new ProdutoImposto(3.9720, 3.9720, 3.3450, 3.2740);
atos2016.push(new Ato('015', '2016-08-16', '2016-08-31', produtoImposto, 2016));

produtoImposto = new ProdutoImposto(3.9720, 3.9720, 3.3450, 3.2740);
atos2016.push(new Ato('016', '2016-09-01', '2016-09-15', produtoImposto, 2016));

produtoImposto = new ProdutoImposto(3.9720, 3.9720, 3.3450, 3.2740);
atos2016.push(new Ato('017', '2016-09-16', '2016-09-30', produtoImposto, 2016));

produtoImposto = new ProdutoImposto(3.9720, 3.9720, 3.3450, 3.2740);
atos2016.push(new Ato('018', '2016-10-01', '2016-10-15', produtoImposto, 2016));

produtoImposto = new ProdutoImposto(3.9940, 3.9940, 3.3990, 3.2920);
atos2016.push(new Ato('019', '2016-10-16', '2016-10-31', produtoImposto, 2016));

produtoImposto = new ProdutoImposto(3.9940, 3.9940, 3.3990, 3.2920);
atos2016.push(new Ato('020', '2016-11-01', '2016-11-15', produtoImposto, 2016));

produtoImposto = new ProdutoImposto(3.9940, 3.9940, 3.3990, 3.2920);
atos2016.push(new Ato('021', '2016-11-16', '2016-11-30', produtoImposto, 2016));

produtoImposto = new ProdutoImposto(3.9940, 3.9940, 3.3990, 3.2920);
atos2016.push(new Ato('022', '2016-12-01', '2016-12-15', produtoImposto, 2016));

produtoImposto = new ProdutoImposto(3.9940, 3.9940, 3.3990, 3.2920);
atos2016.push(new Ato('023', '2016-12-16', '2016-12-31', produtoImposto, 2016));

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

// 2018
produtoImposto = new ProdutoImposto(3.9710, 3.9710, 3.3360, 3.2390);
atos2018.push(new Ato('001', '2018-01-16', '2018-01-31', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(3.9710, 3.9710, 3.3360, 3.2390);
atos2018.push(new Ato('002', '2018-02-01', '2018-02-15', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(3.9710, 3.9710, 3.3360, 3.2390);
atos2018.push(new Ato('003', '2018-02-16', '2018-02-28', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(3.9710, 3.9710, 3.3360, 3.2390);
atos2018.push(new Ato('004', '2018-03-01', '2018-03-15', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(3.9710, 3.9710, 3.3360, 3.2390);
atos2018.push(new Ato('005', '2018-03-16', '2018-03-31', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(3.9710, 3.9710, 3.3360, 3.2390);
atos2018.push(new Ato('006', '2018-04-01', '2018-04-15', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(3.9710, 3.9710, 3.3360, 3.2390);
atos2018.push(new Ato('007', '2018-04-16', '2018-04-30', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(3.9710, 3.9710, 3.3360, 3.2390);
atos2018.push(new Ato('008', '2018-05-01', '2018-05-15', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(3.9710, 3.9710, 3.3360, 3.2390);
atos2018.push(new Ato('009', '2018-05-16', '2018-05-31', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(3.9710, 3.9710, 3.3360, 3.2390);
atos2018.push(new Ato('010', '2018-06-01', '2018-06-15', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(3.9710, 3.9710, 3.3360, 3.2390);
atos2018.push(new Ato('011', '2018-06-16', '2018-06-30', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(3.9710, 3.9710, 3.3360, 3.2390);
atos2018.push(new Ato('012', '2018-07-01', '2018-07-15', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(3.9710, 3.9710, 3.3360, 3.2390);
atos2018.push(new Ato('013', '2018-07-16', '2018-07-31', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(3.9710, 3.9710, 3.3360, 3.2390);
atos2018.push(new Ato('014', '2018-08-01', '2018-08-15', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(4.5210, 4.5210, 3.6020, 3.6120);
atos2018.push(new Ato('015', '2018-08-16', '2018-08-31', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(4.5210, 4.5210, 3.6020, 3.6120);
atos2018.push(new Ato('016', '2018-09-01', '2018-09-15', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(4.5210, 4.5210, 3.6020, 3.6120);
atos2018.push(new Ato('017', '2018-09-16', '2018-09-30', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(4.5210, 4.5210, 3.6020, 3.6120);
atos2018.push(new Ato('018', '2018-10-01', '2018-10-15', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(4.5210, 4.5210, 3.6020, 3.6120);
atos2018.push(new Ato('019', '2018-10-16', '2018-10-31', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(4.5210, 4.5210, 3.6020, 3.6120);
atos2018.push(new Ato('020', '2018-11-01', '2018-11-15', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(4.5210, 4.5210, 3.6020, 3.6120);
atos2018.push(new Ato('021', '2018-11-16', '2018-11-30', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(4.5210, 4.5210, 3.6020, 3.6120);
atos2018.push(new Ato('022', '2018-12-01', '2018-12-15', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(4.5210, 4.5210, 3.6020, 3.6120);
atos2018.push(new Ato('023', '2018-12-16', '2018-12-31', produtoImposto, 2018));

produtoImposto = new ProdutoImposto(4.5210, 4.5210, 3.6020, 3.6120);
atos2018.push(new Ato('024', '2019-01-01', '2019-01-15', produtoImposto, 2018));

// 2019
produtoImposto = new ProdutoImposto(4.5210, 4.5210, 3.6020, 3.6120);
atos2019.push(new Ato('001', '2019-01-16', '2019-01-31', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.4910, 4.4910, 3.8370, 3.8130);
atos2019.push(new Ato('002', '2019-02-01', '2019-02-15', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.3610, 4.3610, 3.7960, 3.7970);
atos2019.push(new Ato('003', '2019-02-16', '2019-02-28', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.3610, 4.3610, 3.7960, 3.7970);
atos2019.push(new Ato('004', '2019-03-01', '2019-03-15', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.3450, 4.3450, 3.8340, 3.8070);
atos2019.push(new Ato('005', '2019-03-16', '2019-03-31', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.4130, 4.4130, 3.8710, 3.8550);
atos2019.push(new Ato('006', '2019-04-01', '2019-04-15', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.4130, 4.4130, 3.8710, 3.8550);
atos2019.push(new Ato('007', '2019-04-16', '2019-04-30', produtoImposto, 2019));

// produtoImposto = new ProdutoImposto(4.5430, 4.5430, 3.8930, 3.8710);
// atos2019.push(new Ato('008', '2019-05-01', '2019-05-15xxx', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.5430, 4.5430, 3.8930, 3.8710);
atos2019.push(new Ato('009', '2019-05-01', '2019-05-15', produtoImposto, 2019));

// produtoImposto = new ProdutoImposto(4.5430, 4.5430, 3.8930, 3.8710);
// atos2019.push(new Ato('010', '2019-05-16', '2019-05-31xxx', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.5430, 4.5430, 3.8930, 3.8710);
atos2019.push(new Ato('011', '2019-05-16', '2019-05-31', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.5430, 4.5430, 3.8930, 3.8710);
atos2019.push(new Ato('012', '2019-06-01', '2019-06-15', produtoImposto, 2019));

// produtoImposto = new ProdutoImposto(4.5430, 4.5430, 3.8930, 3.8710);
// atos2019.push(new Ato('013', '2019-06-16', '2019-06-xxxx', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.5430, 4.5430, 3.8930, 3.8710);
atos2019.push(new Ato('014', '2019-06-16', '2019-06-30', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.5430, 4.5430, 3.8930, 3.8710);
atos2019.push(new Ato('015', '2019-07-01', '2019-07-15', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.6480, 4.6480, 3.9500, 3.9330);
atos2019.push(new Ato('016', '2019-07-16', '2019-07-31', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.6480, 4.6480, 3.9500, 3.9330);
atos2019.push(new Ato('017', '2019-08-01', '2019-08-15', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.5250, 4.5250, 3.8620, 3.8870);
atos2019.push(new Ato('018', '2019-08-16', '2019-08-31', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.5250, 4.5250, 3.8620, 3.8870);
atos2019.push(new Ato('019', '2019-09-01', '2019-09-15', produtoImposto, 2019));

// produtoImposto = new ProdutoImposto(4.4920, 4.4920, 3.8340, 3.8570);
// atos2019.push(new Ato('020', '2019-09-16', '2019-09-xxxx', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.4920, 4.4920, 3.8340, 3.8570);
atos2019.push(new Ato('021', '2019-09-16', '2019-09-30', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.5090, 4.5090, 3.8620, 3.9290);
atos2019.push(new Ato('022', '2019-10-01', '2019-10-15', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.5090, 4.5090, 3.8620, 3.9290);
atos2019.push(new Ato('023', '2019-10-16', '2019-10-31', produtoImposto, 2019));

// produtoImposto = new ProdutoImposto(4.5090, 4.5090, 3.8620, 3.9290);
// atos2019.push(new Ato('024', '2019-11-01', '2019-10-xxxx', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.4920, 4.4920, 3.8340, 3.8570);
atos2019.push(new Ato('025', '2019-11-01', '2019-11-15', produtoImposto, 2019));

// produtoImposto = new ProdutoImposto(4.5680, 4.5680, 4.0170, 4.0880);
// atos2019.push(new Ato('026', '2019-11-16', '2019-11-xxxx', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.5680, 4.5680, 4.0170, 4.0880);
atos2019.push(new Ato('027', '2019-11-16', '2019-11-30', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.5680, 4.5680, 4.0170, 4.0880);
atos2019.push(new Ato('028', '2019-12-01', '2019-12-15', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.5680, 4.5680, 4.0170, 4.0880);
atos2019.push(new Ato('029', '2019-12-16', '2019-12-31', produtoImposto, 2019));

produtoImposto = new ProdutoImposto(4.5680, 4.5680, 4.0170, 4.0880);
atos2019.push(new Ato('030', '2020-01-01', '2020-01-15', produtoImposto, 2019));

// 2020
produtoImposto = new ProdutoImposto(4.5680, 4.5680, 4.0170, 4.0880);
atos2020.push(new Ato('002', '2020-01-16', '2020-01-31', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.5680, 4.5680, 4.0170, 4.0880);
atos2020.push(new Ato('004', '2020-02-01', '2020-02-15', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.5680, 4.5680, 4.0170, 4.0880);
atos2020.push(new Ato('006', '2020-02-16', '2020-02-29', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.5680, 4.5680, 4.0170, 4.0880);
atos2020.push(new Ato('007', '2020-03-01', '2020-03-15', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.5680, 4.5680, 4.0170, 4.0880);
atos2020.push(new Ato('008', '2020-03-16', '2020-03-31', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.5680, 4.5680, 4.0170, 4.0880);
atos2020.push(new Ato('009', '2020-04-01', '2020-04-15', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.5230, 4.5230, 3.8370, 3.8940);
atos2020.push(new Ato('011', '2020-04-16', '2020-04-30', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.2810, 4.2810, 3.7090, 3.7710);
atos2020.push(new Ato('013', '2020-05-01', '2020-05-15', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.0950, 4.0950, 3.5410, 3.6640);
atos2020.push(new Ato('014', '2020-05-16', '2020-05-31', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.0240, 4.0240, 3.4330, 3.5210);
atos2020.push(new Ato('016', '2020-06-01', '2020-06-15', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.0210, 4.0210, 3.3770, 3.4660);
atos2020.push(new Ato('018', '2020-06-16', '2020-06-30', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.0650, 4.0650, 3.3600, 3.4860);
atos2020.push(new Ato('021', '2020-07-01', '2020-07-15', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.1280, 4.1280, 3.3780, 3.5020);
atos2020.push(new Ato('022', '2020-07-16', '2020-07-31', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.2300, 4.2300, 3.5500, 3.6240);
atos2020.push(new Ato('024', '2020-08-01', '2020-08-15', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.2820, 4.2820, 3.5840, 3.6840);
atos2020.push(new Ato('025', '2020-08-16', '2020-08-31', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.3540, 4.3540, 3.6830, 3.7660);
atos2020.push(new Ato('026', '2020-09-01', '2020-09-15', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.3540, 4.3540, 3.6830, 3.7660);
atos2020.push(new Ato('027', '2020-09-16', '2020-09-30', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.3540, 4.3540, 3.6830, 3.7660);
atos2020.push(new Ato('029', '2020-10-01', '2020-10-15', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.3540, 4.3540, 3.6830, 3.7660);
atos2020.push(new Ato('030', '2020-10-16', '2020-10-31', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.3540, 4.3540, 3.6830, 3.7660);
atos2020.push(new Ato('032', '2020-11-01', '2020-11-15', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.4553, 5.0958, 3.6826, 3.7118);
atos2020.push(new Ato('033', '2020-11-16', '2020-11-30', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.5478, 5.8376, 3.7090, 3.7314);
atos2020.push(new Ato('034', '2020-12-01', '2020-12-15', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.5661, 6.5794, 3.7537, 3.7866);
atos2020.push(new Ato('035', '2020-12-16', '2020-12-31', produtoImposto, 2020));

produtoImposto = new ProdutoImposto(4.6273, 6.7890, 3.8233, 3.8513);
atos2020.push(new Ato('036', '2021-01-01', '2021-01-15', produtoImposto, 2020));

listaDeAtos.push(atos2015, atos2016, atos2017, atos2018, atos2019, atos2020);

export default listaDeAtos;
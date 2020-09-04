const opi = require('./modules/objetos/OperIgualdade.js');
const opr = require('./modules/objetos/OperRelacional.js');

var obj = new opi.OperIgualdade(10,9);

console.log(obj.igualdade());
console.log(obj.diferenca());

var objr = new opr.OperRelacional(10,10);

console.log(objr.maiorq());
console.log(objr.menorq());

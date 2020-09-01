const OperArit = require('./modules/objetos/OperArit.js');

var calculadora = new OperArit(10,5); // esquerda e direita do operador
// if (<condicao) { ... }
var x,y; x = true; y = false;
if(x){
console.log(calculadora.soma());
console.log(calculadora.subtracao());
}
if(y){
console.log(calculadora.multiplicacao());
console.log(calculadora.divisao());
console.log(calculadora.mod());
console.log(calculadora.potencia());
}





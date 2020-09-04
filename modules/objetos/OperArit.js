class OperArit{
    constructor(var1, var2){
        this.var1 = var1;
        this.var2 = var2;
    }
    soma(){
        return (this.var1 + this.var2); // operador de soma "+"
    }
    subtracao(){
        return (this.var1 - this.var2); // operador de subtração "-"
    }
    multiplicacao(){
        return (this.var1 * this.var2); //operador multiplicacao "*"
    }
    divisao(){
        return (this.var1 / this.var2); //operador de divisão "/"
    }
    mod(){
        return (this.var1 % this.var2); //operdador módulo "%", resto da divisão
    }
    potencia(){
        return (this.var1 ** this.var2); // operador de potenciação "**"
    }

}
module.exports = OperArit;

/*
const OperArit = require('./modules/objetos/OperArit.js');

var calculadora = new OperArit(10,5); // esquerda e direita do operador
console.log(calculadora.soma());
console.log(calculadora.subtracao());
console.log(calculadora.multiplicacao());
console.log(calculadora.divisao());
console.log(calculadora.mod());
console.log(calculadora.potencia());


*/

/* uso com condicional IF
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
*/
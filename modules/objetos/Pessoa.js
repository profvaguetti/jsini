class Pessoa {
    constructor(peso, altura) {
        this.peso = peso;
        this.altura = altura;
    }
    imc(){ // indice de massa corpórea
          let imc = this.peso / (this.altura * this.altura);
          return imc;
    }
}
module.exports = Pessoa;

/* Conteúdo do arquivo index.js para uso da Class Pessoa

const Pessoa = require('./modules/objetos/Pessoa.js');

const joao = new Pessoa(80, 1.75); // instanciando um objeto
console.log(joao.imc());

const pedro = new Pessoa();
pedro.peso = 100;
pedro.altura = 1.6;
console.log(pedro.imc());
*/
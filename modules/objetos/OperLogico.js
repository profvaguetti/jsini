// JSON Notação de Objetos JavaScript
const obj = {
    nome : "Leandro Vaguetti",
    idade : 0,

    setIdade : function(idade){
        this.idade = idade;
    },

    classifIdade : function(){
        if(this.idade >= 0 && this.idade < 13) return "criança";
        else if(this.idade >= 13 && this.idade < 19) return "jovem";
        else return "adulto";
    },
    classifAluno : function(){
        if((this.idade >= 0 && this.idade < 13) || (this.idade >= 13 && this.idade < 19))
        return "Aluno";
        else
        return "Não é um Aluno";
    },
    idadeCorreta : function(){
        if( !(this.idade < 0))
        return "Idade Correta !!!";
        else return "Idade Incorreta!!!";
    }


};
module.exports = obj;
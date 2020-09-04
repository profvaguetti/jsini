function OperRelacional(esquerda, direita){
    this.valoresquerda = esquerda;
    this.valordireita = direita;

    this.maiorq = maior; // necessário para tornar público
    this.menorq = menor;

    function maior(){
        if(this.valoresquerda > this.valordireita)
        {
            return "Valor da Esquerda é MAIOR";
        }else {
            return "Valor da Esquerda NÃO é Maior";
        }
    }
    function menor(){
        if(this.valoresquerda < this.valordireita)
        {
            return "Valor da Esquerda é MENOR";
        }else {
            return "Valor da Esquerda NÃO é MENOR";
        }
    }
    /*  
       >= maior ou igual
       <= menor ou igual
    */
}
module.exports = {OperRelacional};
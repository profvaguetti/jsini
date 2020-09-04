function OperIgualdade(esquerda, direita){
    this.valoresquerda = esquerda;
    this.valordireita = direita;

    this.igualdade = igual; // necessário para tornar público
    this.diferenca = diferente;

    function igual(){
        if(this.valoresquerda == this.valordireita){  // ==
            return "Valores Iguais";
        } else {
            return "Valores NÃO são Iguais";  
        }
    }
    function diferente(){
        if(this.valoresquerda != this.valordireita) // !=
        {
             return "Valores Diferentes"; 
        } else {
             return "Valores NÃO são Diferentes";
        }
    }
    /*
     === para comparar igualdade de valor e tipo
     !== para comparar diferença de valor e tipo
    */
}
module.exports = {OperIgualdade}
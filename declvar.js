//exports.acao = () =>
 function acao()
 {
    
    var x = 6;
    console.log(x);

    const y = "a";  // definição de variável const
    // y = "b";
    console.log(y);
    // VARIAVEL GLOBAIS E LOCAIS
    {   // bloco de códigos
       let z = 4;
       console.log(x);
       console.log(y);
       console.log(z);  
    }

//console.log(z);

}
 module.exports = {acao}
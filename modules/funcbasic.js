function modulo()
{
/*
function <nome da função> ( parametros)
{

}
*/

/*function somar()
{
    var x,y; x = 10; y = 10;
    var soma = x + y;
    console.log(soma);
}*/

const somar = function (x,y){
    var soma = x + y;
    return soma;
}

var z = somar(4,6);
console.log(z);

}
module.exports = {modulo}
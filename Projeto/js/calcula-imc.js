var peso = 100;
var altura = 1.90;

var ehDifDeZero = (altura !=0); // se a altura for 0, é atribuido false à variável

if(ehDifDeZero){
    var imc = peso / (altura * altura);
    console.log(imc);
} else{
    console.log("Não executei porque a altura eh igual a zero");
}
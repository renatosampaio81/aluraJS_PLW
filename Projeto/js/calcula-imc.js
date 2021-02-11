var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var ehDifDeZero = (altura !=0); // se a altura for 0, é atribuido false à variável

if(ehDifDeZero){
    var imc = peso / (altura * altura);
    var tdImc = document.getElementById("imc-2");
    tdImc.textContent = imc;
    console.log(imc);
} else{
    console.log("Não executei porque a altura eh igual a zero");
}
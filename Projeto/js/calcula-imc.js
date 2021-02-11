var tdPeso = document.getElementById("peso-1");
var tdAltura = document.getElementById("altura-1");

var peso1 = tdPeso.textContent;
var altura1 = tdAltura.textContent;
var paciente1 = {peso:peso1, altura:altura1};


var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");

var peso2 = tdPeso.textContent;
var altura2 = tdAltura.textContent;
var paciente2 = {peso:peso2, altura:altura2};


var pacientes = [paciente1, paciente2];

var posAtual = 0;
while(posAtual <= pacientes.length - 1){ // o array é de tamanho 2, mas a última posição é a posição 1. Enquanto a posAtual for menor ou igual a 1, ele executa o código, pegando os 2 objetos do array
    var paciente = pacientes[posAtual];
    
    var ehDifDeZero = (altura !=0); // se a altura for 0, é atribuido false à variável
    if(ehDifDeZero){
        var imc = paciente.peso / (paciente.altura * paciente.altura);
        
        //var tdImc = document.getElementById("imc-2");
        //tdImc.textContent = imc;
        console.log(imc);
    } else{
        console.log("Não executei porque a altura eh igual a zero");
    }
    posAtual++;
}


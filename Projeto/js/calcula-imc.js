/*
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
*/

var trsPacientes = document.getElementsByClassName("paciente"); // Array de trs da classe paciente

var posAtual = 0;
while(posAtual <= trsPacientes.length - 1){ // o array é de tamanho 2, mas a última posição é a posição 1. Enquanto a posAtual for menor ou igual a 1, ele executa o código, pegando os 2 objetos do array
    var pacienteTr = trsPacientes[posAtual]; // vai pegando cada um dos pacientes contidos em cada TR

    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0]; // dentro de cada paciente, pega a informação contida na classe info-name
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0]; // se trata de um array de um único objeto, não tem dois pesos dentro de um paciente, mas por se tratar de getElementsByClassName é necessário especificar
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
    
    var paciente = {nome:tdNome.textContent, peso:tdPeso.textContent, altura:tdAltura.textContent}; // criei o objeto paciente que contem as características que puxei via getElementsByClassName
    
    var ehDifDeZero = (altura !=0); // se a altura for 0, é atribuido false à variável
    if(ehDifDeZero){
        var imc = paciente.peso / (paciente.altura * paciente.altura);      
        
        var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
        tdImc.textContent = imc;
        console.log(imc);
    } else{
        console.log("Não executei porque a altura eh igual a zero");
    }
    posAtual++;
}


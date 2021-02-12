function calculaIMC(paciente){ //a funcao recebe um argumento chamado paciente
    var ehDifDeZero = (altura !=0); // se a altura for 0, é atribuido false à variável
    if(ehDifDeZero){
        var imc = paciente.peso / (paciente.altura * paciente.altura); 
        return imc;     
        
    } else{
        console.log("Não executei porque a altura eh igual a zero");
    }
}

var trsPacientes = document.getElementsByClassName("paciente"); // Array de trs da classe paciente
 
for(var posAtual = 0; posAtual <= trsPacientes.length -1; posAtual++) { // o array é de tamanho 2, mas a última posição é a posição 1. Enquanto a posAtual for menor ou igual a 1, ele executa o código, pegando os 2 objetos do array
    var pacienteTr = trsPacientes[posAtual]; // vai pegando cada um dos pacientes contidos em cada TR

    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0]; // dentro de cada paciente, pega a informação contida na classe info-name
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0]; // se trata de um array de um único objeto, não tem dois pesos dentro de um paciente, mas por se tratar de getElementsByClassName é necessário especificar
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
    
    var paciente = {nome:tdNome.textContent, peso:tdPeso.textContent, altura:tdAltura.textContent}; // criei o objeto paciente que contem as características que puxei via getElementsByClassName
    
    var imc = calculaIMC(paciente); //chama a função passando cada um dos pacientes como parametro. Como eu preciso do valor do imc aqui fora, eu faço essa chamada dentro de uma var, pra receber o return 

    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
    tdImc.textContent = imc;
    console.log(imc);
}


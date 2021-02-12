/* Vai percorrer o array pacientes, criado pois é usado em várias partes do código */

function percorreArray(trsPacientes, comportamento){ //como não tenho o trsPacientes aqui, vaao precisar passar ao chamar a função
    for(var posAtual = 0; posAtual <= trsPacientes.length -1; posAtual++) { // o array é de tamanho 2, mas a última posição é a posição 1. Enquanto a posAtual for menor ou igual a 1, ele executa o código, pegando os 2 objetos do array
        var pacienteTrAtual = trsPacientes[posAtual];

        comportamento(pacienteTrAtual) //comportamento é a rotina, é o que vai ser executado dentro desse percorreArray. como estamos chamando a imprimeNome, e ela pede o pacienteTr do momento dentro do loop, na chamada do comportamento passamos essa posição pra função imprimeNome
    }    
}
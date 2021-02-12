function calculaTodosImcs(){ //coloquei dentro de uma função para que nao execute automaticamente ao carregar a apagina

    var trsPacientes = document.getElementsByClassName("paciente"); // Array de trs da classe paciente

    percorreArray(trsPacientes, function(pacienteTr){ // to chamando a função percorreArray, lá de percorre.js, passando como parametro o trsPacientes e criando uma função anonima
        var tdNome = pacienteTr.getElementsByClassName("info-nome")[0]; // dentro de cada paciente, pega a informação contida na classe info-name
        var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0]; // se trata de um array de um único objeto, não tem dois pesos dentro de um paciente, mas por se tratar de getElementsByClassName é necessário especificar
        var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
        
        var pacienteAtual = {nome:tdNome.textContent, // criei o objeto paciente que contem as características que puxei via getElementsByClassName
            peso:tdPeso.textContent,
            altura:tdAltura.textContent,
            pegaImc:function(){
                //function calculaIMC(){ //deixei de receber paciente pra usar o this, como essa funcao é uma propriedade de pacienteAtual, vai dar certo. Alem disso trouze ela pra ca pra dentro do objeto
                    var ehDifDeZero = (altura !=0); // se a altura for 0, é atribuido false à variável
                    if(ehDifDeZero){
                        var imc = this.peso / (this.altura * this.altura); 
                        return imc;     
                        
                    } else{
                        console.log("Não executei porque a altura eh igual a zero");
                    }
                //}    
            }}//pegaImc é uma propriedade do objeto paciente, que recebe a funcão calculaIMC sem (), pq nao quero o resultado dela.. não quero executar
        //var imc = pacienteAtual.pegaImc(pacienteAtual); //chama a função passando cada um dos pacientes como parametro.  
        //ao inves de eu passar o pacienteAtual como parametro, eu não vou passar nada e utilizar o this
        var imc = pacienteAtual.pegaImc(); // Como eu preciso do valor do imc aqui fora, eu faço essa chamada dentro de uma var, pra receber o return

        var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
        tdImc.textContent = imc;
        console.log(imc);       
        
    });
}

var botao = document.getElementById("calcula-imcs");
//botao.onclick = calculaTodosImcs; // quando o botao for clicado, o js vai chamar a função de calcular os imc's. Onclick tem um problema, só pode receber uma ação...
botao.addEventListener("click", calculaTodosImcs); // igual o onclick porém melhor, pode ser incluída mais de uma ação. No exemplo em questão o primeiro campo é o evento que voce quer do botao (click) e o segundo é a ação (rodar uma função)
botao.addEventListener("click",function(){
    console.log ('estou atribuindo duas ações a um mesmo botão');
})
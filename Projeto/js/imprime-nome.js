var trsPacientes = document.getElementsByClassName("paciente"); // Array de trs da classe paciente

percorreArray(trsPacientes, function (pacienteTr){ // como essa função depende o pacienteTr, eu vou precisar receber ela na chamada da função
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
            }};
    console.log(pacienteAtual.nome)
});


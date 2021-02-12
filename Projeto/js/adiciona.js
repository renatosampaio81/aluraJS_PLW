// ADICIONA PACIENTE
var botao = document.querySelector("#adicionar-paciente") // o # significa que estou buscando um id, se nao colocar ele vai achar que estou buscando uma tag

botao.addEventListener("click", function(){

    window.event.preventDefault(); // impede que o botão faça o seu comportamento padrão de dar "submit", que no caso atualizaria a página e perderíamos a inclusão do paciente

    var pacienteNovo =  "<tr class='paciente' >"+
                        "<td class='info-nome'>João</td>"+
                        "<td class='info-peso'>80</td>"+
                        "<td class='info-altura'>1.72</td>"+
                        "<td class='info-gordura'>40</td>"+
                        "<td class='info-imc'>0</td>"+
                        "</tr>";
    
    //var tabela = document.getElementsByTagName("tbody")[0];
    var tabela = document.querySelector("tbody"); //o querySelector pega o primeiro elemento que ele acha, já o getElementsByTagName retorna um array. Mas se eu usar querySelectorAll ele retornará um array
    //tabela.textContent = tabela.textContent + pacienteNovo; //pega a lista de pacientes atuais e adiciona o ultimo inserido //não vai funcionar pq o textContent é só pra texto, e estamos usando uma tabela
    tabela.innerHTML = tabela.innerHTML + pacienteNovo;
})

var pacientes = document.querySelectorAll(".paciente"); //monta um array pegando as classes paciente

var tabela = document.querySelector("tbody");

tabela.addEventListener("dblclick", function(event){
	event.target.parentNode.classList.add("fadeOut");
	setTimeout(function(){
	event.target.parentNode.remove();
	},500);
});
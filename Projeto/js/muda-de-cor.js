// FAZ AS LINHAS MUDAREM DE COR AO PASSAR COM O MOUSE POR CIMA

var trs = document.getElementsByTagName("tr");
percorreArray(trs, function(tr){ // vai chamar o percorreArray lá do percorre, passando todos os trs e uma função anonima (que lá será comportamento)
    tr.addEventListener("mouseover", function(){
        this.setAttribute("bgcolor", "grey"); //this é o tr da chamada, quando eu passar o mouse por cima do tr ele vai mudar a cor do background pra cinza
    })
})
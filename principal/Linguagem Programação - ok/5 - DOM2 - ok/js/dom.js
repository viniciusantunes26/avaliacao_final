//var p = window.document.getElementsByTagName('p')[1]
//window.alert(p.innerText)

//var p = window.document.getElementsByClassName('p1')[0]
//window.document.write(p.innerHTML)
//window.alert(p.innerText)

//var p = window.document.querySelectorAll('p#p1')[0]
//window.document.write(p.innerText)

var box = window.document.getElementById("click")

//javascript busca o evento no html
box.addEventListener( "mouseenter", entrar)
box.addEventListener( "mouseout", sair)
box.addEventListener( "click", clicar)


function entrar(){
    box.style.background="blue"
}

function sair(){
    box.style.background="green"
    box.innerText="Clique em mim!"
}

function clicar(){
   box.style.background="red"
   box.innerText="Clicou!"
}


// Comentário de JavaScript para uma linha apenas

/* Comentário de JavaScript 
   para várias linhas */

// window.alert("Olá Mundo!!!") // gera um alerta na tela
// window.confirm("Você deseja prosseguir?") //gera um alerta na tela e pede confirmação
// window.prompt("Digite seu nome:") //permite que o usuário digite algo em uma caixa de texto

/* operadores em JavaScript soma (+), subtração (-), divisão (/), multiplicação (*)
   exponenciação (**), resto de divisão (div) (%), incrementação (+=); pós-incrementação (var++)
   pré-incremento (++var) - essas operações também funcionam com a subtração */

/* Condicionais:
    igualdade (==)
    diferente (!=)
    maior (>)
    menor (<)
    idêntico (===),
    diferente tipo de dado (!==)
*/

/* Operadores lógicos em JavaScript

    Inversão valor boleano (!) - Not
    "E" lógico  (&&)
    "OU" lógico (||)

    Exemplo de validação condicional:

    n1 > n2 ? "n1 e maior que n2" : "n2 e maior que n1"
    "(?) Se n1 > n2 (: -> então") 
*/

  // var nome = window.prompt("Digite seu nome")
  // o window.prompt sempre armazena variável do tipo texto

  //var idade = window.prompt("Digite sua idade")

  // window.alert("Bem-vindo " + nome +"!" + " Você tem " + idade + "anos.")

 //var n1 = window.prompt("Digite um número")
 //var n2 = window.prompt("Digite outro número")
 //var resultado = n1 + n2
 //window.alert("O resultado da soma é " + resultado)

 // mudar texto para numero inteiro
 
 //var n1 = window.prompt("Digite um número")
 //var n2 = window.prompt("Digite outro número")
 //var resultado = Number.parseInt(n1) + Number.parseInt(n2)
 //window.alert("O resultado da soma é " + resultado)


 // outra forma de fazer a conversão

 //var n1 = Number.parseInt(window.prompt("Digite um número"))
 // var n2 = Number.parseInt(window.prompt("Digite outro número"))
 //var resultado = n1 + n2
 //window.alert("O resultado da soma é " + resultado)
 
 // conversão para numero Real

 //var n1 = Number.parseFloat(window.prompt("Digite um número"))
 //var n2 = Number.parseFloat(window.prompt("Digite outro número"))
 //var resultado = n1 + n2
 //window.alert("O resultado da soma é " + resultado)

 // Colocando apenas Numero o JavaScript interpreta sozinho o tipo de dado

 // Numero virar string -> string (var)

 //var n1 = Number(window.prompt("Digite um número"))
 //var n2 = Number(window.prompt("Digite outro número"))
 //var resultado = n1 + n2
 //window.alert("O resultado da soma é " + resultado)

 var idade = Number.parseInt(window.prompt("Digite sua idade:"))

/*if (idade != Number){
    window.alert(idade)
    var idade = Number.parseInt(window.prompt("Digite sua idade:"))
 }*/
 
 while (idade < 18) {
    window.alert("Acesso negado!")
    var idade = Number.parseInt(window.prompt("Digite sua idade:"))
 }

 var n1 = Number(prompt("Digite um número"))
 var n2 = Number(prompt("Digite outro número"))
 var resultado = n1 + n2
 window.alert("O resultado da soma é " && [resultado])

 var n3 = Number(prompt("Digite um número"))

if(n3 % 2 == 0) {
    window.alert("Esse número é par")} else {
    window.alert("Esse número é ímpar")
}


   




  
var data = new Date()
var hora = data.getHours()
var dia = data.getDay()

console.log("-------------------------------")

console.log(data)

console.log("-------------------------------")

if (hora > 18){
    console.log(" Boa noite!")
} else if (hora > 12 && hora <= 18) {
    console.log(" Boa tarde!")
} else {
    console.log(" Bom dia!")
}

switch(dia){
    case 0: 
    console.log(" Hoje e domingo")
    break

    case 1: 
    console.log(" Hoje e segunda=feira")
    break

    case 2: 
    console.log(" Hoje e terca-feira")
    break

    case 3: 
    console.log(" Hoje e quarta-feira")
    break

    case 4: 
    console.log(" Hoje e quinta-feira")
    break

    case 5: 
    console.log(" Hoje e sexta-feira")
    break

    case 6: 
    console.log(" Hoje e sabado")
    break
}
console.log("-------------------------------")

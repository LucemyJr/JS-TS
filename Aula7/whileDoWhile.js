// let controle = 0

// while(controle <= 10){
//     console.log(controle)
//     controle++
// }

// Exemplo real de como usar o While

function random(min, max){
    const r = Math.random() * (max - min) + min
    return Math.floor(r) //Trás um numero inteiro
}

const min = 1
const max = 50

let rand = random(min,max)

while(rand !== 10) {
    rand = random(min,max)
    console.log(rand)
}

// Normalmente é mais usado quando não se sabe quantas vezes a repetição vai ocorrer

// Exemplo real de como usar o DoWhile

console.log("Agora DoWhile")


do{
    rand = random(min,max)
    console.log(rand)
}while(rand !==10)
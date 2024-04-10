// Fazer um FizzBuzz

// Meu Codigo

const fizzBuzz = (x) => {
    const divide3 = x % 3 === 0
    const divide5 = x % 5 === 0

    if(typeof x !== 'number'){
        console.log(x)
    }else if(divide3 === true && divide5 === false){
        console.log("Fizz")
    }else if(divide3 === false && divide5 === true){
        console.log("Buzz")
    }else if(divide3 === true && divide5 === true){
        console.log("FizzBuzz")
    }else{
        console.log(x)
    }
}

fizzBuzz(30)

// Codigo do Professor

function fizzBuzzProfessor(numero){
    if(typeof numero !== 'number') return numero
    if(numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz"
    if(numero % 3 === 0) return "Fizz"
    if(numero % 5 === 0) return "Buzz"
    return numero
}

console.log('a', fizzBuzzProfessor('a'))
for(let i = 0; i < 100; i++){
    console.log(i, fizzBuzzProfessor(i))
}

// Função que receba dois numeros e retorne o maior deles

// Meu Código

function maiorNumero(a, b){
    if(a > b){
        console.log(a)
    }else{
        console.log(b)
    }
}

maiorNumero(12,23)

// Código do Professor

const max = (x, y) => x > y ? x : y
console.log(max(19,29))
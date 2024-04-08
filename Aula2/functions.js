// Ex 1

function saudacao(nome) {  // funções executam ações
    console.log(`Bom dia ${nome}`)  // ao passar o parametro nome no inicio da function, ao ser chamada, ela pode ser receber um valor atraves das ${}

    // ao colocar return no final da funcion ela vai retornar o que voce colocar como retorno, por exemplo "return nome", isso vai retornar o parametro que for passado
    return nome
}

const variavel = saudacao("Luiz")

console.log(variavel)

// Ex 2

function soma(x,y){
    const resultado = x + y
    return resultado
}

console.log(soma(2,6))

// Ex 3

const raiz = function(n) {  // function anonima, 
    return n ** 0.5  // raiz quadrada do numero 
};

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))

// Ex 4

const raiz2 = (n) => { // arrow function, metodo mais moderno de criar funcoes
    return n ** 0.5  // 
}
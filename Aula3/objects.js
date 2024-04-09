const pessoa1 = { // objeto pessoa1 criado
    nome: 'Luiz',
    sobrenome: 'Henrique',
    idade: 25,

    fala() { // isso é um metodo
        console.log(`${this.nome} ${this.sobrenome} esta falando oi...`) // Usando o this, pode ser referenciado qualquer atributo do objeto dentro do metodo
    }
}

pessoa1.fala()

function criaPessoa (nome, sobrenome, idade){ // function que cria um objeto
    return {
        nome, sobrenome, idade
    }
}

const pessoa2 = criaPessoa('Lucemy', 'Ferreira', 21) // tendo a function que cria o objeto, basta criar uma variavel com os parametros

// const estados = new Array('Pernambuco','Rio de Janeiro','Alagoas') <-- construtor de um array, outro metodo de se criar um array

const nomes = ['Maria','Eduardo', 'Joana'] // Array literal, forma mais comum de se criar um array

nomes[2] = 'Leonardo' // modifica o indice que for infomado

nomes[3] = 'Luiz' // nesse caso, se o indice nao existir, ele é criado com o valor que for passado pra ele

console.log(nomes)

console.log(nomes.length) // o ".length" diz a quantidade de elementos dentro do array

nomes.push('Marcos') // o ".push" adiciona um elemento sempre no final do array
nomes.unshift('Caio') // o ".unshift" adiciona um elemento sempre no começo do array

nomes.pop() // o ".pop" remove o ultimo elemento
nomes.shift() // o ".shift" remove o primeiro elemento


// delete nomes[2] // deleta o valor do indice retornando um elemento vazio dentro do array

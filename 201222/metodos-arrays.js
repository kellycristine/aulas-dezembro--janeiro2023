//sempre vai percorrer todo o array -> sai do indice 0 e vai ate a ultima posicção da lista

let listaFrutas = [ 'Banana', 'Maçã', 'Uva']

// find -> encontra um determinado valor dentro da lista e nos retorna uma copia desse valor
const resposta1 = listaFrutas.find(function(valor, indice, lista) {
    return valor === 'Maçã'
})

// arrow function ------> (value: string, index: number, obj: string[])
const resposta = listaFrutas.find( (valor, indice, lista) => valor === 'Maçã') 
    console.log(`VALOR: ${valor}, INDICE: ${indice}, LISTA: ${lista}`)


// findIndex -> percorre a lista de elementos e retorna o INDICE do primeiro elemento que atende a condição de busca

// encontrou ? sim -> retorna o indice em que o elemento se encontra na lista
// nao -> retorna -1 ---> quando nao encontra 

const indeceEncontrado = listaFrutas.findIndex( (valor, indice, lista) => valor === 'Uva') 

console.log(indeceEncontrado)

//some => retorna verdadeiro se o elemento buscado existir na lista
// retorna falso se o elemento buscado não existir na lista
// se ao menos 1 dado da lista atender a condição , retorna true
const existe = listaFrutas.some( (valor, indice, lista) => valor === 'Banana')

console.log(existe)


// todos 
//every -> retorna True se todos os elementos da lista atenderem a condição passada
// retorna false se ao menos 1 nao atender

let listaNumeros = [0, 20, 35,40]
const existe2 = listaFrutas.every( (valor, indice, lista) => valor === 'Banana')
console.log(existe2)
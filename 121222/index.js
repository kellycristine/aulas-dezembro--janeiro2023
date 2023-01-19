let nome = 'Edson'
console.log(nome)
nome = 'Dionei'
console.log(nome)

// 'texto' -> String
// 4 -> numero inteiro -> Number
// 4.5 -> numero quebrado -> Number
// true ou false -> Boolean

// Array -> tipo de dado para 
//           armazenar mais de um valor ao mesmo tempo

// Lista de mercado
// - Arroz
// - Feijao
// - Massa
// - Molho
// - Pasta de dente
// - Sabao

let produto1 = 'Arroz'
let produto2 = 'Feijao'
let produto3 = 'Massa'
let produto4 = 'Molho'

// () => funcao
// [] => array

let nomes = ['Édson', 'Carla', 'Aryadne', 'Pedro', 'Dionei']

let listaMercado = ['Arroz', 'Feijao', 'Massa', 'Molho', 'Pasta de Dente', 'Sabonete']
console.log(listaMercado)

listaMercado.push('Fermento', 'Frango')
listaMercado.unshift('Carne moída')


// unshift(): insere um ou mais elementos no inicio da lista
// push(): insere um ou mais elementos no final da lista
// pop(): remove o último elemento da lista
// shift(): remove o primeiro elemento da lista
// lenght: pega o tamanho do array(lista)

console.log(listaMercado)

listaMercado.pop()
listaMercado.shift()

console.log(listaMercado)


// indice => sempre do 0 até o tamanho da lista -1
console.log(listaMercado[4].toUpperCase())

console.log(listaMercado.length)
// 0 ... 6
// 0 <= 7 = true
// 1 <= 7 = true
// 2 <= 7 = true
// ..
// 6 <= 7 = true
// 7 <= 7 = true
// document.write('<h3> Primeiro > Último </h3>')
// for(let contador = 0; contador < listaMercado.length; contador++){
//     document.write(`<p>Item: ${listaMercado[contador]}</p>`)
// }

// 0 .. 6
// 6 >= 0 = true
// 5 >= 0 = true
// ....
// 1 >= 0 = true
// 0 >= 0 = true
// -1 >= 0 = false

// document.write('<h3> Último > Primeiro </h3>')
// for(let contador = listaMercado.length-1; contador >= 0; contador--){
//     document.write(`<p>Item: ${listaMercado[contador]}</p>`)
// }


// itemDaLista == 'Molho'

function somar(num1, num2){
    return num1+num2
}

somar(4, 5)

const indiceEncontrado = listaMercado.findIndex(function (itemMercado){
    return itemMercado == 'Massa'
})

const itemEncontrado = listaMercado.find(function (itemMercado){
    if(itemMercado == 'Massa'){
        return true
    }
    return false;
})


console.log(itemEncontrado)
console.log(indiceEncontrado)










// const indiceEncontrado = listaMercado.findIndex(function (itemMercado){
//     return itemMercado == 'Fermento'
// })

// console.log(indiceEncontrado)


// function encontraIndice(lista, item){
//     for(let i = 0; i < lista.length; i++){
//         if(lista[i] == item){
//             return i;
//         }  
//     }

//     return -1;
// }

// const indice = encontraIndice(listaMercado, 'Carne')

// console.log(indice)












// let numerosPrimos = [2, 3, 5, 6, 11, 13, 17, 19]

// console.log(numerosPrimos)
// console.log(numerosPrimos[7])
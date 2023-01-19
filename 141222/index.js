const numero = 2;

const restoDivisao = numero % 2;

if(restoDivisao === 0) {
    alert(`Este número é par!`)
}


/* forma direta  de resolver
if(numero % 2 === 0) {
    alert(`Este número é par!`)
}
*/
const numero = 2;

const restoDivisao = numero % 2;

if(restoDivisao !== 0) {
    alert(`Este número é impar!`)
} else {
    alert(`Este número é par`)
}


for(let contador = 2; contador <= 12; contador++){
    document.write(`${contador}`)
}

//contagem do 78 ao 5, de 3 em 3

let contagem = 78;

while(contagem >= 5){
    console.log(contagem)
    contagem -=3
}

//contagem 1 ao 58 de 2 em 2
let numerais = 1

while(numerais <= 58) {
    console.log(numerais)
    numerais += 2
}


//variavel contendo 5 frutas
let listaFrutas = ['maca','banana', 'uva', 'morango','laranja']
    console.log('listaFrutas[2]')
//outras formas
let listaFrutas = ['maca','banana', 'uva', 'morango','laranja']
    console.log(`fruta: ${listaFrutas[2]}`)

let listaFrutas = ['maca','banana', 'uva', 'morango','laranja']
for(let indice = 0; indice < listaFrutas.length; indice++){
    console.log(`fruta: ${listaFrutas[indice]}`)
}
let listaFrutas = ['maca','banana', 'uva', 'morango','laranja']
let indice = 0
    while(indice < listaFrutas.length){
        console.log(`fruta: ${listaFrutas[indice]}`)
        indice++
}
// aqui sabemos a quantidade de itens na lista 4 , pois começamos com o 0.
for(let contador = listaFrutas.length-1; contador >= 0; contador--){
    console.log(`Fruta: ${listaFrutas[contador]}`)
}

let listaFrutas = ['maca','banana', 'uva', 'morango','laranja','bergamota']

for(let contador = 0;contador < listaFrutas.length ;contador++){
    if(listaFrutas[contador]=== 'uva'){
        console.log(`Frutas: ${listaFrutas[contador]}`)
    }
}
let listaFrutas = ['maca','banana', 'uva', 'morango','laranja','bergamota']

for(let contador = 0;contador < listaFrutas.length ;contador++){
    if(listaFrutas[contador]=== 'uva'|| listaFrutas[contador]=== 'bergamota'){
        console.log(`Frutas: ${listaFrutas[contador]}`)
    }
}

acrescentar itens na lista 

function acrescentarArrays(){
    let listaNomes = [] // array vazia
    let nome //escopo global

    do {
        nome = prompt('Digite um nome ou zero para parar a execução')
        
        listaNomes.push(nome)

    } while (nome !== '0')

    document.write(`${listaNomes}`)
}


//String, number, boolean, any -> tipos primitivos

let lista = [] 
let contador = 1
//while ou do while - quando nao sabemos quanras vezes vai repetir um determinado trecho de codigo
for(let contador = 1; contador <= 5; contador++) {
    const idade = Number(prompt("Cadastre sua idade"))
    lista.push(idade)
}

while(contador <= 5) {
    const idade = Number(prompt("Cadastre sua idade"))
    lista.push(idade)
    contador ++
}

do{
    const idade = Number(prompt("Cadastre sua idade"))
    lista.push(idade)
    contador ++
} while(contador <= 5)

//chave de um array/lista é o indice em que o dado se encontra
//tamanho => .length
//lista.length acessa o tamanho total da lista, ou seja quantidade total de dados armazenados

for(let indice = 0; indice < lista.length; indice++) {

    console.log(lista[indice])

    if(lista[indice > 30]) {
        console.log(`${lista[indice]} é maior que 30`)
    }
}


/*
adicionar ou remover dados de uma lista

adicionar - ao inicio da lista ou ao final da lista

.unshift() => adiciona um novo valor ao inicio da lista
lista.unshift(78)

.push() =>adiciona um novo valor ao final da lista
lista.push(100)

remover dados de uma lista - ou do incio ou do final

shift() => remove dado contido na posição [0] da lista
lista.shift()

.pop() => remove dado contido na ultima posição da lista
lista.pop() */

//cadastrar quantas idades do usuario quiser
while(confirma) {
    const idade = Number(prompt("cadastre uma idade: "))

    //adicionar na lista
    lista.push(idade)
    confirma = confirm("Deseja cadastrar mais uma idade? ")
}

let lista = []
let confirma = true

do {
    const idade = Number(prompt("cadastre uma idade: "))
    lista.push(idade)
    confirma = confirm("Deseja cadastrar mais uma idade? ")
} while(confirma)

for(const valor of lista) { // especifico para listas
    console.log(valor)

    if(valor > 30) {
        console.log(`${valor} é maior que 30`)
    }
}

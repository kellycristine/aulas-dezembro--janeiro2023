/*3. Desenvolva um algoritmo que preenche um vetor com os 4
primeiros números perfeitos. */

function exercicio3() {
    let numeroPerfeito = []

    for(let contador = 1; numeroPerfeito.length < 4; contador++) {
        let retorno = verificaPerfeito(contador)

        if(retorno === true) {
            numeroPerfeito.push(contador)
            console.log(`FOR - ${contador}`)
        }
    }
   console.log(numeroPerfeito)

    }


function verificaPerfeito(numero){
    let soma = 0

    for(let contador = 1; contador < numero; contador++) {
        if(numero % contador === 0) {
            soma += contador
        }
    }
    if(soma === numero){
        return true
    } else {
        return false
    }
}



/*6. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
e que exiba a lista desses nomes na tela. Após exibir essa lista, o
programa deve mostrar também os nomes na ordem inversa em
que o usuário os digitou.

Ex:
Entrada: Édson, Marcelo, Letícia, Ju, Thobias
Saída: Thobias, Ju, Letícia, Marcelo, Édson
*/
/*ana
function exercicio6() {
    let lista = []

    for(let contador = 1; contador <= 5; contador++) {
        let nome = prompt("Digite um nome: ")

        lista.push(nome)
    }
    console.log(lista)
} */

function exercicio6() {
    let listaNomes = []
    let listaNomesInversos = []

    for(let contador = 1; contador <= 5; contador++) {
        const nome = prompt(`Cadastre um nome`)

        listaNomes.push(nome)
        listaNomesInversos.unshift(nome)
    }

    console.log(listaNomes);
    console.log(listaNomesInversos);

}

function exercicio6() {
    let listaNomes = []
    let listaNomesInversos = []

    for(let contador = 1; contador <= 5; contador--) {
        const nome = prompt(`Cadastre um nome`)

        listaNomes.push(nome)
        listaNomesInversos.unshift(nome)
    }

    console.log(listaNomes);
    console.log(listaNomesInversos);

}
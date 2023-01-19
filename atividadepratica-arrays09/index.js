/*5. Crie uma função que recebe um vetor de inteiros e um número
inteiro e retorne verdadeiro se o número faz parte do vetor ou falso
se não faz parte.
*/
function exercicio5() {
    let vetor = [4, 3, 2, 1, 7, 8, 9];
    let valor = Number(prompt("Numero: "));
    let retorno = verificarVetor(vetor, valor);// vetor = listaNumeros / valor=numero - aqui vai ser true ou false

    if(retorno) {
        console.log(`O numero exite`); // se for true vai aaprecer esta resposta
    } else {
        console.log(`O numero exite`); // se for false vai aparecer esta resposta
    }
}
function verificarVetor(listaNumeros , numero) { // listaNumeros=vetor/ numeros=valor
    for(let indice = 0; indice < listaNumeros.length; indice++) {
        if(listaNumeros[indice] === numero){
            return true
        }
    }
    return false
}


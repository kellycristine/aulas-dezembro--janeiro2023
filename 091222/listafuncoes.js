/*
1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
uma letra. Se a letra for A a função deve calcular a média aritmética,
se for P, a média ponderada (peso: 5, 3 e 2).
*/

function exercicio1() {
    let nota1 = prompt("Digite a nota 1: ")
    nota1 = verificaInputNumerico(nota1)


    let nota2 = prompt("Digite a nota 2: ")
    nota2 = verificaInputNumerico(nota2)


    let nota3 = prompt("Digite nota 3: ")
    nota3 = verificaInputNumerico(nota3)

    let tipoMedia = prompt("Digite o tipo da média a ser calculada: ('A' -> aritmetica, 'P' -> ponderada)")

    let media = calculaMedia(nota1, nota2, nota3, tipoMedia.toUpperCase())
    // .toUpperCase() -> transforma qualquer string em MAIUSCULA

    document.write(`A média é ${media.toFixed(2)}`)
}

function verificaInputNumerico(valor) {
    if(valor === null) {
        alert("Operacao cancelou")
        return 0
    }

    valor = Number(valor.replace('.', '').replace(',', '.'))

    if(!valor) {
        alert("Valor inválido")
        return 0
    }

    return valor
}

function calculaMedia(primeiraNota, segundaNota, terceiraNota, tipo) {

    switch(tipo) {
        case 'A':
            let mediaAritmetica = (primeiraNota + segundaNota + terceiraNota) / 3
            return mediaAritmetica

        case 'P':
            let mediaPonderada = ((primeiraNota * 5) + (segundaNota * 3) + (terceiraNota * 2)) / 10
            return mediaPonderada

        default: 
            alert("Tipo de média inválida")
        break
    }
}


function exercicio2() {
    let numero = prompt("Digite um numero: ")

    numero = verificaInputNumerico(numero)

    let impar = verificaImpar(numero)

    if(impar) {
        document.write(`É impar!`)
    } else {
        document.write(`É par!`)
    }
}

function verificaImpar(numero) {
    if(numero % 2 !== 0) {
        return true
    } else {
        return false
    }
}
/*
2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
for ímpar ou falso se for par.*/


/*3-
Crie uma função que recebe por parâmetro um valor inteiro e
positivo e retorne verdadeiro se o número for primo ou falso se não
for.
*/
function exercicio3() {
    let numero = prompt("Digite um número") 
    numero = verificaInteiroPositivo(numero)

    if(numero === 0) {
        alert("Operação cancelada por inconsistencia nos dados informados")
        return
    }

    // verificar se o numero informado é primo
    const primo = verificaPrimo(numero) // void => vazio => sem retorno

    if(primo) {
        document.write(`O numero ${numero} é primo!`)
    } else {
        document.write(`O numero ${numero} não é primo!`)
    }

}

function verificaInteiroPositivo(numeroString) {
    console.log(numeroString)
    const numeroInteiro = parseInt(numeroString) // float -> decimais  int -> parte inteira
    // 'abc' ou '' -> NaN -> false

    // verificando se foi digitado um valor válido !== '' ou 'abc' ou clique no cancelar
    if(!numeroInteiro) {
        alert("Valor inválido")
        return 0
    }

    // verificar se é positivo
    if(numeroInteiro <= 0) {
        alert("Precisar ser inteiro e positivo.")
        return 0
    }


    return numeroInteiro
}

function verificaPrimo(valor) {

    // 9 
    // 1 é divisor de todo e qualquer numero
    // o proprio valor é divisor dele mesmo 
    // só pode ser divisivel por 1 e por ele mesmo -> ter 2 divisores


    // 2, 3, 4, 5, 6, 7, 8
    if(valor === 0 || valor === 1) {
        return false
    }

    if(valor === 2) {
        return true
    }

    let divisores = 2;

    for(let contador = 2; contador < valor; contador++) {

        if(valor % contador === 0) {
            divisores++
        }
        
    }

    if(divisores > 2) {
        return false
    } 


    return true

}
/*4. Crie uma função que recebe por parâmetro o tempo de duração de
uma fábrica expressa em segundos e retorna esse tempo em horas,
minutos e segundos.

Ex:
Entrada: 3672
Saída: 1:1:12 */

/*5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
é um valor perfeito ou falso se não for. Um valor é dito perfeito
quando ele é igual a soma dos seus divisores excetuando ele
próprio.
*/

//numero perfeito é a soma de seus divisores, seja igual o resultado. 

function exercicio5() {
    let numero = prompt(`Digite um número: `);

    numero = verifarInteiro(numero)

    let soma = 0;

    for(let contador = 1; contador < numero; contador++) {
        if(numero % contador === 0) {
            soma += contador
        }
    }
    if(soma === numero) {
        document.write(``)
    }
}
/*6. Crie uma função chamada acessoAoSite() que não tenha
parâmetro. Esta função será chamada ao abrir a página e mostrará
um alerta informando “Bem vindo ao site”.*/


/*7. Crie uma função chamada mostrarMensagem() que não tenha
parâmetro. Esta função será chamada ao abrir a página e mostrará
uma mensagem no console.log() informando “Acesso à aplicação
NomeAplicação” e um alerta informando “Bem vindo à aplicação
NomeApliação”. Sendo que o nome da aplicação deve ser salvo em
uma variável para mostrar nas mensagens.*/

/*
8. Crie uma função chamada mostrarDobro(num), que recebe um
parâmetro sendo um número inteiro. Esta função será chamada ao
abrir a página e mostrará um alerta com o resultado. Exemplo: “O
dobro do número 5 é 10.”*/

/*
9. Crie uma função chamada calcularMedia(nota1, nota2, nota3,
nome), que recebe 4 parâmetros sendo três inteiros e um texto
(String). Esta função será chamada ao abrir a página e mostrará um
alerta com a média. Exemplo: “João, sua média é 70.” A função
também deve mostrar no console.log() as notas recebidas. Exemplo
“Nota 1: 60,Nota 2: 70,Nota 3: 80”.*/
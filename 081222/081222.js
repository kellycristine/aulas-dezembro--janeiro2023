// argumento - soma (15 , 10) - sao os dados passados para as funçoes no momento da chamada da função


// parâmetro - são dados que serão recebidos na definição da função
function soma(num1 , num2){
    return num1 + num2
}
soma(15 , 10) // 15 argumento ->num1 parametro --- 10 argumento ->num2 parametro
soma(20 , 30)

// retorno - resposta da função/rotina após realizar os comandos necessários
 

//exemplo 2 sem retorn
function boasVindas(){
    document.write(`Bem vindo ao site`)
}


// não possui retorno e nao possui parametro
function soma(num1 , num2){
    document.write(`${num1 + num2}`)
}


let numero = 10; // variável global 

// possui retorno e nao possui parametro
function verificarPar(){
    //escopo local
    if(numero % 2 === 0) {

        let teste = 'Teste'

        if(true) {
            console.log(teste)
        }
        return true
    } else {
        return false
    }
}


// possui parametro e possuem retorno
function calcular(nume1 , nume2 , operacao) {
    return nume1 + nume2 
}

let algumaCoisa = prompt(`Informe alguma coisa: `)
let soma = calcular(15 , 10)



//toda vez que o return executar a função para sua execução


exercicio 9
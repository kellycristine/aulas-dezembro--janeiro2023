/* 1. Desenvolva um algoritmo que faça o cálculo do índice de massa
corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
que digite sua altura, em seguida solicitar que digite seu peso e que
lhe exiba o status. O status vai variar da seguinte forma:
a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
“Você está abaixo da faixa de peso ideal”;
b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
“Você está acima da faixa de peso ideal”;
c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
24,99, o status a ser mostrado será “Você está dentro da faixa
de peso ideal”.  */

function exercicio1() {
    const altura = Number(prompt(`Digite sua altura: `))
    if(!altura) {
        alert(`Você precisa informar a altura para continuar, tente novamente!`)
        return
    }

    const peso = Number(prompt(`Digite seu peso: `))
    if(!peso) {
        alert(`Você precisa informar seu peso para continuar, tente novamente!`)
        return
    }

    const imc = peso / (altura * altura);

    if(imc < 18.5) {
        document.write(`Você está abaixo da faixa de peso ideal`)
    } else if(imc > 24.99) {
        document.write(`Você está acima da faixa de peso ideal`)
    } else {
        document.write(`Você está dentro da faixa de peso ideal`)
    }


}

//let peso = prompt(`Digite seu peso: `)
// null , undefined, '', 0 , false --> false --> number(false) --> 0
// quando clicar no cancelqar - null
// primeiro verifico se ele digitou alguma coisa -> se ele nao clicou no cancelar 

// nao digitar nada e clicar no ok --> '' vazio
//if(peso !== null){
    // aqui garante que não clicou no "cancelar"
   // peso = Number(peso)
   // if(!peso){

        // aqui executa se não digitou nada ou digitou blablabla ---> abc ---> NaN -> 0
    //    document.write(`Peso inválido`)
   // } else {
        //aqui tenho uma dado válido
   //     let altura = prompt(`Digite sua altura: `)

    //    if(altura !== null) {

    //    } else {
            // aqui executase clicou no cancelar
    //        document.write(`Você precisa informar a altura.`)
     //   }
//    }
//} else {
    // aqui executa se clicou no 'cancelar'.
//    document.write(`Você precisa informar o peso.`)
//}


/*2. Escreva um algoritmo que solicite 2 números e uma operação
matemática. O algoritmo deve realizar o cálculo com os 2 números
digitados conforme a operação informada. */

function exercicio2(nume1 , nume2 , operacao) {
    return nume1 + nume2 
}

let numero1 = prompt(`Digite o primeiro número: `);
let numero2 = prompt(`Digite o segundo número: `);
let operador = prompt(`Digite o operador `)

switch(operador){
    case '+' : 
    soma = numero1 + numero2
    document.write(`O total da soma é ${soma}`)
    break;
    case '-' : 
    subtracao = numero1 - numero2
    document.write(`O total da soma é ${subtracao}`)
    break;
    divisao = numero1 / numero2
    document.write(``)
    case '*' : 
    multiplicacao = numero1 * numero2
    document.write(`O total da soma é ${multiplicacao}`)
    break;

    default:
        document.write(`Operador inválido`);
}


/*3. Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
a conta do usuário deve ser criada já com um saldo positivo. O
usuário precisa informar a quantidade de dinheiro que deseja
retirar, esse valor deve ser um número positivo, múltiplo de 5 e
menor do que o saldo. Cada saque eletrônico cobra uma taxa de
R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
certo com o saque, e se o usuário informar um valor maior que o

saldo deve ser informado ao usuário que o mesmo não tem dinheiro
suficiente em conta para realizar o saque.
OBS: Na verificação se o valor do saque é maior que o saldo deve
ser considerado e também contabilizado o valor da taxa a ser
cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
da taxa do saque não pode ser maior que o saldo disponível.
*/

let saldo = 10000
const taxa = 4.50
let saque = Number(prompt(`Insira o valor de retirada:`))

if(saque > 0) {
    // só se for positivo
    
if ((saque + taxa) > saldo){
    // não tem saldo suficiente
    document.write(`Não possui saldo suficiente`)
} else {
    if(saque % 5 == 0) {
        let saqueTotal = saque + taxa
        saldo -= saqueTotal
        // saldo = saldo - saqueTotal
    } else {
        document.write(`O caixa possui apenas notas de R$:5,00`)
    }
    
}
} else {
    // é negativo
    document.write(`Valor do saque deve ser um número positivo`)
}



/* 4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
e verifique quais números são múltiplos de 3 e quais são múltiplos
de 5.
*/

function exercicio4() {
    document.write(`<h2>Multiplos de 3</h2>`)
    for(let contador = 1; contador <= 250; contador++) {

        if(contador % 3 === 0) {
            document.write(`[${contador}], `)
        }
    }

    document.write(`<h2>Multiplos de 5</h2>`)
    for(let contador = 1; contador <= 250; contador++) {

        if(contador % 5 === 0){
            document.write(`[${contador}], `)
        }
    }
}

/*5. Faça um algoritmo que leia a idade e peso de um atleta e imprima
a sua categoria, de acordo com a seguinte tabela:

Idade Peso Categoria
Até 12 anos - Infantil
13 a 16 anos Até 40kg Juvenil leve
Acima de 40kg Juvenil pesado
17 a 24 anos Até 45kg Sênior leve
Acima de 45kg até 60kg Sênior médio
Acima de 60kg Sênior pesado
Acima de 24 anos - Veterano

*/
/*
let idade = Number(prompt(`Digite a idade:`))
let peso = Number(prompt(`Digite o peso:`))

if(idade <= 12) {
    document.write(`Categoria infantil`)

} else if(idade > 12) {    
} else {
    document.write(`Juvenil Pesado`)
}*/
let idade = Number(prompt('Digite a idade: '))
 let peso = Number(prompt('Digite o peso: '))

 if(idade <= 12) {
     document.write(`Categoria infantil`)

 } else if(idade > 12 && idade <= 16) {
    // entre 13 e 16 anos

    if(peso <= 40) {
     document.write(`Juvenil leve`)
    } else {
     document.write(`Juvenil pesado`)
    }

 } else if(idade > 16 && idade <= 24) {
   // entre 17 e 24 anos

   if(peso <= 45) {
     //Sênior leve
     document.write(`Sênior leve`)
   } else if(peso > 45 && peso <= 60) {
     //Sênior medio
     document.write(`Sênior médio`)
   } else {
     //Sênior pesado
     document.write(`Sênior pesado`)
   }

 } else {
   document.write(`Categoria veterano`)
 }


/*6. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
Construa um algoritmo que calcule e imprima quantos anos serão
necessários para que:
a. Lucas e Pedro tenham o mesmo tamanho;
b. Lucas seja maior que Pedro.
*/
let pedro = 150; // 1.50m -> 150cm
let lucas = 110;

let ano = 0;

while(pedro >= lucas) {
    pedro += 2;
    lucas += 3;

    ano++

    // console.log(`PEDRO: ${pedro}`);
    // console.log(`LUCAS: ${lucas}`);
    // console.log(`Quantidade ano: ${ano}`)

    if(pedro === lucas) {
        console.log(`Passados ${ano} anos o Lucas atingiu a altura do Pedro`)
    }

    if(lucas > pedro) {
        console.log(`Passados ${ano} anos o Lucas ficou maior que o Pedro`)
    }

}


/*7. Escreva um programa que pergunte a velocidade de um carro. Caso
ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
km acima da velocidade permitida.
*/

let velocidade = Number(prompt(`Qual sua velocidade: `));
if(velocidade > 80) {
    document.write(`Você foi multado`)
}

/*8. Escreva um algoritmo que faça a tabuada de um número e
apresente o resultado de acordo com o modelo a seguir, sabendo
que o multiplicando deverá ser fornecido pelo usuário (n) e a
quantidade de iterações também (i).
1 * 2 = 2
2 * 2 = 4
3 * 2 = 6
...*/

function exercicio8() {
    let n = Number(prompt(`informe o multiplicando: `))
    let i = Number(prompt(`informe a quantidade de interações: `))

}

/*9. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
programa deverá calcular e mostrar:
a. A menor altura do grupo;
b. A maior altura do grupo;
*/
function exercicio9() {
    let maior = 0;
    let menor = 999; 

    for(let contador = 1; contador <=15; contador++) {
        const altura = Number(prompt(`Informe a ${contador}ª altura: `))

        if(!altura || altura < 0) {
            alert(`Valor inválido, Executa novamente`)
            return
        }


        if(altura > maior) {
            maior = altura
        }

        if(altura < menor) {
            menor = altura
        }
    }
    document.write(`<p>A maior altura inofrma é ${maior.toFixed(2)}</p>`)
    document.write(`<p>A menor altura inofrma é ${menor.toFixed(2)}</p>`)
}

/* 10. Faça um programa usando a estrutura “for” que leia um número
inteiro positivo e mostre na tela uma contagem de 0 até o valor
digitado:
Ex: Digite um valor: 9
Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!
*/
function exercicio10() {
    
}


/*11. Desenvolva um algoritmo que mostre uma contagem regressiva de
30 até 1, marcando os números que forem primos, exatamente
como mostrado abaixo:
30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...

*/
function exercicio11() {
    for(let contador = 30; contador >=1; contador --) {

        const primo = verificarPrimo(contador)
        
        if(primo) {
            document.write(`[${contador}], `)
        }else {
            document.write(`${contador}, `)
        } 
    }
}

function verificarPrimo(numero) {
    // primo so pode ter 2 divisores - 1 e ele mesmo
    let divisores = 2; // começamos pois todo numero é dividido por 1 e por ele mesmo 
    for(let contador = 2; contador < numero; contador++) {
        // ex: 7  vai repetir do 2 ate o 6 
        if(numero % contador ===0) {
            divisores++
        }

    }
    if(divisores > 2){
        return false
    } else {
        return true
    }

}

/*
12. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
média aritmética dos valores lidos, a quantidade de valores

positivos, a quantidade de valores negativos e o percentual de
valores negativos e positivos.
*/
function exercicio12() {
    let soma = 0;

    for(let contador = 1; contador <= 10; contador++) {
        let numeroLido = Number(prompt(`Digite ${contador}º número: `))
        if(!numeroLido) {
            alert("Digite um número válido, tente novamente!")
            return
        }
        soma = soma + numeroLido; 

        if(numeroLido) {
            negativos++
        }else {
            positivos++
        }
    }

    let media = soma / 10;
    let percentualPositivo = (positivo * 100) / 10;
    let percentualNegativo = (negativo * 100) /10;

    document.write(`<p>A media dos números lidos é ${media.toFixed(2)}</p>`)
    document.write(`<p>A quantidade de números positivos é ${positivo}, equivalente é ${percentualPositivo}%</p>`)
    document.write(`<p>A quantidade de números negativos é ${negativo}, equivalente é ${percentualNegativo}%</p>`)
}

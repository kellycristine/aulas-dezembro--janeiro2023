/*Lista 3
1. Desenvolva um algoritmo que faça o cálculo do índice de massa
corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
que digite sua altura, em seguida solicitar que digite seu peso e que
lhe exiba o status. O status vai variar da seguinte forma:
a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
“Você está abaixo da faixa de peso ideal”;
b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
“Você está acima da faixa de peso ideal”;
c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
24,99, o status a ser mostrado será “Você está dentro da faixa
de peso ideal”.*/

let peso = Number(prompt(`Digite seu peso`))
let altura = Number(prompt(`Digite sua altura`))
let imc = peso / (altura * altura)

if(imc < 18.5) {
    document.write(`Você está abaixo da faixa de peso ideal`)
} else if(imc > 24.99) {
    document.write(`Você está acima da faixa de peso ideal`)
} else {
    document.write(`Você está dentro da faixa de peso ideal`)
}



let peso1 = Number(prompt(`Digite seu peso`))
let altura1 = Number(prompt(`Digite sua altura`))
let imc1 = peso1 / (altura1 * altura1)

if(imc1 < 18.5) {
    document.write(`${imc1.toFixed(2)}Você está abaixo da faixa de peso ideal`)
} else if(imc1 > 24.99) {
    document.write(`${imc1.toFixed(2)}Você está acima da faixa de peso ideal`)
} else {
    document.write(`${imc1.toFixed(2)}Você está dentro da faixa de peso ideal`)
}

/*2. Escreva um algoritmo que solicite 2 números e uma operação
matemática. O algoritmo deve realizar o cálculo com os 2 números
digitados conforme a operação informada.*/

let numero1 = Number(prompt(`Digite o 1º numero`))
let numero2 = Number(prompt(`Digite o 2º numero`))
let operacao = prompt(`Escolha uma operação +-*/`)

switch(operacao) {
    case '+':
        document.write(numero1 + numero2)
    break;
    case '-':
        document.write(numero1 - numero2)
    break;
    case '*':
        document.write(numero1 * numero2)
    break;
    case '/':
        document.write(numero1 / numero2)
    break;
    default:
        document.write(`dado digitado inválido`)  
    break;  
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

let saldo = 1000;
let valorSaque = Number(prompt(`Digitar o valor do saque`))
let resto = valorSaque % 5; // pra validar se tem notas disponiveis 
let taxaTotal = valorSaque + 4.50;

if(valorSaque > 0 && resto == 0){
    if(taxaTotal <= saldo){
        saldo = saldo - taxaTotal;
        document.write(`Seu saldo é R$${saldo}`)
    } else {
        document.write(`Não há saldo suficiente na conta`)
    }
} else {
    document.write(`Você precisa informar um valor positivo e multiplo de 5`)
}

/*4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
e verifique quais números são múltiplos de 3 e quais são múltiplos
de 5.*/

//for
for(let contador = 1; contador <= 250; contador++){
    if(contador % 3 === 0){
        document.write(`${contador} è multiplo de 3 <br>`)
    }
    if(contador % 5 === 0){
        document.write(`${contador} É multiplo de 5<br>`)
    }
}

//while
let numero = 1;
while(numero <= 250){
    if(numero % 3 === 0) {
        document.write(`${numero} é multiplo de 3`)
    }
    if(numero % 5 === 0){
        document.write(`${numero}é multiplo de 5`)
    }
    numero++
}

//do while
let numer = 1;

do{
    if(numer % 3 === 0) {
        document.write(`${numer} é multiplo de 3`)
    }
    if(numer % 5 === 0){
        document.write(`${numer}é multiplo de 5`)
    }
    numer++
} while(numer <= 250)



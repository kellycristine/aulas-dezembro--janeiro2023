/*
10. Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).*/

// pode votar?

    //opcional ou obrigatório?
    // qualquer (idade < 18) && (idade > 16) = 16 até 17 - opcional
    // 16 até 17 - opcional

    // 18 até 65 - obrigatório 

    // maior que 65 - opcional

    // não

let anoNascimento = 1988;
let anoAtual = 2022;
let idade = anoAtual - anoNascimento ;

if(idade >= 16) {
    //SIM, pode votar
    if(idade>= 18 && idade <= 65) {
        console.log(`Já pode votar`);
        console,log(`Voto obrigatorio`);
    } else {
        console.log(`Já pode votar`);
        console,log(`Voto opcional`);
    }

} else {
    console.log(`A idade é ${idade}, Não pode votar.Menor de idade`)
}







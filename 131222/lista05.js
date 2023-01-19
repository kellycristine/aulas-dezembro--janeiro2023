/* 1- Faça um algoritmo que leia a idade de vários alunos de uma turma.
O programa vai parar quando for digitada a idade 999. No final,
mostre quantos alunos existem na turma e qual é a média de idade
do grupo. */


function exercicio1 () {
    let alunos = 0;
    let soma = 0;
    let idade = 0;

    while(idade !== 999) {

        soma += idade;
        
        idade = Number(prompt('Digite a sua idade: '));

        if(!idade) {
            alert('Valor inválido')
            return
        }

        if(idade === 999) {
            
            let media = soma / alunos;
            document.write(`<p>A média de idade do grupo é ${media} anos</p>`);
            document.write(`<p>A quantidade de alunos é de ${alunos}</p>`)
            return
        }

        alunos++;
    }

}

/* 2- Desenvolva um aplicativo que leia o salário e o sexo de vários
funcionários. No final, mostre o total de salários pagos aos homens e
o total pago às mulheres. O programa vai perguntar ao usuário se
ele quer continuar ou não sempre que ler os dados de um
funcionário. */

function exercicio2 () {
    let salarioTotalM = 0;
    let salarioTotalF = 0;
    let confirma;

    do {
        let salario = prompt('Informe o salário do funcionário: ');
        salario = verificaDecimalPositivo(salario)

        let sexo = prompt('Informe o sexo do funcionário (M -> Masculino; F -> Feminino): ');

        if(sexo.toUpperCase() === 'M') {
            salarioTotalM += salario
        }

        if(sexo.toUpperCase() === 'F') {
            salarioTotalF += salario
        }

        confirma = confirm('Deseja continuar cadastrando?')
        
    } while(confirma)

    document.write(`<p>Total pago aos homens é de R$${salarioTotalM.toFixed(2)}</p>`);
    document.write(`<p>Total pago as mulheres é de R$${salarioTotalF.toFixed(2)}</p>`);



}

function verificaDecimalPositivo(numero) {
    numero = parseFloat(numero)

    if(!numero) {
        alert('Valor inválido')
        return 0
    }


    if(numero <= 0) {
        alert('Precisa ser postivo')
        return 0
    } 

    return numero
}


/* 3- Crie um algoritmo que leia o valor inicial da contagem, o valor final e
o incremento, mostrando em seguida todos os valores no intervalo:
Ex:
Digite o primeiro Valor: 3
Digite o último Valor: 10
Digite o incremento: 2
Contagem: 3 5 7 9 Acabou! */

function exercicio3() {
    let inicial = prompt('Informe o valor inicial da contagem: ');
    inicial = verificaInputNumerico(inicial);

    let final = prompt('Informe o valor final da contagem: ');
    final = verificaInputNumerico(final);

    let incremento = prompt('Informe o incremento: ');
    incremento = verificaInputNumerico(incremento);

    for(let contador = inicial; contador < final; contador += incremento) {
        
        document.write(` ${contador}, `)
    }
        document.write(' Acabou!');
        document.write(`<p>Primeiro valor: ${inicial}</p>`);
        document.write(`<p>Último valor: ${final}</p>`);
        document.write(`<p>Incremento: ${incremento}</p>`);
}


function verificaInputNumerico(valor) {
    
    if(valor === null) {
        alert('Operação cancelada')
        return 0
    }

    valor = Number(valor.replace('.','').replace(',','.'));

    if(!valor) {
        alert('Valor inválido')
        return 0
    }

    return valor
}


/* 4- Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
descontos para todos, mas especialmente para mulheres. Faça um
programa que leia nome, sexo e o valor das compras do cliente e
calcule o preço com desconto. Sabendo que:
a. Homens ganham 5% de desconto
b. Mulheres ganham 13% de desconto */

function exercicio4() {
    let nome = prompt('Insira o seu nome: ');
    if(!nome) {
        alert('Nome inválido')
        return
    }

    let sexo = prompt('Informe seu sexo (M -> Masculino; F -> Feminino): ');

    let valor = prompt('Informe o valor total da sua compra: ');
    valor = verificaInputNumerico(valor);

    switch (sexo.toUpperCase()) {
        case 'M':
            resultado = valor * (5 / 100)
            break;

        case 'F':
            resultado = valor * (13 / 100)
            break;
    
        default:
            alert('Sexo inválido')
            break;
    }

    document.write(`${nome}, o valor da sua compra foi de R$${resultado}`)
}

/* 5- Faça um algoritmo que pergunte a distância que um passageiro
deseja percorrer em Km. Calcule o preço da passagem, cobrando
R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
longas. */

function exercicio5() {

    let distancia = prompt('Informe a distância em Km que deseja percorrer: ');
    distancia = verificaInputNumerico(distancia);

    if(distancia <= 200) {
        valor = distancia * 0.50
        document.write(`O valor da passagem é de R$${valor}`)
    } else {
        valor = distancia * 0.45
        document.write(`O valor da passagem é de R$${valor}`)
    }
    
    
}

/* 6- Faça um programa que leia a largura e o comprimento de um
terreno retangular, calculando e mostrando a sua área em m2. O
programa também deve mostrar a classificação desse terreno, de
acordo com a lista abaixo:
Abaixo de 100m2 = TERRENO POPULAR
Entre 100m2 e 500m2 = TERRENO MASTER
Acima de 500m2 = TERRENO VIP */

function exercicio6() {
    let largura = prompt('Insira a largura do terreno retangular: ');
    largura = verificaInputNumerico(largura);

    let comprimento = prompt('Insira o comprimento do terreno: ');
    comprimento = verificaInputNumerico(comprimento);

    let area = comprimento * largura;

    document.write(`A área do terreno é de ${area} metros quadrados`);

    if(area < 100) {
        document.write('<p>TERRENO POPULAR</p>');
    } else if (area > 500) {
        document.write('<p>TERRENO VIP</p>');
    } else {
        document.write('TERRENO MASTER')
    }
}
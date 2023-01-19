 
let eleitores = 1000;
let nulo = 10;
let brancos = 30;
let validos = 200;


let percentualNulos =  nulo * 100 / eleitores // numero de votos dividido pelo numero de eleitores
let percentualBrancos = brancos * 100 / eleitores
let percentualValidos = validos * 100 / eleitores


let resultado = nulos + brancos + validos;
let resultado1 = (nulo + brancos) - eleitores;

console.log(`Total de eleitores do Municipio ${resultado}`);
console.log(`Numero de eleitores que votaram Nulo ${nulos}`);
console.log(`numero de eleitores que votaram em Branco ${brancos}`);

console.log(`Porcentagem de votos nulos${percentualNulos}`);
console.log(`Porcentagem de votos em Branco ${percentualBrancos}`);
console.log(`Percentual de votos validos ${percentualValidos}`)


/*
leticia fez 

let totalEleitores = 150;
let votosBranco = 40;
let votosNulos = 30;

let votosValidos = totalEleitores - (votosBrancos + votosNulos);
let percentualBrancos = (votosBranco * 100) / totalEleitores;
let percentualNulos = (votosNulos * 100) / totalEleitores;
let percentualValidos = 100 - (percentualBrancos + percentualNulos);

let percentualBrancos =
*/

/*3. O custo de um carro novo ao consumidor é a soma do custo de
fábrica com a porcentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). Supondo que o percentual do
distribuidor seja de 28% e os impostos de 45%, escrever um
algoritmo para ler o custo de fábrica de um carro,calcular e escrever
o custo final ao consumidor. */

//etapa 1
let custoFabrica = 5000.00;
let percentualDistribuidor = 28;
let percentualImposto = 45;

//etapa 2
let totalImpostos = percentualDistribuidor + percentualImposto;

let acrescimos = (custoFabrica * totalImpostos) / 100;

let custoFinal = custoFabrica + acrescimos;

//etapa 3
console.log(`Total Fábrica: R$${custoFabrica.toFixed(2)}`);
console.log(`Total de acréscimos: R$${acrescimos.toFixed(2)}`);
console.log(`Valor total de um carro novo para o consumidor é de R$${custoFinal.toFixed}`);


//DADOS - INPUT




//MANIPULAÇÃO DE DADOS - ARITMETICA, COMPARAÇÃO, ATRIBUIÇÃO....



//INFORMAÇÕES - SAÍDA DE INFORMAÇÃO

const idade = 18;
console.log ('frase de exemplo' + idade) // concatenação de string utilizando o operador +

// template string - UTILIZANDO DA CRASE PARA A CONSTRUÇÃO DE FRASE CONCATENADAS COM VARIAVEIS
console.log(`A minha idade é ${idade}`)

// WINDOW  -> VEM DA JANELA EXTERNA

window.alert('Frase de exemplo'); //congela a guia que esta sendo executada no navegador - posso usar alert sem o window
console.log('Executou aqui');

//DOCUMENT HTML
let idade = 18
document.write(`Minha idade é ${idade}`) 
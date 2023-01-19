/* // DADOS - entrada
deixe numero = 30;
deixe percentual = 50;
// manipulação de dados - aritmetica, comparação, atribuição...
let resultado = ( numero * percentual ) / 100;
// informacao - SAIDA DA INFORMACAO
console.log(`${percentual}% de ${numero} é ${resultado}`);
*/



/*
// etapa 1
Desenvolva um algoritmo para ler o número total de ouvintes de um município,
o número de votos brancos,
número de votos nulos e
número de votos válidos.
// etapa 2
Calcule o percentual que cada um representa em relação ao total de compradores.
// etapa 3
e escrever
*/

/* // passo 1
deixe totalEleitores = 150;
deixe votosBrancos = 40;
deixe votosNulos = 30;
// etapa 2
let votosValidos = totalEleitores - ( votosBrancos + votosNulos );
let percentualBrancos = ( votosBrancos * 100 ) / totalEleitores;
let percentualNulos = ( votosNulos * 100 ) / totalEleitores;
let percentualValidos = 100 - (percentualBrancos + percentualNulos);
// etapa 3 - mostragem - console, janela, documento
console.log(`Total de votos brancos: ${percentualBrancos.toFixed(2)}%`);
console.log(`Total de votos nulos: ${percentualNulos}%`);
console.log(`Total de votos válidos: ${percentualValidos.toFixed(2)}%`);
console.log(`Total de compradores: ${totalEleitores}`);
*/


/*
O custo de um carro novo ao consumidor é a soma do custo de
fábrica com a porcentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica).
Supondo que o percentual do
distribuidor seja de 28% e os impostos de 45%,
escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.
custoCarroNovo = custoFabrica + (28% + 45%)
*/
// etapa 1
let  custoFabrica  =  20000.00 ;
let  percentualDistribuidor  =  28 ;
let  percentualImposto  =  45

// etapa 2
let  percentualTotalImpostos  =  percentualDistribuidor  +  percentualImposto ;  // %
let  acrescimo  =  (  custoFabrica  *  percentualTotalImpostos )  /  100 ;  // R$

let  valorConsumidor  =  custoFabrica  +  acrescimo ;

// etapa 3
console . log ( `Total Fábrica: R$ ${ custoFabrica . toFixed ( 2 ) } ` )
console . log ( `Total de acréscimos: R$ ${ acrescimo . toFixed ( 2 ) } ` )
console . log ( `Valor total de um carro novo para o consumidor é de R $$ { valorConsumidor.toFixed ( 2 ) } ` ) ;





/*
Uma transação de carros usados ​​paga a seus funcionários
vendedores um salário fixo por mês,
mais uma comissão também fixa para cada carro vendido
e mais 5% do valor das vendas por ele efetuados.
Escrever um algoritmo que leia o
número de carros por
ele vendeu, o valor total de suas vendas,
o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
.
salarioFinal = salarioFixo + comissaoFixa + 5%
totalVendas = valorCarro * quantidadeCarros
quantidadeCarros = 10;
valorTotalVendas = 200000,00;
salarioFixo = 1500,00
extraPorCarroVendido = 500,00;
percentualExtra = valorTotalVendas * 5 / 100;
salarioFinal = salarioFixo + (extraPorCarroVendido * quantidadeCarros) + percentualExtra
*/

/*
Desenvolva um algoritmo que armazene o valor 10 em uma variável
UMA
e o valor 20 em uma variável B.
A seguir (utilizando apenas
atribuições entre variáveis) troque os seus conteúdos fazendo com
que o valor que está em A passe para B e vice-versa. Ao final,
escrever os valores que permaneceram armazenados nas variáveis.
*/


/* ATIVIDADE 1 */

seja  A  =  10 ;
seja  B  =  20 ;
deixe  C ;


C  =  A ;  // 10
A  =  B ;  // A = 20
B  =  C ;







// CONSOLE
/* const idade = 18;
console.log("Frase de exemplo") // concatenação de string utilizando o operator +
// template string - UTILIZAÇÃO DA CRASE PARA A CONSTRUÇÃO DE FRASES CONCATENADAS COM VARIAVEIS
console.log(`A minha idade é ${idade}`)
*/


// JANELA
/* window.alert('Frase de exemplo'); */  // ele congela a guia que está sendo executada no navegador
/* console.log('Executou aqui'); */


// DOCUMENTO HTML
/* const idade = 18;
document.write(`<h2> Minha idade é ${idade} </h2>`); */
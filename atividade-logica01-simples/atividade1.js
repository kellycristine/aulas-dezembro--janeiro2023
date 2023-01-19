/* 
1. Desenvolva um algoritmo que armazene o valor 10 em uma variável
A e o valor 20 em uma variável B. A seguir (utilizando apenas
atribuições entre variáveis) troque os seus conteúdos fazendo com
que o valor que está em A passe para B e vice-versa. Ao final,
escrever os valores que ficaram armazenados nas variáveis.*/

// input de dados - window e document

let A = window.prompt('Informe o valor a ser atribuido para A:');
let B = window.prompt('Informe o valor a ser atribuido para B:');
let C;

C = A;
A = B;
B = C;

console.log(`Valor A = ${A}`);
console.log(`Valor B = ${B}`);

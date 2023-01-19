/*Chegou a hora de aplicar o conhecimento adquirido em nossos
encontros. Lembrando sempre que os exercícios e desafios serão nossos
principais indicadores sobre o conhecimento de vocês, tanto para
ajudá-los como na hora do direcionamento para as vagas.

Contextualização do desafio:
As Ilhas Growdev formam um reino independente nos mares do Pacífico.
Como é um reino recente, a sociedade é muito influenciada pela
informática. A moeda oficial é a GrowCoin; existem notas de GC$ 50,00,
GC$ 10,00, GC$ 5,00 e GC$ 1,00. Vocês foram contratados para ajudar na
programação dos caixas automáticos de um grande banco das Ilhas
Growdevs.

Tarefa:
Os caixas eletrônicos das Ilhas Growdev operam com todos os tipos de
notas disponíveis, mantendo um estoque de cédulas para cada valor. Os
clientes do banco utilizam os caixas eletrônicos para efetuar retiradas de
um certo número inteiro de GrowCoins.
Sua tarefa é escrever um algoritmo que, dado o valor de GrowCoins
desejado pelo cliente, determine o número de cada uma das notas
necessárias para totalizar esse valor. Por exemplo, se o Marcelo deseja
retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota de
GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00

Exemplo de entrada:
72
Exemplo de saída:
GC$ 50,00 -> 1
GC$ 10,00 -> 2
GC$ 5,00 -> 0
GC$ 1,00 -> 2

Este desafio será realizado durante a aula com o Mentor e a resolução
deverá ser postada na Class até o horário estipulado da tarefa na
plataforma. Crie um arquivo compactado contendo os arquivos com a
resolução do desafio e realize o upload no post da atividade no Class.

Para que possamos construir uma base sólida de aprendizado é preciso
praticar.
72
Bora implementar tudo isso!*/


let saldo = 10000;
let saque = Number(prompt(`Digite quanto deseja sacar:`));

while(!saque || saque > saldoUsuario);
saldoUsuario -= saque
let cinquenta = Math.trunc(saque / 50);
let dez = Math.trunc((saque % 50) / 10);
let cinco = Math.trunc(((saque % 50) % 10) / 5);
let um = Math.trunc((((saque % 50) % 10) % 5) / 1);

document.write(`GC$ 50,00: ${cinquenta}<br>`);
document.write(`GC$ 10,00: ${dez}<br>`);
document.write(`GC$ 5,00: ${cinco}<br>`);
document.write(`GC$ 1,00: ${um}<br>`);

/*
let qtdNotas50 = 0
let qtdNotas10 = 0
let qtdNotas5 = 0
let qtdNotas1 = 0

let valor = 184

while(valor >= 50){
    valor = valor - 50
    qtdNotas50++
}
while(valor >= 10){
    valor = valor - 10
    qtdNotas10++
}
while(valor >= 5){
    valor = valor - 5
    qtdNotas5++
}
while(valor >= 1){
    valor = valor - 1
    qtdNotas1++
}
*/
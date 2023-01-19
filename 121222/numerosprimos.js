// um número é primo quando é divisivel por 1 e por ele mesmo

// numero: 7
// 7 % 1 = 0
// 7 % 2 = 1
// 7 % 3 = 1
// 7 % 4 = 1
// 7 % 5 = 1
// 7 % 6 = 1
// 7 % 7 = 0

// numero: 9
// 9 % 1 = 0
// 9 % 2 = 1
// 9 % 3 = 0
// 9 % 4 = 1
// 9 % 5 = 1
// 9 % 6 = 1
// 9 % 7 = 1
// 9 % 8 = 1
// 9 % 9 = 0

// numero: 108
// 108 % 1 = 0
// ...2, 3, 4
// 108 % 108 = 0

function ePrimo(numero){

    if(numero == 0 || numero == 1) return false;

    if(numero == 2) return true;

    for(let contador = 2; contador <= Math.trunc(numero / 2) + 1 ; contador++){
        if(numero % contador == 0){
            return false;
        }
    }

    return true;
}

let num = 5;
alert(`O número ${num} é primo? ${ePrimo(num)}`)
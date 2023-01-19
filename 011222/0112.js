let numero1 = 5;
let numero2 = 10;
let operacao = 'somar';

let resultado;

if(operacao == 'somar'){
    resultado = numero1 + numero2;
} else if(operacao == 'subtracao'){
    resultado = numero1 - numero2;
} else if(operacao == 'multiplicacao'){
    resultado = numero1 * numero2;
} else if(operacao == 'divisao'){
    resultado = numero1 / numero2;
} else {
    resultado -9999
}


//swite case > escolha caso
// ==
switch(operacao){
    case 'somar': {
        resultado = numero1 + numero2
        break;
    }
    case 'subtracao': {
        resultado = numero1 - numero2
        break;
    }
    case 'multiplicacao': {
        resultado = numero1 * numero2
        break;
    }
    case 'divisao': {
        resultado = numero1 / numero2
        break;
    }
}


contador = 1

let numero = Number(prompt(`Informe o numero inteiro e positivo`))

while (contador <= numero) {
    document.write(`${contador}`)
    contador **
}
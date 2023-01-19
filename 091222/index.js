function exercicio9() {
    let numero = Number(prompt("Informe um numero: "))
    if(!valor || valor < 0) {
        alert("Valor inválido. Deve ser positivo")
        return
    }

    let retorno = verificarPar(valor)
    if(retorno) {
        document.write(`É par!`)
    } else {
        document.write(`É impar!`)
    }
}

function verificarPar (numero) {
    if(numero % 2 === 0) {
        return true
    } else {
        return false
    }
}


function exercicio10() {
    let anoAtual = Number(prompt(`Informe Ano atual: `))

    if(!anoAtual || anoAtual > 2000) {
        alert(`Valor inválido`)
        return
    }

    let anoNascimento = Number(prompt(`Informe o ano de nascimento`))

    if(!anoNascimento || anoNascimento > anoAtual) {
        alert(`Valor inválido`)
        return
    }

    let idade = anoAtual - anoNascimento

    if(idade < 16) {
        document.write(`Não pode votar. Menor de idade`)
    } else if(idade >= 18 && idade < 65) {
        
    }
}
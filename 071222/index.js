function escreverOla (){
    document.write(`<p>Olá</p>`)

    for(let contador = 1; contador <= 50; contador++){
        if(contador % 3 == 0){
           document.write(`<p></p>`)
        }
        
    }
}

function escreverOla(nomePessoa){
    document.write(`<p>Ola ${nomePessoa}</p>`)
}

escreverOla('Kelly Cristine')

escreverOla('Edson Martins')




let nomeFornecido = prompt(`Digite seu nome`)

escreverOla(nomeFornecido)
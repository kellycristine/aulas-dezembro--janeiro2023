const frutas = ['Banana', 'Maca', 'Pera', 'Uva', 'Melancia']

const resultadoForEach = frutas.forEach(function(valor){
    console.log(valor) 
})

const resultadoFindIndex = frutas.findIndex(function (valor) {
    return valor === 'Maca'
})

const resultadoFilter = frutas.filter(function (valor){
    return valor.length > 5
})

console.log('')

console.log(resultadoForEach)
console.log(resultadoFindIndex)
console.log(resultadoFilter)
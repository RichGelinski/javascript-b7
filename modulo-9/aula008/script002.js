let lista = [45, 4, 9, 16, 25]
let lista2 = []

lista2 = lista.findIndex(function (item) { //.findIndex procura o parâmetro e retorna o primeiro índice encontrado
    return (item == 9) ? true : false
})

let res = lista2
console.log(res)
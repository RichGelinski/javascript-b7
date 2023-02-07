let lista = [45, 4, 9, 16, 25]
let lista2 = []

lista2 = lista.find(function (item) { //.find procura o parâmetro e retorna o primeiro item encontrado
    return (item == 4) ? true : false
})

let res = lista2
console.log(res)
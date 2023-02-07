let lista = [45, 4, 9, 16, 25]
let lista2 = []
lista2 = lista.some(function (item) { //.some verifica se 'alguns' itens estão dentro do parâmetro estabelecido
    if (item > 30) {
        return true
    } else {
        return false
    }
})
let res = lista2
console.log(res)
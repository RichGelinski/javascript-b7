let lista = [45, 4, 9, 16, 25]
let lista2 = []
lista2 = lista.filter(function (item) { //.filter funciona como um filtro, onde aciona uma função permitindo a utilização de um if para validar se o item é maior ou menor do que o parâmetro estabelecido
    if (item < 20) {
        return true
    } else {
        return false
    }
})

let res = lista2
console.log(res)
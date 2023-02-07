let lista = [45, 4, 9, 16, 25]
let lista2 = []

lista2 = lista.map(function (item){ //.map percorre todos os itens do array (lista) e retorna novos valores para o array (lista2) 
    return item * 2
})

let res = lista2
console.log(res)
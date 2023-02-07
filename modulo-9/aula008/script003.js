let lista = [
    {id: 001, nome: 'Felipe', sobrenome: 'Gonçalves'},
    {id: 002, nome: 'Patricia', sobrenome: 'Nogueira'},
    {id: 003, nome: 'Lucia', sobrenome: 'Carla'}
]

let pessoa = lista.find(function (item) {
    return (item.id == 003)
})

let res = pessoa
console.log(res)
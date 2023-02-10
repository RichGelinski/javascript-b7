let numeros = [0,1,2,3,4]
let novosNumeros = [...numeros,5,6,7,8]

console.log(novosNumeros)

let personagem = {
    nome: 'Felipe',
    sobrenome: 'Gonçalves',
    idade: 32
}

let newPersonagem = {
    ...personagem,
    altura: 1.73,
    peso: 100
}

console.log(newPersonagem)

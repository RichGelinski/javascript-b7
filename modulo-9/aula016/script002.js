let pessoa = {
    nome: 'Felipe',
    sobrenome: 'Gonçalves',
    idade: 32,
    social: {
        instagram: {
            url: '@felipegs90',
            seguidores: 100
        }
    }
}

// Primeiro método de criar função e utilizar o objeto como parâmetro
function pegarNome(obj) {
    let nome = pessoa.nome
    let idade = pessoa.idade

    return `${nome} tem ${idade} anos de idade`
}
console.log(pegarNome(pessoa))

//Segundo método de criar uma função, descontruir o objeto e utiliza-lo como parâmetro
function pegarNomeCompleto({nome, sobrenome, social:{instagram:{url:instagram}}}) {
    return `Olá Meu nome é ${nome} ${sobrenome}. O meu insta é ${instagram}`
}
console.log(pegarNomeCompleto(pessoa))

//Desonstruindo objetos e obtendo os valores de objetos dentro de objetos
let {nome, idade, social:{instagram:{url:instagram, seguidores}} } = pessoa
console.log(`Tenho ${seguidores} seguidores, me siga em ${instagram}. Valeu!`)

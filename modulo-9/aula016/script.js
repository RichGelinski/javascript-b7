let pessoa = {
    nome: 'Felipe',
    sobrenome: 'Gonçalves',
    idade: 32,
    social: {
        youtube: 'felipegs',
        facebook: 'Felipe Gonçalves'
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}
console.log(pessoa.nomeCompleto()) //utilizando a função criada dentro do objeto para concatenar nome e sobrenome e retornar as duas juntas em uma só string

let {nome, sobrenome, idade} = pessoa //função para descontruir um objeto. Cria-se uma variável e entre colchetes as variáveis que queremos retirar do objeto. 



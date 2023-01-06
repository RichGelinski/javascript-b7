let personagem = {
    nome: "Felipe",
    idade: 32,
    carros: [
        {modelo: "Audi", cor: "azul"},
        {modelo: "Jaguar", cor: "verde"},
        {modelo: "Ferrari", cor: "vermelho"}
    ],
}

personagem.nome = "Patricia" //alterando o valor de um objeto

console.log(personagem.nome)
console.log(personagem.carros[1].modelo) //acessando objetos dentro de um array
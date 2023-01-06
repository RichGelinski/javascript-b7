let cadastro = { //criando um objeto
    nome: "Felipe",
    idade: 32,
    sexo: "masculino",
    cidade: "Santo André",
    estado: "São Paulo",
    caracteristicas: { // criando um objeto dentro de um objeto
        musica: "rock",
        profissao: "desenvolvedor",
        cor: "preto",
    },
    familia: ["Patricia", "Kleber", "Rose"], // criando um array dentro de um objeto
}

console.log(`${cadastro.nome} tem ${cadastro.idade} anos, mora em ${cadastro.cidade}. Seu estilo de música favorito é ${cadastro.caracteristicas.musica} e sua profissao é ${cadastro.caracteristicas.profissao}. Sua esposa se chama ${cadastro.familia[0]}`)
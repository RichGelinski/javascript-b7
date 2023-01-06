let pessoa = {
    nome: "Felipe",
    sobrenome: "Gonçalves",
    nomeCompleto: function() {  //utilizando funcao dentro do objeto
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(pessoa.nomeCompleto())
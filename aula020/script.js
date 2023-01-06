let cores = ["azul", "vermelho", "preto", "amarelo"]

for (c = 0; c < cores.length; c++) {
    console.log(cores[c])
}

let lista = [2, 4, 12, 100, 20]

/*
for (let i in lista) {
    console.log(lista[i])
}
*/

for (let i of lista) {
    console.log(i)
}

let nomes = [
    {nome: "Felipe", idade: 32},
    {nome: "Patricia", idade: 29},
    {nome: "Lucia", idade: 48}
]

for (let x in nomes) {
    nomes[x].nome = nomes[x].nome.toUpperCase()
    console.log(`Nome: ${nomes[x].nome} - Idade: ${nomes[x].idade}`)
}

console.log("")

for (let dados of nomes) {
    dados.nome = dados.nome.toLowerCase()
    console.log(`Nome: ${dados.nome} - Idade: ${dados.idade}`)
}
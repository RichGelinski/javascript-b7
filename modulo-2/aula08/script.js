function maiorIdade(idade) {
    if (idade >= 18) {
        return true
    } else {
        return false
    }
}

let idade = 02

let verificacao = maiorIdade(idade)

if (verificacao) {
    console.log('É maior de idade')
} else {
    console.log('É menor de idade')
}
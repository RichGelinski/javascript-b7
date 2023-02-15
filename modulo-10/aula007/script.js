function pegarTemperatura () {
    return new Promise(function(resolve, reject) {
        console.log(`Pegando temperatura...`)

        setTimeout(function() {
            resolve(`40 graus na sombra`)
        }, 2000)
    })
}
console.log(`Primeiro código`)

let res = pegarTemperatura()

console.log(`Segundo código`)

res.then(function(resultado) {
    console.log(`Temperatura: ${resultado}`)
})

res.catch(function(error) {
    console.log(`Ocorreu algum erro!`)
})

console.log(`Terceiro código`)


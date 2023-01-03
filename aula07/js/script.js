function soma(n1, n2) {
    resultado = n1 + n2
    console.log(`Resultado: ` +resultado)
}
soma(10, 8)

/*
function nomeCompleto (nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`)
}

nomeCompleto("Felipe", "Gonçalves")
*/


function completo(nome, sobrenome) {  // utilizando a função 'return' //
    return `${nome} ${sobrenome}`
}

let nomeCompleto = completo("Felipe", "Gonçalves")
console.log(nomeCompleto)


/* Crie um função que valide usuário e senha.
Usuário correto: felipe
senha correta: 1321


function validar (user, password) {
    if (user === "felipe" && password === 1321) {
        return true
    } else {
        return false
    }
}

let usuario = "felipe"
let senha = 1321
let validacao = validar(usuario, senha)

if (validacao) {
    console.log('Acesso concedido.')
} else {
    console.log('Acesso negado.')
}
*/

function validar (user, password) {
    let validacao = user === "felipe" && password === 1321 ? true : false
    return validacao      //utilizando operador ternário //
}

let usuario = "felipe"
let senha = 1321
let validacao = validar(usuario, senha)

if (validacao) {
    console.log('Acesso concedido.')
} else {
    console.log('Acesso negado.')
}
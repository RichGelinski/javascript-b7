let cpf = '37738317817'

let cpfOculto = cpf.slice(0, 3)//slice utilizado na variavel para armazenar apenas os 3 primeiros números do CPF
console.log(cpfOculto)

console.log(cpfOculto.padEnd(11, '*'))//padEnd utilizado para preencher automáticamente valores incompletos. Primeiro especifica-se a quantidade de valores que são esperados e depois o que será colocado no lugar, caso a condição não tenha sido atendida. Pode se usar 'padStart' também.  
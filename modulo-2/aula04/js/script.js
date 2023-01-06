let idade = Number(window.prompt('Digite sua idade: '))

/*
if (idade >= 18) {
    console.log('Maior de idade')
}   else {
    console.log('Menor de idade')
}
*/

if (idade >=18 && idade < 60) {
    console.log('Você é um adulto.')
}   else if (idade > 60) {
    console.log('Você é um idoso.')
}   else {
    console.log('Você é uma criança')
}
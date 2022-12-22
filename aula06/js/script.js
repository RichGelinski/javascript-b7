let member = false

let shipping = member ? 2.00 : 10.00

console.log(member ? 'Você é membro.' : 'Você não é membro.')
console.log(`O valor do seu frete será de R$:${shipping.toFixed(2).replace('.',',')}`)


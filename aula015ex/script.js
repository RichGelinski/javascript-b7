//1. No array abaixo, em qual índice encontra-se a ferrari ?

let carros = ["BMW", "Ferrari", "Mercedes"]
console.log('1. ' +carros[1])

//2. Troque a Ferrari por um Audi

carros[1] = "Audi"
console.log('2. Lista com Audi: ')
console.log(carros)

//3. Adicione um Volvo a lista

carros.push ("Volvo")
console.log('3. Lista com Volvo: ')
console.log(carros)

//4. Exiba quantos items existem no array

console.log('4. O array possui '+carros.length +' itens.')
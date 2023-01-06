let fruits = ["banana", "abacaxi", "morango", "uva", "pêra"]

let bigFruits = fruits.filter((item) => {
    return item.length > 4 
})

console.log(bigFruits)

let names = ["Felipe", "Patricia", "Rose", "Lucia"]

if (names.includes("Felipe")) { //verificar se o item encontra-se no array
    console.log("O nome Felipe já está na lista")
}  else {
    console.log("Este nome não está na lista")
}
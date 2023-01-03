function calcPct (a, b) {
    let pct = (a * b) / 100
    return pct 
}

let x = prompt('Digite um valor: ')
let y = prompt('Digite a porcentagem: ')
let pct = calcPct(x, y)
console.log(`${y}% de ${x} é ${pct}.`)
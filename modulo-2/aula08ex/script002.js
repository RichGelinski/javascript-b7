/* 
calcule o preço final do imóvel
- m2 = 3.000
- se tiver 1 quarto, m2 = 1x
- se tiver 2 quartos, m2 = 1.2
- se tover 3 quartos, m2 = 1.5
*/

function calcularImoveis (m, q) {
    let m2 = 3.000
    if (q == 1) {
        let preco = m * m2
        return preco
    } else if (q == 2) {
        let preco = (m * m2) * 1.2
        return preco
    } else {
        let preco = (m * m2) * 1.5
        return preco
    }
}

let metragem = 123
let quartos = 1
let preco = calcularImoveis(metragem, quartos)
console.log(`A casa custa R$: ${preco.toFixed(3)}`)
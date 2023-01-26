let frase = 'Eu gosto de jogar video-game'
let resultado = frase.replace('video-game', 'bola')//.replace substitui o primeiro item do parâmetro pelo segundo.

let nome = '    Felipe Gonçalves da Silva     '
let resultado2 = nome.trim() //.trim() exclui todos os espaços inúteis da string

let bolo = 'ovo, leite, fermento, farinha, água'
let resultado3 = bolo.split(',')//.split tranforma a string em um novo array. Separando os indices do array pelo parâmetro indicado 

console.log(resultado)
console.log(resultado2)
console.log(resultado3)
console.log(resultado3[3])
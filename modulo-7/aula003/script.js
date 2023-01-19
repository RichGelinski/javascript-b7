let vermelho = document.querySelector('button#red')
let verde = document.querySelector('button#green')
let azul = document.querySelector('button#blue')

vermelho.addEventListener('click', red)
verde.addEventListener('click', green)
azul.addEventListener('click', blue)

function red() {
    limpar()
    document.querySelector('h1').classList.add('red')
}
function green() {
    limpar()
    document.querySelector('h1').classList.add('green')
}
function blue() {
    limpar()
    document.querySelector('h1').classList.add('blue')
}

function limpar() {
    document.querySelector('h1').classList.remove('red', 'green', 'blue')
}

//TELEFONE

let mostrar = document.getElementById('mostrar')
let esconder = document.getElementById('esconder')

mostrar.addEventListener('click', () => {
    document.getElementById('telefone').style.display = 'inline-block'
    document.getElementById('esconder').style.display = 'inline-block'
    document.getElementById('mostrar').style.display = 'none'
})

esconder.addEventListener('click', () => {
    document.getElementById('telefone').style.display = 'none'
    document.getElementById('esconder').style.display = 'none'
    document.getElementById('mostrar').style.display = 'inline-block'
})
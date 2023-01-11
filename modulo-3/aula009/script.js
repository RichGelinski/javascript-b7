let btn = document.querySelector('input#btn')
btn.addEventListener("click", clicou)
let btn2 = document.querySelector('input#btn2')
btn2.addEventListener("click", restaurar)

function clicou() {
    let txt = document.getElementById('teste')

    txt.style.fontFamily = 'sans-serif'
    txt.style.fontSize = '2em'
    txt.style.fontWeight = 'bold'
    txt.style.backgroundColor = '#000'
    txt.style.color = '#FFF'
}

function restaurar() {
    let txt = document.getElementById('teste')

    txt.style.fontFamily = 'serif'
    txt.style.fontSize = '16px'
    txt.style.fontWeight = 'normal'
    txt.style.backgroundColor = '#FFF'
    txt.style.color = '#000'
}

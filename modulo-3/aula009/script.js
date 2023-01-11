let btn = document.querySelector('input#btn')
btn.addEventListener("click", clicou)

function clicou() {
    let txt = document.getElementById('teste')

    txt.style.fontFamily = 'sans-serif'
    txt.style.fontSize = '2em'
    txt.style.fontWeight = 'bold'
    txt.style.backgroundColor = '#000'
    txt.style.color = '#FFF'
}
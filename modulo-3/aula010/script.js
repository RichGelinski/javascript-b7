let btn = document.querySelector('input#btn')
btn.addEventListener("click", clicou)
let txt = document.querySelector('h1.titulo')

function clicou() {
    console.log(txt)
    if (txt.classList.contains('titulo')) {
        txt.classList.replace('titulo', 'title')
    } else {
        txt.classList.replace('title', 'titulo')
    }
}
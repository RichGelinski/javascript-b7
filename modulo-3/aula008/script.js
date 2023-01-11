let evento = document.querySelector('button')
evento.addEventListener("click", clicou)

function clicou() {
    let txt = document.querySelector('input#senha')
    let btn = document.querySelector('button#btn')

    if (txt.getAttribute('type') === 'text') {
        txt.setAttribute('type', 'password')
        btn.innerHTML = 'Mostrar senha'
    } else {
        txt.setAttribute('type', 'text')
        btn.innerHTML = 'Ocultar senha'
    }
}
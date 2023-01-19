let text = document.querySelector('input#txt')
text.addEventListener('keyup', digitou)

function digitou(e) {
    if (e.keyCode == 13 && e.ctrlKey == true) { //verificar se o enter foi pressionado e se crtl esta apertado
        console.log(text.value)
    }
}
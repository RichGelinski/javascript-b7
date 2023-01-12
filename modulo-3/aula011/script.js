let entrada = document.querySelector('input#txt')

entrada.addEventListener("keydown", apertou)
entrada.addEventListener("keypress", segurou)
entrada.addEventListener("keyup", soltou)

function apertou() {
    console.log("apertou")
}

function segurou() {
    console.log("segurou")
}

function soltou() {
    console.log("soltou")
}


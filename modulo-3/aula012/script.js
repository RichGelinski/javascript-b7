let entrada = document.querySelector('input#txt')

entrada.addEventListener("keydown", apertou)
entrada.addEventListener("keyup", soltou)

function apertou(event){
    console.log(event.key)
}

function soltou() {
    console.log('----')
}
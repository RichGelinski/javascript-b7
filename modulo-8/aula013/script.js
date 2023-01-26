function subirTela() {
    window.scrollTo({ //objeto criado para suavizar a rolagem do scroll 
        top: 0,
        behavior: "smooth",
    })
}

window.addEventListener('scroll', rolar) //aciona evento quando rolar o scroll
function rolar () {
    let btn = document.getElementById('botao')
    let posicao = window.scrollY
    if (posicao >= 40) {
        btn.style.display = 'block'
    }   else {
        btn.style.display = 'none'
    }
}


/*
window.scrollY ou window.scrollX : pega posição do scroll da página

.scrollTop ou .scrollLeft : pega posição do scroll de um elemento
*/
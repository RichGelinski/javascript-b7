function trocarImagem(nomeImagem, nomeAnimal) {
    document.querySelector('.imagem').setAttribute('src','imagens/'+nomeImagem)
    document.querySelector('.imagem').setAttribute('name', nomeAnimal)
}

function descobrirAnimal() {
   let animal = document.querySelector('.imagem').getAttribute('name')
   alert('Este animal é um: '+animal)
}
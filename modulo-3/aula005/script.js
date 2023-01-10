let btn = window.document.addEventListener("click", clicou)

function clicou() {
    let teste = document.getElementById("teste") //variavel "teste" conectou-se a tag <section>
    let ul = teste.querySelector("ul") //variavel "ul" se conectou a variável "teste"

    ul.children[1].innerHTML = ("Item alterado")
}
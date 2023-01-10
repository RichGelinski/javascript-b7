let btn = document.addEventListener("click", clicou)

function clicou(){
    let teste = document.getElementById("teste")
    let ul = teste.querySelector("ul")

    let newLi = document.createElement("li") //cria uma nova tag tag "li" e uma variável "newLi"
    newLi.innerText = "Item adicionado" //modifica o texto da tag criada

    
    ul.appendChild(newLi) //adiciona a variável no final HTML
    ul.prepend(newLi) //adiciona a variável no inicio do HTML
    ul.children[0].append(": (Item adicionado)") //encrementa o HTML sem limpar a memória, uma forma mais eficiente de adicionar texto

}
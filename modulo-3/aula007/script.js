let btn = document.addEventListener("click", clicou)

function clicou(){
    let teste = document.getElementById("teste")
    let ul = teste.querySelector("ul")

    let newUl = document.createElement("ul")
    ul.after(newUl)

    for (c = 0; c < 5; c++) {
        let newLi = document.createElement("li")
        newLi.innerHTML = `Novo item adicionado ${c + 1}`
        newUl.appendChild(newLi)
    }
}
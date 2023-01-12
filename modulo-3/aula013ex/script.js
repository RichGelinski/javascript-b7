let entrada = document.querySelector('input#enter')
let lista = document.querySelector('ul')

entrada.addEventListener('keyup', adicionar)

function adicionar(e) {
    if (e.key === 'Enter') {
        let newLi = document.createElement('li')
        newLi.innerHTML = `${entrada.value}`
        lista.appendChild(newLi)
        entrada.value = ''
        entrada.focus()
    }
}
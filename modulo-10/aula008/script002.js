function loadUsers() {
    document.getElementById('users').innerHTML = `Carregando...`
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(resultado) {
            return resultado.json()
        })

        .then(function(json) {
            montarLista(json)
        })

        .catch(function(error) {
            console.log(`Algo deu errado!`)
        })
}

function montarLista(lista) {
    let res = document.getElementById('users')
    let html = ''
    for (let i in lista) {
        let zipcode = lista[i].address.zipcode
        let zipOcult = zipcode.slice(-4)
        html += `<h4>ID: #${lista[i].id} </h4>`
        html += `<p><strong>Name:</strong> ${lista[i].name}</p>`
        html += `<p><strong>Zipcode:</strong> ${zipOcult.padStart(9,'*')}</p>`
        html += `<hr>`
    }
    res.innerHTML = html
}
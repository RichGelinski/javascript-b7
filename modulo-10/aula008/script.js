function loadPosts() {
    document.getElementById('posts').innerHTML = `carregando...`
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado) {
            return resultado.json()
        })

        .then(function(json){
            montarBlog(json)
        })

        .catch(function(error) {
            console.log(`Algo deu errado!`)
        })
}

function montarBlog(lista) {
    let res = document.getElementById('posts')
    let html = ''
    for (let i in lista) {
        html += `<h3>${lista[i].title}</h3>`
        html += `<p>${lista[i].body}</p>`
        html += `<hr>`
    }
    res.innerHTML = html
}
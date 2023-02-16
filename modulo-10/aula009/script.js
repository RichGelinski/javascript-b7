async function loadPosts() { //função assíncrona 
    document.getElementById('posts').innerHTML = `carregando...`
    let req = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await req.json()//A requisição será executada e vai aguardar a próxima linha de comando. Await funciona apenas em funções assíncronas
    montarBlog(json)
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
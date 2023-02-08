let timer
function começar() {
    timer = setTimeout(function() { // variável recebe um timer que executa uma função após o tempo setado (2000 milesegundos = 2 segundos). Encerra após execução.
        document.querySelector('#demo').innerHTML = 'Rodou!'
    }, 2000)
}
function parar() { 
    clearTimeout(timer) // para a execução em andamento do SetTimeout
}
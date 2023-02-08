let timer // variável global. Criada para que funcionasse em ambas as funcções de Intervalo
function começar() {
    timer = setInterval(showTime, 1000) //Inicia a função que será executada em um looping infinito, até ser encerrada. Sua execução está programada para rodar de 1s em 1s
}

function parar() {
    clearInterval(timer) // Interrompe a execução da funcção SetInterval
}

function showTime() {
    let d = new Date
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    let txt = h+':'+m+':'+s
    document.getElementById('demo').innerHTML = txt
}



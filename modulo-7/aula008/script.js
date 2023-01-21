let res = document.getElementById('result')
let btn = document.getElementById('botao')
btn.addEventListener('click', clicou)

function clicou() {
    let diaSemana = Number(document.querySelector('input#dia').value)
    let msg = ''
    switch (diaSemana) {
        case 1:
            msg = 'Segunda-Feira'
            break
        case 2:
            msg = 'Terça-Feira'
            break
        case 3:
            msg = 'Quarta-Feira'
            break
        case 4:
            msg = 'Quinta-Feira'
            break
        case 5:
            msg = 'Sexta-Feira'
            break
        case 6:
            msg = 'Sábado'
            break
        case 7:
            msg = 'Domingo'
            break            
    }
    res.innerHTML = `<p>Hoje é ${msg}!</p>`
}
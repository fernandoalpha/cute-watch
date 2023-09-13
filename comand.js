var data = new Date()
var hora = data.getHours()

if (hora < 6 || hora >= 18) {
    document.getElementById('imagens').innerHTML = "<img id='imagens' src='midia/noite_f.png' alt='foto de noite'>"
    document.querySelector('div#resultado').innerHTML = '<p>Está de Noite</p>'

    document.body.style.backgroundColor = '#585858'
    console.log(hora)
} else if (hora < 12) {
    document.getElementById('imagens').innerHTML = "<img id='imagens' src='midia/manha_f.png' alt='foto de manhã'>"
    document.querySelector('div#resultado').innerHTML = '<p>Está de Dia!</p>'

    document.body.style.backgroundColor = '#01A9DB'
    console.log(hora)
} else {
    document.getElementById('imagens').innerHTML = "<img id='imagens' src='midia/tarde_f.png' alt='foto de tarde'>"
    document.querySelector('div#resultado').innerHTML = '<p>Está de Tarde!</p>'

    document.body.style.backgroundColor = '#FE9A2E'
    console.log(hora)
}

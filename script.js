function comprimentar() {
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    var diaSemana = data.getDay()

    switch (diaSemana) {
        case 0:
            diaSemana = 'Domingo'
        break
        case 1:
            diaSemana = 'Segunda-feira'
        break
        case 2:
            diaSemana = 'Terça-feira'
        break
        case 3:
            diaSemana = 'Quarta-feira'
        break
        case 4:
            diaSemana = 'Quinta-feira'
        break
        case 5:
            diaSemana = 'Sexta-feira'
        break
        case 6:
            diaSemana = 'Sábado'
        break
    }

    var comprimento
    if (horas >= 0 && horas <= 11) {
        comprimento = 'Bom dia!'
    } else if (horas >= 12 && horas <= 18) {
        comprimento = 'Boa tarde!'
    } else {
        comprimento = 'Boa noite!'
    }

    document.getElementById('msg').innerHTML = `<h1>${comprimento}</h1><p>Acesso feito: ${horas + ':' + minutos}<br>${diaSemana}</p>`
}
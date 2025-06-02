function clicar() {
    let massa = document.getElementById('massa').value
    let altura = document.getElementById('altura').value
    let resultado_exb = document.getElementById('resultado_exb')

    if (altura <= 0 || massa <= 0) {
        window.alert('[ERRO] Verifique as informações')
    } else {

    let resultado = massa / (altura ** 2)

    resultado_exb.innerHTML = `<p>IMC: ${resultado}</p>`
    }
}

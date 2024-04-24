
function entrar() {
   exb_nota = document.querySelector('#exb_nota')
   conteudo = JSON.stringify(localStorage.getItem('conteudo'))
   conteudo = JSON.parse(conteudo)
   backup_notas = {conteudo}
   exb_nota.innerHTML += conteudo
}

function salvar() {
    let titulo = document.getElementById('titulo_entry').value
    let nota = document.getElementById('nota').value

        //Verficando se há algum valor nas caixas de entrada
    if (nota == '' || titulo == '') {
        alert('[ERRO] Nenhum campo pode ficar vazio')
    } else {

    exb_nota.innerHTML += `<div class='notepad'><div class='titulo'>${titulo}</div><div class='cntd'>${nota}</div></div>`

        // Salvando no local.Storage
    backup_notas[titulo] = `<div class='notepad'><div class='titulo'>${titulo}</div><div class='cntd'>${nota}</div></div>`

    console.log(backup_notas)

    localStorage.setItem('conteudo', JSON.stringify(backup_notas))
    }

}

function limpar() {
    let titulo = document.getElementById('titulo_entry')
    let nota = document.getElementById('nota')
    
    nota.value = ''
    titulo.value = ''
}


/*salvando na local
localStorage.setItem('conteudo', nota)
    
//mostrando o valor armazenado, atevés do titulo
console.log(localStorage.getItem(titulo))

//removendo/excluindo
localStorage.removeItem('conteudo') */


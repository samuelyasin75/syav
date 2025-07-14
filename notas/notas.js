//Criando as variaveis
function entrar() {
   notaExb = document.querySelector('#notaExb')
   conteudo = localStorage.getItem('localConteudo')
   notaBackup = {}
   conteudo = JSON.parse(conteudo)
   numNota = localStorage.getItem('numeroNota')
   numNota = JSON.parse(numNota)

   // fazendo backup e exibindo as notas antigas
   if (conteudo) {
       notaBackup = conteudo

       for (let nota in conteudo) {
        notaExb.innerHTML += conteudo[nota]
        }
    }
}

function salvarNota() {
    let notaTitulo = document.getElementById('notaTitulo').value
    let notaConteudo = document.getElementById('notaConteudo').value
    let tempBackup = ''

        //Verficando se há algum valor nas caixas de entrada
    if (notaConteudo == '' || notaTitulo == '') {
        alert('[ERRO] Nenhum campo deve estar vazio')
    } else {
        
        // Salvando no local.Storage
        tempBackup = `
            <div class='notepad'>
                <div class='titulo'>
                    ${notaTitulo}
                    <div class="button">
                    <button id='${numNota}'>Excluir</button>
                    </div>
                </div>
                <div class='cntd'>
                    ${notaConteudo}
                </div>
            </div>
            `

        //Colocando as notas em exibição
        notaExb.innerHTML +=  tempBackup

        notaBackup[numNota] = tempBackup
        numNota++
        localStorage.setItem('numeroNota', JSON.stringify(numNota))
        localStorage.setItem('localConteudo', JSON.stringify(notaBackup))
        limparCampos()
        
    }
}

// Limpando os campos de titulo e anotação
function limparCampos() {
    let titulo = document.getElementById('notaTitulo')
    let nota = document.getElementById('notaConteudo')
    
    nota.value = ''
    titulo.value = ''
}

// Excluindo nota
notaExb.addEventListener('click', function(propriedades) {

    var nota_atualizada = ''
    var id = propriedades.target.id

        //deletando nota do objeto
        delete notaBackup[id]

        //guardando valores do objeto em uma variavel
        for (let title_obj in notaBackup) {
            nota_atualizada += notaBackup[title_obj]
    }

    //reexibindo as notas atualizadas
    notaExb.innerHTML = nota_atualizada

    localStorage.setItem('localConteudo', JSON.stringify(notaBackup))

}
)


//salvando na local
//localStorage.setItem('localConteudo', notaBackup)
    
//mostrando o valor armazenado, atevés do titulo
//console.log(localStorage.getItem(titulo))

//removendo/excluindo
//localStorage.removeItem('localConteudo')

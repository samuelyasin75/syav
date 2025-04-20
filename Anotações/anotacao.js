//Criando as variaveis
function entrar() {
   notaExb = document.querySelector('#notaExb')
   conteudo = localStorage.getItem('localConteudo')
   notaBackup = {}
   conteudo = JSON.parse(conteudo)
   
   // fazendo backup e exibindo as notas antigas
   if (conteudo) {
       notaBackup = conteudo

       for (let title_obj in conteudo) {
        notaExb.innerHTML += conteudo[title_obj]
        }
    }
}

function salvar() {
    let notaTitulo = document.getElementById('notaTitulo').value
    let notaConteudo = document.getElementById('notaConteudo').value

        //Verficando se há algum valor nas caixas de entrada
    if (notaConteudo == '' || notaTitulo == '') {
        alert('[ERRO] Nenhum campo pode ficar vazio')
    } else {
        
        //Colocando as notas em exibição
        notaExb.innerHTML +=  `
            <div class='notepad'>
                <div class='titulo'>
                    ${notaTitulo}
                    <div class="button">
                    <button id='${notaTitulo}'>Excluir</button>
                    </div>
                </div>
                <div class='cntd'>
                    ${notaConteudo}
                </div>
            </div>
            `

        // Salvando no local.Storage
        notaBackup[notaTitulo] = `
            <div class='notepad'>
                <div class='titulo'>
                    ${notaTitulo}
                    <div class="button">
                    <button id='${notaTitulo}'>Excluir</button>
                    </div>
                </div>
                <div class='cntd'>
                    ${notaConteudo}
                </div>
            </div>
            `
    localStorage.setItem('localConteudo', JSON.stringify(notaBackup))

    }
}

// Limpando os campos de titulo e anotação
function limpar() {
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

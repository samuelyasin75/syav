//Criando as variaveis
function entrar() {
   exb_nota = document.querySelector('#exb_nota')
   conteudo = localStorage.getItem('conteudo')
   backup_notas = {}
   conteudo = JSON.parse(conteudo)
   
   // fazendo backup e exibindo as notas antigas
   if (conteudo) {
       backup_notas = conteudo

       for (let title_obj in conteudo) {
        exb_nota.innerHTML += conteudo[title_obj]
        }
    }
}

function salvar() {
    let titulo = document.getElementById('titulo_entry').value
    let nota = document.getElementById('nota').value

        //Verficando se há algum valor nas caixas de entrada
    if (nota == '' || titulo == '') {
        alert('[ERRO] Nenhum campo pode ficar vazio')
    } else {
        
        //Colocando as notas em exibição
        exb_nota.innerHTML +=  `
            <div class='notepad'>
                <div class='titulo'>
                    ${titulo}
                    <div class="button">
                    <button id='${titulo}'>Excluir</button>
                    </div>
                </div>
                <div class='cntd'>
                    ${nota}
                </div>
            </div>
            `

        // Salvando no local.Storage
        backup_notas[titulo] = `
            <div class='notepad'>
                <div class='titulo'>
                    ${titulo}
                    <div class="button">
                    <button id='${titulo}'>Excluir</button>
                    </div>
                </div>
                <div class='cntd'>
                    ${nota}
                </div>
            </div>
            `
    localStorage.setItem('conteudo', JSON.stringify(backup_notas))

    }
}

// Limpando os campos de titulo e anotação
function limpar() {
    let titulo = document.getElementById('titulo_entry')
    let nota = document.getElementById('nota')
    
    nota.value = ''
    titulo.value = ''
}

// Excluindo nota
exb_nota.addEventListener('click', function(e) {

    var nota_atualizada = ''
    var id = e.target.id

        //deletando nota do objeto
        delete backup_notas[id]

        //guardando valores do objeto em uma variavel
        for (let title_obj in backup_notas) {
            nota_atualizada += backup_notas[title_obj]
    }

    //reexibindo as notas atualizadas
    exb_nota.innerHTML = nota_atualizada

    localStorage.setItem('conteudo', backup_notas)

}
)


//salvando na local
//localStorage.setItem('conteudo', backup_notas)
    
//mostrando o valor armazenado, atevés do titulo
//console.log(localStorage.getItem(titulo))

//removendo/excluindo
//localStorage.removeItem('conteudo')

async function consultaPosts(){
    // consome a API e guarda o resultado em posts
    const posts = await fetch('http://localhost:3333/posts')
                        .then(resposta => {
                            return resposta.json()
                        })

    let conteudoTabela = ''
    // percorre cada post presente em posts e montar o conteúdo da tabela
    posts.forEach( post => {
        // acumula na variável conteudoTabela os dados de cada post
        conteudoTabela += `<tr> <td> ${post.id} </td> <td> ${post.title} </td> <td> ${post.content} </td> <td> ${post.published} </td> <td> <button onclick="remover(${post.id})"> <i class="bi bi-trash"></i> </button> </td> <td> <button onclick="editar(${post.id}, '${post.title}', '${post.content}', ${post.published})">  <i class="bi bi-pencil"></i> </button> </td> </tr>`
    })
    // vamos jogar os dados no HTML
    document.getElementById("corpoTabela").innerHTML = conteudoTabela

}

function editar(id, title, content, published){
    // alimenta o formulário
    document.getElementById("id").value = id
    document.getElementById("title").value = title;
    document.getElementById("content").value = content;
    (published) ? document.getElementById("sim").checked = true : 
                  document.getElementById("nao").checked = true
}


async function remover(id){
    const confirmacao = confirm('Confirma a exclusão do Post? ')
    if (!confirmacao){ // clicou em não
        return 
    }
    // clicou em sim
    await fetch(`http://localhost:3333/post/${id}`, {
        method: 'DELETE'
    })
    .then(resposta => {
        alert('Remoção realizada')
    })
    .catch(error => {
        alert('Problema na remoção')
    })
    consultaPosts() // atualiza a tabela
}
// consome que api que cadastra um post no banco de dados
async function confirmar(){
    // recupera os dados do formulário
    const title = document.getElementById("title").value
    const content = document.getElementById("content").value
    const published = document.getElementById("sim").checked
    const id = document.getElementById("id").value
    let corpo
    let verbo
    if (id) { // atualizar
        corpo = {id, title, content, published}
        verbo = 'PUT'
    }
    else { // cadastrar
        corpo = {title, content, published}
        verbo = 'POST'
    }
     
    // chama a api
    const post = await fetch('http://localhost:3333/post', {
        method: verbo,
        body: JSON.stringify(corpo), // JSON transformado em string
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        }
    })
    .then( resposta => {
        alert(verbo)
        alert(`${corpo.id} - ${corpo.title} - ${corpo.content} - ${corpo.published}`)
        alert('Operação realizada com sucesso')
    })
    .catch(error => {
        alert('Operação falhou')
    })
    // atualiza a tabela
    consultaPosts()
    // limpa os campos
    document.getElementById("id").value = ''
    document.getElementById("title").value = ''
    document.getElementById("content").value = ''
    document.getElementById("sim").checked = false
    document.getElementById("nao").checked = false
}
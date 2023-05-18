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
        conteudoTabela += `<tr> <td> ${post.id} </td> <td> ${post.title} </td> <td> ${post.content} </td> <td> ${post.published} </td> <td> <button onclick="remover(${post.id})"> <i class="bi bi-trash"></i> </button> </td> <td> <i class="bi bi-pencil"></i> </td> </tr>`
    })
    // vamos jogar os dados no HTML
    document.getElementById("corpoTabela").innerHTML = conteudoTabela

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
    alert(published)
    const corpo = {title, content, published}
    // chama a api
    const post = await fetch('http://localhost:3333/post', {
        method: 'POST',
        body: JSON.stringify(corpo), // JSON transformado em string
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        }
    })
    .then( resposta => {
        alert('Operação realizada com sucesso')
    })
    .catch(error => {
        alert('Operação falhou')
    })
    // atualiza a tabela
    consultaPosts()
}
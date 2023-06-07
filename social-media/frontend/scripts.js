async function consultaPosts(){
    // consome a API e guarda o resultado em posts
    // recupera o cookie do id do usuário
    let aux = document.cookie.split('=')
    let userId = Number(aux[1])
    const posts = await fetch(`http://localhost:3333/posts/user/${userId}`)
                        .then(resposta => {
                            return resposta.json()
                        })

    let conteudoTabela = ''
    // percorre cada post presente em posts e montar o conteúdo da tabela
    posts.forEach( post => {
        // acumula na variável conteudoTabela os dados de cada post
        conteudoTabela += `<tr> <td> ${post.id} </td> <td> ${post.title} </td> <td> ${post.content} </td> <td> ${post.likes} </td> <td> ${post.published} </td> <td> <button onclick="remover(${post.id})"> <i class="bi bi-trash"></i> </button> </td> <td> <button onclick="editar(${post.id}, '${post.title}', '${post.content}', ${post.likes}, ${post.published})">  <i class="bi bi-pencil"></i> </button> </td> </tr>`
    })
    // vamos jogar os dados no HTML
    document.getElementById("corpoTabela").innerHTML = conteudoTabela

}

function editar(id, title, content, likes, published){
    // alimenta o formulário
    document.getElementById("id").value = id
    document.getElementById("title").value = title;
    document.getElementById("content").value = content;
    document.getElementById("likes").value = likes;
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
    const likes = Number(document.getElementById("likes").value)
    const published = document.getElementById("sim").checked
    // o id será vazio se for inserção e terá conteúdo se for atualização
    const id = Number(document.getElementById("id").value)
   
    let corpo
    let verbo
    if (id) { // atualizar
        corpo = {id, title, content, likes, published}
        verbo = 'PUT'
    }
    else { // cadastrar
        // recupera o cookie
        let aux = document.cookie.split('=')
        let userId = Number(aux[1])
        corpo = {title, content, likes, published, userId}
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
    document.getElementById("likes").value = '0'
    document.getElementById("sim").checked = false
    document.getElementById("nao").checked = false
}

async function entrar(){
        // recupera dados do form
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        const corpo = {username, password}
        let resposta = await fetch(`http://localhost:3333/user/verifica`, {
            method: 'POST',
            body: JSON.stringify(corpo),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
        .then(resp => {
                return resp.json()
        })
        .catch(error => {
                alert(`Erro na execução ${error}`)
                exit(0) 
        })
        if (resposta == null){
            alert('Usuário/Senha não existem')
        }
        else {
            // guarda no cookie uma variável chamada id contendo o id do usuário
            document.cookie = `id=${resposta.id}`
            // vai direcionar o usuário para a tela principal do sistema
            // vamos usar a extensão live server
            window.open(`http://127.0.0.1:5500/frontend/post.html`);   
        }
       
    }

    async function montarSelect(){
        // recupera valor do cookie
        let aux = document.cookie.split('=')
        let userId = Number(aux[1])
        const posts = await fetch(`http://localhost:3333/posts/user/${userId}`)
            .then(resposta => {
               return resposta.json()
            })
            .catch(error => {
                alert('Não carregou os posts')
            })
         // alimenta o select
         let conteudoSelect = '' 
         posts.forEach( post => {
            conteudoSelect += `<option value='${post.id}'> ${post.title} </option>`
         })
         document.getElementById("post").innerHTML = conteudoSelect
    }

    async function gostar(){
        // recupera os dados do formulário
        const id = Number(document.getElementById("post").value) // recupera o id do post
        const x = Number(document.getElementById("quantity").value)
        // cria objeto para enviar
        const objeto = {id, x}
        // consumir a API
        const resultado = await fetch('http://localhost:3333/post/gostar', {
            method: 'PATCH',
            body: JSON.stringify(objeto),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
        .then(resp => {
            // alert(resultado.status) ou resultado.data.status
            alert('Like realizada com sucesso')
        })
        .catch(error => {
            // alert(resultado.status) ou resultado.data.status
            alert('Problema no like')
        })
    }

    async function desgostar(){
        // recupera os dados do formulário
        const id = Number(document.getElementById("post").value) // recupera o id do post
        const x = Number(document.getElementById("quantity").value)
        // cria objeto para enviar
        const objeto = {id, x}
        // consumir a API
        const resultado = await fetch('http://localhost:3333/post/desgostar', {
            method: 'PATCH',
            body: JSON.stringify(objeto),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
        .then(resp => {
             return resp.json()
        })
        .catch(error => {
            // alert(resultado.status) ou resultado.data.status
            alert('Problema na retirada de like')
        })
        if (resultado.count == 0){ // não tem likes suficientes para desgostar
            alert('Likes insuficientes')
        }
        else {
            alert('Likes retirados com sucesso')
        }
    }
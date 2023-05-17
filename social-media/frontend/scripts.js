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
        conteudoTabela += `<tr> <td> ${post.id} </td> <td> ${post.title} </td> <td> ${post.content} </td> <td> ${post.published} </td> </tr>`
    })
    // vamos jogar os dados no HTML
    document.getElementById("corpoTabela").innerHTML = conteudoTabela

}
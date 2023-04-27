// importa dependência fastify
import Fastify from 'fastify'
// cria um objeto da classe Fastify
const server = Fastify()

// importa dependência prisma
import {PrismaClient} from '@prisma/client'
// cria um objeto da classe PrismaClient
const prisma = new PrismaClient()

// cria a rota /hello com o verbo get (consulta)
server.get('/hello', () => {
    return 'Hello, good night'
})

// rota para listar (consultar) os posts cadastrados no banco de dados
// a função é assíncrona, isto é, quem a chamar, pode continuar sem que tenha resposta
server.get('/posts', async () => {
    // await (aguarde) indica que a função somente continua depois que os dados vieram do BD
    const posts = await prisma.post.findMany()
    return posts
})

server.get('/posts/title', async () => {
    const posts = await prisma.post.findMany({
        where: {
            title: {
                startsWith: 'Aula'
            }
        }
    })
    return posts
})

// sobe o servidor e fica ouvindo na porta 3333
server.listen({
    port: 3333
})
.then( () => {
    console.log('HTTP Server running on port 3333')
})
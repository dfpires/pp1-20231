import {FastifyInstance} from 'fastify'
import {z} from 'zod'
import {prisma} from './lib/prisma'

export async function AppRoutes(server:FastifyInstance){
                // rota para listar (consultar) os posts cadastrados no banco de dados
        // a função é assíncrona, isto é, quem a chamar, pode continuar sem que tenha resposta
        server.get('/posts', async () => {
            // await (aguarde) indica que a função somente continua depois que os dados vieram do BD
            const posts = await prisma.post.findMany()
            return posts
        })


        server.get('/posts/title/:title', async (request) => {
            // define um objeto zod contendo o esquema de dados
            const titleParam = z.object({
                title: z.string()
            })
            // recupera o dado do frontend a partir do zod titleParam
            // converte o texto enviado pelo frontend para a variável title
            const {title} = titleParam.parse(request.params)

            const posts = await prisma.post.findMany({
                where: {
                    title: {
                        startsWith: title
                    }
                }
            })
            return posts
        })

        server.get('/posts/user/:userId', async (request) => {
            // define um objeto zod contendo o esquema de dados
            const userIdParam = z.object({
                userId: z.string()
            })
            // recupera o dado do frontend a partir do zod titleParam
            // converte o texto enviado pelo frontend para a variável title
            const {userId} = userIdParam.parse(request.params)

            const posts = await prisma.post.findMany({
                where: {
                    userId: Number(userId)     
                }          
                })
            return posts
        })



        // rota para criação de um post, adição de um post no banco - verbo post
        server.post('/post', async (request) => {
            // define um objeto zod contendo o esquema de dados
            const postBody = z.object({
                title: z.string(),
                content: z.string(),
                likes: z.number(),
                published: z.boolean(),
                userId: z.number()
            })
            // recupera o dado do frontend a partir do zod postBody
            // converte o texto enviado pelo frontend para as variáveis title, content e published
            const {title, content, likes, published, userId} = postBody.parse(request.body)
            // cria um novo post no banco de dados
            const newPost = await prisma.post.create({
                data: {
                    title,
                    content,
                    likes,
                    published,
                    userId
                }
            })

            return newPost // retorna o novo post criado
        })

        // rota para atualizar o conteúdo de um post
        server.patch('/post/content', async (request) => {
            // cria um objeto zod para definir um esquema de dad0s
            const contentBody = z.object({
                id: z.number(),
                content: z.string()
            })
            // recupera os dados do frontend
            const {id, content} = contentBody.parse(request.body)
            // atualiza no banco de dados
            const postUpdated = await prisma.post.update({
                where: {
                    id: id
                },
                data: {
                    content: content
                }
            })
            return postUpdated
        })

        // rota para remover um post do banco de dados
        server.delete('/post/:id', async (request) => {
            // criar objeto zod para esquema de dados
            const idParam = z.object({
                id: z.string()
            })
            // recupera o id do frontend
            const {id} = idParam.parse(request.params)

        const idNumber = Number(id)
            // remove do banco de dados
            const postDeleted = await prisma.post.delete({
                where: {
                    id: idNumber
                }
            })
            return postDeleted
        })

        // rota para atualizar N campos de um post
        server.put('/post', async (request) => {
            // objeto zod para o corpo da requsição
            const putBody = z.object({
                "id": z.number(),
                "title": z.string(),
                "content": z.string(),
                "likes": z.number(),
                "published": z.boolean()
            })
            // recupera os dados do frontend
            const {id, title, content, likes, published} = putBody.parse(request.body)

            // atualiza no banco de dados
            const resposta = await prisma.post.updateMany({
                where: {
                    id: Number(id)
                },
                data: {
                    title,
                    content,
                    likes, 
                    published: Boolean(published)
                }
            })
            return (resposta.count >= 1) ?  'atualização com sucesso' :  'nada foi atualizado'
        })

        // rota para criar user
        server.post('/user', async (request) => {
            const userBody = z.object({
                username: z.string(),
                password: z.string(),
                email: z.string()
            })

            let {username, password, email} = userBody.parse(request.body)

            const newUser = await prisma.user.create({
                data: {
                    username,
                    password,
                    email
                }
            })
            return newUser
        })

        // rota que consulta os usuários
        server.get('/users', async () => {
            const users = await prisma.user.findMany()
            return users
        })

         // verifica se usuário e senha estão OK
         server.post('/user/verifica', async (request) => {
        const verificaBody = z.object({
            username: z.string(),
            password: z.string()
        })
        const {username, password} = verificaBody.parse(request.body)
        const result = await prisma.user.findFirst({
            where: {
                username,
                password
            }
        })
        return result // retorna null se não encontrar e o objeto se encontra
})

 // rota pra atualizar a quantidade em estoque - compra
 server.patch('/post/gostar', async (request) => {
    const compraBody = z.object({
        id: z.number(),
        x: z.number()
    })
    const {id, x} = compraBody.parse(request.body)

    let postUpdated = await prisma.post.update({
        where: {
            id: id
        },
        data: {
            likes: {
                increment: x
            }
        }
    })
    return postUpdated
})

// rota pra atualizar a quantidade em estoque - compra
server.patch('/post/desgostar', async (request) => {
    const compraBody = z.object({
        id: z.number(),
        x: z.number()
    })
    const {id, x} = compraBody.parse(request.body)

    let postUpdated = await prisma.post.updateMany({
        where: {
            id: id,
            likes: {
                gte: x // greater than or equal
            }
        },
        data: {
            likes: {
                decrement: x
            }
        }
    })
    return postUpdated
})


}

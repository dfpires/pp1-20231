// importa dependência fastify
import Fastify from 'fastify'
// cria um objeto da classe Fastify
const server = Fastify()
// cria a rota /hello com o verbo get (consulta)
server.get('/hello', () => {
    return 'Hello, good night'
})

// sobe o servidor e fica ouvindo na porta 3333
server.listen({
    port: 3333
})
.then( () => {
    console.log('HTTP Server running on port 3333')
})
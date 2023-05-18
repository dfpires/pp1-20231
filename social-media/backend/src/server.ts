// importa dependência fastify
import Fastify from 'fastify'
// importa as rotas
import {AppRoutes} from './routes'
// importa a dependência cors
import cors from '@fastify/cors'

// cria um objeto da classe Fastify
const server = Fastify()
// registra cors no server
server.register(cors)
// registra as rotas
server.register(AppRoutes)

// sobe o servidor e fica ouvindo na porta 3333
server.listen({
    port: 3333
})
.then( () => {
    console.log('HTTP Server running on port 3333')
})
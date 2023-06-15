// importanto fastfy para facilitar na criação da aplicação (API RESTful)
import fastify from 'fastify'
// Acessar o banco de dados de dentro do servidor (API)
import { PrismaClient } from '@prisma/client'

// declarando a variável (app) que executa as funções do framework fastify
const app = fastify()
// criando conexão com o banco
const prisma = new PrismaClient()

// Criando uma rota pro usuário poder acessar à API (HTTP Method: GET)
app.get('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})

// criando servidor pra ouvir as requisições na url específica localhost:3333
// listen devolve uma promisse (significa que pode demorar pra executar)
// toda promise pode concatenar um método .then que permite ouvir quando terminar de exutar o servidor(servidor no ar)
app
  .listen({
    port: 8888,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:8888')
  })

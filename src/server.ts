import fastify from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'
import { env } from './env.index'

const app = fastify()

app.get('/hello', async () => {
  const transactions = knex('transactions').select('*')

  return transactions
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('server is running!!!')
  })

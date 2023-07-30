import fastify from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'

const app = fastify()

app.get('/hello', async () => {
  const transactions = knex('transactions').select('*')

  return transactions
})

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log('server is running!!!')
  })

import 'dotenv/config'

import fastify from 'fastify'
import { repoRoutes } from './routes/repo'

const app = fastify({
  logger: true,
})

app.register(repoRoutes, {
  prefix: '/repos',
})

app.get('/health', async (_, reply) => {
  return reply.send({ status: 'ok' })
})

app.listen({
  port: 3333,
})

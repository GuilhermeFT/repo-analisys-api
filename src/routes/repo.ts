import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { Repo } from '../controllers/repository'
import { Repository } from '../controllers/repository/types'
import { marked } from 'marked'
import { Images } from '../controllers/images'

export const repoRoutes = async (app: FastifyInstance) => {
  app.post('/', async (request, reply) => {
    const body = z.object({
      owner: z
        .string({
          required_error: 'Owner is required',
        })
        .min(1),
      title: z
        .string({
          required_error: 'Title is required',
        })
        .min(1),
      description: z.string().optional(),
      userExcerpt: z.string().optional(),
      packageJson: z
        .string({
          required_error: 'Package JSON is required',
        })
        .min(1),
    })

    const data = body.safeParse(request.body)

    if (!data.success) {
      console.log(data.error.flatten())
      return reply.status(400).send({
        errors: data.error.flatten().fieldErrors,
      })
    }

    const repository = new Repo(data.data)

    return { data: await repository.createReadme() }
  })

  app.post('/screenshot', async (request, reply) => {
    const body = z.object({
      url: z
        .string({
          required_error: 'URL is required',
        })
        .min(1),
    })

    const data = body.safeParse(request.body)

    if (!data.success) {
      console.log(data.error.flatten())
      return reply.status(400).send({
        errors: data.error.flatten().fieldErrors,
      })
    }

    const image = new Images({
      appUrl: data.data.url,
    })

    const screenshot = await image.createImage()

    return reply.type('image/png').send(screenshot)
  })
}

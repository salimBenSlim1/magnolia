import dbConnect from '~/server/utils/db'
import Product from '~/server/models/Products'

export default defineEventHandler(async (event) => {
  await dbConnect()
  const id = event.context.params?.id
  const method = event.method

  if (method === 'GET') return await Product.findById(id)
  if (method === 'PUT') {
    const body = await readBody(event)
    return await Product.findByIdAndUpdate(id, body, { new: true })
  }
  if (method === 'DELETE') return await Product.findByIdAndDelete(id)
})

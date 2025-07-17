import dbConnect from '~/server/utils/db'
import Product from '~/server/models/Products'

export default defineEventHandler(async (event) => {
  await dbConnect()
  const body = await readBody(event)
  const newProduct = await Product.create(body)
  return newProduct
})

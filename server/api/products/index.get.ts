import dbConnect from '~/server/utils/db'
import Product from '~/server/models/Products'

export default defineEventHandler(async () => {
  await dbConnect()
  return await Product.find()
})

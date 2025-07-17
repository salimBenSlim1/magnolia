import dbConnect from '~/server/utils/db'
import User from '~/server/models/Users'

export default defineEventHandler(async (event) => {
 
  await dbConnect()
  return await User.find()
})

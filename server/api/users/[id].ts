import dbConnect from '~/server/utils/db'
import User from '~/server/models/Users'

export default defineEventHandler(async (event) => {
  await dbConnect()
  const id = event.context.params?.id
  const method = event.method

  if (method === 'GET') return await User.findById(id)
  if (method === 'PUT') {
    const body = await readBody(event)
    return await User.findByIdAndUpdate(id, body, { new: true })
  }
  if (method === 'DELETE') return await User.findByIdAndDelete(id)
})

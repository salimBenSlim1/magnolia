import dbConnect from '~/server/utils/db'
import User from '~/server/models/Users'
import bcrypt from 'bcryptjs'
export default defineEventHandler(async (event) => {
  await dbConnect()
  
  const method = event.method
  const user= event.context.user
  console.log(event.node.req.url)
  if (method === 'GET') return await User.findById(user.userId).select('-password')
  if (method === 'PUT'&&event.node.req.url==='/api/users/update') {
    
    const body = await readBody(event)
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(body.password, salt)
    body.password = hashedPassword
    return await User.findByIdAndUpdate(user.userId, body, { new: true })
  }
  if (method === 'PUT'&&event.node.req.url==='/api/users/update-cart') {
    
    const body = await readBody(event)
    
    return await User.findByIdAndUpdate(user.userId, { $push: {cart: body} }, { new: true })
  }
  if (method === 'PUT'&&event.node.req.url==='/api/users/remove-cart') {
    
    const body = await readBody(event)
    return await User.findByIdAndUpdate(user.userId, { $pull: {cart: body} }, { new: true })
  }
  if (method === 'DELETE') return await User.findByIdAndDelete(user.userId)
})

import dbConnect from '~/server/utils/db'
import User from '~/server/models/Users'
import bcrypt from 'bcryptjs'

export default defineEventHandler(async (event) => {
  // Step 1: Connect to the database
  await dbConnect()

  // Step 2: Get the body from the request (user data)
  const body = await readBody(event)

  // Step 3: Generate a salt (with 10 rounds of salting)
  const salt = await bcrypt.genSalt(10)

  const hashedPassword = await bcrypt.hash(body.password, salt)

  // Step 5: Create a new user in the database with the hashed password
  const newUser = await User.create({
    ...body,      // Spread the user data
    password: hashedPassword 
  })

  return newUser
})

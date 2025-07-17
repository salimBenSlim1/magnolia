// server/api/auth/login.post.ts
import dbConnect from '~/server/utils/db'
import User from '~/server/models/Users'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
  await dbConnect()
  const body = await readBody(event)
  const { email, password } = body

  const user = await User.findOne({ email })
  if (!user) {
    return createError({ statusCode: 401, statusMessage: 'Invalid credentials' })
  }

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    return createError({ statusCode: 401, statusMessage: 'Invalid credentials' })
  }

  // Create JWT
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
    expiresIn: '7d',
  })
  // Set HttpOnly cookie
  setCookie(event, 'token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })

  return {
    message: 'Login successful',
    user: {
      _id: user._id,
      email: user.email,
      name: user.name,
    },
  }
})

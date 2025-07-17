import { defineEventHandler, getCookie, createError, sendRedirect } from 'h3'
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
  const url = event.node.req.url || ''
  const method = event.node.req.method || 'GET'

  // ✅ Public API routes
  if (
    url.startsWith('/api/auth') ||                  // auth API
    url.startsWith('/auth') ||                      // frontend auth pages
    (url.startsWith('/api/users') && method === 'POST')  // allow creating user
  ) {
    return
  }

  const token = getCookie(event, 'token')

  if (!token) {
    return sendRedirect(event, '/auth/login')
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET!)
    event.context.user = user
    // if (user.role !== 'admin'&& url.startsWith('/api/users')&& method !== 'GET') {
    //   return sendRedirect(event, '/auth/login')
    // }
  } catch (err) {
    throw createError({ statusCode: 401, statusMessage: 'Invalid token' })
  }
})

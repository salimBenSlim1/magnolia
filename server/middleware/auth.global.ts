// server/middleware/auth.global.ts
import { defineEventHandler, getCookie, createError } from 'h3'
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'token')
  // Only protect specific routes
  const url= event.node.req.url||""
    if (url.startsWith('/') || url.startsWith('/api/public')) return
    if (!token) {
        return sendRedirect(event, '/')
    }

    try {
      const user = jwt.verify(token, process.env.JWT_SECRET!)
    
      // Attach user to event for later use
      event.context.user = user
    } catch (err) {
      throw createError({ statusCode: 401, statusMessage: 'Invalid token' })
    }
  
})

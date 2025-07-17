// server/api/upload.post.ts
import { IncomingForm } from 'formidable'
import fs from 'fs'

// Prevent Nitro from trying to read body itself
export const config = {
  api: {
    bodyParser: false
  }
}

export default defineEventHandler(async (event) => {
  const form = new IncomingForm({ keepExtensions: true })

  const { files, fields }: any = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      if (err) reject(err)
      else resolve({ fields, files })
    })
  })
  // Access file and other form fields

  console.log(files.PersistentFile)
  const file = files.filepath // or whatever name you used in <input name="photo">
  console.log('Uploaded file:', file)

  return {
    message: 'File received',
    fileInfo: {
      originalFilename: file.originalFilename,
      size: file.size,
      filepath: file.filepath
    }
  }
})

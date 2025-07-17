import mongoose from 'mongoose'

export default async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return
  try {
    await mongoose.connect(process.env.MONGO_URI||'mongodb://localhost:27017/', {
      dbName: 'ecommerce',
    })
    console.log('✅ MongoDB connected')
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err)
    throw err
  }
}
import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  stock: Number,
  images: [String],
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true })

export default mongoose.models.Product || mongoose.model('Product', productSchema)
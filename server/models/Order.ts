import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  txHash: { type: mongoose.Schema.Types.String },
  userWallet: { type: mongoose.Schema.Types.String },
  orderId: { type: mongoose.Schema.Types.String },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number,
    priceAtPurchase: Number
  }],
  total: Number,
  paymentStatus: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
  blockchainTxHash: String,
}, { timestamps: true })

export default mongoose.models.Order || mongoose.model('Order', orderSchema)

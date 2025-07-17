import dbConnect from '../server/utils/db'
import Product from '../server/models/Products'
import User from '../server/models/Users'
import Order from '../server/models/Order'

async function syncDb() {
  await dbConnect()
  console.log('🛠 MongoDB connected.')

  // Optional: test insert one dummy item for each model
  await Promise.all([
    Product.init(),
    User.init(),
    Order.init(),
  ])

  console.log('✅ Models initialized. Collections ensured (if used).')
  process.exit(0)
}

syncDb().catch((err) => {
  console.error('❌ Sync failed:', err)
  process.exit(1)
})

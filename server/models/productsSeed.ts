import mongoose from 'mongoose'
import Product from './Products' // adjust path as needed
import dotenv from 'dotenv'

dotenv.config()

const MONGODB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/your-db-name'
const products = [
  {
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 99.99,
    images: [
      "https://res.cloudinary.com/demo/image/upload/v1700000000/products/headphones1.jpg"
    ],
    stock: 25,
    category: "Electronics",
    sellerId: "68155b60dd5f1610a8590a0b",
    createdAt: new Date()
  },
  {
    name: "Running Shoes",
    description: "Lightweight and comfortable running shoes for daily training.",
    price: 59.99,
    images: [
      "https://res.cloudinary.com/demo/image/upload/v1700000000/products/shoes1.jpg"
    ],
    stock: 40,
    category: "Footwear",
    sellerId: "68155b60dd5f1610a8590a0b",
    createdAt: new Date()
  },
  {
    name: "Smart Watch",
    description: "Track your fitness, heart rate, and notifications.",
    price: 149.99,
    images: [
      "https://res.cloudinary.com/demo/image/upload/v1700000000/products/smartwatch1.jpg"
    ],
    stock: 15,
    category: "Wearables",
    sellerId: "68155b60dd5f1610a8590a0b",
    createdAt: new Date()
  },
  {
    name: "Gaming Mouse",
    description: "Ergonomic mouse with customizable DPI and RGB lighting.",
    price: 39.99,
    images: [
      "https://res.cloudinary.com/demo/image/upload/v1700000000/products/mouse1.jpg"
    ],
    stock: 60,
    category: "Accessories",
    sellerId: "68155b60dd5f1610a8590a0b",
    createdAt: new Date()
  }
]

const seed = async () => {
    console.log('MONGODB_URI', MONGODB_URI)

  try {
    await mongoose.connect(MONGODB_URI)
    
    await Product.insertMany(products)
    console.log('✅ Products seeded!')
    process.exit()
  } catch (error) {
    console.error('❌ Error seeding products:', error)
    process.exit(1)
  }
}

seed()

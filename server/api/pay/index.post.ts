import dbConnect from '~/server/utils/db'
import Order from '~/server/models/Order'

export default defineEventHandler(async (event) => {
  try {
    await dbConnect()
    const body = await readBody(event)

    const { txHash, userWallet, orderId } = body

    if (!txHash || !userWallet || !orderId) {
      throw createError({
        statusCode: 400,
        message: 'Missing required fields',
      })
    }

    const newOrder = await Order.create({
      txHash,
      userWallet,
      orderId,
      status: 'pending', // or update based on actual payment status
    })

    return { success: true, orderId: newOrder._id }
  } catch (err: any) {
    console.error('ORDER API ERROR:', err)
    throw createError({
      statusCode: 500,
      message: 'Internal Server Error',
    })
  }
})

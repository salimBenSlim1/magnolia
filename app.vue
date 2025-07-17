<template>
  <div>
    <h2>Checkout</h2>
    <button @click="handlePayment">Pay with Blockchain</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBlockchainPayment } from '~/composables/useBlockchainPayment'

// State
const amount = ref("0.05") // Amount in ETH
const orderId = ref('order123')

// Payment handler
const handlePayment = async () => {
    console.log(amount)
  try {
    const txHash = await useBlockchainPayment(amount.value, orderId.value)
    console.log('Payment successful, transaction hash:', txHash)
  } catch (error) {
    console.error('Payment failed:', error)
  }
}
</script>

import { ethers } from 'ethers'
import { $fetch } from 'ofetch'

export const useBlockchainPayment = async (amountEth: string, orderId: string) => {
  // Check if MetaMask is available
  if (!window.ethereum) throw new Error('MetaMask not found')
    console.log(amountEth,typeof(amountEth))
  // Create provider and signer for interacting with the Ethereum network
  const provider = new ethers.BrowserProvider(window.ethereum)
  const signer = await provider.getSigner()

  // Get the user's wallet address
  const userWallet = await signer.getAddress()

  // Send the transaction to your wallet address
  const tx = await signer.sendTransaction({
    to: '0x4E0D8AdAa6f36961fc7eA14d01548E2646a06e76', // Replace with your wallet address
    value: ethers.parseEther(amountEth), // Convert the ETH amount to the correct format
  })

  // Wait for the transaction to be mined (optional)
  await tx.wait()

  // Send the transaction hash, user wallet, and order ID to your backend
  await $fetch('http://localhost:3000/api/pay', {
    method: 'POST',
    body: {
      txHash: tx.hash,
      userWallet,
      orderId,
    },
  })

  return tx.hash // Return transaction hash
}

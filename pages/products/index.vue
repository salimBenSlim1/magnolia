<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Products</h1>
    <table class="min-w-full border border-gray-300 shadow-md rounded-lg overflow-hidden">
      <thead class="bg-gray-100">
        <tr>
          <th class="text-left px-4 py-2 border-b">Image</th>
          <th class="text-left px-4 py-2 border-b">Name</th>
          <th class="text-left px-4 py-2 border-b">Price</th>
          <th class="text-left px-4 py-2 border-b">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in products"
          :key="product._id"
          class="hover:bg-gray-50"
        >
          <td class="px-4 py-2 border-b">
            <img
              class="w-16 h-16 object-cover rounded"
              :src="product.images[0]"
              alt="Product image"
            />
          </td>
          <td class="px-4 py-2 border-b">{{ product.name }}</td>
          <td class="px-4 py-2 border-b">{{ product.price }} DZD</td>
          <td class="px-4 py-2 border-b">
            <nuxt-link
              class="text-blue-500 hover:underline"
              :to="'/products/' + product._id"
            >
              View Details
            </nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const products = ref([])

onMounted(async () => {
  const res = await $fetch('/api/products')
  products.value = res
})
</script>

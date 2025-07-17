<template>
   <div>
        <h1 class="text-2xl font-bold mb-4">Cart</h1>
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
                <tr v-for="item in cartItems" :key="item._id" class="hover:bg-gray-50">
                    <td class="px-4 py-2 border-b">
                        <img
                            class="w-16 h-16 object-cover rounded"
                            :src="item.img"
                            alt="Product image"
                        />
                    </td>
                    <td class="px-4 py-2 border-b">{{ item.productName }}</td>
                    <td class="px-4 py-2 border-b">{{ item.price }} DZD</td>
                    <td class="px-4 py-2 border-b">
                        <nuxt-link
                            class="text-blue-500 hover:underline"
                            :to="'/products/' + item._id"
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
const cartItems = ref([])
onMounted(async () => {
    const res = await $fetch('/api/users/fv')
    cartItems.value = res.cart
})

</script>

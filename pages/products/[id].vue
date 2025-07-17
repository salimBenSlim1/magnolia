<template>
 <HomeNav/>
 <ProductsItem />
  <HomeFooter/>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const products = ref({})
const quantity = ref(1)
const route = useRoute()
const params = route.params.id
onMounted(async () => {
  const res = await $fetch('/api/products/' + params)
  products.value = res
console.log(res)
})
const handleAddToCart = async () => {
  const res = await $fetch('/api/users/update-cart', {
    method: 'PUT',
    body: {_id:products.value._id, productName:products.value.name,price:products.value.price,img:products.value.images, quantity: quantity.value },
  })
  console.log(res)
}
</script>

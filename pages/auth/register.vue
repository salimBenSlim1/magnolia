<template>
 <HomeNav/>
  <AuthRegister/>
<HomeFooter/>  
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { navigateTo } from '#app'
import { $fetch } from 'ofetch'
const email = ref('')
const password = ref('')
const username = ref('')
onMounted(async() => {
  // Check if user is already logged in
  const res=await $fetch('/api/me',{
    method:"GET",
  })
  if (res.authenticated){
    await navigateTo('/home')
  }
})
const handleLogin = async () => {
  try {
    const res = await $fetch('/api/users', {
      method: 'POST',
      body: {
        username: username.value,
        email: email.value,
        password: password.value
      },
    })
    await navigateTo('/auth/login') 
  } catch (err) {
    console.error('Login failed:', err)
  }
}
</script>


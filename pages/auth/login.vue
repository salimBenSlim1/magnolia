<template>
<HomeNav/>
<AuthLogin/>
<HomeFooter/>  
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { navigateTo } from '#app'
import { $fetch } from 'ofetch'

interface MeResponse {
  authenticated: boolean
  user?: {
    id: string
    email: string
    // add any other fields you expect
  }
}

const email = ref('')
const password = ref('')
const message = ref('')
onMounted(async() => {
  // Check if user is already logged in
  const res=await $fetch<MeResponse>('/api/me',{
    method:"GET",
  })
  if (res.authenticated){
    await navigateTo('/home')
  }
})
const handleLogin = async () => {
  try {
   const res = await $fetch('/api/auth', {
  method: 'POST',
  body: {
    email: email.value,
    password: password.value
  },
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include',
})


    // Simulated response check — adapt based on your actual API
    if ((res as any).status === 401) {
      message.value = 'Invalid email or password'
      return
    }

    await navigateTo('/home')
  } catch (err: any) {
    message.value = err?.data?.message || 'An error occurred during login.'
  }
}
</script>

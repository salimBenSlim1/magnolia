<script setup>
const email = ref('');
const password = ref('');
const login = async(e) => {
  e.preventDefault();
  try {
    const res=await $fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify({
        email:email.value ,
         password: password.value
      })
    });
    
    if (res.message === 'Login successful') {
     await navigateTo('/home')
    } 
    
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
    <div class="h-full w-full grid grid-cols-1 md:grid md:grid-cols-2">
    <!-- Left Image Section -->
    <div class="  " :style="{backgroundImage:`'url('/images/login.png')`}" >
      <img src="../../public/images/login.png" alt="Phone with cart"  />
    </div>

    <!-- Right Form Section -->
    <div class="flex items-center justify-center px-6 md:px-20">
      <div class="w-full max-w-md">
        <h2 class="text-2xl font-bold mb-2">Log in to Exclusive</h2>
        <p class="text-sm text-gray-600 mb-6">Enter your details below</p>

        <form class="space-y-4" @submit="login">
        <input v-model="email" type="email" placeholder="Email or Phone Number" class="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 placeholder-gray-500" />
          <input v-model="password" type="password" placeholder="Password" class="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 placeholder-gray-500" />
            <div class="flex justify-between">

          <button type="submit" class="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-md cursor-pointer">Log In</button>
          <button type="submit" class="w-full   text-red-600 font-medium py-2 rounded-md cursor-pointer">forget password ?</button>
            </div>

          <button type="button" class="w-full cursor-pointer border border-gray-300 py-2 rounded-md flex items-center justify-center gap-2">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google icon" class="w-5 h-5" />
            <span>Log in with Google</span>
          </button>
        </form>

        <p class="text-sm text-center text-gray-600 mt-6">
          Don't have account?
          <NuxtLink to='/auth/register'  class="text-black font-medium hover:underline">
          Register
            </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
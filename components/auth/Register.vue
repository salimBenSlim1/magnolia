<script setup>
const email = ref('');
const password = ref('');
const name = ref('');
const register = async(e) => {
  e.preventDefault();
  try {
    const res=$fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username:name.value,
        email:email.value ,
         password: password.value
      })
    });
    if (res.status === 200) {
     await navigateTo('/auth/login')
    } 
    
  } catch (error) {
    
  }
  console.log(res)
};
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
        <h2 class="text-2xl font-bold mb-2">Create an account</h2>
        <p class="text-sm text-gray-600 mb-6">Enter your details below</p>

        <form class="space-y-4" @submit="register">
          <input v-model="name" type="text" placeholder="Name" class="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 placeholder-gray-500" />
          <input v-model="email" type="email" placeholder="Email or Phone Number" class="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 placeholder-gray-500" />
          <input v-model="password" type="password" placeholder="Password" class="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 placeholder-gray-500" />

          <button type="submit" class="w-full cursor-pointer bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-md">Create Account</button>

         
        </form>

        <p class="text-sm text-center text-gray-600 mt-6">
          Already have account?
          <NuxtLink class="text-black font-medium hover:underline" to='/auth/login'>
          Log in</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
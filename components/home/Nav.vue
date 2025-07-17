<script setup>
import { onMounted, ref } from "vue";
const auth=ref(false)
const slider=ref(false)
onMounted(async() => {
    console.log('first')
  const res=await $fetch('/api/me', {
    method: 'GET',
  })
  if (res.authenticated){
    auth.value=true
  }
});
const toggleSlider=()=>{
  slider.value=!slider.value
}


</script>
<template>
<div class="flex flex-col border-b-1 border-b-gray-300" >
    <div class="bg-black gap-5 font-semibold  text-[10px] md:text-[15px] text-white  w-full h-15 flex justify-center items-center">
        <h1>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
        <button class="underline cursor-pointer">shop now</button>
    </div>
        <!-- //Mobile device -->
    <div class="flex justify-between items-center  p-7">
        <div class="font-bold text-2xl ">
            <h1>Exclusive</h1>
        </div>
 <div class=" gap-5 flex  font-semibold max-sm:hidden md:visible  "
    
        >
            <h1 class="cursor-pointer hover:underline transition-all duration-300 ease-in-out">Home</h1>
            <h1 class="cursor-pointer hover:underline transition-all duration-300 ease-in-out">Contact</h1>
            <h1 class="cursor-pointer hover:underline transition-all duration-300 ease-in-out">About</h1>
            <h1 class="cursor-pointer hover:underline transition-all duration-300 ease-in-out">Sign Up</h1>
        </div>
        <div class="bg-gray-200 flex text-[10px]">

    <input type="text" placeholder="what are you looking for?" 
    class="rounded-md focus:outline-none   w-7/8 h-10 px-5" />
       <svg
       class="w-5"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</div>
        <div class="w-[40px] cursor-pointer md:hidden">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>
        </div>
        <div class="max-sm:hidden flex gap-5 px-10 ">
          

            <svg 
            class="w-7 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
           


<svg xmlns="http://www.w3.org/2000/svg" 

            class="w-7 cursor-pointer"
fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>


    <div  
    @click="toggleSlider"
    class="rounded-full text-white bg-red-600 flex justify-center items-center w-7">

       <svg 
       v-if="auth"
        class="w-5 cursor-pointer"
       xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>
 <div v-if="slider" class="absolute  right-15 top-36 mt-2 w-64 rounded-lg shadow-lg backdrop-blur-md bg-gradient-to-br from-white/10 to-purple-500/20 text-white p-4 space-y-4 z-50">
    <div class="flex items-center gap-3 cursor-pointer hover:text-purple-200">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"/>
      </svg>
      <span>Manage My Account</span>
    </div>

    <div class="flex items-center gap-3 cursor-pointer hover:text-purple-200">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M20.25 6.75H3.75v10.5h16.5V6.75zM5.25 9h2.25M5.25 12h2.25"/>
      </svg>
      <span>My Order</span>
    </div>

    <div class="flex items-center gap-3 cursor-pointer hover:text-purple-200">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"/>
      </svg>
      <span>My Cancellations</span>
    </div>

    <div class="flex items-center gap-3 cursor-pointer hover:text-purple-200">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.43 4.402a1 1 0 00.95.69h4.631c.969 0 1.371 1.24.588 1.81l-3.75 2.726a1 1 0 00-.364 1.118l1.43 4.401c.3.922-.755 1.688-1.538 1.118l-3.75-2.726a1 1 0 00-1.176 0l-3.75 2.726c-.783.57-1.838-.196-1.538-1.118l1.43-4.401a1 1 0 00-.364-1.118L2.37 9.829c-.783-.57-.38-1.81.588-1.81h4.63a1 1 0 00.951-.69l1.43-4.402z"/>
      </svg>
      <span>My Reviews</span>
    </div>

    <div class="flex items-center gap-3 cursor-pointer hover:text-purple-200">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l3 3m0 0l-3 3m3-3H3"/>
      </svg>
      <span>Logout</span>
    </div>
  </div>
    </div>



        </div>

       

    </div>
</div>
</template>
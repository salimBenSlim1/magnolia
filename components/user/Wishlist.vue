<template>
    <div class="p-20">
        <div class="flex justify-between w-full h-full">
            <h1>Wishlist (4)</h1>
            <div
            class="text-black flex justify-center items-center font-semibold cursor-pointer md:w-[150px] md:h-[50px]  rounded-sm border border-black"
            >Move All To Bag</div>
        </div>
        <div class="grid grid-cols-1 ">
            <HomeItems/>
        </div>
          <div class="w-[90%] ml-[5%] mt-30 mb-20">
    <div class="flex flex-col gap-y-5 w-full">
        <div class="flex justify-between">
            <div>
      <div class="flex font-semibold justify-start text-[#DB4444] items-center gap-6">
        <div class="w-[20px] h-[25px] rounded-sm bg-[#DB4444]"></div>
        <h1>Just For You</h1>
      </div>

            </div>
             <div
            class="text-black flex justify-center items-center font-semibold cursor-pointer md:w-[150px] md:h-[50px]  rounded-sm border border-black"
            >See All</div>
        </div>
     

      <!-- Render Categories -->
      <HomeItems/>

    </div>
  </div>
    </div>
</template>
<script setup>

</script>

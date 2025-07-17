<script setup>

</script>
<template>
    <div class="w-[90%] ml-[5%] mt-30">
    <div class="flex flex-col gap-y-5 w-full">
        <div class="flex font-semibold  justify-start text-[#DB4444] items-center gap-6">
        <div class="w-[20px] h-[25px] rounded-sm bg-[#DB4444]"></div>
        <h1>Featured</h1>
        </div>
        <div class="font-bold text-2xl justify-between flex w-full">
            <h1>New Arrival</h1>
        </div>
        <div class="grid grid-rows-[440px,400px] gap-10 md:grid md:grid-cols-2">
            <div
    class="bg-cover relative bg-center flex items-end justify-starts text-white h-96 md:h-[670px] w-full rounded-lg"
    :style="{ backgroundImage: `url('/images/play5.png')` }"
  >
        <div class="flex flex-col gap-y-5 p-10 items-start">
            <h3 class="text-[20px] md:text-[30px] font-bold">PlayStation 5</h3>
            <p>Black and White version of the PS5<br/> coming out on sale.</p>
            <!-- onclick here -->
            <button class="underline">shop now</button>
        </div>
  </div>
  <div class="flex flex-col gap-y-5">
            <div
    class="bg-cover relative bg-center flex items-end justify-starts text-white h-96 md:h-[350px] w-full rounded-lg"
    :style="{ backgroundImage: `url('/images/women.png')` }"
  >
        <div class="flex flex-col gap-y-5 p-10 items-start">
            <h3 class="text-[20px] md:text-[30px] font-bold">Women’s Collections</h3>
            <p>Featured woman collections that give you<br/> another vibe. </p>
            <!-- onclick here -->
            <button class="underline">shop now</button>
        </div>
  </div>
  <div class="flex gap-5">
       <div
    class="bg-cover relative bg-center flex items-end justify-starts text-white h-70 md:h-[300px] w-full rounded-lg"
    :style="{ backgroundImage: `url('/images/speaker.png')` }"
  >
        <div class="flex flex-col gap-y-1 p-3 items-start">
            <h3 class="text-[15px] md:text-[20px] font-bold">Speakers</h3>
            <p>Amazon wireless speakers</p>
            <!-- onclick here -->
            <button class="underline">shop now</button>
        </div>
  </div>
     <div
    class="bg-cover relative bg-center flex items-end justify-starts text-white h-70 md:h-[300px] w-full rounded-lg"
    :style="{ backgroundImage: `url('/images/gucci.png')` }"
  >
        <div class="flex flex-col gap-y-1 p-3 items-start">
            <h3 class="text-[15px] md:text-[20px] font-bold">Perfume</h3>
            <p>GUCCI INTENSE OUD EDP</p>
            <!-- onclick here -->
            <button class="underline">shop now</button>
        </div>
  </div>

  </div>
  </div>
        </div>
        </div>
        </div>
</template>
<script setup>

</script>
<template>
    <div class="w-[90%] ml-[5%] mt-30">
    <div class="flex flex-col gap-y-5 w-full">
        <div class="flex font-semibold  justify-start text-[#DB4444] items-center gap-6">
        <div class="w-[20px] h-[25px] rounded-sm bg-[#DB4444]"></div>
        <h1>This Month</h1>
        </div>
        <div class="font-bold text-2xl justify-between flex w-full">
            <h1>Best Selling Products</h1>
            
            
            <button
            class="text-white cursor-pointer bg-[#DB4444] px-5 py-2 rounded-sm text-[10px] md:text-[15px]">
            View All</button>
        </div>
        <!-- make a component like homeitems -->
       <HomeItems/>

        </div>    
       
    </div>
</template>
<template>
    <div class="p-5 md:p-20 flex flex-col">
    <h1 class="mb-[80px]"><span class="text-gray-400">Home / </span> Cart</h1>
<div class=" flex flex-col gap-y-5">
    <div class="shadow-md  p-6 flex justify-between items-center">
        <h1>Product</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>Total</h1>
    </div>
        <div class="shadow-md  p-6 flex justify-between items-center">
        <!-- //map here for the cart items -->
        </div>
     <div class="flex justify-between gap-[60%]">
        <div class="flex gap-5 max-sm:hidden w-full">
            <input type="text" placeholder="Coupon Code" class="border border-gray-400 rounded-md  w-full h-14   px-5" />
            <div class="text-black flex justify-center items-center font-semibold cursor-pointer md:w-[150px] md:h-[50px]  rounded-sm border border-black">
                Apply
            </div>

        </div>
        <div class=" border-black rounded-sm border-2 p-4 w-full">
            <h1 class="font-bold">Cart Total</h1>
            <div class="flex justify-between  border-b-2 border-gray-300 py-2">
                <h1 class="font-semibold">Subtotal:</h1>
                <h1 class="font-semibold">$100</h1>
            </div>
            <div class="flex justify-between  border-b-2 border-gray-300 py-2">
                <h1 class="font-semibold">Shipping:</h1>
                <h1 class="font-semibold">$100</h1>
            </div>
            <div class="flex justify-between py-2">
                <h1 class="font-semibold">Total:</h1>
                <h1 class="font-semibold">$100</h1>
            </div>
            <div class="text-white mx-auto bg-[#DB4444] text-nowrap text-center flex justify-center items-center font-semibold cursor-pointer  md:w-[180px] md:h-[50px]  rounded-sm border border-black">
                Proceed To Checkout
            </div>

        </div>
    </div>
</div>
</div>

</template>
<script setup>

</script>

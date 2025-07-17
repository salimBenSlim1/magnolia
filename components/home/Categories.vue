<script setup>
import { h } from 'vue'

const categories = [
  {
    name: 'Phones',
    icon: () =>
      h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', class: 'w-6 h-6' }, [
        h('path', {
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': 1.5,
          d: 'M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
        })
      ])
  },
  {
    name: 'Computers',
    icon: () =>
      h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', class: 'w-6 h-6' }, [
        h('path', {
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': 1.5,
          d: 'M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25'
        })
      ])
  },
  
  {
    name: 'Cameras',
    icon: () =>
      h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', class: 'w-6 h-6' }, [
        h('path', {
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': 1.5,
          d: 'M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z'
        }),
        h('path', {
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': 1.5,
          d: 'M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z'
        })
      ])
  },
  {
    name: 'Headphones',
    icon: () =>
      h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', class: 'w-6 h-6' }, [
        h('path', {
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': 1.5,
          d: 'M2.25 12a9.75 9.75 0 1 1 19.5 0v3a3 3 0 0 1-3 3v-6h2.25M5.25 12v6a3 3 0 0 1-3-3v-3'
        })
      ])
  },
  {
    name: 'Gaming',
    icon: () =>
      h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', class: 'w-6 h-6' }, [
        h('path', {
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': 1.5,
          d: 'M14.25 14.25 15 15m-5.25-3H9m-2.25 0H6m9.75-3h.008v.008H15.75V9ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
        })
      ])
  },
  
  
  
]
</script>


<template>
  <div class="w-[90%] ml-[5%] mt-30 mb-20">
    <div class="flex flex-col gap-y-5 w-full">
      <div class="flex font-semibold justify-start text-[#DB4444] items-center gap-6">
        <div class="w-[20px] h-[25px] rounded-sm bg-[#DB4444]"></div>
        <h1>Categories</h1>
      </div>
      <div class="font-bold text-2xl justify-between flex w-full">
        <h1>Browse By Categorie</h1>
        <div class="flex gap-1">
          <div class="cursor-pointer rounded-full flex justify-center items-center bg-gray-300 w-[35px] h-[35px]">
            <svg class="w-[15px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
          </div>
          <div class="cursor-pointer rounded-full flex justify-center items-center bg-gray-300 w-[35px] h-[35px]">
            <svg class="w-[15px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Render Categories -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
        <div v-for="(cat, index) in categories" :key="index"
          class="border cursor-pointer md:h-[200px] border-gray-300 p-4 rounded-md flex flex-col items-center justify-center gap-2">
          <div>
            <component :is="cat.icon ? cat.icon : 'img'" :src="cat.image" alt="" class="w-10 h-10" />
          </div>
          <p class="text-center font-medium">{{ cat.name }}</p>
        </div>
      </div>

    </div>
  </div>
   <div class="bg-gray-300 h-[1px] w-[90%] ml-[5%] mb-10" ></div>

</template>

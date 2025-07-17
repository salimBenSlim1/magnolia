<template>
  <div class="bg-blue-100 p-4 rounded shadow text-center">
    <h3 class="text-lg font-bold">{{ data.title }}</h3>
    <p class="text-2xl">{{ data.value }}</p>
  </div>
</template>

<script setup>
defineProps({ data: Object })
</script>

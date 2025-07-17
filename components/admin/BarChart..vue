<template>
  <div class="bg-white p-4 rounded shadow">
    <h3 class="font-semibold mb-2">{{ data.title }}</h3>
    <div class="text-sm text-gray-500">[Bar chart placeholder for {{ data.title }}]</div>
  </div>
</template>

<script setup>
defineProps({ data: Object })
</script>

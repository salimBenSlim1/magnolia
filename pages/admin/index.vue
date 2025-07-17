<template>
  <div class="p-6 space-y-6">
    <h1 class="text-xl font-bold">Smart Dashboard Assistant</h1>
    <div class="flex gap-2">
      <input v-model="adminPrompt" placeholder="Ask something..." class="border rounded px-4 py-2 w-full" />
      <button @click="generateDashboard" class="bg-blue-600 text-black px-4 py-2 rounded">Generate</button>
    </div>

    <div v-if="loading" class="text-gray-500">Loading...</div>

    <div v-if="chartData" class="opacity-0 animate-fade-in transition-all duration-700 ease-in-out">
      <h2 class="text-lg font-semibold mb-4">{{ chartData.title }}</h2>
      <component :is="chartData.type" :data="chartData" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const adminPrompt = ref('')
const chartData = ref(null)
const loading = ref(false)

const componentMap = {
  bar: "AdminBarChart",
  line: "AdminLineChart",
  metric: "AdminMetricCard",
}

const generateDashboard = async () => {
  loading.value = true
  try {
    const res = await $fetch('/api/dashboard-ai', {
      method: 'POST',
      body: { prompt: adminPrompt.value },
    })
    chartData.value = {
      ...res.chart,
      type: componentMap[res.chart.type] || MetricCard,
    }
  } catch (e) {
    console.error('Failed to generate chart:', e)
  } finally {
    loading.value = false
  }
}
</script>

<style>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.7s ease forwards;
}
</style>

<template>
  <TresCanvas clear-color="#000">
    <TresPerspectiveCamera :position="[0, 0, 5]" />
    <TresAmbientLight :intensity="0.5" />
    <TresDirectionalLight :position="[5, 5, 5]" :intensity="1" />

    <TresMesh ref="coin" :rotation="[0, rotationY, 0]">
      <TresCylinderGeometry :args="[1, 1, 0.1, 64]" />
      <TresMeshStandardMaterial color="gold" metalness="1" roughness="0.3" />
    </TresMesh>
  </TresCanvas>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRenderLoop } from '@tresjs/core'

const rotationY = ref(0)

useRenderLoop().onLoop(() => {
  rotationY.value += 0.01
})
</script>

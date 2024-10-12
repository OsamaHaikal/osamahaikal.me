<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <h2 class="section-title text-start underline">
    {{ title }}
  </h2>
</template>

<style scoped>
.section-title {
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 6px;
  text-transform: uppercase;
  text-decoration-color: #192034;
  text-underline-offset: 10px;
}
</style>

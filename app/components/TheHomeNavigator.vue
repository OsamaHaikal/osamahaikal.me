<script setup lang="ts">
import { ref, watch } from 'vue'

const text = ref('')
const fullText = 'cd ..'
const isCompleted = ref(false)

const typeText = () => {
  if (text.value.length < fullText.length) {
    setTimeout(() => {
      text.value = fullText.slice(0, text.value.length + 1)
    }, 100)
  }
  else {
    isCompleted.value = true
  }
}

watch(text, typeText, {
  immediate: true,
})
</script>

<template>
  <div
    class="rounded-lg cursor-pointer"
    @click="navigateTo('/')"
  >
    <div class="font-mono">
      {{ text }}
      <span v-if="isCompleted" class="animate-pulse">▋</span>
    </div>
  </div>
</template>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.animate-pulse {
  animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>

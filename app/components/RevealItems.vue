<template>
  <div>
    <div
      v-for="(child, index) in children"
      :key="index"
      class="animated-item"
      :style="{
        '--delay': `${delay * index}s`,
        '--duration': `${duration}s`,
        '--y-offset': `${yOffset}px`,
      }"
    >
      <component :is="child" />
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  duration = 0.75,
  delay = 0.25,
  yOffset = 50,
  blur = '20px',
} = defineProps<{
  delay?: number
  duration?: number
  yOffset?: number
  blur?: string
}>()

const children = ref<VNode[]>([])
const slots = useSlots()

onMounted(() => {
  children.value = slots.default ? slots.default() : []
})
</script>

<style scoped>
.animated-item {
  position: relative;

  opacity: 0;
  filter: blur(v-bind(blur));
  transform: translateY(var(--y-offset));
  animation: fadeIn var(--duration) ease-out var(--delay) forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}
</style>

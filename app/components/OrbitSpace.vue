<template>
  <svg v-if="path" class="pointer-events-none absolute inset-0 size-full">
    <circle
      class="stroke-slate/10 stroke-1"
      cx="
      50%"
      cy="50%"
      :r="radius"
      fill="none"
    />
  </svg>
  <div
    :style="{
      '--duration': duration,
      '--radius': radius,
      '--delay': -delay,
      '--direction': reverse ? 'reverse' : 'normal',
    }"
    class="absolute flex size-[35px] transform-gpu animate-orbit items-center justify-center rounded-full border-1"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  reverse: { type: Boolean, default: false },
  duration: { type: Number, default: 20 },
  delay: { type: Number, default: 10 },
  radius: { type: Number, default: 50 },
  path: { type: Boolean, default: true },
})

defineOptions({
  inheritAttrs: false,
})
</script>

<style scoped>
@keyframes orbit {
  0% {
    transform: rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg);
  }
}

.animate-orbit {
  animation: orbit calc(var(--duration) * 1s) linear infinite;
  animation-delay: calc(var(--delay) * 1s);
  animation-direction: var(--direction);
}
</style>

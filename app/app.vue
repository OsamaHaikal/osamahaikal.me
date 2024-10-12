<script setup lang="ts">
import '@unocss/reset/tailwind.css'
</script>

<template>
  <main
    class="relative isolate min-h-screen flex flex-col bg-#050505 text-white overflow-hidden text-#0505050e"
  >
    <SupportPalestine />

    <BackgroundGrid />
    <div
      class="relative grid grid-rows-[auto_1fr_auto] grid-cols-1 flex-grow gap-30 max-w-1440px mx-auto w-full px-7 py-10"
    >
      <TheHeader />
      <NuxtPage />
      <TheFooter />
    </div>
  </main>
</template>

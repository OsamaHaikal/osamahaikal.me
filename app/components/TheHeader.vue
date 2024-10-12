<script setup lang="ts">
import { ref } from 'vue'

type NavItem = {
  label: string
  link: string
}

const navItems = ref<NavItem[]>([
  {
    label: 'Resume',
    link: '/resume',
  },
  {
    label: 'Open Source',
    link: '/contributions',
  },
])
</script>

<template>
  <header class="relative flex justify-between">
    <TheHomeNavigator />
    <nav class="flex flex-wrap justify-end gap8 me6">
      <NuxtLink
        v-for="item in navItems"
        :key="item.link"
        :to="item.link"
        class="hover:text-gray-300 transition-colors text-sm md:text-base"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
  </header>
</template>

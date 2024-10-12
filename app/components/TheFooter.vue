<template>
  <footer class="relative z-20 p-4 md:p-5 flex flex-col items-center gap-2">
    <div class="flex gap-4 text-sm md:text-base">
      <a href="#" class="text-gray-400 hover:text-white transition-colors">
        <i class="fab fa-github" /> Github
      </a>
      <a href="#" class="text-gray-400 hover:text-white transition-colors">
        <i class="fab fa-linkedin" /> LinkedIn
      </a>
      <a href="#" class="text-gray-400 hover:text-white transition-colors">
        <i class="fab fa-discord" /> Discord
      </a>
    </div>
    <div class="text-xs md:text-sm text-gray-500">
      Built with Nuxt 3 © Osama Haikal - {{ new Date().getFullYear() }}
    </div>
  </footer>
</template>

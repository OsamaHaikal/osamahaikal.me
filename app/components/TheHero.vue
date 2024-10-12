<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-1 flex-col md:flex-row items-center justify-center md:justify-between gap10"
  >
    <RevealItems class="text-white flex flex-col gap-6 md:gap-10 text-center md:text-start">
      <h1 class="text-3xl md:text-5xl font-bold">
        Osama Haikal
      </h1>
      <p class="text-lg md:text-xl">
        Building new software and technologies is something I enjoy doing
      </p>
      <div id="heroSubDesc" class="space-y-lg md:text-lg max-w-lg">
        <p class="text-base">
          Passionate about open source, and constantly learning and
          adapting.
        </p>
      </div>
    </RevealItems>

    <div class="relative h-64 md:h-80 transition-transform duration-200 ease-out">
      <img src="/osamahaikal.jpg" alt="Osama Haikal" class="size-full">
    </div>
  </div>
</template>

<style scoped>
img {
  --a: 12deg;
  width: 200px;
  aspect-ratio: 1;
  border-radius: 25px;
  transform: perspective(500px) rotate3d(var(--r, 1, -1), 0, calc(var(--i, 1) * var(--a)));
  mask: linear-gradient(135deg, #000c 40%, #000, #000c 60%) 100% 100%/250% 250%;
  transition: .4s;
  cursor: pointer;
}

img:hover {
  --i: -1;
  mask-position: 0 0;
}

@media screen and (max-width: 600px) {
  img {
    --a: 4deg;
    transform: rotate3d(var(--r, 1, -1), 0, calc(var(--i, 1) * var(--a)));
  }
}
</style>

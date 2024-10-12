<script setup lang="ts">
const skills = ref([
  { name: 'Python', icon: 'logos:python', orbit: 1, radius: 60, duration: 12, delay: 0 },
  { name: 'Django', icon: 'logos:django-icon', orbit: 1, radius: 60, duration: 12, delay: 4 },
  { name: 'JavaScript', icon: 'logos:nodejs-icon-alt', orbit: 2, radius: 100, duration: 14, delay: 2 },
  { name: 'TypeScript', icon: 'logos:typescript-icon', orbit: 2, radius: 100, duration: 14, delay: 6 },
  { name: 'TypeScript', icon: 'logos:nestjs', orbit: 2, radius: 100, duration: 14, delay: 12 },
  { name: 'Vue', icon: 'logos:vue', orbit: 2, radius: 80, duration: 14, delay: 10 },
  { name: 'Nuxt', icon: 'logos:nuxt-icon', orbit: 2, radius: 140, duration: 14, delay: 14 },
  { name: 'Nitro', icon: 'unjs:nitro', orbit: 2, radius: 140, duration: 14, delay: 18 },
  { name: 'Git', icon: 'logos:git-icon', orbit: 3, radius: 180, duration: 16, delay: 3 },
  { name: 'AWS', icon: 'logos:aws', orbit: 3, radius: 180, duration: 16, delay: 7 },
  { name: 'Docker', icon: 'logos:docker-icon', orbit: 3, radius: 180, duration: 16, delay: 11 },
])
</script>

<template>
  <div class="flex flex-1 flex-col-reverse lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-5">
    <div class="flex flex-col gap-10">
      <SectionTitle title="Experience" />
      <WorkExperience />
    </div>

    <div class="relative flex h-[400px] w-[435px] flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <span class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-slate-800 to-gray-300 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent">
        Skills
      </span>

      <template v-for="skill in skills" :key="skill.name">
        <OrbitSpace :radius="skill.radius" :duration="skill.duration" :delay="skill.delay">
          <Icon :name="skill.icon" />
        </OrbitSpace>
      </template>
    </div>
  </div>
</template>

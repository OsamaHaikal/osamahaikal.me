<script setup lang="ts">
import { computed } from 'vue'
import { DateTime } from 'luxon'
import type { Repository } from '~~/server/types'

const { data: contributions, status, error } = await useFetch('/api/contributions')

const skeletonCount = 9

const projects = computed(() => {
  const reposMap = new Map<string, Repository>()
  contributions.value?.forEach((pr) => {
    const repoId = pr.repo.name
    if (!reposMap.get(repoId)) {
      reposMap.set(repoId, pr.repo)
    }
  })
  return Array.from(reposMap.values())
})
</script>

<template>
  <div class="flex flex-col gap-10">
    <div v-if="error" class="text-red-500">
      {{ error.message }}
    </div>
    <div v-else-if="status === 'pending'">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="n in skeletonCount" :key="n" class="card animate-pulse">
          <div class="h-6 bg-[#b7b9bd28] mb-4" />
          <div class="h-4 bg-[#b7b9bd28] rounded mb-2" />
          <div class="h-4 bg-[#b7b9bd28] rounded" />
        </div>
      </div>
    </div>
    <template v-else>
      <RevealItems class="flex flex-col gap-10" :duration="0.5">
        <div class="flex flex-col gap-6">
          <SectionTitle title="contributed in" />
          <div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="repo in projects"
                :key="repo.id"
                class="card"
              >
                <img :src="repo.avatar" class="w-10 h-10 rounded-full mb-4">
                <a
                  class="flex flex-col flex-auto"
                  :href="repo.html_url"
                  target="_blank"
                >
                  <div class="text-xl font-semibold mb-2">{{ repo.name }}</div>
                  <div class="text-sm text-gray-600">
                    {{ repo.description }}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Pull Requests Section -->
        <div class="flex flex-col gap-6">
          <SectionTitle title="Pull Requests" />
          <div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="pr in contributions"
                :key="pr.id"
                class="card gap-5"
              >
                <div class="flex justify-between items-center">
                  <div class="flex items-center gap-2">
                    <img :src="pr.repo.avatar" class="w-8 h-8 rounded-full">
                    <span class="font-semibold">
                      {{ pr.repo.name }}
                    </span>
                    <span class="text-sm text-gray-500 flex items-center">
                      {{
                        new Intl.NumberFormat('en-US', {
                          notation: 'compact',
                          maximumFractionDigits: 2,
                        }).format(pr.repo.stars)
                      }}
                      <Icon name="ic:outline-star" class="text-yellow-400 ml-1" />
                    </span>
                  </div>
                  <div class="flex items-center gap-1 text-sm">
                    #{{ pr.number }}
                    <Icon
                      name="i-ph-git-pull-request-duotone"
                      :class="{
                        'text-[#22c5a7ff]': pr.state === 'open',
                        'text-[#bf0404ff]': pr.state === 'closed',
                      }"
                      class="w-5 h-5"
                    />
                  </div>
                </div>
                <a
                  class="flex-auto underline cursor-pointer"
                  :href="pr.url"
                  target="_blank"
                >
                  {{ pr.title }}
                </a>
                <div class="text-xs text-gray-400">
                  {{ DateTime.fromISO(pr.created_at).toRelative() }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealItems>
    </template>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #192034;
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  background: linear-gradient(
    to right,
    rgba(50, 100, 113, 0.1),
    rgba(82, 22, 103, 0.1)
  );
  backdrop-filter: blur(5px);
}

.card:hover {
  transform: scale(1.050);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
}
</style>

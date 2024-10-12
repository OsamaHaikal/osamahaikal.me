<script setup lang="ts">
const showModal = ref(false)

const toggleModal = () => {
  showModal.value = !showModal.value
}
</script>

<template>
  <div class="contents">
    <NuxtImg
      src="/palestine.png"
      class="h-25 w-15 absolute right-0 top-4 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 z-20"
      @click="toggleModal"
    />
    <Transition name="fade-slide">
      <div
        v-if="showModal"
        class="modal fixed inset-0 bg-black/30 z-30 flex items-center justify-center"
        @click.self="toggleModal"
      >
        <div
          class="text-white p-8 rounded-xl shadow-xl max-w-3xl relative bg-black/95 sm:bg-black/0.05 dialog-content"
        >
          <NuxtImg
            src="/palestine.png"
            class="h-15 w-10 float-start m1"
            @click="toggleModal"
          />
          <h1 class="text-2xl font-bold mb-4">
            Free Palestine
          </h1>
          <p class="leading-relaxed">
            The ongoing genocide in Palestine has resulted in immense suffering for countless innocent civilians. Each
            life lost or irrevocably altered represents a profound tragedy that should not go unnoticed.
          </p>
          <p class="leading-relaxed my-4">
            While the scale of the situation can feel overwhelming, even small acts of compassion and support from
            individuals can make a meaningful difference - whether through raising awareness, supporting humanitarian
            aid
            efforts, or advocating for peaceful solutions.
          </p>
          <div class="flex flex-col gap-4 mt10">
            <p>
              Boycott, Divestment, Sanctions.
            </p>
            <p>
              Join the <a href="https://bdsmovement.net/" class="underline">BDS</a> Movement now!
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-100%);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.modal {
  backdrop-filter: blur(8px);
}

.dialog-content {
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(222, 214, 214, 0.24);
  border-radius: 10px;
}
</style>

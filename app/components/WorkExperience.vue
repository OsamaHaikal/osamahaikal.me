<script setup lang="ts">
interface Experience {
  date: string
  title: string
  company: string
  features: string[]
}

function isUrl(text: string) {
  const urlPattern = new RegExp(
    '^(https?:\\/\\/)?' // protocol
    + '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|' // domain name
    + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR IP (v4) address
    + '(\\:\\d+)?(\\/[-a-zA-Z\\d%@_.~+&:]*)*' // port and path
    + '(\\?[;&a-zA-Z\\d%@_.,~+&:=-]*)?' // query string
    + '(\\#[-a-zA-Z\\d_]*)?$',
    'i',
  )
  return urlPattern.test(text)
}

const experiences = ref<Experience[]>([
  {
    date: 'Aug 2023 – Present',
    title: 'Full Stack Software Engineer',
    company: 'Ard Labs',
    features: [
      'Responsible for building complex systems to generate reports',
      'Contributing to CI/CD pipelines',
      'Building Dashboard Builder',
      'Building Form Builder',
      'Building Google Docs-like editor using Tiptap',
    ],
  },
  {
    date: 'Jan 2023 – Aug 2023',
    title: 'Intermediate Software Engineer',
    company: 'MakanE',
    features: [
      'Full stack engineer in the core features team, added features for the core application (dashboard and stores) using Django and Vue.js',
      'Revamped subscription service',
      'Handled integration with Salesforce and automated onboarding process',
      'Implemented recurring payments using token transactions and AWS DynamoDB',
    ],
  },
  {
    date: 'Jan 2022 – Jan 2023',
    title: 'Software Engineer',
    company: 'MakanE',
    features: [
      'Full stack engineer in the core features team, added features for the core application (dashboard and stores) using Django and Vue.js',
      'Revamped customer data section',
      'Built feature toggling system',
      'Implemented different patterns like Pub/Sub and Strategy pattern',
      'Integrated with AWS services S3, SQS and built serverless services',
      'Conducted tech talk sessions',
      'Performed code reviews and Git management',
    ],
  },
  {
    date: 'Sep 2021 – Present',
    title: 'Full Stack Developer (Volunteer)',
    company: 'shaiclub.com',
    features: [
      'Dockerized the application',
      'Localized the database',
      'Implemented repository pattern in Nuxt.js for API management and decoupling',
    ],
  },
  {
    date: 'June 2021 – Aug 2021',
    title: 'Electrical Engineer Trainee',
    company: 'Orange',
    features: [
      'University training program',
    ],
  },
  {
    date: 'Aug 2021 – Oct 2021',
    title: 'AWS Machine Learning Scholarship | Phase 1',
    company: 'Udacity',
    features: [
      'Built machine learning model to predict humidity time series',
      'GitHub Repository: https://github.com/EngOsamaHaikal/Time-series-forecasting-Task1/',
    ],
  },
  {
    date: 'Mar 2021 – Dec 2021',
    title: 'Web Developer',
    company: 'Freelance',
    features: [
      'Developed and designed personal web application using Django and Bootstrap: http://osamahaikal.pythonanywhere.com/',
      'Developed and designed E-marketing web application: http://www.qutamimarketing.com',
      'Developed and designed soccer website: http://www.firas-shilbaya.com',
      'Designed company template: https://engosamahaikal.github.io/previewtemplate/',
    ],
  },
  {
    date: 'Mar 2018 – April 2021',
    title: 'Volunteer',
    company: 'e4uhu.com',
    features: [
      'Built e4uhu.com and served as team leader in the web development team',
    ],
  },
])
</script>

<template>
  <div class="relative border-l-2 border-[#192034]">
    <div
      v-for="(experience, index) in experiences"
      :key="index"
      class="flex flex-col mb-15 mx-2 ms-6"
    >
      <div class="absolute size-4 bg-black rounded-full -left-2 border-2 border-[#192034]" />

      <p class="text-sm text-[#ccc]">
        {{ experience.date }}
      </p>
      <div class="mt1 flex flex-col gap2">
        <h3 class="text-white text-lg font-bold">
          {{ experience.title }} @ {{ experience.company }}
        </h3>
        <ul class="list-disc list-inside text-#ccc mt-2 space-y-xs">
          <li
            v-for="(item, idx) in experience.features"
            :key="idx"
          >
            <span v-if="isUrl(item)">
              <a
                :href="item"
                class="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >{{ item }}</a>
            </span>
            <span v-else>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

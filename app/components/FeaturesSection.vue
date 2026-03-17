<template>
  <section id="features" class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <span v-motion-slide-visible-bottom class="text-brand-600 dark:text-brand-500 text-sm font-semibold uppercase tracking-wider">Fitur Unggulan</span>
        <h2 v-motion-slide-visible-bottom :delay="100" class="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Semua yang Kamu Butuhkan
        </h2>
        <p v-motion-slide-visible-bottom :delay="200" class="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
          Studio Pro hadir dengan fitur-fitur canggih yang membuat pengalaman audio kamu lebih baik dari sebelumnya.
        </p>
      </div>

      <!-- Features grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(feature, index) in features" :key="feature.title"
          v-motion-slide-visible-bottom :delay="100 + index * 80"
          class="group p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-lg hover:shadow-brand-500/5 transition-all">
          <div class="w-12 h-12 bg-brand-50 dark:bg-brand-950/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/50 transition-colors">
            <div v-html="feature.icon" class="w-6 h-6 text-brand-600 dark:text-brand-500"></div>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'Equalizer Profesional',
    description: 'Atur frekuensi audio dengan presisi tinggi menggunakan 10-band equalizer yang dapat dikustomisasi sesuai preferensi kamu.',
    icon: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>',
  },
  {
    title: 'Bass Boost',
    description: 'Tingkatkan bass tanpa distorsi dengan teknologi Dynamic Bass Enhancement yang memberikan suara deep dan powerful.',
    icon: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>',
  },
  {
    title: 'Surround Sound 3D',
    description: 'Rasakan pengalaman audio immersive dengan teknologi 3D Surround yang membuat suara terasa hidup di sekitarmu.',
    icon: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" /></svg>',
  },
  {
    title: 'Preset Otomatis',
    description: 'Pilih dari 20+ preset audio yang sudah dioptimalkan untuk musik, gaming, film, podcast, dan lainnya.',
    icon: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" /></svg>',
  },
  {
    title: 'Low Latency',
    description: 'Proses audio secara real-time dengan latensi kurang dari 5ms, cocok untuk gaming kompetitif dan live streaming.',
    icon: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>',
  },
  {
    title: 'Multi-Device Sync',
    description: 'Sinkronkan pengaturan audio di semua perangkat kamu. Setting sekali, nikmati di mana saja.',
    icon: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>',
  },
]
</script>

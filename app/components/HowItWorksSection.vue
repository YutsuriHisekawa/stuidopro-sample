<template>
  <section class="py-24 bg-white dark:bg-gray-950 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <span v-motion-slide-visible-bottom class="text-brand-600 dark:text-brand-500 text-sm font-semibold uppercase tracking-wider">Cara Kerja</span>
        <h2 v-motion-slide-visible-bottom :delay="100" class="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Mulai dalam 3 Langkah Mudah
        </h2>
        <p v-motion-slide-visible-bottom :delay="200" class="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
          Tidak perlu pengaturan rumit. Download, install, dan langsung nikmati suara terbaik.
        </p>
      </div>

      <!-- Steps -->
      <div class="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
        <!-- Connector line (desktop) -->
        <div class="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200 dark:from-brand-900 dark:via-brand-700 dark:to-brand-900"></div>

        <div v-for="(step, index) in steps" :key="step.title" v-motion-slide-visible-bottom :delay="100 + index * 150" class="relative text-center">
          <!-- Step number -->
          <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-600 text-white text-xl font-bold mb-6 relative z-10 shadow-lg shadow-brand-600/20">
            {{ index + 1 }}
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">{{ step.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm mx-auto">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Pilih Paket & Bayar',
    description: 'Pilih paket yang sesuai kebutuhanmu. Proses pembayaran cepat dan aman dengan berbagai metode.',
  },
  {
    title: 'Download & Install',
    description: 'Setelah pembayaran berhasil, download Studio Pro dan install dalam 2 menit. Aktivasi otomatis.',
  },
  {
    title: 'Nikmati Suara Terbaik',
    description: 'Studio Pro akan otomatis memproses semua audio di perangkatmu. Duduk santai dan nikmati perbedaannya.',
  },
]
</script>

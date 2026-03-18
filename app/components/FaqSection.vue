<template>
  <section id="faq" class="py-24 bg-white dark:bg-gray-950 transition-colors">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <span v-motion-slide-visible-bottom class="text-brand-600 dark:text-brand-500 text-sm font-semibold uppercase tracking-wider">FAQ</span>
        <h2 v-motion-slide-visible-bottom :delay="100" class="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Pertanyaan yang Sering Diajukan
        </h2>
      </div>

      <!-- FAQ Items -->
      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index"
          v-motion-slide-visible-bottom :delay="80 + index * 60"
          class="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
          <button @click="toggle(index)"
            class="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            <span class="font-medium text-gray-900 dark:text-white pr-4">{{ faq.question }}</span>
            <svg class="w-5 h-5 flex-shrink-0 text-gray-500 dark:text-gray-400 transition-transform duration-200"
              :class="openIndex === index ? 'rotate-180' : ''"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-show="openIndex === index" class="px-5 pb-5">
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openIndex = ref<number | null>(0)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
  {
    question: 'Berapa harga Studio Pro?',
    answer: 'Studio Pro tersedia mulai dari Rp29.000/bulan untuk paket Starter. Kami juga punya paket Pro (Rp79.000/bulan) yang paling populer dengan fitur lengkap, dan paket Enterprise (Rp249.000/bulan) untuk tim & bisnis. Semua paket dilengkapi garansi uang kembali 30 hari.',
  },
  {
    question: 'Apakah Studio Pro berjalan di semua sistem operasi?',
    answer: 'Studio Pro tersedia untuk Windows 10/11, macOS 12+, dan Linux (Ubuntu 20.04+). Kami juga sedang mengembangkan versi mobile untuk iOS dan Android.',
  },
  {
    question: 'Bagaimana cara kerja 3D Surround Sound?',
    answer: 'Teknologi 3D Surround Sound kami menggunakan algoritma HRTF (Head-Related Transfer Function) untuk mensimulasikan suara surround dari headphone stereo biasa. Hasilnya, kamu mendapatkan pengalaman audio immersive tanpa perlu speaker surround.',
  },
  {
    question: 'Apakah ada jaminan uang kembali?',
    answer: 'Tentu! Kami memberikan jaminan uang kembali 30 hari tanpa syarat. Jika kamu tidak puas dengan Studio Pro, kamu bisa meminta refund penuh.',
  },
  {
    question: 'Berapa banyak perangkat yang bisa saya gunakan?',
    answer: 'Paket Starter bisa digunakan di 1 perangkat, paket Pro mendukung hingga 3 perangkat, dan paket Enterprise tidak memiliki batasan jumlah perangkat.',
  },
  {
    question: 'Apakah Studio Pro mempengaruhi performa komputer?',
    answer: 'Studio Pro didesain untuk sangat ringan. Penggunaan CPU rata-rata kurang dari 1%, dan penggunaan RAM sekitar 50MB. Tidak akan mempengaruhi performa gaming atau pekerjaan kamu.',
  },
]
</script>

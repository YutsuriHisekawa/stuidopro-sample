<template>
  <section class="py-24 bg-gray-900 dark:bg-black relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 -z-0">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 v-motion-slide-visible-bottom class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
        Siap Meningkatkan<br>
        <span class="text-brand-500">Pengalaman Audio Kamu?</span>
      </h2>
      <p v-motion-slide-visible-bottom :delay="100" class="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
        Dapatkan Studio Pro sekarang dan rasakan perbedaannya. Investasi terbaik untuk pengalaman audio profesional.
      </p>
      <div v-motion-slide-visible-bottom :delay="200" class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#pricing" @click.prevent="smoothScroll('#pricing')" class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-700 shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40 transition-all">
          Lihat Paket Harga
          <svg class="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </a>
        <a href="#features" @click.prevent="smoothScroll('#features')" class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-300 border border-gray-700 rounded-xl hover:bg-gray-800 transition-all">
          Pelajari Lebih Lanjut
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
function smoothScroll(target: string) {
  document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

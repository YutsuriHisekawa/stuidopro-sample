<template>
  <section class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <span v-motion-slide-visible-bottom class="text-brand-600 dark:text-brand-500 text-sm font-semibold uppercase tracking-wider">Perbandingan</span>
        <h2 v-motion-slide-visible-bottom :delay="100" class="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Kenapa Studio Pro?
        </h2>
        <p class="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
          Lihat bagaimana Studio Pro dibandingkan dengan solusi audio lainnya.
        </p>
      </div>

      <!-- Comparison Table -->
      <div v-motion-slide-visible-bottom :delay="200" class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b-2 border-gray-200 dark:border-gray-700">
              <th class="text-left py-4 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Fitur</th>
              <th class="py-4 px-4 text-center">
                <span class="text-sm font-bold text-brand-600 dark:text-brand-500">Studio Pro</span>
              </th>
              <th class="py-4 px-4 text-center text-sm font-medium text-gray-500 dark:text-gray-400">Kompetitor A</th>
              <th class="py-4 px-4 text-center text-sm font-medium text-gray-500 dark:text-gray-400">Kompetitor B</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in comparisonRows" :key="row.feature" class="border-b border-gray-100 dark:border-gray-800">
              <td class="py-4 px-4 text-sm text-gray-700 dark:text-gray-300 font-medium">{{ row.feature }}</td>
              <td class="py-4 px-4 text-center">
                <span v-if="row.studioPro === true" class="inline-flex items-center justify-center w-6 h-6 bg-brand-100 dark:bg-brand-950 rounded-full">
                  <svg class="w-4 h-4 text-brand-600 dark:text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <span v-else class="text-sm font-semibold text-brand-600 dark:text-brand-500">{{ row.studioPro }}</span>
              </td>
              <td class="py-4 px-4 text-center">
                <span v-if="row.compA === true" class="inline-flex items-center justify-center w-6 h-6 bg-gray-100 dark:bg-gray-800 rounded-full">
                  <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <span v-else-if="row.compA === false" class="inline-flex items-center justify-center w-6 h-6 bg-gray-100 dark:bg-gray-800 rounded-full">
                  <svg class="w-4 h-4 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <span v-else class="text-sm text-gray-500 dark:text-gray-400">{{ row.compA }}</span>
              </td>
              <td class="py-4 px-4 text-center">
                <span v-if="row.compB === true" class="inline-flex items-center justify-center w-6 h-6 bg-gray-100 dark:bg-gray-800 rounded-full">
                  <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <span v-else-if="row.compB === false" class="inline-flex items-center justify-center w-6 h-6 bg-gray-100 dark:bg-gray-800 rounded-full">
                  <svg class="w-4 h-4 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <span v-else class="text-sm text-gray-500 dark:text-gray-400">{{ row.compB }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const comparisonRows = [
  { feature: 'Equalizer Profesional', studioPro: true, compA: true, compB: false },
  { feature: 'Bass Boost', studioPro: true, compA: true, compB: true },
  { feature: '3D Surround Sound', studioPro: true, compA: false, compB: false },
  { feature: 'Low Latency (<5ms)', studioPro: true, compA: false, compB: true },
  { feature: 'Multi-Device Sync', studioPro: true, compA: false, compB: false },
  { feature: 'Custom Audio Profiles', studioPro: true, compA: true, compB: false },
  { feature: 'Versi Gratis', studioPro: true, compA: false, compB: true },
  { feature: 'Harga Pro (per bulan)', studioPro: 'Rp79.000', compA: 'Rp129.000', compB: 'Rp99.000' },
  { feature: 'Dukungan OS', studioPro: '3 OS', compA: '1 OS', compB: '2 OS' },
]
</script>

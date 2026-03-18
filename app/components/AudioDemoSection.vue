<template>
  <section id="audio-demo" class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <span v-motion-slide-visible-bottom class="text-brand-600 dark:text-brand-500 text-sm font-semibold uppercase tracking-wider">Dengarkan Perbedaannya</span>
        <h2 v-motion-slide-visible-bottom :delay="100" class="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Before vs After
        </h2>
        <p v-motion-slide-visible-bottom :delay="200" class="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
          Geser slider untuk melihat dan merasakan perbedaan kualitas audio dengan Studio Pro.
        </p>
      </div>

      <!-- Demo Cards -->
      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div v-for="(demo, idx) in demos" :key="demo.title"
          v-motion-slide-visible-bottom :delay="200 + idx * 100"
          class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          
          <!-- Demo Header -->
          <div class="px-6 pt-6 pb-4">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center" :class="demo.iconBg">
                <div v-html="demo.icon" class="w-5 h-5" :class="demo.iconColor"></div>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white">{{ demo.title }}</h3>
                <p class="text-xs text-gray-500 dark:text-gray-400">{{ demo.subtitle }}</p>
              </div>
            </div>
          </div>

          <!-- Waveform Comparison -->
          <div class="px-6 pb-2 relative">
            <div class="relative h-40 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 select-none">
              <!-- Before Waveform (flat, dull) — full background layer -->
              <div class="absolute inset-0">
                <svg class="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                  <path :d="demo.beforeWave" fill="none" stroke="#9CA3AF" stroke-width="1.5" />
                  <path :d="demo.beforeWaveFill" fill="#9CA3AF" fill-opacity="0.08" />
                </svg>
                <div class="absolute top-2 left-3 px-2 py-0.5 bg-gray-500/20 rounded text-[10px] font-medium text-gray-500">TANPA STUDIO PRO</div>
              </div>

              <!-- After Waveform (rich, dynamic) — clipped overlay -->
              <div class="absolute inset-0 overflow-hidden"
                :style="{ clipPath: `inset(0 ${100 - demo.sliderValue}% 0 0)` }">
                <svg class="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient :id="'grad-' + idx" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#EF4444" />
                      <stop offset="50%" stop-color="#DC2626" />
                      <stop offset="100%" stop-color="#B91C1C" />
                    </linearGradient>
                  </defs>
                  <path :d="demo.afterWave" fill="none" :stroke="`url(#grad-${idx})`" stroke-width="2" />
                  <path :d="demo.afterWaveFill" :fill="`url(#grad-${idx})`" fill-opacity="0.12" />
                </svg>
                <div class="absolute top-2 right-3 px-2 py-0.5 bg-brand-500/20 rounded text-[10px] font-medium text-brand-500">DENGAN STUDIO PRO</div>
              </div>

              <!-- Divider Line -->
              <div class="absolute top-0 bottom-0 w-0.5 bg-white/80 z-10 pointer-events-none transition-[left] duration-75"
                :style="{ left: `clamp(16px, ${demo.sliderValue}%, calc(100% - 16px))` }">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-200">
                  <svg class="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  <svg class="w-3.5 h-3.5 text-gray-500 -ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            <!-- Slider -->
            <input type="range" min="0" max="100" v-model.number="demo.sliderValue"
              class="w-full mt-3 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none cursor-pointer accent-brand-600"
            />
          </div>

          <!-- Mini Spectrum -->
          <div class="px-6 pb-6 pt-2">
            <div class="flex items-center justify-between text-[10px] text-gray-400 dark:text-gray-500 mb-2">
              <span>Frequency Response</span>
              <span>{{ Math.round(demo.sliderValue) }}% Enhanced</span>
            </div>
            <div class="flex items-end gap-0.5 h-8">
              <div v-for="(bar, bIdx) in 24" :key="bIdx"
                class="flex-1 rounded-t-sm transition-all duration-500"
                :class="demo.sliderValue > 50 ? 'bg-brand-500/60' : 'bg-gray-300 dark:bg-gray-600'"
                :style="{ height: getBarHeight(bIdx, demo.sliderValue) + '%' }">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div v-motion-slide-visible-bottom :delay="500" class="text-center mt-12">
        <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">Dengarkan perbedaannya sendiri — hasil nyata, bukan gimmick.</p>
        <NuxtLink to="/checkout?plan=Pro" class="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-700 shadow-lg shadow-brand-600/25 transition-all">
          Coba Studio Pro Sekarang
          <svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const demos = reactive([
  {
    title: 'Musik & Streaming',
    subtitle: 'Spotify, YouTube, Apple Music',
    iconBg: 'bg-brand-50 dark:bg-brand-950/50',
    iconColor: 'text-brand-600 dark:text-brand-500',
    icon: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>',
    sliderValue: 50,
    beforeWave: 'M0,60 C20,58 40,62 60,59 C80,56 100,63 120,60 C140,57 160,62 180,60 C200,58 220,61 240,59 C260,57 280,62 300,60 C320,58 340,61 360,59 C380,57 400,60 400,60',
    beforeWaveFill: 'M0,60 C20,58 40,62 60,59 C80,56 100,63 120,60 C140,57 160,62 180,60 C200,58 220,61 240,59 C260,57 280,62 300,60 C320,58 340,61 360,59 C380,57 400,60 400,60 V120 H0 Z',
    afterWave: 'M0,60 C10,45 20,30 35,50 C50,70 60,20 80,40 C100,60 110,25 130,45 C150,65 160,15 180,35 C200,55 210,20 230,42 C250,64 260,18 280,38 C300,58 310,22 330,44 C350,66 365,28 380,48 C395,60 400,55 400,60',
    afterWaveFill: 'M0,60 C10,45 20,30 35,50 C50,70 60,20 80,40 C100,60 110,25 130,45 C150,65 160,15 180,35 C200,55 210,20 230,42 C250,64 260,18 280,38 C300,58 310,22 330,44 C350,66 365,28 380,48 C395,60 400,55 400,60 V120 H0 Z',
  },
  {
    title: 'Gaming & Voice Chat',
    subtitle: 'Discord, Zoom, Gaming',
    iconBg: 'bg-purple-50 dark:bg-purple-950/50',
    iconColor: 'text-purple-600 dark:text-purple-500',
    icon: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15a3 3 0 01-3-3V5.25a3 3 0 116 0V12a3 3 0 01-3 3z" /></svg>',
    sliderValue: 50,
    beforeWave: 'M0,60 C30,57 50,63 80,59 C110,55 130,64 160,60 C190,56 210,63 240,60 C270,57 290,62 320,59 C350,56 370,62 400,60',
    beforeWaveFill: 'M0,60 C30,57 50,63 80,59 C110,55 130,64 160,60 C190,56 210,63 240,60 C270,57 290,62 320,59 C350,56 370,62 400,60 V120 H0 Z',
    afterWave: 'M0,58 C15,40 25,25 45,48 C65,72 75,18 95,42 C115,66 125,12 145,38 C165,64 178,22 195,45 C212,68 225,15 245,40 C265,65 275,20 295,43 C315,66 325,25 345,46 C365,67 380,32 400,55',
    afterWaveFill: 'M0,58 C15,40 25,25 45,48 C65,72 75,18 95,42 C115,66 125,12 145,38 C165,64 178,22 195,45 C212,68 225,15 245,40 C265,65 275,20 295,43 C315,66 325,25 345,46 C365,67 380,32 400,55 V120 H0 Z',
  },
])

function getBarHeight(index: number, slider: number) {
  const baseHeight = 20 + Math.sin(index * 0.8) * 15
  const enhanced = baseHeight + (slider / 100) * (40 + Math.sin(index * 1.5) * 25)
  return Math.min(100, Math.max(10, enhanced))
}
</script>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #DC2626;
  cursor: pointer;
  box-shadow: 0 0 6px rgba(220, 38, 38, 0.4);
}
input[type="range"]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #DC2626;
  cursor: pointer;
  border: none;
  box-shadow: 0 0 6px rgba(220, 38, 38, 0.4);
}
</style>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <!-- Background decoration -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-600/5 dark:bg-brand-600/5 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Badge -->
      <div v-motion-slide-visible-top class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-400 text-sm font-medium mb-8">
        <span class="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span>
        Versi 2.0 — Sekarang Tersedia
      </div>

      <!-- Heading -->
      <h1 v-motion-slide-visible-bottom :delay="100" class="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-6">
        Suara Profesional<br>
        <span class="text-brand-600 dark:text-brand-500">Dalam Genggaman</span>
      </h1>

      <!-- Subheading -->
      <p v-motion-slide-visible-bottom :delay="200" class="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
        Studio Pro mengubah pengalaman audio kamu dengan pemrosesan suara kelas profesional. 
        Tingkatkan kualitas musik, podcast, dan gaming ke level berikutnya.
      </p>

      <!-- CTA Buttons -->
      <div v-motion-slide-visible-bottom :delay="300" class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <NuxtLink to="/checkout?plan=Pro" class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-700 shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40 transition-all">
          Beli Sekarang
          <svg class="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </NuxtLink>
        <a href="#features" @click.prevent="smoothScroll('#features')" class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
          Lihat Fitur
          <svg class="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      <!-- Stats -->
      <div v-motion-slide-visible-bottom :delay="400" class="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{{ stat.value }}</div>
          <div class="text-sm text-gray-500 dark:text-gray-500 mt-1">{{ stat.label }}</div>
        </div>
      </div>

      <!-- App Preview -->
      <div v-motion-slide-visible-bottom :delay="500" class="mt-16 relative">
        <div class="bg-gray-900 dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-800 dark:border-gray-700 overflow-hidden mx-auto max-w-4xl">
          <!-- Window bar -->
          <div class="flex items-center gap-2 px-4 py-3 bg-gray-800 dark:bg-gray-900 border-b border-gray-700">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <span class="ml-3 text-xs text-gray-400">Studio Pro v2.0 — Audio Enhancer</span>
            <div class="ml-auto flex items-center gap-2">
              <span class="text-[10px] px-2 py-0.5 rounded bg-green-500/20 text-green-400 font-medium">ACTIVE</span>
            </div>
          </div>
          <!-- App UI Mockup -->
          <div class="p-4 sm:p-6">
            <!-- Top bar: Now playing -->
            <div class="flex items-center justify-between mb-5">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-brand-600/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15a3 3 0 01-3-3V5.25a3 3 0 116 0V12a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div>
                  <div class="text-sm font-semibold text-white">Studio Pro Enhancer</div>
                  <div class="text-xs text-gray-500">Output: Speakers (Realtek HD Audio)</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-500">Preset:</span>
                <span class="text-xs px-2.5 py-1 rounded-lg bg-brand-600/20 text-brand-400 font-medium">🎵 Music</span>
              </div>
            </div>

            <!-- Equalizer Section -->
            <div class="bg-gray-800/50 dark:bg-gray-900/50 rounded-xl p-4 sm:p-5 mb-4">
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider">10-Band Equalizer</span>
                <div class="flex items-center gap-2">
                  <span class="text-[10px] px-2 py-0.5 rounded bg-brand-600/20 text-brand-400">Custom</span>
                  <span class="text-[10px] text-gray-600">|</span>
                  <span class="text-[10px] text-gray-500">Reset</span>
                </div>
              </div>
              <!-- EQ Bars with labels -->
              <div class="flex items-end gap-1 sm:gap-2 h-32 sm:h-40 mb-2">
                <div v-for="(h, i) in eqBars" :key="i" class="flex-1 h-full flex items-end">
                  <div class="w-full rounded-t-sm transition-all duration-700"
                    :class="i % 3 === 0 ? 'bg-brand-500' : i % 3 === 1 ? 'bg-brand-600' : 'bg-brand-400'"
                    :style="{ height: h + '%' }">
                  </div>
                </div>
              </div>
              <!-- Freq labels -->
              <div class="flex justify-between gap-1 sm:gap-2">
                <div v-for="freq in freqLabels" :key="freq" class="flex-1 text-center text-[8px] sm:text-[10px] text-gray-600">{{ freq }}</div>
              </div>
            </div>

            <!-- Bottom controls -->
            <div class="grid grid-cols-3 gap-3">
              <!-- Bass Boost -->
              <div class="bg-gray-800/50 dark:bg-gray-900/50 rounded-xl p-3">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-[10px] font-semibold text-gray-400 uppercase">Bass Boost</span>
                  <div class="w-7 h-4 bg-brand-600 rounded-full relative">
                    <div class="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <div class="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-brand-500 rounded-full" style="width: 72%"></div>
                </div>
                <div class="text-right text-[10px] text-brand-400 mt-1 font-medium">+7.2 dB</div>
              </div>
              <!-- 3D Surround -->
              <div class="bg-gray-800/50 dark:bg-gray-900/50 rounded-xl p-3">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-[10px] font-semibold text-gray-400 uppercase">3D Surround</span>
                  <div class="w-7 h-4 bg-brand-600 rounded-full relative">
                    <div class="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <div class="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-purple-500 rounded-full" style="width: 60%"></div>
                </div>
                <div class="text-right text-[10px] text-purple-400 mt-1 font-medium">60%</div>
              </div>
              <!-- Volume -->
              <div class="bg-gray-800/50 dark:bg-gray-900/50 rounded-xl p-3">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-[10px] font-semibold text-gray-400 uppercase">Volume</span>
                  <svg class="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                  </svg>
                </div>
                <div class="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-blue-500 rounded-full" style="width: 85%"></div>
                </div>
                <div class="text-right text-[10px] text-blue-400 mt-1 font-medium">85%</div>
              </div>
            </div>
          </div>
        </div>
        <!-- Glow below -->
        <div class="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-brand-500/20 blur-3xl rounded-full"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '2M+', label: 'Pengguna' },
  { value: '4.8★', label: 'Rating' },
  { value: '150+', label: 'Negara' },
  { value: '99.9%', label: 'Uptime' },
]

const eqBars = ref([45, 55, 72, 80, 65, 50, 60, 75, 55, 40])
const freqLabels = ['31', '62', '125', '250', '500', '1K', '2K', '4K', '8K', '16K']

function smoothScroll(target: string) {
  document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
}

let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => {
    eqBars.value = eqBars.value.map((v) => Math.max(20, Math.min(90, v + (Math.random() - 0.5) * 20)))
  }, 1500)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

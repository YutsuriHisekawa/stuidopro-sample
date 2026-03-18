<template>
  <section class="py-24 bg-white dark:bg-gray-950 transition-colors overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <span v-motion-slide-visible-bottom class="text-brand-600 dark:text-brand-500 text-sm font-semibold uppercase tracking-wider">Lihat Aksinya</span>
        <h2 v-motion-slide-visible-bottom :delay="100" class="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Cara Kerja Studio Pro
        </h2>
        <p v-motion-slide-visible-bottom :delay="200" class="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
          Tonton demo singkat dan lihat betapa mudahnya meningkatkan kualitas audio kamu.
        </p>
      </div>

      <!-- Video Player Mockup -->
      <div v-motion-slide-visible-bottom :delay="300" class="max-w-4xl mx-auto">
        <div class="relative rounded-2xl overflow-hidden bg-gray-900 shadow-2xl border border-gray-800 group cursor-pointer"
          @click="togglePlay">
          <!-- Video Thumbnail / Player Area -->
          <div class="relative aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <!-- Background Animation -->
            <div class="absolute inset-0">
              <!-- Animated circles -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-600/10 rounded-full blur-3xl animate-pulse"></div>
              <div class="absolute top-1/3 left-1/3 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 0.5s"></div>
            </div>

            <!-- Mock UI in video -->
            <div class="absolute inset-0 flex items-center justify-center p-8">
              <div class="w-full max-w-lg">
                <!-- Mini app preview in video -->
                <div class="bg-gray-800/80 backdrop-blur rounded-xl p-4 border border-gray-700/50">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                      <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15a3 3 0 01-3-3V5.25a3 3 0 116 0V12a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-sm font-semibold text-white">Studio Pro v2.0</div>
                      <div class="text-[10px] text-gray-400">Quick Setup Tutorial</div>
                    </div>
                  </div>
                  <!-- Animated EQ bars in video -->
                  <div class="flex items-end gap-1 h-16 mb-2">
                    <div v-for="(h, i) in videoEqBars" :key="i"
                      class="flex-1 rounded-t-sm transition-all duration-700"
                      :class="isPlaying ? (i % 2 === 0 ? 'bg-brand-500' : 'bg-brand-400') : 'bg-gray-600'"
                      :style="{ height: (isPlaying ? h : 15) + '%' }">
                    </div>
                  </div>
                  <!-- Progress bar -->
                  <div class="h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div class="h-full bg-brand-500 rounded-full transition-all duration-300"
                      :style="{ width: progress + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Play Button Overlay -->
            <div class="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300"
              :class="isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'">
              <div class="w-20 h-20 bg-brand-600/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl shadow-brand-600/30 transition-transform hover:scale-110">
                <svg v-if="!isPlaying" class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <svg v-else class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              </div>
            </div>

            <!-- Duration badge -->
            <div class="absolute bottom-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-xs text-white font-medium">
              {{ formatTime(currentTime) }} / 2:34
            </div>
          </div>

          <!-- Video Controls -->
          <div class="px-4 py-3 bg-gray-800 border-t border-gray-700 flex items-center gap-4">
            <button @click.stop="togglePlay" class="text-white hover:text-brand-500 transition-colors">
              <svg v-if="!isPlaying" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" /></svg>
            </button>
            <!-- Progress -->
            <div class="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden cursor-pointer" @click.stop>
              <div class="h-full bg-brand-500 rounded-full transition-all duration-300" :style="{ width: progress + '%' }"></div>
            </div>
            <span class="text-xs text-gray-400 font-mono">{{ formatTime(currentTime) }}</span>
            <!-- Volume -->
            <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
            <!-- Fullscreen -->
            <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
          </div>
        </div>

        <!-- Video Description -->
        <div v-motion-slide-visible-bottom :delay="400" class="mt-8 grid sm:grid-cols-3 gap-6">
          <div v-for="(step, i) in steps" :key="i" class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-950/50 flex items-center justify-center flex-shrink-0">
              <span class="text-sm font-bold text-brand-600 dark:text-brand-500">{{ i + 1 }}</span>
            </div>
            <div>
              <h4 class="text-sm font-semibold text-gray-900 dark:text-white">{{ step.title }}</h4>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const isPlaying = ref(false)
const progress = ref(0)
const currentTime = ref(0)
const videoEqBars = ref(Array.from({ length: 16 }, () => 15))
let playInterval: ReturnType<typeof setInterval> | null = null
let eqInterval: ReturnType<typeof setInterval> | null = null

const steps = [
  { title: 'Install & Buka', desc: 'Download, install, langsung bisa dipakai dalam 30 detik.' },
  { title: 'Pilih Preset', desc: 'Pilih dari 20+ preset yang sudah dioptimalkan.' },
  { title: 'Nikmati Audio', desc: 'Semua audio di PC langsung ter-enhance secara real-time.' },
]

function togglePlay() {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) {
    startPlayback()
  } else {
    stopPlayback()
  }
}

function startPlayback() {
  playInterval = setInterval(() => {
    if (progress.value >= 100) {
      progress.value = 0
      currentTime.value = 0
    }
    progress.value += 0.65
    currentTime.value = Math.floor((progress.value / 100) * 154)
  }, 1000)
  eqInterval = setInterval(() => {
    videoEqBars.value = videoEqBars.value.map(() => Math.max(15, Math.min(95, 30 + Math.random() * 60)))
  }, 400)
}

function stopPlayback() {
  if (playInterval) { clearInterval(playInterval); playInterval = null }
  if (eqInterval) { clearInterval(eqInterval); eqInterval = null }
  videoEqBars.value = videoEqBars.value.map(() => 15)
}

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

onUnmounted(() => {
  stopPlayback()
})
</script>

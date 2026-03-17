<template>
  <section class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <span v-motion-slide-visible-bottom class="text-brand-600 dark:text-brand-500 text-sm font-semibold uppercase tracking-wider">Preview Aplikasi</span>
        <h2 v-motion-slide-visible-bottom :delay="100" class="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Lihat Studio Pro Beraksi
        </h2>
        <p v-motion-slide-visible-bottom :delay="200" class="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
          Interface yang intuitif dengan kontrol audio profesional yang powerful.
        </p>
      </div>

      <!-- Tab Navigation -->
      <div v-motion-slide-visible-bottom :delay="300" class="flex justify-center mb-12">
        <div class="inline-flex bg-white dark:bg-gray-800 rounded-xl p-1.5 border border-gray-200 dark:border-gray-700 shadow-sm">
          <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id"
            class="px-5 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
            :class="activeTab === tab.id
              ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'">
            <span v-html="tab.icon"></span>
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- Tab: Preset Manager -->
      <div v-if="activeTab === 'presets'" v-motion-slide-left class="max-w-4xl mx-auto">
        <div class="bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
          <div class="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <span class="ml-3 text-xs text-gray-400">Studio Pro — Preset Manager</span>
          </div>
          <div class="p-5 sm:p-6">
            <!-- Search & filter -->
            <div class="flex items-center gap-3 mb-5">
              <div class="flex-1 flex items-center gap-2 px-3 py-2 bg-gray-800/50 rounded-lg border border-gray-700">
                <svg class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <span class="text-xs text-gray-500">Cari preset...</span>
              </div>
              <div class="flex gap-1.5">
                <span v-for="cat in ['Semua', 'Musik', 'Gaming', 'Film']" :key="cat"
                  class="px-3 py-1.5 rounded-lg text-[11px] font-medium cursor-pointer transition-colors"
                  :class="cat === 'Semua' ? 'bg-brand-600/20 text-brand-400' : 'bg-gray-800 text-gray-500 hover:text-gray-300'">
                  {{ cat }}
                </span>
              </div>
            </div>
            <!-- Preset grid -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div v-for="preset in presets" :key="preset.name"
                class="group p-3 rounded-xl border transition-all cursor-pointer"
                :class="preset.active ? 'border-brand-500 bg-brand-600/10' : 'border-gray-800 bg-gray-800/30 hover:border-gray-700'">
                <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-2 text-xl"
                  :class="preset.active ? 'bg-brand-600/20' : 'bg-gray-800'">
                  {{ preset.emoji }}
                </div>
                <div class="text-sm font-medium" :class="preset.active ? 'text-brand-400' : 'text-white'">{{ preset.name }}</div>
                <div class="text-[10px] text-gray-500 mt-0.5">{{ preset.desc }}</div>
                <!-- Mini EQ bars -->
                <div class="flex items-end gap-px mt-2 h-4">
                  <div v-for="(bar, j) in preset.bars" :key="j" class="flex-1 rounded-t-sm transition-all"
                    :class="preset.active ? 'bg-brand-500/60' : 'bg-gray-700'"
                    :style="{ height: bar + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab: Surround Sound -->
      <div v-if="activeTab === 'surround'" v-motion-slide-left class="max-w-4xl mx-auto">
        <div class="bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
          <div class="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <span class="ml-3 text-xs text-gray-400">Studio Pro — 3D Surround Sound</span>
          </div>
          <div class="p-5 sm:p-6">
            <div class="grid sm:grid-cols-2 gap-6">
              <!-- 3D Visualizer -->
              <div class="flex items-center justify-center">
                <div class="relative w-56 h-56">
                  <!-- Rings -->
                  <div class="absolute inset-0 rounded-full border border-gray-800"></div>
                  <div class="absolute inset-6 rounded-full border border-gray-800"></div>
                  <div class="absolute inset-12 rounded-full border border-gray-800"></div>
                  <!-- Center head icon -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="relative">
                      <div class="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center border-2 border-brand-500/50">
                        <svg class="w-6 h-6 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <!-- Speaker dots -->
                  <div class="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-500 animate-pulse flex items-center justify-center">
                    <span class="text-[8px] text-white font-bold">F</span>
                  </div>
                  <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 animate-pulse flex items-center justify-center" style="animation-delay: 0.3s">
                    <span class="text-[8px] text-white font-bold">R</span>
                  </div>
                  <div class="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 animate-pulse flex items-center justify-center" style="animation-delay: 0.6s">
                    <span class="text-[8px] text-white font-bold">L</span>
                  </div>
                  <div class="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-green-500 animate-pulse flex items-center justify-center" style="animation-delay: 0.9s">
                    <span class="text-[8px] text-white font-bold">R</span>
                  </div>
                  <!-- Diagonal speakers -->
                  <div class="absolute top-8 left-8 w-3 h-3 rounded-full bg-cyan-500/70 animate-pulse" style="animation-delay: 0.2s"></div>
                  <div class="absolute top-8 right-8 w-3 h-3 rounded-full bg-amber-500/70 animate-pulse" style="animation-delay: 0.5s"></div>
                  <div class="absolute bottom-8 left-8 w-3 h-3 rounded-full bg-pink-500/70 animate-pulse" style="animation-delay: 0.8s"></div>
                  <div class="absolute bottom-8 right-8 w-3 h-3 rounded-full bg-teal-500/70 animate-pulse" style="animation-delay: 1.1s"></div>
                </div>
              </div>
              <!-- Controls -->
              <div class="space-y-4">
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-xs font-medium text-gray-400">Surround Mode</span>
                    <span class="text-xs text-brand-400 font-semibold">7.1 Channel</span>
                  </div>
                  <div class="grid grid-cols-3 gap-1.5">
                    <div v-for="mode in ['Stereo', '5.1 CH', '7.1 CH']" :key="mode"
                      class="py-2 rounded-lg text-center text-[11px] font-medium cursor-pointer"
                      :class="mode === '7.1 CH' ? 'bg-brand-600 text-white' : 'bg-gray-800 text-gray-500'">
                      {{ mode }}
                    </div>
                  </div>
                </div>
                <div v-for="ctrl in surroundControls" :key="ctrl.label">
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="text-xs font-medium text-gray-400">{{ ctrl.label }}</span>
                    <span class="text-xs font-medium" :class="ctrl.color">{{ ctrl.value }}</span>
                  </div>
                  <div class="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div class="h-full rounded-full transition-all duration-700" :class="ctrl.barColor" :style="{ width: ctrl.percent + '%' }"></div>
                  </div>
                </div>
                <div class="p-3 rounded-xl bg-gray-800/50 border border-gray-700/50">
                  <div class="flex items-center gap-2 text-xs text-gray-400">
                    <svg class="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    HRTF Spatial Processing Active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab: Analytics -->
      <div v-if="activeTab === 'analytics'" v-motion-slide-left class="max-w-4xl mx-auto">
        <div class="bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
          <div class="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <span class="ml-3 text-xs text-gray-400">Studio Pro — Audio Analytics</span>
          </div>
          <div class="p-5 sm:p-6">
            <!-- Stats row -->
            <div class="grid grid-cols-4 gap-3 mb-5">
              <div v-for="stat in analyticsStats" :key="stat.label" class="bg-gray-800/50 rounded-xl p-3">
                <div class="text-[10px] text-gray-500 uppercase mb-1">{{ stat.label }}</div>
                <div class="text-lg font-bold" :class="stat.color">{{ stat.value }}</div>
                <div class="text-[10px]" :class="stat.up ? 'text-green-400' : 'text-gray-500'">{{ stat.change }}</div>
              </div>
            </div>
            <!-- Waveform -->
            <div class="bg-gray-800/50 rounded-xl p-4 mb-4">
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Real-time Audio Waveform</span>
                <div class="flex items-center gap-3">
                  <div class="flex items-center gap-1">
                    <div class="w-2 h-2 rounded-full bg-brand-500"></div>
                    <span class="text-[10px] text-gray-500">Input</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span class="text-[10px] text-gray-500">Enhanced</span>
                  </div>
                </div>
              </div>
              <!-- SVG Waveform -->
              <svg class="w-full h-24" viewBox="0 0 400 80" preserveAspectRatio="none">
                <path :d="waveformInput" fill="none" stroke="#ef4444" stroke-width="1.5" opacity="0.4" />
                <path :d="waveformEnhanced" fill="none" stroke="#22c55e" stroke-width="1.5" opacity="0.8" />
              </svg>
            </div>
            <!-- Frequency Analysis -->
            <div class="bg-gray-800/50 rounded-xl p-4">
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Frequency Spectrum</span>
                <span class="text-[10px] px-2 py-0.5 rounded bg-green-500/20 text-green-400">LIVE</span>
              </div>
              <div class="flex items-end gap-0.5 h-20">
                <div v-for="(bar, i) in spectrumBars" :key="i" class="flex-1 rounded-t-sm transition-all duration-500"
                  :class="bar > 70 ? 'bg-brand-500' : bar > 40 ? 'bg-brand-600/70' : 'bg-brand-700/50'"
                  :style="{ height: bar + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeTab = ref('presets')

const tabs = [
  { id: 'presets', label: 'Preset', icon: '<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" /></svg>' },
  { id: 'surround', label: '3D Surround', icon: '<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" /></svg>' },
  { id: 'analytics', label: 'Analytics', icon: '<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>' },
]

const presets = [
  { name: 'Music', emoji: '🎵', desc: 'Balanced audio', active: true, bars: [50, 65, 80, 75, 60, 70, 85, 55] },
  { name: 'Gaming', emoji: '🎮', desc: 'Footsteps focus', active: false, bars: [40, 55, 60, 90, 85, 70, 45, 50] },
  { name: 'Movie', emoji: '🎬', desc: 'Cinematic bass', active: false, bars: [80, 75, 65, 55, 60, 70, 50, 45] },
  { name: 'Podcast', emoji: '🎙️', desc: 'Voice clarity', active: false, bars: [30, 40, 70, 90, 85, 60, 35, 25] },
  { name: 'Bass Head', emoji: '💥', desc: 'Max bass', active: false, bars: [95, 90, 80, 55, 40, 35, 45, 50] },
  { name: 'Classical', emoji: '🎻', desc: 'Wide frequency', active: false, bars: [55, 60, 65, 70, 75, 70, 65, 60] },
  { name: 'EDM', emoji: '🔊', desc: 'Bass & treble', active: false, bars: [90, 80, 50, 40, 45, 60, 80, 90] },
  { name: 'Lo-Fi', emoji: '☕', desc: 'Warm tones', active: false, bars: [65, 70, 60, 50, 45, 55, 40, 35] },
]

const surroundControls = [
  { label: 'Room Size', value: 'Large', percent: 75, color: 'text-brand-400', barColor: 'bg-brand-500' },
  { label: 'Reverb Amount', value: '42%', percent: 42, color: 'text-purple-400', barColor: 'bg-purple-500' },
  { label: 'Spatial Width', value: '88%', percent: 88, color: 'text-blue-400', barColor: 'bg-blue-500' },
  { label: 'Center Focus', value: '65%', percent: 65, color: 'text-green-400', barColor: 'bg-green-500' },
]

const analyticsStats = [
  { label: 'Latency', value: '3.2ms', change: '↓ 0.8ms', color: 'text-green-400', up: true },
  { label: 'Sample Rate', value: '48kHz', change: 'Hi-Res', color: 'text-blue-400', up: false },
  { label: 'Bit Depth', value: '32-bit', change: 'Floating', color: 'text-purple-400', up: false },
  { label: 'Enhancement', value: '+8.4dB', change: '↑ Active', color: 'text-brand-400', up: true },
]

// Generate waveform paths
function generateWave(amplitude: number, offset: number, points: number = 100): string {
  let path = 'M0,40'
  for (let i = 0; i <= points; i++) {
    const x = (i / points) * 400
    const y = 40 + Math.sin((i / points) * Math.PI * 8 + offset) * amplitude + Math.sin((i / points) * Math.PI * 3) * (amplitude * 0.5)
    path += ` L${x},${y}`
  }
  return path
}

const waveformInput = ref(generateWave(12, 0))
const waveformEnhanced = ref(generateWave(20, 1))

const spectrumBars = ref(Array.from({ length: 32 }, () => 20 + Math.random() * 60))

let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => {
    waveformInput.value = generateWave(10 + Math.random() * 8, Math.random() * 6)
    waveformEnhanced.value = generateWave(16 + Math.random() * 10, Math.random() * 6)
    spectrumBars.value = spectrumBars.value.map((v) => Math.max(10, Math.min(95, v + (Math.random() - 0.5) * 25)))
  }, 1400)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

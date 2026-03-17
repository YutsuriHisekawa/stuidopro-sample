<template>
  <section class="py-24 bg-white dark:bg-gray-950 transition-colors overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Left: Text -->
        <div>
          <span v-motion-slide-visible-left class="text-brand-600 dark:text-brand-500 text-sm font-semibold uppercase tracking-wider">Spesifikasi</span>
          <h2 v-motion-slide-visible-left :delay="100" class="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Dibangun untuk <span class="text-brand-600 dark:text-brand-500">Performa</span>
          </h2>
          <p class="mt-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Studio Pro dirancang dengan arsitektur audio engine terbaru yang ringan namun powerful. Cocok untuk semua perangkat.
          </p>

          <div class="mt-8 space-y-6">
            <div v-for="spec in specs" :key="spec.label" class="flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 bg-brand-50 dark:bg-brand-950/50 rounded-lg flex items-center justify-center">
                <span class="text-brand-600 dark:text-brand-500 font-bold text-sm">{{ spec.icon }}</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">{{ spec.label }}</h4>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{{ spec.value }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Visual -->
        <div v-motion-slide-visible-right :delay="200" class="relative">
          <div class="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
            <!-- System monitor mockup -->
            <div class="space-y-6">
              <div v-for="meter in meters" :key="meter.label">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ meter.label }}</span>
                  <span class="text-sm font-semibold" :class="meter.value <= 30 ? 'text-green-600 dark:text-green-400' : meter.value <= 60 ? 'text-yellow-600 dark:text-yellow-400' : 'text-brand-600 dark:text-brand-500'">{{ meter.value }}%</span>
                </div>
                <div class="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div class="h-full rounded-full transition-all duration-1000 ease-out"
                    :class="meter.value <= 30 ? 'bg-green-500' : meter.value <= 60 ? 'bg-yellow-500' : 'bg-brand-500'"
                    :style="{ width: animated ? meter.value + '%' : '0%' }">
                  </div>
                </div>
              </div>

              <!-- Divider -->
              <div class="border-t border-gray-200 dark:border-gray-800 pt-6">
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                    <div class="text-2xl font-bold text-brand-600 dark:text-brand-500">< 5ms</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Audio Latency</div>
                  </div>
                  <div class="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                    <div class="text-2xl font-bold text-green-600 dark:text-green-400">48kHz</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Sample Rate</div>
                  </div>
                  <div class="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                    <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">32-bit</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Bit Depth</div>
                  </div>
                  <div class="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                    <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">7.1ch</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Surround</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Glow -->
          <div class="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const specs = [
  { icon: 'CPU', label: 'Penggunaan CPU Ultra Rendah', value: 'Rata-rata kurang dari 1% — tidak mengganggu performa' },
  { icon: 'RAM', label: 'Memory Footprint Kecil', value: 'Hanya ~50MB RAM, ringan untuk semua perangkat' },
  { icon: 'OS', label: 'Cross-Platform', value: 'Support Windows, macOS, dan Linux' },
  { icon: 'API', label: 'Audio Engine Modern', value: 'WASAPI exclusive mode & ASIO support' },
]

const meters = [
  { label: 'CPU Usage', value: 0.8 },
  { label: 'Memory (RAM)', value: 2.1 },
  { label: 'Audio Quality', value: 95 },
  { label: 'Sound Enhancement', value: 78 },
]

const animated = ref(false)

onMounted(() => {
  setTimeout(() => {
    animated.value = true
  }, 300)
})
</script>

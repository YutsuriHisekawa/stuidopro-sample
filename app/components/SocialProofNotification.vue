<template>
  <Transition name="notif-slide">
    <div v-if="isVisible"
      class="fixed bottom-6 left-6 z-50 max-w-xs bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 flex items-start gap-3 cursor-pointer"
      @click="dismiss">
      <!-- Avatar -->
      <div class="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
        :style="{ backgroundColor: currentNotif.color }">
        {{ currentNotif.initial }}
      </div>
      <!-- Content -->
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 dark:text-white truncate">{{ currentNotif.name }}</p>
        <p class="text-xs text-gray-500 dark:text-gray-400">baru saja membeli <span class="font-semibold text-brand-600 dark:text-brand-500">{{ currentNotif.plan }}</span></p>
        <p class="text-[10px] text-gray-400 dark:text-gray-600 mt-0.5">{{ currentNotif.time }}</p>
      </div>
      <!-- Close -->
      <button @click.stop="dismiss" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 flex-shrink-0">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const isVisible = ref(false)
const currentIndex = ref(0)

const notifications = [
  { name: 'Budi dari Jakarta', plan: 'Pro', time: '2 menit lalu', initial: 'B', color: '#3B82F6' },
  { name: 'Sari dari Bandung', plan: 'Enterprise', time: '5 menit lalu', initial: 'S', color: '#8B5CF6' },
  { name: 'Andi dari Surabaya', plan: 'Pro', time: '8 menit lalu', initial: 'A', color: '#10B981' },
  { name: 'Rina dari Yogyakarta', plan: 'Starter', time: '12 menit lalu', initial: 'R', color: '#F59E0B' },
  { name: 'Dimas dari Medan', plan: 'Pro', time: '15 menit lalu', initial: 'D', color: '#EF4444' },
  { name: 'Maya dari Bali', plan: 'Pro', time: '18 menit lalu', initial: 'M', color: '#EC4899' },
  { name: 'Fajar dari Semarang', plan: 'Enterprise', time: '22 menit lalu', initial: 'F', color: '#6366F1' },
  { name: 'Nisa dari Makassar', plan: 'Starter', time: '25 menit lalu', initial: 'N', color: '#14B8A6' },
]

const currentNotif = computed(() => notifications[currentIndex.value % notifications.length]!)

function dismiss() {
  isVisible.value = false
}

function showNext() {
  currentIndex.value = (currentIndex.value + 1) % notifications.length
  isVisible.value = true
  setTimeout(() => { isVisible.value = false }, 4500)
}

let interval: ReturnType<typeof setInterval>

onMounted(() => {
  // First notification after 8 seconds
  setTimeout(() => {
    showNext()
    // Then every 15 seconds
    interval = setInterval(showNext, 15000)
  }, 8000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.notif-slide-enter-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.notif-slide-leave-active {
  transition: all 0.3s ease;
}
.notif-slide-enter-from {
  opacity: 0;
  transform: translateX(-100%) translateY(20px);
}
.notif-slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>

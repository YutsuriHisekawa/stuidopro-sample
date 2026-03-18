<template>
  <section class="py-16 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900 transition-colors">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-motion-slide-visible-bottom class="relative bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-8 sm:p-10 overflow-hidden">
        <!-- Background decoration -->
        <div class="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div class="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div class="relative z-10 text-center">
          <svg class="w-8 h-8 text-white/80 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">Dapatkan Tips Audio & Update Terbaru</h3>
          <p class="text-brand-100 text-sm mb-6">Bergabung dengan 50.000+ subscriber. Tanpa spam, bisa unsubscribe kapan saja.</p>

          <!-- Form -->
          <form @submit.prevent="handleSubscribe" class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              v-model="email"
              type="email"
              required
              placeholder="Masukkan email kamu"
              class="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
            />
            <button
              type="submit"
              :disabled="isSubmitting"
              class="px-6 py-3 bg-white text-brand-600 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-all shadow-lg disabled:opacity-60 flex items-center justify-center gap-2">
              <svg v-if="isSubmitting" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span v-if="!isSubmitted">{{ isSubmitting ? 'Mengirim...' : 'Subscribe' }}</span>
              <span v-else class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Berhasil!
              </span>
            </button>
          </form>

          <!-- Trust -->
          <div class="flex items-center justify-center gap-4 mt-4 text-white/50 text-[10px]">
            <span class="flex items-center gap-1">
              <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              Data aman
            </span>
            <span>•</span>
            <span>Tanpa spam</span>
            <span>•</span>
            <span>Unsubscribe kapan saja</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const email = ref('')
const isSubmitting = ref(false)
const isSubmitted = ref(false)

function handleSubscribe() {
  isSubmitting.value = true
  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false
    isSubmitted.value = true
    email.value = ''
    setTimeout(() => { isSubmitted.value = false }, 3000)
  }, 1500)
}
</script>

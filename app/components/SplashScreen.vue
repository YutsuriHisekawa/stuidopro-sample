<template>
  <Transition name="splash-fade">
    <div v-if="isLoading" class="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950">
      <!-- Background -->
      <div class="absolute inset-0">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <!-- Content -->
      <div class="relative flex flex-col items-center">
        <!-- Logo animation -->
        <div class="relative mb-6">
          <div class="w-20 h-20 bg-brand-600 rounded-2xl flex items-center justify-center animate-logo-bounce">
            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15a3 3 0 01-3-3V5.25a3 3 0 116 0V12a3 3 0 01-3 3z" />
            </svg>
          </div>
          <!-- Ripple rings -->
          <div class="absolute inset-0 w-20 h-20 border-2 border-brand-500/30 rounded-2xl animate-ripple-1"></div>
          <div class="absolute inset-0 w-20 h-20 border-2 border-brand-500/20 rounded-2xl animate-ripple-2"></div>
        </div>

        <!-- Text -->
        <h1 class="text-2xl font-bold text-white mb-1">
          Studio <span class="text-brand-500">Pro</span>
        </h1>
        <p class="text-sm text-gray-500 mb-8">Professional Audio Enhancement</p>

        <!-- Loading bar -->
        <div class="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div class="h-full bg-brand-600 rounded-full animate-loading-bar"></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2200)
})
</script>

<style scoped>
.splash-fade-leave-active {
  transition: all 0.6s ease;
}
.splash-fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

@keyframes logo-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.animate-logo-bounce {
  animation: logo-bounce 1.2s ease-in-out infinite;
}

@keyframes ripple-1 {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(1.8); opacity: 0; }
}
.animate-ripple-1 {
  animation: ripple-1 1.5s ease-out infinite;
}

@keyframes ripple-2 {
  0% { transform: scale(1); opacity: 0.4; }
  100% { transform: scale(2.2); opacity: 0; }
}
.animate-ripple-2 {
  animation: ripple-2 1.5s ease-out infinite 0.3s;
}

@keyframes loading-bar {
  0% { width: 0%; }
  30% { width: 40%; }
  60% { width: 70%; }
  80% { width: 85%; }
  100% { width: 100%; }
}
.animate-loading-bar {
  animation: loading-bar 2s ease-out forwards;
}
</style>

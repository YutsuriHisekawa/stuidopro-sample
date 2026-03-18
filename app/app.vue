<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 transition-colors">
    <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2 group">
          <div class="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center group-hover:bg-brand-500 transition-colors">
            <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15a3 3 0 01-3-3V5.25a3 3 0 116 0V12a3 3 0 01-3 3z" />
            </svg>
          </div>
          <span class="text-xl font-bold text-gray-900 dark:text-white">Studio <span class="text-brand-600">Pro</span></span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" @click.prevent="smoothScroll(link.href)"
            class="text-sm font-medium transition-colors"
            :class="activeSection === link.href ? 'text-brand-600 dark:text-brand-500' : 'text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-500'">
            {{ link.label }}
          </a>
        </div>

        <!-- Right side -->
        <div class="flex items-center gap-3">
          <!-- Dark mode toggle -->
          <button @click="toggleColorMode" class="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle dark mode">
            <svg v-if="$colorMode.value === 'dark'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <NuxtLink to="/checkout?plan=Pro" class="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-colors">
            Beli Sekarang
          </NuxtLink>

          <!-- Mobile menu toggle -->
          <button @click="mobileOpen = !mobileOpen" class="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle menu">
            <svg v-if="!mobileOpen" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Nav -->
      <div v-if="mobileOpen" class="md:hidden pb-4 border-t border-gray-200 dark:border-gray-800 mt-2 pt-4">
        <div class="flex flex-col gap-3">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" @click.prevent="smoothScroll(link.href); mobileOpen = false" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-500 transition-colors">
            {{ link.label }}
          </a>
          <NuxtLink to="/checkout?plan=Pro" class="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-colors">
            Beli Sekarang
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const mobileOpen = ref(false)
const activeSection = ref('')

const navLinks = [
  { href: '#features', label: 'Fitur' },
  { href: '#pricing', label: 'Harga' },
  { href: '#testimonials', label: 'Testimoni' },
  { href: '#faq', label: 'FAQ' },
]

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

function smoothScroll(target: string) {
  document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  const sectionIds = navLinks.map(l => l.href.slice(1))
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection.value = '#' + entry.target.id
        }
      }
    },
    { rootMargin: '-20% 0px -60% 0px' }
  )
  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  }
  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <section class="overflow-hidden border-b border-gray-100 bg-white py-14 transition-colors dark:border-gray-900 dark:bg-gray-950">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p class="mb-8 text-center text-sm font-medium uppercase tracking-[0.28em] text-gray-400 dark:text-gray-600">
        Dipercaya oleh brand & komunitas terbaik
      </p>
    </div>

    <div class="relative">
      <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent dark:from-gray-950"></div>
      <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent dark:from-gray-950"></div>

      <div class="marquee-track">
        <div v-for="copy in 2" :key="copy" class="marquee-group" :aria-hidden="copy === 2">
          <article
            v-for="brand in brands"
            :key="`${copy}-${brand.name}`"
            class="brand-pill"
            :class="brand.tone"
            :aria-label="brand.name"
          >
            <span class="brand-icon" aria-hidden="true">
              <svg v-if="brand.icon === 'spotify'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-5 w-5">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M7.5 10.5c3.8-1 5.9-.9 9 .5"></path>
                <path d="M8.4 13c2.8-.7 4.8-.5 7 .6"></path>
                <path d="M9.2 15.3c1.9-.3 3.3-.1 4.9.6"></path>
              </svg>
              <svg v-else-if="brand.icon === 'youtube'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-5 w-5">
                <rect x="3.5" y="6.5" width="17" height="11" rx="3"></rect>
                <path d="M10 9.5l5 2.5-5 2.5v-5z" fill="currentColor" stroke="none"></path>
              </svg>
              <svg v-else-if="brand.icon === 'twitch'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-5 w-5">
                <path d="M6 4h12v9l-3 3h-3l-2 2v-2H6z"></path>
                <path d="M10 8v3"></path>
                <path d="M14 8v3"></path>
              </svg>
              <svg v-else-if="brand.icon === 'discord'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-5 w-5">
                <path d="M8 8.5c2.6-1 5.4-1 8 0"></path>
                <path d="M7 16c2.9 1.3 7.1 1.3 10 0l1-6.5c-1-.9-2.2-1.5-3.5-1.8l-.8 1.3a9 9 0 00-3.4 0l-.8-1.3A8.5 8.5 0 006 9.5z"></path>
                <circle cx="10" cy="12.5" r="1"></circle>
                <circle cx="14" cy="12.5" r="1"></circle>
              </svg>
              <svg v-else-if="brand.icon === 'steam'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-5 w-5">
                <circle cx="15.5" cy="8.5" r="3"></circle>
                <circle cx="8" cy="15.5" r="2.5"></circle>
                <path d="M10.2 14.6l3-2.2"></path>
                <path d="M5.8 14.6l-2.3-1"></path>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-5 w-5">
                <rect x="4" y="7" width="10" height="10" rx="2"></rect>
                <path d="M14 10l5-2v8l-5-2"></path>
              </svg>
            </span>

            <span class="text-sm font-semibold tracking-[0.14em] uppercase">{{ brand.name }}</span>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const brands = [
  { name: 'Spotify', icon: 'spotify', tone: 'brand-pill-emerald' },
  { name: 'YouTube', icon: 'youtube', tone: 'brand-pill-red' },
  { name: 'Twitch', icon: 'twitch', tone: 'brand-pill-violet' },
  { name: 'Discord', icon: 'discord', tone: 'brand-pill-indigo' },
  { name: 'Steam', icon: 'steam', tone: 'brand-pill-slate' },
  { name: 'Zoom', icon: 'zoom', tone: 'brand-pill-sky' },
] as const
</script>

<style scoped>
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 22s linear infinite;
  will-change: transform;
}

.marquee-group {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  padding-inline: 0.5rem;
}

.brand-pill {
  display: inline-flex;
  min-width: 11rem;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(17, 24, 39, 0.38);
  padding: 0.95rem 1.2rem;
  color: rgb(148 163 184);
  backdrop-filter: blur(12px);
}

.brand-icon {
  display: inline-flex;
  height: 2.25rem;
  width: 2.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.06);
}

.brand-pill-emerald .brand-icon { color: rgb(52 211 153); }
.brand-pill-red .brand-icon { color: rgb(248 113 113); }
.brand-pill-violet .brand-icon { color: rgb(196 181 253); }
.brand-pill-indigo .brand-icon { color: rgb(129 140 248); }
.brand-pill-slate .brand-icon { color: rgb(203 213 225); }
.brand-pill-sky .brand-icon { color: rgb(125 211 252); }

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.marquee-track:hover {
  animation-play-state: paused;
}

@media (max-width: 640px) {
  .marquee-track {
    animation-duration: 18s;
  }

  .brand-pill {
    min-width: 9.5rem;
    gap: 0.65rem;
    padding: 0.85rem 1rem;
  }
}
</style>

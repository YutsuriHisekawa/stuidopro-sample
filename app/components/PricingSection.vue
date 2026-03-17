<template>
  <section id="pricing" class="py-24 bg-white dark:bg-gray-950 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <span v-motion-slide-visible-bottom class="text-brand-600 dark:text-brand-500 text-sm font-semibold uppercase tracking-wider">Harga</span>
        <h2 v-motion-slide-visible-bottom :delay="100" class="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Pilih Paket yang Tepat
        </h2>
        <p v-motion-slide-visible-bottom :delay="200" class="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
          Investasi terbaik untuk pengalaman audio profesional. Pilih paket sesuai kebutuhanmu.
        </p>

        <!-- Billing toggle -->
        <div v-motion-slide-visible-bottom :delay="300" class="flex items-center justify-center gap-3 mt-8">
          <span :class="!annual ? 'text-gray-900 dark:text-white font-semibold' : 'text-gray-500 dark:text-gray-400'" class="text-sm">Bulanan</span>
          <button @click="annual = !annual" class="relative w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full transition-colors" :class="annual ? 'bg-brand-600 dark:bg-brand-600' : ''">
            <span class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform" :class="annual ? 'translate-x-6' : ''"></span>
          </button>
          <span :class="annual ? 'text-gray-900 dark:text-white font-semibold' : 'text-gray-500 dark:text-gray-400'" class="text-sm">
            Tahunan <span class="text-brand-600 dark:text-brand-500 font-semibold">-20%</span>
          </span>
        </div>
      </div>

      <!-- Pricing Cards -->
      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div v-for="(plan, index) in plans" :key="plan.name"
          v-motion-slide-visible-bottom :delay="200 + index * 100"
          class="relative p-8 rounded-2xl border transition-all"
          :class="plan.popular 
            ? 'bg-gray-900 dark:bg-white border-brand-600 shadow-2xl shadow-brand-600/10 scale-105' 
            : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-brand-300 dark:hover:border-brand-700'">
          
          <!-- Popular badge -->
          <div v-if="plan.popular" class="absolute -top-4 left-1/2 -translate-x-1/2">
            <span class="px-4 py-1 text-xs font-semibold text-white bg-brand-600 rounded-full">Paling Populer</span>
          </div>

          <!-- Plan icon -->
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
            :class="plan.popular ? 'bg-brand-600/20' : 'bg-brand-50 dark:bg-brand-950/50'">
            <div v-html="plan.icon" class="w-6 h-6" :class="plan.popular ? 'text-brand-400 dark:text-brand-600' : 'text-brand-600 dark:text-brand-500'"></div>
          </div>

          <h3 :class="plan.popular ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'" class="text-lg font-semibold">{{ plan.name }}</h3>
          <p :class="plan.popular ? 'text-gray-400 dark:text-gray-500' : 'text-gray-500 dark:text-gray-400'" class="text-sm mt-1">{{ plan.description }}</p>

          <div class="mt-6 flex items-baseline gap-1">
            <span :class="plan.popular ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'" class="text-4xl font-bold">
              Rp{{ (annual ? plan.price * 10 : plan.price).toLocaleString('id-ID') }}
            </span>
            <span :class="plan.popular ? 'text-gray-400 dark:text-gray-500' : 'text-gray-500 dark:text-gray-400'" class="text-sm">
              /{{ annual ? 'tahun' : 'bulan' }}
            </span>
          </div>

          <NuxtLink :to="`/checkout?plan=${plan.name}&billing=${annual ? 'annual' : 'monthly'}`" 
            class="mt-6 block text-center py-3 rounded-xl font-semibold transition-all text-sm"
            :class="plan.popular 
              ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/25' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'">
            {{ plan.cta }}
          </NuxtLink>

          <ul class="mt-8 space-y-3">
            <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-3">
              <svg class="w-5 h-5 mt-0.5 flex-shrink-0" :class="plan.popular ? 'text-brand-400 dark:text-brand-600' : 'text-brand-600 dark:text-brand-500'" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span :class="plan.popular ? 'text-gray-300 dark:text-gray-600' : 'text-gray-600 dark:text-gray-400'" class="text-sm">{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const annual = ref(false)

const plans = [
  {
    name: 'Starter',
    description: 'Untuk pengguna personal.',
    price: 29000,
    cta: 'Beli Starter',
    popular: false,
    icon: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>',
    features: [
      'Equalizer 5-band',
      '10 preset audio',
      'Bass Boost standar',
      'Kualitas output HD',
      '1 perangkat',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    description: 'Untuk audiophile & kreator.',
    price: 79000,
    cta: 'Beli Pro',
    popular: true,
    icon: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>',
    features: [
      'Equalizer 10-band profesional',
      '20+ preset audio premium',
      'Bass Boost & 3D Surround',
      'Low Latency mode',
      'Multi-device sync (3 device)',
      'Priority email support',
      'Update gratis selamanya',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Untuk tim & bisnis.',
    price: 249000,
    cta: 'Hubungi Sales',
    popular: false,
    icon: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>',
    features: [
      'Semua fitur Pro',
      'Unlimited devices',
      'Custom audio profiles',
      'API access',
      'Admin dashboard',
      'Dedicated account manager',
      'SLA 99.99% uptime',
    ],
  },
]
</script>

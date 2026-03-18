<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <header class="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <NuxtLink to="/" class="flex items-center gap-3 group">
            <div class="w-9 h-9 bg-brand-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-600/20">
              <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15a3 3 0 01-3-3V5.25a3 3 0 116 0V12a3 3 0 01-3 3z" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400">Checkout</p>
              <p class="text-lg font-bold text-gray-900 dark:text-white">Studio <span class="text-brand-600">Pro</span></p>
            </div>
          </NuxtLink>

          <NuxtLink to="/" class="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-500 transition-colors flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Kembali
          </NuxtLink>
        </div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
        <section class="space-y-6">
          <div v-motion-slide-left class="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
            <div class="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <p class="text-sm uppercase tracking-[0.2em] text-brand-600 font-semibold mb-2">Lisensi Resmi</p>
                <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Aktivasi Studio Pro</h1>
                <p class="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl">
                  Isi data pembeli, lalu lanjutkan ke halaman pembayaran. Setelah pembayaran berhasil, kamu akan kembali ke halaman sukses untuk melihat status pesananmu.
                </p>
              </div>
              <div class="px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-950/30 text-brand-700 dark:text-brand-300 text-sm font-semibold border border-brand-100 dark:border-brand-900/50">
                Bayar sekali
              </div>
            </div>

            <div class="grid sm:grid-cols-3 gap-4 mb-8">
              <div v-for="item in checkoutSteps" :key="item.title" class="rounded-2xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50/70 dark:bg-gray-900/60">
                <div class="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-semibold mb-4">
                  {{ item.step }}
                </div>
                <h2 class="font-semibold text-gray-900 dark:text-white">{{ item.title }}</h2>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">{{ item.description }}</p>
              </div>
            </div>

            <div class="rounded-2xl border border-gray-200 dark:border-gray-700 p-5 bg-gray-50 dark:bg-gray-900/60">
              <div class="flex items-center gap-3 mb-5">
                <div class="w-11 h-11 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 8.25h3.5M20 6.5v3.5" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Produk</p>
                  <h2 class="text-xl font-bold text-gray-900 dark:text-white">{{ license.name }}</h2>
                </div>
              </div>

              <ul class="grid sm:grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-400">
                <li v-for="feature in licenseFeatures" :key="feature" class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <aside class="space-y-6">
          <div v-motion-slide-left :delay="100" class="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-6 sm:p-7 sticky top-24">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Data pembeli</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Data ini digunakan untuk membuat pesanan dan mengarahkanmu ke halaman pembayaran.</p>

            <form class="space-y-5" @submit.prevent="processCheckout">
              <div>
                <label for="fullName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Nama lengkap
                </label>
                <input id="fullName" v-model="form.fullName" type="text" autocomplete="name" placeholder="Budi Santoso"
                  class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Email
                </label>
                <input id="email" v-model="form.email" type="email" autocomplete="email" placeholder="budi.santoso@example.com"
                  class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" />
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Nomor WhatsApp
                </label>
                <input id="phone" v-model="form.phone" type="tel" autocomplete="tel" placeholder="081234567890"
                  class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" />
              </div>

              <div v-if="submitError" class="rounded-2xl border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-sm dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-300">
                {{ submitError }}
              </div>

              <button type="submit" :disabled="processing || !isFormValid"
                class="w-full py-3 rounded-xl font-semibold text-white bg-brand-600 hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-brand-600/20 flex items-center justify-center gap-2">
                <svg v-if="processing" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ processing ? 'Membuat order...' : 'Lanjut ke pembayaran' }}
              </button>
            </form>

            <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
              <div class="flex justify-between items-start gap-4">
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Item</p>
                  <p class="font-semibold text-gray-900 dark:text-white">{{ license.name }}</p>
                </div>
                <p class="font-semibold text-gray-900 dark:text-white">Rp{{ license.price.toLocaleString('id-ID') }}</p>
              </div>
              <div class="flex justify-between items-center pt-2 border-t border-dashed border-gray-200 dark:border-gray-700">
                <span class="text-sm text-gray-500 dark:text-gray-400">Total tagihan</span>
                <span class="text-2xl font-bold text-brand-600 dark:text-brand-500">Rp{{ license.price.toLocaleString('id-ID') }}</span>
              </div>
              <p class="text-xs leading-6 text-gray-500 dark:text-gray-400">
                Setelah pesanan dibuat, kamu akan diarahkan ke halaman pembayaran. Setelah selesai, kamu akan otomatis kembali ke halaman sukses untuk melihat status pesanan.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
type RegisterResponse = {
  order: {
    order_id: string
    order_number: string
    amount: number
    currency: string
    payment_status: string
    midtrans_snap_token: string
    redirect_url: string
  }
  registrant: {
    id: string
  }
}

const config = useRuntimeConfig()
const apiBase = computed(() => String(config.public.apiBase || 'http://127.0.0.1:8000').replace(/\/$/, ''))

const processing = ref(false)
const submitError = ref('')

const license = {
  name: 'Studio Pro License Key',
  price: 150000,
}

const licenseFeatures = [
  '1 lisensi aktivasi resmi dengan serial number unik',
  'Status pesanan diperbarui otomatis setelah pembayaran',
  'Data pembeli dan pembayaran tersimpan rapi',
  'Setelah bayar, kamu langsung kembali ke halaman sukses',
]

const checkoutSteps = [
  { step: '1', title: 'Isi data', description: 'Masukkan nama, email, dan nomor WhatsApp untuk membuat pesanan.' },
  { step: '2', title: 'Pilih pembayaran', description: 'Pilih metode pembayaran yang paling nyaman di halaman pembayaran.' },
  { step: '3', title: 'Selesai', description: 'Setelah pembayaran berhasil, kamu kembali ke halaman sukses untuk melihat status pesanan.' },
]

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
})

const isFormValid = computed(() => {
  return form.fullName.trim().length > 0 && form.email.trim().length > 0 && form.phone.trim().length > 0
})

function getErrorMessage(error: unknown) {
  if (error && typeof error === 'object') {
    const maybeError = error as {
      data?: { message?: string; code?: string; errors?: Record<string, string[]> }
      message?: string
      statusCode?: number
    }

    const validationErrors = maybeError.data?.errors
    if (validationErrors) {
      const firstField = Object.values(validationErrors)[0]
      if (firstField?.[0]) {
        return firstField[0]
      }
    }

    if (maybeError.data?.code === 'PAYMENT_UNAVAILABLE' || maybeError.statusCode === 503) {
      return 'Pembayaran sedang belum tersedia. Silakan coba lagi sebentar atau hubungi admin untuk bantuan.'
    }

    if (maybeError.data?.code === 'ORDER_CREATION_FAILED' || maybeError.statusCode === 500) {
      return 'Order belum bisa dibuat saat ini. Silakan coba lagi dalam beberapa menit.'
    }

    if (maybeError.data?.message) {
      return maybeError.data.message
    }

    if (maybeError.message) {
      return maybeError.message
    }
  }

  return 'Checkout belum bisa diproses. Periksa koneksi internetmu lalu coba lagi.'
}

async function processCheckout() {
  if (!isFormValid.value || processing.value) {
    return
  }

  processing.value = true
  submitError.value = ''

  try {
    const response = await $fetch<RegisterResponse>(`${apiBase.value}/api/v1/register`, {
      method: 'POST',
      body: {
        registrant: {
          name: form.fullName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
        },
      },
    })

    if (import.meta.client) {
      sessionStorage.setItem('checkout:last-order', JSON.stringify({
        orderNumber: response.order.order_number,
        registrantName: form.fullName.trim(),
        registrantEmail: form.email.trim(),
      }))
      window.location.href = response.order.redirect_url
    }
  } catch (error) {
    submitError.value = getErrorMessage(error)
    processing.value = false
    return
  }

  processing.value = false
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center mb-10">
        <div v-motion-pop class="mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-6"
          :class="heroBadgeClass">
          <svg class="w-10 h-10" :class="heroIconClass" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path v-if="isPaid" stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            <path v-else-if="isPending" stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0 3.75h.008v.008H12v-.008zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <p class="text-sm uppercase tracking-[0.2em] text-brand-600 font-semibold mb-3">Status Pembayaran</p>
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">{{ headline }}</h1>
        <p class="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mt-3 text-lg">
          {{ description }}
        </p>
      </div>

      <div v-if="loading" class="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-10 text-center">
        <svg class="w-8 h-8 animate-spin mx-auto text-brand-600 mb-4" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p class="text-lg font-semibold text-gray-900 dark:text-white">Memeriksa status order...</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Halaman ini akan refresh status otomatis dari backend.</p>
      </div>

      <div v-else-if="errorMessage" class="bg-white dark:bg-gray-800 rounded-3xl border border-red-200 dark:border-red-900/40 p-8 text-center">
        <p class="text-lg font-semibold text-red-700 dark:text-red-300">{{ errorMessage }}</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
          <button @click="handleRefreshClick" class="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-white bg-brand-600 hover:bg-brand-700 transition-all">
            Coba cek lagi
          </button>
          <NuxtLink to="/checkout" class="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
            Kembali ke checkout
          </NuxtLink>
        </div>
      </div>

      <div v-else-if="order" class="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
        <section class="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
          <div class="flex items-start justify-between gap-4 mb-6">
            <div>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">Detail order</h2>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Berikut detail pembayaran dan data pembeli untuk pesanan ini.</p>
            </div>
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border" :class="statusBadgeClass">
              <span class="w-2.5 h-2.5 rounded-full" :class="statusDotClass"></span>
              {{ statusLabel }}
            </span>
          </div>

          <div class="grid sm:grid-cols-2 gap-4 text-sm mb-6">
            <div class="rounded-2xl bg-gray-50 dark:bg-gray-900/60 p-4 border border-gray-200 dark:border-gray-700">
              <p class="text-gray-500 dark:text-gray-400 mb-1">Order Number</p>
              <p class="font-mono text-gray-900 dark:text-white text-base break-all">{{ order.order_number }}</p>
            </div>
            <div class="rounded-2xl bg-gray-50 dark:bg-gray-900/60 p-4 border border-gray-200 dark:border-gray-700">
              <p class="text-gray-500 dark:text-gray-400 mb-1">Payment Method</p>
              <p class="font-semibold text-gray-900 dark:text-white text-base">{{ order.payment_method }}</p>
            </div>
            <div class="rounded-2xl bg-gray-50 dark:bg-gray-900/60 p-4 border border-gray-200 dark:border-gray-700">
              <p class="text-gray-500 dark:text-gray-400 mb-1">Payment Time</p>
              <p class="font-semibold text-gray-900 dark:text-white text-base">{{ paymentTimeLabel }}</p>
            </div>
            <div class="rounded-2xl bg-gray-50 dark:bg-gray-900/60 p-4 border border-gray-200 dark:border-gray-700">
              <p class="text-gray-500 dark:text-gray-400 mb-1">Total Dibayar</p>
              <p class="font-semibold text-brand-600 dark:text-brand-500 text-base">Rp{{ order.amount.toLocaleString('id-ID') }}</p>
            </div>
          </div>

          <div class="rounded-3xl border border-gray-200 dark:border-gray-700 p-5 bg-gray-50 dark:bg-gray-900/60">
            <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Data registrant</h3>
            <dl class="space-y-3 text-sm">
              <div class="flex justify-between gap-4">
                <dt class="text-gray-500 dark:text-gray-400">Nama</dt>
                <dd class="font-medium text-gray-900 dark:text-white text-right">{{ order.registrant.name }}</dd>
              </div>
              <div class="flex justify-between gap-4">
                <dt class="text-gray-500 dark:text-gray-400">Email</dt>
                <dd class="font-medium text-gray-900 dark:text-white text-right break-all">{{ order.registrant.email }}</dd>
              </div>
              <div class="flex justify-between gap-4">
                <dt class="text-gray-500 dark:text-gray-400">Nomor WhatsApp</dt>
                <dd class="font-medium text-gray-900 dark:text-white text-right">{{ order.registrant.phone }}</dd>
              </div>
              <div class="flex justify-between gap-4 pt-3 border-t border-dashed border-gray-200 dark:border-gray-700">
                <dt class="text-gray-500 dark:text-gray-400">Serial Number</dt>
                <dd class="font-mono text-right" :class="isPaid ? 'text-brand-600 dark:text-brand-400' : 'text-gray-500 dark:text-gray-400'">
                  {{ order.registrant.serial_number }}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <aside class="space-y-6">
          <div class="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Informasi pembayaran</h2>
            <ul class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 mt-0.5 flex-shrink-0" :class="heroIconClass" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span v-if="isPaid">Pembayaran sudah berhasil diverifikasi dan lisensi siap digunakan.</span>
                <span v-else-if="isPending">Pembayaran kamu masih kami periksa. Status akan diperbarui otomatis dalam beberapa saat.</span>
                <span v-else>Status pembayaran sudah diperbarui. Jika ada ketidaksesuaian, silakan hubungi admin.</span>
              </li>
            </ul>
          </div>

          <div class="flex flex-col gap-3">
            <button @click="handleRefreshClick" class="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-700 shadow-lg shadow-brand-600/20 transition-all">
              Refresh status
            </button>
            <NuxtLink to="/checkout" class="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
              Buat order baru
            </NuxtLink>
            <NuxtLink to="/" class="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
              Kembali ke beranda
            </NuxtLink>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type OrderStatusResponse = {
  success: boolean
  data: {
    order_number: string
    payment_method: string
    payment_status: string
    amount: number
    payment_time: string | null
    registrant: {
      name: string
      email: string
      phone: string
      serial_number: string
    }
  }
}

type OrderStatus = OrderStatusResponse['data']

const route = useRoute()
const config = useRuntimeConfig()

const apiBase = computed(() => String(config.public.apiBase || 'http://127.0.0.1:8000').replace(/\/$/, ''))
const orderNumber = computed(() => String(route.query.order_number || '').trim())
const statusEndpoint = computed(() => orderNumber.value ? `${apiBase.value}/api/v1/orders/${orderNumber.value}/status` : '-')

const loading = ref(true)
const errorMessage = ref('')
const order = ref<OrderStatus | null>(null)

let pollingHandle: ReturnType<typeof setInterval> | null = null

const normalizedStatus = computed(() => String(order.value?.payment_status || '').toLowerCase())
const isPaid = computed(() => ['paid', 'settlement', 'capture'].includes(normalizedStatus.value))
const isPending = computed(() => ['pending', 'waiting', 'process', 'processing'].includes(normalizedStatus.value))

const headline = computed(() => {
  if (isPaid.value) {
    return 'Pembayaran berhasil terverifikasi'
  }
  if (isPending.value) {
    return 'Pembayaran sedang diverifikasi'
  }
  return 'Status pembayaran belum berhasil'
})

const description = computed(() => {
  if (isPaid.value && order.value) {
    return `Terima kasih, ${order.value.registrant.name}. Lisensi kamu sudah tercatat dan serial number siap dipakai.`
  }
  if (isPending.value) {
    return 'Pembayaranmu sedang diperiksa. Halaman ini akan memperbarui status secara otomatis.'
  }
  return 'Status pembayaran ini sudah final. Jika ada kendala, silakan hubungi admin.'
})

const paymentTimeLabel = computed(() => {
  if (!order.value?.payment_time) {
    return isPending.value ? 'Menunggu konfirmasi' : '-'
  }

  return new Date(order.value.payment_time).toLocaleString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
})

const statusLabel = computed(() => {
  if (isPaid.value) {
    return 'Paid'
  }
  if (isPending.value) {
    return 'Pending'
  }
  return order.value?.payment_status || 'Unknown'
})

const heroBadgeClass = computed(() => {
  if (isPaid.value) {
    return 'bg-green-100 dark:bg-green-900/30'
  }
  if (isPending.value) {
    return 'bg-amber-100 dark:bg-amber-900/30'
  }
  return 'bg-red-100 dark:bg-red-900/30'
})

const heroIconClass = computed(() => {
  if (isPaid.value) {
    return 'text-green-600 dark:text-green-400'
  }
  if (isPending.value) {
    return 'text-amber-600 dark:text-amber-400'
  }
  return 'text-red-600 dark:text-red-400'
})

const statusBadgeClass = computed(() => {
  if (isPaid.value) {
    return 'bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400'
  }
  if (isPending.value) {
    return 'bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400'
  }
  return 'bg-red-50 border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400'
})

const statusDotClass = computed(() => {
  if (isPaid.value) {
    return 'bg-green-500'
  }
  if (isPending.value) {
    return 'bg-amber-500'
  }
  return 'bg-red-500'
})

function getErrorMessage(error: unknown) {
  if (error && typeof error === 'object') {
    const maybeError = error as { data?: { message?: string }; message?: string }
    return maybeError.data?.message || maybeError.message || 'Gagal mengambil status order dari backend.'
  }

  return 'Gagal mengambil status order dari backend.'
}

function stopPolling() {
  if (pollingHandle) {
    clearInterval(pollingHandle)
    pollingHandle = null
  }
}

function maybeStartPolling() {
  if (!import.meta.client || pollingHandle || !orderNumber.value) {
    return
  }

  pollingHandle = window.setInterval(async () => {
    await refreshStatus(false)
  }, 3000)
}

async function refreshStatus(showLoader = true) {
  if (!orderNumber.value) {
    loading.value = false
    errorMessage.value = 'Query order_number tidak ditemukan. Pastikan redirect dari Midtrans menuju halaman ini.'
    stopPolling()
    return
  }

  if (showLoader) {
    loading.value = true
  }

  errorMessage.value = ''

  try {
    const response = await $fetch<OrderStatusResponse>(statusEndpoint.value)
    order.value = response.data

    if (!isPending.value) {
      stopPolling()
    }
  } catch (error) {
    errorMessage.value = getErrorMessage(error)
  } finally {
    loading.value = false
  }
}

function handleRefreshClick() {
  return refreshStatus()
}

onMounted(async () => {
  await refreshStatus()

  if (!errorMessage.value && isPending.value) {
    maybeStartPolling()
  }
})

watch(normalizedStatus, (status) => {
  if (!status) {
    return
  }

  if (['paid', 'settlement', 'capture', 'failed', 'cancelled', 'expired', 'deny'].includes(status)) {
    stopPolling()
    return
  }

  maybeStartPolling()
})

onBeforeUnmount(() => {
  stopPolling()
})
</script>

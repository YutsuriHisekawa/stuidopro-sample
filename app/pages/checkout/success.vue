<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors">
    <div class="max-w-lg mx-auto px-4 py-16 text-center">
      <!-- Success animation -->
      <div v-motion-pop class="mx-auto w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-8">
        <svg class="w-10 h-10 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>

      <h1 v-motion-slide-visible-bottom :delay="200" class="text-3xl font-bold text-gray-900 dark:text-white mb-3">
        Pembayaran Berhasil! 🎉
      </h1>
      <p v-motion-slide-visible-bottom :delay="300" class="text-gray-600 dark:text-gray-400 text-lg mb-8">
        Terima kasih, <span class="font-semibold text-gray-900 dark:text-white">{{ name }}</span>! Paket Studio Pro <span class="font-semibold text-brand-600 dark:text-brand-500">{{ plan }}</span> kamu sudah aktif.
      </p>

      <!-- Order Details Card -->
      <div v-motion-slide-visible-bottom :delay="400" class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 text-left mb-8">
        <h3 class="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <svg class="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
          </svg>
          Detail Transaksi
        </h3>
        <div class="space-y-3 text-sm">
          <div class="flex justify-between">
            <span class="text-gray-500 dark:text-gray-400">No. Invoice</span>
            <span class="font-mono text-gray-900 dark:text-white">INV-{{ invoiceId }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500 dark:text-gray-400">Paket</span>
            <span class="font-medium text-gray-900 dark:text-white">Studio Pro {{ plan }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500 dark:text-gray-400">Email</span>
            <span class="font-medium text-gray-900 dark:text-white">{{ email }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500 dark:text-gray-400">Metode Pembayaran</span>
            <span class="font-medium text-gray-900 dark:text-white">{{ method }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500 dark:text-gray-400">Tanggal</span>
            <span class="font-medium text-gray-900 dark:text-white">{{ today }}</span>
          </div>
          <div class="border-t border-gray-200 dark:border-gray-700 pt-3">
            <div class="flex justify-between">
              <span class="font-bold text-gray-900 dark:text-white">Total Dibayar</span>
              <span class="font-bold text-lg text-brand-600 dark:text-brand-500">Rp{{ Number(total).toLocaleString('id-ID') }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Status badge -->
      <div v-motion-slide-visible-bottom :delay="500" class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-sm font-medium mb-8">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Konfirmasi telah dikirim ke {{ email }}
      </div>

      <!-- Actions -->
      <div v-motion-slide-visible-bottom :delay="600" class="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="#" class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-700 shadow-lg shadow-brand-600/20 transition-all">
          <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Download Studio Pro
        </a>
        <NuxtLink to="/" class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
          <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          Kembali ke Beranda
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const plan = (route.query.plan as string) || 'Pro'
const name = (route.query.name as string) || 'Pengguna'
const email = (route.query.email as string) || '-'
const total = (route.query.total as string) || '0'
const method = (route.query.method as string) || 'Credit Card'

const invoiceId = `${Date.now().toString(36).toUpperCase()}${Math.random().toString(36).substring(2, 6).toUpperCase()}`
const today = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
</script>

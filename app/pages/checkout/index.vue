<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <!-- Header -->
    <header class="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <NuxtLink to="/" class="flex items-center gap-2 group">
            <div class="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15a3 3 0 01-3-3V5.25a3 3 0 116 0V12a3 3 0 01-3 3z" />
              </svg>
            </div>
            <span class="text-xl font-bold text-gray-900 dark:text-white">Studio <span class="text-brand-600">Pro</span></span>
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

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <!-- Progress Steps -->
      <div class="flex items-center justify-center gap-4 mb-12">
        <div v-for="(s, i) in progressSteps" :key="s" class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors"
            :class="step >= i + 1 ? 'bg-brand-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'">
            <svg v-if="step > i + 1" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span v-else>{{ i + 1 }}</span>
          </div>
          <span class="text-sm font-medium hidden sm:block" :class="step >= i + 1 ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'">{{ s }}</span>
          <svg v-if="i < progressSteps.length - 1" class="w-5 h-5 text-gray-300 dark:text-gray-700 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Main Form -->
        <div class="lg:col-span-2">
          <!-- Step 1: Pilih Paket -->
          <div v-if="step === 1" v-motion-slide-left class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <svg class="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              Pilih Paket
            </h2>

            <!-- Package selection -->
            <div class="space-y-4">
              <label v-for="pkg in packages" :key="pkg.name"
                class="flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all"
                :class="form.package === pkg.name
                  ? 'border-brand-600 bg-brand-50 dark:bg-brand-950/30'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'">
                <input type="radio" v-model="form.package" :value="pkg.name" class="sr-only" />
                <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                  :class="form.package === pkg.name ? 'border-brand-600' : 'border-gray-300 dark:border-gray-600'">
                  <div v-if="form.package === pkg.name" class="w-2.5 h-2.5 rounded-full bg-brand-600"></div>
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <span class="font-semibold text-gray-900 dark:text-white">{{ pkg.name }}</span>
                    <span class="font-bold text-brand-600 dark:text-brand-500">Rp{{ pkg.price.toLocaleString('id-ID') }}</span>
                  </div>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ pkg.desc }}</p>
                </div>
              </label>
            </div>

            <!-- Billing period -->
            <div class="mt-6">
              <label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">Periode Langganan</label>
              <div class="grid grid-cols-2 gap-3">
                <button v-for="period in periods" :key="period.value" @click="form.billing = period.value"
                  class="p-3 rounded-xl border-2 text-center transition-all"
                  :class="form.billing === period.value
                    ? 'border-brand-600 bg-brand-50 dark:bg-brand-950/30'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'">
                  <div class="text-sm font-semibold text-gray-900 dark:text-white">{{ period.label }}</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{{ period.sub }}</div>
                </button>
              </div>
            </div>

            <button @click="step = 2" :disabled="!form.package"
              class="mt-8 w-full py-3 rounded-xl font-semibold text-white bg-brand-600 hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-brand-600/20">
              Lanjutkan
            </button>
          </div>

          <!-- Step 2: Data Diri -->
          <div v-if="step === 2" v-motion-slide-left class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <svg class="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              Data Diri
            </h2>

            <div class="space-y-5">
              <!-- Nama Lengkap -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Nama Lengkap <span class="text-brand-500">*</span>
                </label>
                <input v-model="form.fullName" type="text" placeholder="Masukkan nama lengkap"
                  class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" />
              </div>

              <!-- Email & Phone -->
              <div class="grid sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Email Address <span class="text-brand-500">*</span>
                  </label>
                  <input v-model="form.email" type="email" placeholder="email@contoh.com"
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Phone Number <span class="text-brand-500">*</span>
                  </label>
                  <input v-model="form.phone" type="tel" placeholder="0812 3456 7890"
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" />
                </div>
              </div>
            </div>

            <div class="flex gap-3 mt-8">
              <button @click="step = 1"
                class="px-6 py-3 rounded-xl font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
                Kembali
              </button>
              <button @click="goToStep3" :disabled="!isStep2Valid"
                class="flex-1 py-3 rounded-xl font-semibold text-white bg-brand-600 hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-brand-600/20">
                Lanjutkan ke Pembayaran
              </button>
            </div>
          </div>

          <!-- Step 3: Pembayaran -->
          <div v-if="step === 3" v-motion-slide-left class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <svg class="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
              Metode Pembayaran
            </h2>

            <!-- Payment method tabs -->
            <div class="flex gap-3 mb-6">
              <button @click="form.paymentMethod = 'cc'"
                class="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all"
                :class="form.paymentMethod === 'cc'
                  ? 'border-brand-600 bg-brand-50 dark:bg-brand-950/30'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'">
                <svg class="w-6 h-6" :class="form.paymentMethod === 'cc' ? 'text-brand-600' : 'text-gray-400'" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
                <span class="font-semibold text-sm" :class="form.paymentMethod === 'cc' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'">Credit Card</span>
              </button>
              <button @click="form.paymentMethod = 'paypal'"
                class="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all"
                :class="form.paymentMethod === 'paypal'
                  ? 'border-brand-600 bg-brand-50 dark:bg-brand-950/30'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'">
                <svg class="w-6 h-6" :class="form.paymentMethod === 'paypal' ? 'text-brand-600' : 'text-gray-400'" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 00-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 00-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 00.554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 01.923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
                </svg>
                <span class="font-semibold text-sm" :class="form.paymentMethod === 'paypal' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'">PayPal</span>
              </button>
            </div>

            <!-- Credit Card Form -->
            <div v-if="form.paymentMethod === 'cc'" class="space-y-5">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Nomor Kartu <span class="text-brand-500">*</span>
                </label>
                <div class="relative">
                  <input v-model="form.cardNumber" type="text" placeholder="1234 5678 9012 3456" maxlength="19"
                    @input="formatCardNumber"
                    class="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" />
                  <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Nama Pemegang Kartu <span class="text-brand-500">*</span>
                </label>
                <input v-model="form.cardName" type="text" placeholder="Nama sesuai kartu"
                  class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" />
              </div>

              <div class="grid grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Masa Berlaku <span class="text-brand-500">*</span>
                  </label>
                  <input v-model="form.cardExpiry" type="text" placeholder="MM/YY" maxlength="5"
                    @input="formatExpiry"
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    CVV <span class="text-brand-500">*</span>
                  </label>
                  <input v-model="form.cardCvv" type="text" placeholder="123" maxlength="4"
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" />
                </div>
              </div>
            </div>

            <!-- PayPal -->
            <div v-if="form.paymentMethod === 'paypal'" class="space-y-5">
              <div class="text-center py-8 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl">
                <svg class="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 00-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 00-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 00.554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 01.923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
                </svg>
                <p class="text-gray-600 dark:text-gray-400 font-medium">Kamu akan dialihkan ke PayPal</p>
                <p class="text-sm text-gray-400 dark:text-gray-500 mt-1">Login ke akun PayPal-mu untuk menyelesaikan pembayaran</p>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Email PayPal <span class="text-brand-500">*</span>
                </label>
                <input v-model="form.paypalEmail" type="email" placeholder="email@paypal.com"
                  class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" />
              </div>
            </div>

            <div class="flex gap-3 mt-8">
              <button @click="step = 2"
                class="px-6 py-3 rounded-xl font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
                Kembali
              </button>
              <button @click="processPayment" :disabled="!isStep3Valid || processing"
                class="flex-1 py-3 rounded-xl font-semibold text-white bg-brand-600 hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-brand-600/20 flex items-center justify-center gap-2">
                <svg v-if="processing" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ processing ? 'Memproses...' : `Bayar Rp${totalPrice.toLocaleString('id-ID')}` }}
              </button>
            </div>
          </div>
        </div>

        <!-- Sidebar: Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sticky top-24">
            <h3 class="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <svg class="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              Ringkasan Pesanan
            </h3>

            <div class="space-y-3 text-sm">
              <div class="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Paket</span>
                <span class="font-medium text-gray-900 dark:text-white">{{ form.package || '-' }}</span>
              </div>
              <div class="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Periode</span>
                <span class="font-medium text-gray-900 dark:text-white">{{ form.billing === 'annual' ? 'Tahunan' : 'Bulanan' }}</span>
              </div>
              <div class="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Harga</span>
                <span class="font-medium text-gray-900 dark:text-white">Rp{{ basePrice.toLocaleString('id-ID') }}</span>
              </div>
              <div v-if="form.billing === 'annual'" class="flex justify-between text-green-600 dark:text-green-400">
                <span>Diskon Tahunan (20%)</span>
                <span class="font-medium">-Rp{{ discount.toLocaleString('id-ID') }}</span>
              </div>

              <div class="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
                <div class="flex justify-between">
                  <span class="font-bold text-gray-900 dark:text-white">Total</span>
                  <span class="font-bold text-xl text-brand-600 dark:text-brand-500">Rp{{ totalPrice.toLocaleString('id-ID') }}</span>
                </div>
              </div>
            </div>

            <!-- Trust badges -->
            <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
              <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                Pembayaran terenkripsi & aman
              </div>
              <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                </svg>
                Garansi uang kembali 30 hari
              </div>
              <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
                Akses langsung setelah bayar
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const step = ref(1)
const processing = ref(false)

const progressSteps = ['Pilih Paket', 'Data Diri', 'Pembayaran']

const packages = [
  { name: 'Starter', price: 29000, desc: 'Equalizer 5-band, 10 preset, 1 device' },
  { name: 'Pro', price: 79000, desc: 'Equalizer 10-band, 20+ preset, Bass Boost, 3D Surround, 3 devices' },
  { name: 'Enterprise', price: 249000, desc: 'Semua fitur Pro, unlimited devices, API access, dedicated support' },
]

const periods = [
  { value: 'monthly', label: 'Bulanan', sub: 'Bayar per bulan' },
  { value: 'annual', label: 'Tahunan', sub: 'Hemat 20%' },
]

const form = reactive({
  package: (route.query.plan as string) || 'Pro',
  billing: (route.query.billing as string) || 'monthly',
  fullName: '',
  email: '',
  phone: '',
  paymentMethod: 'cc' as 'cc' | 'paypal',
  cardNumber: '',
  cardName: '',
  cardExpiry: '',
  cardCvv: '',
  paypalEmail: '',
})

const selectedPkg = computed(() => packages.find(p => p.name === form.package))
const basePrice = computed(() => {
  const pkg = selectedPkg.value
  if (!pkg) return 0
  return form.billing === 'annual' ? pkg.price * 12 : pkg.price
})
const discount = computed(() => form.billing === 'annual' ? Math.round(basePrice.value * 0.2) : 0)
const totalPrice = computed(() => basePrice.value - discount.value)

const isStep2Valid = computed(() => form.fullName.trim() && form.email.trim() && form.phone.trim())
const isStep3Valid = computed(() => {
  if (form.paymentMethod === 'cc') {
    return form.cardNumber.trim() && form.cardName.trim() && form.cardExpiry.trim() && form.cardCvv.trim()
  }
  return form.paypalEmail.trim()
})

function goToStep3() {
  if (isStep2Valid.value) step.value = 3
}

function formatCardNumber(e: Event) {
  const input = e.target as HTMLInputElement
  let val = input.value.replace(/\D/g, '')
  val = val.substring(0, 16)
  form.cardNumber = val.replace(/(\d{4})(?=\d)/g, '$1 ')
}

function formatExpiry(e: Event) {
  const input = e.target as HTMLInputElement
  let val = input.value.replace(/\D/g, '')
  if (val.length >= 2) {
    val = val.substring(0, 2) + '/' + val.substring(2, 4)
  }
  form.cardExpiry = val
}

function processPayment() {
  processing.value = true
  setTimeout(() => {
    processing.value = false
    router.push({
      path: '/checkout/success',
      query: {
        plan: form.package,
        name: form.fullName,
        email: form.email,
        total: totalPrice.value.toString(),
        method: form.paymentMethod === 'cc' ? 'Credit Card' : 'PayPal',
      },
    })
  }, 2500)
}
</script>

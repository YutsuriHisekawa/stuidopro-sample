<template>
  <section id="testimonials" class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <span v-motion-slide-visible-bottom class="text-brand-600 dark:text-brand-500 text-sm font-semibold uppercase tracking-wider">Testimoni</span>
        <h2 v-motion-slide-visible-bottom :delay="100" class="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Dipercaya oleh Jutaan Pengguna
        </h2>
        <p v-motion-slide-visible-bottom :delay="200" class="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
          Lihat apa kata pengguna kami tentang Studio Pro.
        </p>
      </div>

      <!-- Testimonials grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(testimonial, index) in testimonials" :key="testimonial.name"
          v-motion-slide-visible-bottom :delay="100 + index * 80"
          class="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">"{{ testimonial.text }}"</p>
          
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm"
              :style="{ backgroundColor: testimonial.color }">
              {{ testimonial.name.charAt(0) }}
            </div>
            <div>
              <div class="text-sm font-semibold text-gray-900 dark:text-white">{{ testimonial.name }}</div>
              <div class="text-xs text-gray-500 dark:text-gray-500">{{ testimonial.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: 'Andi Pratama',
    role: 'Music Producer',
    text: 'Studio Pro benar-benar mengubah cara saya mendengarkan musik. Bass Boost-nya powerful tanpa distorsi. Wajib punya buat setiap audiophile!',
    color: '#dc2626',
  },
  {
    name: 'Siti Rahayu',
    role: 'Podcaster',
    text: 'Sejak pakai Studio Pro, kualitas podcast saya meningkat drastis. Pendengar sering memuji suara yang jernih dan profesional.',
    color: '#2563eb',
  },
  {
    name: 'Budi Santoso',
    role: 'Pro Gamer',
    text: 'Low latency mode-nya game changer! Sekarang saya bisa dengar footsteps musuh dengan lebih jelas di game FPS. Highly recommended!',
    color: '#16a34a',
  },
  {
    name: 'Maya Anggraeni',
    role: 'Content Creator',
    text: 'Preset yang tersedia sangat membantu. Tinggal pilih sesuai kebutuhan, suara langsung optimal. Simpel tapi powerful!',
    color: '#9333ea',
  },
  {
    name: 'Rizky Firmansyah',
    role: 'Software Engineer',
    text: 'Saya pakai Studio Pro setiap hari untuk WFH. Suara meeting jadi lebih jernih dan musik di background terasa lebih enak.',
    color: '#ea580c',
  },
  {
    name: 'Dewi Lestari',
    role: 'Music Enthusiast',
    text: '3D Surround Sound-nya bikin nonton film di laptop terasa seperti di bioskop. Worth every penny untuk versi Pro!',
    color: '#0891b2',
  },
]
</script>

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://127.0.0.1:8000',
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@vueuse/motion/nuxt'],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
  app: {
    head: {
      title: 'Studio Pro - Professional Audio Enhancement',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Studio Pro — Tingkatkan pengalaman audio kamu dengan pemrosesan suara kelas profesional. Equalizer, Bass Boost, 3D Surround & lainnya.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Studio Pro — Professional Audio Enhancement' },
        { property: 'og:description', content: 'Tingkatkan kualitas musik, podcast, dan gaming ke level berikutnya dengan Studio Pro.' },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:url', content: 'https://studiopro.app' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Studio Pro — Professional Audio Enhancement' },
        { name: 'twitter:description', content: 'Tingkatkan kualitas musik, podcast, dan gaming ke level berikutnya dengan Studio Pro.' },
        { name: 'twitter:image', content: '/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' },
      ],
    },
  },
  ssr: false,
})

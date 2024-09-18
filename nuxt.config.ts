export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'fade' }, 
    layoutTransition: { name: 'layout' },
  },
  plugins: [
    '@/plugins/lazysizes.client.js',
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})

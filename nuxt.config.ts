import { defineNuxtConfig } from 'nuxt'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
    title: '마이로드',
    link: [],
  },
  target: 'static',
  build: {
    transpile: ['quasar'],
  },
})

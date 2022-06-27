import { defineNuxtPlugin } from '#app'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia()
  nuxtApp.vueApp.use(pinia.use(piniaPersist))
})

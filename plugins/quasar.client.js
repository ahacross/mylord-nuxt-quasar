import { defineNuxtPlugin } from '#app'
import { Quasar, Dialog } from 'quasar'

import 'assets/scss/quasar-variables.scss'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import 'quasar/dist/quasar.prod.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Quasar, { plugins: { Dialog } })
})

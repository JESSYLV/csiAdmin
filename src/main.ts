import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import { createI18n } from 'vue-i18n'
import { messages } from './locales'
import naive from 'naive-ui'

const i18n = createI18n({
  locale: 'en',
  messages
})

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(i18n)
app.use(naive)
app.mount('#app')

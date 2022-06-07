import App from '@/App.vue'
import { routes } from '@/router'
import { createPinia } from 'pinia'
import { default as persistedState } from 'pinia-plugin-persistedstate'
import { ViteSSG } from 'vite-ssg'

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  ({ app }) => {
    const pinia = createPinia()
    pinia.use(persistedState)
    app.use(pinia)
  }
)

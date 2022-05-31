import App from '@/App.vue'
import { routes } from '@/router'
import { createPinia } from 'pinia'
import { ViteSSG } from 'vite-ssg'

export const createApp = ViteSSG(App, { routes }, ({ app, initialState }) => {
  const pinia = createPinia()
  app.use(pinia)

  if (import.meta.env.SSR) initialState.pinia = pinia.state.value
  else pinia.state.value = initialState.pinia || {}
})

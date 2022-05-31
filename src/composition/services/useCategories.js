import { promiseTimeout } from '@vueuse/core'
import { onMounted } from 'vue'

export function useCategories() {
  let state = $ref({
    isFetching: false,
    error: null,
    data: null
  })

  onMounted(async () => {
    state.isFetching = true
    await promiseTimeout(500)

    state.isFetching = false
    state.data = [
      { uid: 1, title: 'Recomendados para você', horizontal: true },
      { uid: 2, title: 'Opções populares', horizontal: false },
      { uid: 3, title: 'Novidades', horizontal: false },
      { uid: 4, title: 'Comece algo novo', horizontal: false }
    ]
  })

  return state
}

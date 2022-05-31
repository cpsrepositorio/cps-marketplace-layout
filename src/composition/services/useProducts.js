import { promiseTimeout, useFetch } from '@vueuse/core'
import { onMounted, ref } from 'vue'

export function useProducts() {
  const state = $ref({
    isFetching: false,
    error: null,
    data: null
  })

  onMounted(async () => {
    state.isFetching = true
    await promiseTimeout(1000)

    const { isFetching, error, data } = await useFetch(
      'https://random-data-api.com/api/restaurant/random_restaurant?size=32'
    )
      .get()
      .json()

    state.isFetching = isFetching
    state.error = error
    state.data = ref(
      data.value.map((product, index) => ({
        ...product,
        categoryId: (index % 4) + 1
      }))
    )
  })

  return state
}

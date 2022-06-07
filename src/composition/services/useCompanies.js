import { useFetch } from '@vueuse/core'
import { ref } from 'vue'

export async function useCompanies() {
  const state = $ref({
    isFetching: false,
    error: null,
    data: null
  })

  state.isFetching = true

  const { isFetching, error, data } = await useFetch(
    'https://random-data-api.com/api/company/random_company?size=100'
  )
    .get()
    .json()

  state.isFetching = isFetching
  state.error = error
  state.data = ref(data.value)

  return state
}

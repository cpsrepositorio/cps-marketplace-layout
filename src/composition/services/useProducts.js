import { useProductsStore } from '@/stores/products'
import { promiseTimeout, useFetch } from '@vueuse/core'
import { onMounted, ref } from 'vue'

export function useProducts() {
  const state = $ref({
    isFetching: false,
    error: null,
    data: null
  })

  const productsStore = useProductsStore()

  onMounted(async () => {
    state.isFetching = true
    await promiseTimeout(500)

    if (productsStore.items.length) {
      state.isFetching = false
      state.error = null
    } else {
      const { isFetching, error, data } = await useFetch(
        'https://random-data-api.com/api/restaurant/random_restaurant?size=100'
      )
        .get()
        .json()

      state.isFetching = isFetching
      state.error = error

      productsStore.fill(
        data.value.map((product, index) => ({
          ...product,
          categoryId: (index % 4) + 1,
          rating: Math.round(
            product.phone_number
              .replace(/\D/g, '')
              .split('')
              .reduce((acc, curr) => acc + Number(curr), -29) / 9.5
          )
        }))
      )
    }

    state.data = ref(productsStore.items)
  })

  return state
}

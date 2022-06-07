import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore(
  'products',

  () => {
    const items = ref([])

    function fill(products) {
      items.value = products
    }

    return { items, fill }
  },

  { persist: true }
)

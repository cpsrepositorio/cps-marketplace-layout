import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLikesStore = defineStore(
  'likes',

  () => {
    const likes = ref([])

    function isLiked(item) {
      return !!likes.value.find((like) => like?.uid === item.uid)
    }

    function like(item) {
      if (!isLiked(item)) likes.value.push(item)
    }

    function unlike(item) {
      likes.value = likes.value.filter((like) => like?.uid !== item.uid)
    }

    return { likes, isLiked, like, unlike }
  },

  { persist: true }
)

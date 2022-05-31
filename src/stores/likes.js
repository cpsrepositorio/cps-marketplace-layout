import { defineStore } from 'pinia'

export const useLikeStore = defineStore({
  id: 'like',

  state: () => ({
    likes: []
  }),

  getters: {
    likesCount: (state) => state.likes.length,
    isLiked: (state, id) => state.likes.indexOf(id) === -1
  },

  actions: {
    likeItem(id) {
      if (this.likes.indexOf(id) === -1) {
        this.likes.push(id)
      }
    },

    unlikeItem(id) {
      this.likes = this.likes.filter((likedId) => likedId !== id)
    }
  }
})

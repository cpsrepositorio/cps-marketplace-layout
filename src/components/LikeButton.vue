<script setup>
import IconHeartFilled from '@/assets/icons/heart-filled.svg?component'
import IconHeartOutline from '@/assets/icons/heart.svg?component'
import Button from '@/components/Button.vue'
import { useLikesStore } from '@/stores/likes'

const props = defineProps({ item: Object })

const likesStore = useLikesStore()

const isLiked = $computed(() => {
  return likesStore.isLiked(props.item)
})

function toggleLike() {
  if (isLiked) {
    likesStore.unlike(props.item)
  } else {
    likesStore.like(props.item)
  }
}
</script>

<template>
  <Button
    appearance="ghost"
    :title="isLiked ? 'Remover favorito' : 'Definir como favorito'"
    @click.stop.prevent="toggleLike"
  >
    <component
      :is="isLiked ? IconHeartFilled : IconHeartOutline"
      id="heart"
      class="w-6 h-6 -m-1 transition-all"
      :class="{
        'is-liked text-black/60 dark:text-black/60': isLiked,
        'text-black/30 dark:text-neutral-200/10': !isLiked
      }"
    />
  </Button>
</template>

<style scoped>
.is-liked:deep(path) {
  @apply stroke-current stroke-1 fill-brand-light-1 dark:to-brand-light-2;
}
</style>

<script setup>
import { RouterLink } from 'vue-router'
import LikeButton from './LikeButton.vue'
import ProductAvatar from './ProductAvatar.vue'
import StarRating from './StarRating.vue'

const props = defineProps({
  layout: {
    type: String,
    validate: (value) => ['horizontal', 'vertical'].includes(value),
    default: 'horizontal'
  },

  item: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <RouterLink
    :to="`/${props.item.uid}`"
    class="relative rounded-lg text-sm"
    :class="{
      'p-4': props.layout === 'horizontal',
      'px-4 pb-7 pt-10 grid place-items-center text-center':
        props.layout === 'vertical',
      'shadow-card dark:shadow-dark-card hover:shadow-hover dark:hover:shadow-dark-hover bg-layer-light-quaternary/80 dark:bg-layer-dark-quaternary/70 hover:-translate-y-0.5 hover:bg-layer-light-quaternary dark:hover:bg-layer-dark-quaternary can-focus can-touch':
        props.item.uid
    }"
    :tabindex="props.item.uid ? 0 : -1"
  >
    <LikeButton :item="item" class="absolute top-2 right-2" />

    <div
      class="flex gap-4 lg:gap-5 items-center"
      :class="{ 'flex-col': props.layout === 'vertical' }"
    >
      <ProductAvatar
        :uid="props.item.uid"
        :logo="props.item.logo"
        :size="props.layout === 'horizontal' ? 'medium' : 'large'"
        :class="{ '-mx-2': props.layout === 'vertical' }"
      />

      <div class="flex flex-col justify-center gap-1">
        <h4 class="font-semibold">{{ props.item.name ?? '-' }}</h4>
        <span
          v-if="props.item.type"
          class="text-black/60 dark:text-white/80 text-xs"
          >{{ props.item.type }}</span
        >
        <StarRating
          :rating="props.item.rating"
          :class="{
            'mt-2': props.layout === 'horizontal',
            'mt-4': props.layout === 'vertical'
          }"
        />
      </div>
    </div>
  </RouterLink>
</template>

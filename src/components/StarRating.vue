<script setup>
import IconStarFull from '@/assets/icons/star-filled.svg?component'
import IconStarHalf from '@/assets/icons/star-half.svg?component'
import IconStar from '@/assets/icons/star.svg?component'

const props = defineProps({
  rating: {
    type: Number,
    default: null
  },

  appearance: {
    type: String,
    validate: (value) => ['neutral', 'brand', 'accent'].includes(value),
    default: 'neutral'
  }
})

const customClass = $computed(() => {
  const map = {
    brand: 'text-brand dark:text-brand-light-1',
    accent: 'text-accent dark:text-accent-light-1'
  }

  return map[props.appearance] ?? 'text-black/60 dark:text-white/80'
})

function isHalf(number) {
  return props.rating > number - 1 && props.rating < number
}

function isFull(number) {
  return number <= props.rating
}
</script>

<template>
  <div class="flex gap-0.5 lg:gap-1">
    <template v-for="number in 5">
      <div
        v-if="props.rating === null"
        :key="`${number}-null`"
        class="w-4 h-4"
      />
      <IconStarHalf
        v-else-if="isHalf(number)"
        :key="`${number}-half`"
        class="w-4 h-4"
        :class="customClass"
      />
      <IconStarFull
        v-else-if="isFull(number)"
        :key="`${number}-full`"
        class="w-4 h-4"
        :class="customClass"
      />
      <IconStar
        v-else
        :key="`${number}-empty`"
        class="w-4 h-4 text-black/40 dark:text-white/50"
      />
    </template>
  </div>
</template>

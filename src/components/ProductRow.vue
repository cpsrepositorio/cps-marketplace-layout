<script setup>
import { useDateFormat } from '@vueuse/core'
import { unref } from 'vue'
import { RouterLink } from 'vue-router'
import ProductAvatar from './ProductAvatar.vue'

const props = defineProps({
  uid: {
    type: String,
    default: ''
  },

  item: {
    type: Object,
    default: null
  }
})

const createdAtFormatted = $computed(() =>
  unref(useDateFormat(props.item.createdAt, 'DD/MM/YYYY'))
)
</script>

<template>
  <RouterLink
    :to="`/${props.item.uid}`"
    class="relative rounded text-sm px-4 py-3 bg-layer-light-quaternary/80 dark:bg-layer-dark-quaternary hover:bg-layer-light-secondary/40 dark:hover:bg-white/6 active:bg-layer-light-secondary/60 dark:active:bg-layer-dark-secondary/40 active:text-black/60 dark:active:text-white/80 border border-black/6 dark:border-black/25 hover:border-black/6 hover:border-b-black/16 dark:hover:border-white/1 dark:hover:border-b-white/4 active:border-black/6 dark:active:border-white/7 can-focus can-touch"
  >
    <div
      class="flex-auto flex flex-wrap gap-4 lg:gap-5 items-center justify-between"
    >
      <ProductAvatar
        :uid="props.item.uid"
        :logo="props.item.logo"
        size="small"
      />

      <div
        class="flex-auto w-[calc(100%-4.5rem)] md:w-1/4 overflow-hidden flex flex-col justify-center gap-1"
      >
        <h4 class="font-semibold truncate">{{ props.item.name ?? '-' }}</h4>
        <span
          v-if="props.item.company.business_name"
          class="text-black/60 dark:text-white/80 truncate text-xs"
          >{{ props.item.company.business_name }}</span
        >
      </div>

      <div class="flex-auto w-[calc(50%-0.75rem)] truncate md:w-1/5">
        {{ props.item.type }}
      </div>

      <div
        class="flex-auto w-[calc(50%-0.75rem)] md:w-1/5 truncate text-xs text-right md:text-sm lg:text-left"
      >
        Criado em
        {{ createdAtFormatted }}
      </div>

      <div class="flex-auto w-1/2 hidden md:block lg:hidden" />

      <div
        v-if="$slots.default"
        class="flex-auto grow-0 shrink-0 w-full md:w-auto"
      >
        <slot />
      </div>
    </div>
  </RouterLink>
</template>

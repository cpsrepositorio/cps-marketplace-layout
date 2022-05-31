<script setup>
const props = defineProps({
  layout: {
    type: String,
    validate: (value) => ['horizontal', 'vertical'].includes(value),
    default: 'horizontal'
  },

  uid: {
    type: String,
    default: ''
  },

  name: {
    type: String,
    default: '-'
  },

  type: {
    type: String,
    default: ''
  },

  logo: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <RouterLink
    :to="`/product/${props.uid}`"
    class="rounded-lg text-sm"
    :class="{
      'p-4': props.layout === 'horizontal',
      'px-4 pb-7 pt-10 grid place-items-center text-center':
        props.layout === 'vertical',
      'shadow-card dark:shadow-dark-card hover:shadow-hover dark:hover:shadow-dark-hover bg-layer-light-quaternary/80 dark:bg-layer-dark-quaternary/70 hover:-translate-y-0.5 hover:bg-layer-light-quaternary dark:hover:bg-layer-dark-quaternary can-focus can-touch':
        props.uid
    }"
    :tabindex="props.uid ? 0 : -1"
  >
    <div
      class="flex gap-4 lg:gap-5 items-center"
      :class="{ 'flex-col': props.layout === 'vertical' }"
    >
      <div
        v-if="props.logo"
        class="relative rounded shadow bg-layer-light-tertiary dark:bg-layer-dark-tertiary bg-center bg-cover overflow-hidden"
        :class="{
          'w-20 h-20': props.layout === 'horizontal',
          'w-28 h-28 -mx-2': props.layout === 'vertical'
        }"
      >
        <img
          :src="`${props.logo}?${props.uid}`"
          role="presentation"
          loading="lazy"
          class="absolute rounded w-full h-full object-cover z-1"
        />

        <div
          class="absolute rounded w-full h-full blur-lg z-0"
          :style="{
            'background-image': `url('${props.logo.replace('500/500', '5/5')}?${
              props.uid
            }')`
          }"
        />
      </div>
      <div class="flex flex-col justify-center gap-1">
        <h4 class="font-semibold">{{ props.name ?? '-' }}</h4>
        <span
          v-if="props.type"
          class="text-black/60 dark:text-white/80 text-xs"
          >{{ props.type }}</span
        >
      </div>
    </div>
  </RouterLink>
</template>

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
      'px-4 pb-6 pt-9 grid place-items-center text-center':
        props.layout === 'vertical',
      'shadow-card dark:shadow-dark-card hover:shadow-hover dark:hover:shadow-dark-hover bg-layer-light-quaternary/70 dark:bg-layer-dark-quaternary/70 hover:-translate-y-0.5 hover:bg-layer-light-quaternary dark:hover:bg-layer-dark-quaternary can-focus can-touch':
        props.uid
    }"
    :tabindex="props.uid ? 0 : -1"
  >
    <div
      class="flex gap-4 lg:gap-5"
      :class="{ 'flex-col': props.layout === 'vertical' }"
    >
      <img
        v-if="props.logo"
        :src="`${props.logo}?${props.uid}`"
        role="presentation"
        class="object-cover rounded shadow"
        :class="{
          'w-20 h-20': props.layout === 'horizontal',
          'w-28 h-28': props.layout === 'vertical'
        }"
      />
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

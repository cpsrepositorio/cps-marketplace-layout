<script setup>
const props = defineProps({
  size: {
    type: String,
    validate: (value) => ['small', 'medium', 'large'].includes(value),
    default: 'medium'
  },

  uid: {
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
  <div
    v-if="props.logo"
    class="relative rounded shadow bg-layer-light-tertiary dark:bg-layer-dark-tertiary bg-center bg-cover overflow-hidden"
    :class="{
      'w-14 h-14': props.size === 'small',
      'w-20 h-20': props.size === 'medium',
      'w-28 h-28': props.size === 'large'
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
</template>

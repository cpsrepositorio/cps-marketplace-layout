<script setup>
const props = defineProps({
  appearance: {
    type: String,
    validate: (value) => ['standard', 'ghost', 'accent'].includes(value),
    default: 'standard'
  }
})

const customClass = $computed(() => {
  const map = {
    ghost: `px-2 bg-white/0 hover:bg-black/3 active:bg-black/2 active:text-black/60 dark:hover:bg-white/4 dark:active:bg-white/2 dark:active:text-white/80 disabled:text-black/35 dark:disabled:text-white/35`,
    accent: `px-4 text-white dark:text-black border border-white/8 border-b-black/40 dark:border-white/8 dark:border-b-black/14 active:border-white/8 bg-accent dark:bg-accent-light-2 hover:bg-accent-dark-2/90 active:bg-accent-dark-2/80 active:text-white/70 dark:hover:bg-accent-light-1/90 dark:active:bg-accent-light-1/80 dark:active:text-black/50 disabled:text-white dark:disabled:text-white/50 disabled:bg-black/20 dark:disabled:bg-white/20 disabled:border-black/0 dark:disabled:border-white/0`
  }

  return (
    map[props.appearance] ??
    'px-4 border border-black/6 border-b-black/16 dark:border-white/7 dark:border-t-white/9 active:border-black/6 dark:active:border-white/7 bg-white/70 dark:bg-white/6 hover:bg-black/3 active:bg-black/2 active:text-black/60 dark:hover:bg-white/4 dark:active:bg-white/2 dark:active:text-white/80 disabled:text-black/35 dark:disabled:text-white/35 disabled:border-black/6 dark:disabled:border-white/7'
  )
})
</script>

<template>
  <button
    v-bind="$attrs"
    class="h-8 rounded grid place-items-center gap-3 can-focus can-touch"
    :class="customClass"
  >
    <slot />
  </button>
</template>

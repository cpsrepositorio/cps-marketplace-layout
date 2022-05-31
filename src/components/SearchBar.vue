<script setup>
import IconSearch from '@/assets/icons/search.svg?component'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const inputElement = $ref(null)

function emitUpdate() {
  emit('update:modelValue', inputElement.value)
}

const breakpoints = $ref(useBreakpoints(breakpointsTailwind))
const placeholder = $computed(() =>
  breakpoints.sm === false
    ? 'Pesquisar...'
    : 'Pesquise produtos, serviços, instruções...'
)
</script>

<template>
  <div class="relative group">
    <input
      ref="inputElement"
      :value="modelValue"
      @keyup.enter="emitUpdate"
      :placeholder="placeholder"
      title=""
      required
      class="w-full h-8 px-2 py-1.5 rounded font-normal text-sm placeholder:text-black/60 dark:placeholder:text-white/60 bg-white/70 dark:bg-white/5 focus-within:bg-white dark:focus-within:bg-neutral-900/70 border border-black/5 border-b-black/40 dark:border-white/8 dark:border-b-white/50 group-hover:bg-neutral-100/70 dark:group-hover:bg-white/10 valid:bg-white valid:group-hover:bg-neutral-50/90 dark:valid:bg-neutral-900/70 dark:valid:group-hover:bg-neutral-800/40 valid:border-b-2 valid:border-b-accent dark:valid:border-b-accent-light-1 can-focus"
    />

    <button
      class="absolute right-1 top-1 w-6 h-6 rounded grid place-items-center bg-white/0 hover:bg-neutral-900/5 dark:hover:bg-white/5 active:bg-neutral-700/5 dark:active:bg-neutral-100/5 active:text-black/60 dark:active:text-white/80 can-focus can-touch"
      title="Pesquisar"
      @click="emitUpdate"
    >
      <IconSearch class="w-4 h-4" />
      <span class="sr-only">Search</span>
    </button>
  </div>
</template>

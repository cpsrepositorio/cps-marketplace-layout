<script setup>
const props = defineProps({
  title: String,

  allowScroll: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <main
    class="w-full h-full md:rounded-tl-lg p-4 lg:p-6 shadow-layer dark:shadow-dark-layer bg-layer-light-tertiary dark:bg-layer-dark-tertiary"
    :class="{ 'overflow-y-auto': props.allowScroll }"
  >
    <div class="max-w-[112rem] mx-auto min-h-full flex flex-col">
      <h2 v-if="props.title" class="text-xl font-semibold">
        {{ props.title }}
      </h2>

      <slot />
    </div>
  </main>
</template>

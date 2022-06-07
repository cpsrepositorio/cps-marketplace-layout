<script setup>
import IconWeatherMoon from '@/assets/icons/weather-moon.svg?component'
import IconWeatherSunny from '@/assets/icons/weather-sunny.svg?component'
import Button from '@/components/Button.vue'
import LogoCPS from '@/components/LogoCPS.vue'
import { useDark, useToggle } from '@vueuse/core'
import { useRoute } from 'vue-router'

const route = useRoute()

const isHomeView = $computed(() => route.path === '/')

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header
    class="flex flex-grow-0 flex-shrink-0 gap-4 sm:gap-8 justify-between h-12 md:h-14 py-2 md:py-3 px-3 lg:px-4"
  >
    <component
      to="/"
      :is="isHomeView ? 'span' : 'RouterLink'"
      class="flex gap-3 items-center rounded"
      :class="{
        'can-touch can-focus group': !isHomeView,
        'cursor-default': isHomeView
      }"
      :title="isHomeView ? '' : 'Voltar ao início'"
    >
      <LogoCPS class="h-full w-8 md:w-auto" />
      <h1
        class="font-normal text-sm hidden md:block group-hover:text-brand dark:group-hover:text-brand-light-1 transition-colors"
      >
        Marketplace
      </h1>
    </component>

    <slot name="search" />

    <div class="flex items-center gap-2 md:gap-4 lg:gap-6">
      <Button
        appearance="ghost"
        :title="isDark ? 'Usar modo claro' : 'Usar modo escuro'"
        @click="toggleDark(!isDark)"
      >
        <IconWeatherSunny v-if="isDark" class="w-4 h-4" />
        <IconWeatherMoon v-else class="w-4 h-4" />
        <span class="sr-only">{{ isDark ? 'Modo claro' : 'Modo escuro' }}</span>
      </Button>

      <div
        class="w-8 h-8 flex-shrink-0 rounded-full bg-black/20 dark:bg-white/10"
      />
    </div>
  </header>
</template>

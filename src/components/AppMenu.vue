<script setup>
import IconApps from '@/assets/icons/apps.svg?component'
import IconHeart from '@/assets/icons/heart.svg?component'
import IconHome from '@/assets/icons/home.svg?component'
import IconLibrary from '@/assets/icons/library.svg?component'
import IconQuestionCircle from '@/assets/icons/question-circle.svg?component'
import { RouterLink } from 'vue-router'

const links = [
  { url: '/', text: 'Início', icon: IconHome },
  { url: '/produtos', text: 'Produtos', icon: IconLibrary },
  { url: '/categorias', text: 'Categorias', icon: IconApps },
  { url: '/favoritos', text: 'Favoritos', icon: IconHeart },
  '',
  { url: '/ajuda', text: 'Ajuda', icon: IconQuestionCircle }
]
</script>

<template>
  <nav
    class="flex-auto flex md:flex-col flex-grow-0 flex-shrink-0 justify-center md:justify-start gap-1 sm:gap-2 md:gap-3 px-4 md:pl-1 md:pr-2 h-11 md:h-full"
  >
    <RouterLink
      v-for="(link, index) of links"
      :key="link?.url ?? index"
      :to="link?.url ?? '/'"
      custom
      v-slot="{ isActive, href, navigate }"
    >
      <span v-if="!link?.url" class="hidden flex-auto sm:block" />
      <a
        v-else
        :href="href"
        @click="navigate"
        class="flex flex-col shrink-0 gap-0.5 justify-center items-center w-14 md:w-16 h-10 md:h-16 can-focus-inner can-touch rounded text-black/60 hover:text-black/90 dark:text-white/80 dark:hover:text-white hover:bg-black/5 dark:hover:bg-layer-dark-secondary transition-all relative"
        :class="{
          'border-b-0 border-b-accent/0 pt-1': !isActive,
          'pb-1 bg-layer-light-quaternary dark:bg-layer-dark-quaternary pointer-events-none':
            isActive
        }"
        :tabindex="isActive ? -1 : 0"
      >
        <component
          :is="link.icon"
          class="w-4 h-4 md:w-6 md:h-6 shrink-0 transition-all"
          :class="{ 'text-accent dark:text-accent-light-1': isActive }"
        />
        <span v-if="!isActive" class="text-2xs">{{ link.text }}</span>

        <Transition
          enter-active-class="transition duration-300 transform-gpu"
          leave-active-class="transition duration-100 transform-gpu"
          :duration="{ enter: 300, leave: 100 }"
          enter-from-class="opacity-0 scale-0"
          enter-to-class="opacity-100 scale-100"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-0"
        >
          <div
            v-if="isActive"
            class="absolute h-1 w-7/12 md:h-3/6 md:w-1 bg-accent dark:bg-accent-light-1 rounded bottom-0 md:bottom-auto md:left-0 md:mt-1"
          />
        </Transition>
      </a>
    </RouterLink>
  </nav>
</template>

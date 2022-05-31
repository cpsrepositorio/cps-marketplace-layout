<script setup>
import { useHead } from '@vueuse/head'
import { useRandom } from '@/composition'

useHead({ title: 'CPS Marketplace' })

const categories = [
  'Seus favoritos',
  'Opções populares',
  'Novidades',
  'Recomendados'
]
</script>

<template>
  <h2 class="text-xl font-semibold">Início</h2>

  <div
    class="bg-gradient-to-br rounded from-cyan-800 to-red-800 text-white grid place-items-center h-[25vh] mt-4 lg:mt-6"
  >
    Algum destaque especial aqui
  </div>

  <section
    v-for="category of categories"
    :key="category"
    class="flex flex-col gap-3 mt-4 lg:mt-6"
  >
    <h3 class="text-base font-semibold mt-4">{{ category }}</h3>

    <ol class="flex flex-wrap p-2 -m-2 gap-4 lg:gap-6 overflow-x-auto">
      <li
        v-for="item of useRandom(2, 6)"
        :key="item"
        class="grid place-items-center p-4 lg:p-6 h-28 bg-layer-light-quaternary dark:bg-layer-dark-quaternary shadow-card rounded-lg text-sm text-black/60 dark:text-white/80 w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-1rem)]"
      >
        {{ item }}
      </li>
    </ol>
  </section>
</template>

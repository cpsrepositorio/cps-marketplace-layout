<script setup>
import IconQuestionCircle from '@/assets/icons/question-circle.svg?component'
import Button from '@/components/Button.vue'
import EmptyState from '@/components/EmptyState.vue'
import LayoutContainer from '@/components/LayoutContainer.vue'
import { useHead } from '@vueuse/head'
import { RouterLink } from 'vue-router'

useHead({ title: 'Favoritos - CPS Marketplace' })
</script>

<template>
  <LayoutContainer>
    <h2 class="text-xl font-semibold">Favoritos</h2>

    <EmptyState
      title="Não há favoritos para exibir aqui..."
      description="Que tal começar a favoritar alguns produtos agora mesmo?"
    >
      <template #actions>
        <RouterLink to="/produtos" custom v-slot="{ navigate }">
          <Button appearance="accent" @click="navigate"
            >Ver todos os produtos</Button
          >
        </RouterLink>

        <RouterLink to="/" custom v-slot="{ navigate }">
          <Button @click="navigate">Voltar ao início</Button>
        </RouterLink>

        <RouterLink to="/ajuda" custom v-slot="{ navigate }">
          <Button appearance="ghost" @click="navigate">
            <IconQuestionCircle class="w-4 h-4"
          /></Button>
        </RouterLink>
      </template>
    </EmptyState>
  </LayoutContainer>
</template>

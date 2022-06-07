<script setup>
import Button from '@/components/Button.vue'
import EmptyState from '@/components/EmptyState.vue'
import LayoutContainer from '@/components/LayoutContainer.vue'
import { useHead } from '@vueuse/head'
import { onActivated } from 'vue'
import { RouterLink } from 'vue-router'

const title = 'Ajuda'
onActivated(() => useHead({ title: `${title} - CPS Marketplace` }))
</script>

<template>
  <LayoutContainer :title="title">
    <EmptyState
      title="Não há tópicos para exibir aqui..."
      description="Ainda estamos montando nossa central de ajuda, aguarde!"
    >
      <template #actions>
        <RouterLink to="/" custom v-slot="{ navigate }">
          <Button appearance="accent" @click="navigate"
            >Voltar ao início</Button
          >
        </RouterLink>
      </template>
    </EmptyState>
  </LayoutContainer>
</template>

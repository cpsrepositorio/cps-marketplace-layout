<script setup>
import IconQuestionCircle from '@/assets/icons/question-circle.svg?component'
import Button from '@/components/Button.vue'
import EmptyState from '@/components/EmptyState.vue'
import LayoutContainer from '@/components/LayoutContainer.vue'
import { useHead } from '@vueuse/head'
import { onActivated } from 'vue'
import { RouterLink } from 'vue-router'

const title = 'Produtos'
onActivated(() => useHead({ title: `${title} - CPS Marketplace` }))
</script>

<template>
  <LayoutContainer :title="title">
    <EmptyState
      title="Não há produtos para exibir aqui..."
      description="Ainda estamos montando nossa loja, aguarde!"
    >
      <template #actions>
        <RouterLink to="/" custom v-slot="{ navigate }">
          <Button appearance="accent" @click="navigate"
            >Voltar ao início</Button
          >
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

<script setup>
import IconDelete from '@/assets/icons/delete.svg?component'
import IconQuestionCircle from '@/assets/icons/question-circle.svg?component'
import Button from '@/components/Button.vue'
import EmptyState from '@/components/EmptyState.vue'
import LayoutContainer from '@/components/LayoutContainer.vue'
import ProductRow from '@/components/ProductRow.vue'
import { useLikesStore } from '@/stores/likes'
import { useHead } from '@vueuse/head'
import { onActivated } from 'vue'
import { RouterLink } from 'vue-router'

const title = 'Favoritos'
onActivated(() => useHead({ title: `${title} - CPS Marketplace` }))

const likesStore = useLikesStore()

const sortedLikes = $computed(() => {
  return (likesStore.likes ?? []).sort((a, b) => a.name.localeCompare(b.name))
})

function unlike(item) {
  likesStore.unlike(item)
}
</script>

<template>
  <LayoutContainer :title="title">
    <section v-if="sortedLikes.length" class="flex flex-col gap-3 mt-4">
      <h3 class="text-sm font-bold">
        Seus favoritos ({{ sortedLikes.length }})
      </h3>

      <ol class="flex flex-col gap-2">
        <ProductRow
          v-for="product of sortedLikes"
          :key="product.uid"
          :item="product"
          class="flex-auto flex"
        >
          <Button
            @click.stop.prevent="unlike(product)"
            class="w-full md:w-auto"
            title="Remover favorito"
          >
            <IconDelete class="w-4 h-4" />
            <span class="lg:hidden">Remover favorito</span>
          </Button>
        </ProductRow>
      </ol>
    </section>

    <EmptyState
      v-else
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

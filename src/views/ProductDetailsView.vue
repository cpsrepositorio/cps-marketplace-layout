<script setup>
import LayoutContainer from '@/components/LayoutContainer.vue'
import { useHead } from '@vueuse/head'
import { onActivated } from 'vue'

onActivated(() => useHead({ title: 'CPS Marketplace' }))
</script>

<template>
  <LayoutContainer>
    <div>TODO</div>
  </LayoutContainer>
</template>

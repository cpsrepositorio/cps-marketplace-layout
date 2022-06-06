<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppMenu from '@/components/AppMenu.vue'
import SearchBar from '@/components/SearchBar.vue'
import { RouterView } from 'vue-router'

let searchField = $ref('')
</script>

<template>
  <div class="h-full flex flex-col">
    <AppHeader>
      <template #search>
        <SearchBar v-model="searchField" class="w-full max-w-xl" />
      </template>
    </AppHeader>

    <div class="flex-auto flex flex-col md:flex-row overflow-hidden">
      <AppMenu />

      <RouterView v-slot="{ Component }">
        <KeepAlive>
          <component :is="Component" />
        </KeepAlive>
      </RouterView>
    </div>
  </div>
</template>

<style>
@import '@/assets/tailwind.css';
</style>

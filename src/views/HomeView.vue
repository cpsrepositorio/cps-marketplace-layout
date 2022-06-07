<script setup>
import LayoutContainer from '@/components/LayoutContainer.vue'
import ProductCard from '@/components/ProductCard.vue'
import { useRandomValue } from '@/composition'
import { useCategories } from '@/composition/services/useCategories'
import { useProducts } from '@/composition/services/useProducts'
import { useHead } from '@vueuse/head'
import { onActivated } from 'vue'

onActivated(() => useHead({ title: 'CPS Marketplace' }))

const categories = useCategories()

const categoriesOrLoading = $computed(() =>
  categories.isFetching ? 4 : categories.data
)

const products = useProducts()

const productsOrLoading = $computed(() =>
  categories.isFetching || products.isFetching ? 8 : products.data
)

function productsByCategory(categoryId) {
  if (typeof productsOrLoading === 'number') return productsOrLoading
  return productsOrLoading
    .filter((product) => product.categoryId === categoryId)
    .sort((a, b) => a.uid.localeCompare(b.uid))
    .slice(0, 8)
}
</script>

<template>
  <LayoutContainer>
    <div
      class="bg-gradient-to-br rounded-tl-lg from-cyan-800 to-red-800 text-white grid place-items-center -mt-4 lg:-mt-6 -mx-4 lg:-mx-6 h-[25vh]"
    >
      Algum destaque especial aqui
    </div>

    <section
      v-for="(category, index) of categoriesOrLoading"
      :key="category?.uid ?? index"
      class="flex flex-col gap-3 mt-4 lg:mt-6"
    >
      <h3
        class="text-base font-semibold mt-4"
        :class="{
          [`loading ${useRandomValue('w-24', 'w-32', 'w-36', 'w-48')}`]:
            !category?.uid
        }"
      >
        {{ category?.title ?? '-' }}
      </h3>

      <ol class="flex flex-wrap p-2 -m-2 gap-3 lg:gap-4 overflow-x-auto">
        <ProductCard
          v-for="(product, index) of productsByCategory(category?.uid)"
          :key="product?.uid ?? index"
          :layout="category.horizontal ? 'horizontal' : 'vertical'"
          :item="product"
          :class="{
            'loading h-28': !product?.uid,
            'w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.675rem)] xl:w-[calc(25%-0.75rem)]':
              category.horizontal,
            'w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] xl:w-[calc(12.5%-.875rem)]':
              !category.horizontal
          }"
        />
      </ol>
    </section>
  </LayoutContainer>
</template>

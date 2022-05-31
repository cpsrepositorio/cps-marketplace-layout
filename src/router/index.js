import HomeView from '@/views/HomeView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/produtos',
    name: 'products',
    component: () => import('@/views/ProductsView.vue')
  },
  {
    path: '/categorias',
    name: 'categories',
    component: () => import('@/views/CategoriesView.vue')
  },
  {
    path: '/favoritos',
    name: 'favorites',
    component: () => import('@/views/FavoritesView.vue')
  },
  {
    path: '/sobre',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  }
]
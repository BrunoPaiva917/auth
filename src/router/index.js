// Composables
import { useAppStore } from '@/store/app'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/LoginView.vue') },
  { path: '/login', component: () => import('@/views/LoginView.vue')},
  { path: '/register', component: () => import('@/views/RegisterView.vue') },
  { path: '/dashboard', component: () => import('@/views/DashboardView.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

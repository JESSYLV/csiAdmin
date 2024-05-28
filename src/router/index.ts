import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layouts/index.vue'
const routes = [
    {
        path: '/',
        component: Layout,
        children: [
          {
            path: '',
            component: () => import('../views/home.vue')
          },
          {
            path: '/login',
            component: () => import('../views/dashboard.vue')
          },
          {
            path: '/login',
            component: () => import('../views/login.vue')
          }
        ]
      }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

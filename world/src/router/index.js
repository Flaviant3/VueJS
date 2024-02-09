import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/pays',
      name: 'pays',
      component: () => import('../views/Pays.vue')
    },
    {
      path: '/fiche-pays/:id',
      name: 'fiche-pays',
      component: () => import('../views/FichePays.vue')
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '/',
          component: () => import('../views/AboutView.vue'),
        },
        {
          path: '/countries',
          component: () => import('../views/geography/CountriesPage.vue'),
        },
        {
          path: '/tour-op-list',
          component: () => import('../views/settings/TourOpList.vue'),
        },
      ],
    },
    {
      path: '/login',
      component: () => import('../views/AuthLogin.vue'),
      meta: { noAuth: true },
    },
  ],
})

router.beforeEach(async (to) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some((record) => !record.meta.noAuth) && !loggedIn) {
    return { path: '/login' }
  }
})

export default router

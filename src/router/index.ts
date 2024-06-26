import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import pics from '../views/pics.vue'
import hardware from '../views/hardware.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/pics',
      name: 'pics',
      component: pics
    },
    {
      path: '/hardware',
      name: 'hardware',
      component: hardware
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/about.vue')
    }
  ]
})

export default router

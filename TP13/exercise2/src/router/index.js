import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/item',
      name: 'item',
      component: () => import('../views/ItemView.vue')
    },
    {
      path:'/product',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path:'/price',
      name: 'price',
      component: () => import('../views/PriceView.vue')
    },
    {
      path:'/user',
      name: 'user',
      component: () => import('../views/UserView.vue')
    },
    {
      path:'/homeproduct',
      name: 'homeproduct',
      component: () => import('../views/HomeProduct.vue')
    }
  ]
})

export default router

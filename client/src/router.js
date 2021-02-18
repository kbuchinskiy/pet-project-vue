import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ProductPage from './views/ProductPage.vue'
import NotFound from './views/NotFound.vue'
import ProductService from '@/api/ProductService'
import store from '@/store/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true,
      async beforeEnter(to, from, next) {
        to.params.products = await ProductService.getProducts()
        next()
      }
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductPage,
      props: true,
      async beforeEnter(to, from, next) {
        to.params.product = await ProductService.getProductById(to.params.id)
        next()
      }
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  store.commit('SET_LOADING_STATUS', true)
  next()
})

router.afterEach(() => {
  store.commit('SET_LOADING_STATUS', false)
})

export default router

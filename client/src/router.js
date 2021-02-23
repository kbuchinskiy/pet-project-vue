import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ProductPage from './views/ProductPage.vue'
import NotFound from './views/NotFound.vue'
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
        to.params.products = await store.dispatch('product/fetchProducts')
        next()
      }
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductPage,
      props: true,
      async beforeEnter(to, from, next) {
        to.params.product = await store.dispatch(
          'product/fetchProduct',
          to.params.id
        )
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
  setTimeout(() => {
    store.commit('SET_LOADING_STATUS', false)
  }, 300)
})

export default router

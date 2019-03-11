import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import FAQ from './components/FAQ.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/faq', component: FAQ, name: 'faq' }
]

const router = new VueRouter({ routes, })

export default router
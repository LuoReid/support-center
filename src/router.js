import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import FAQ from './components/FAQ.vue'
import Login from './components/Login.vue'
import TicketsLayout from './components/TicketsLayout.vue'
import state from './state'


Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/faq', component: FAQ, name: 'faq' },
  { path: '/login', name: 'login', component: Login },
  { path: '/tickets', name: 'tickets', component: TicketsLayout, meta: { private: true } },
]

const router = new VueRouter({ routes, mode: 'history', })

router.beforeEach((to, from, next) => {
  console.log('to', to.name)
  if (to.meta.private && !state.user) {
    //TODO login
    next({ name: 'login', params: { wantedRoute: to.fullPath, } })
    return
  }
  next()
})

export default router
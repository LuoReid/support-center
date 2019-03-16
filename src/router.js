import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import FAQ from './components/FAQ.vue'
import Login from './components/Login.vue'
import TicketsLayout from './components/TicketsLayout.vue'
import Tickets from './components/Tickets.vue'
import Newticket from './components/NewTicket.vue'
import state from './state'


Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/faq', component: FAQ, name: 'faq' },
  { path: '/login', name: 'login', component: Login, meta: { guest: true } },
  {
    path: '/tickets', component: TicketsLayout, meta: { private: true }, children: [
      { path: '', name: 'tickets', component: Tickets },
      { path: 'new', name: 'new-ticket', component: Newticket },
    ]
  },
]

const router = new VueRouter({ routes, mode: 'history', })

router.beforeEach((to, from, next) => {
  if (to.meta.private && !state.user) {
    next({ name: 'login', params: { wantedRoute: to.fullPath, } })
    return
  }
  if (to.meta.guest && state.user) {
    next({ name: 'home' })
    return
  }
  next()
})

export default router
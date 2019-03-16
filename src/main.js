import 'babel-polyfill'
import Vue from 'vue'
import AppLayout from './components/AppLayout.vue'
import router from './router'
import './global-components'
import VueFetch, { $fetch } from './plugins/fetch'
import state from './state'
import VueState from './plugins/state'

Vue.use(VueState, state)
Vue.use(VueFetch, { baseUrl: 'http://127.0.0.1:3000/' })


async function main() {
  try {
    state.user = await $fetch('user')
  } catch (error) {
    console.warn(e)
  }
  new Vue({
    el: '#app',
    data: state,
    router,
    render: h => h(AppLayout),
  })
}
main()
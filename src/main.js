import 'babel-polyfill'
import Vue from 'vue'
import AppLayout from './components/AppLayout.vue'
import router from './router'
import './global-components'
import VueFetch from './plugins/fetch'
import state from './state'
import VueState from './plugins/state'
Vue.use(VueState,state)
Vue.use(VueFetch, { baseUrl: 'http://127.0.0.1:3000/' })
new Vue({
    el: '#app',
    data: state,
    router,
    render: h => h(AppLayout),
})
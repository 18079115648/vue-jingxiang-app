// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router/router'
import VueRouter from 'vue-router'
import store from './vuex/store'

import axios from 'axios'

import mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import VueScroller from 'vue-scroller'

import api from '@/fetch/api'
Vue.prototype.$api = api
import storage from '@/fetch/storage'
Vue.prototype.$storage = storage

import Menu from '@/components/common/tabBar'
Vue.component('Menu', Menu)
import Header from '@/components/common/Header'
Vue.component('Header', Header)
import Pagination from '@/components/common/Pagination'
Vue.component('Pagination', Pagination)
import confirmModal from '@/components/common/confirmModal'
Vue.component('confirmModal', confirmModal)
import shareTip from '@/components/common/shareTip'
Vue.component('shareTip', shareTip)

Vue.use(VueScroller)

Vue.config.productionTip = true

Vue.use(VueRouter)

Vue.use(mint)


const router = new VueRouter({
    routes,
//  mode: 'history',
    strict: process.env.NODE_ENV !== 'production'
})




/* eslint-disable no-new */
new Vue({
    store,
    router,
    components: { App },
    render: h => h(App)
}).$mount('#app')
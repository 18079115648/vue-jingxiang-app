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

import { loadJssdk } from '@/fetch/tool'
Vue.prototype.$loadJssdk = loadJssdk

import common from '@/fetch/common'
Vue.prototype.$common = common

import aouth from '@/fetch/wxAouth'
Vue.prototype.$wxAouth = aouth.wxAouth
//console.log(aouth.wxAouth().then(()))

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
import enlargeImg from '@/components/common/enlargeImg'
Vue.component('enlargeImg', enlargeImg)

Vue.use(VueScroller)

Vue.config.productionTip = true

Vue.use(VueRouter)

Vue.use(mint)


const router = new VueRouter({
    routes,
//  mode: 'history',
    strict: process.env.NODE_ENV !== 'production'
})

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
    	aouth.wxAouth().then(res => {
    		if(res.ret == 1) {
    			next()
    		}else {
    			storage.set('history_uri', to.fullPath)
    			window.location.replace(store.state.back_uri + 'index/api/weixin?url=' + encodeURIComponent(to.fullPath))
//  			next()
    		}
    		
    	})
    }else {
    	next()
    }

    
})



/* eslint-disable no-new */
new Vue({
    store,
    router,
    components: { App },
    render: h => h(App)
}).$mount('#app')
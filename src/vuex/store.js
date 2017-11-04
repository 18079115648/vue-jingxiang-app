import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
//	back_uri: 'http://localhost:8080/',
//  back_uri: 'http://mobile.jxdyf.cn/',//正式环境
	back_uri: 'http://jx.shengshine.com/',//测试环境
    loadingStatus: false
}

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})
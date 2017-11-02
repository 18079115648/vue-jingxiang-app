import axios from 'axios'
import qs from 'qs'
import { Toast } from 'mint-ui'
import store from '@/vuex/store.js'
import { Autho } from '../../static/js/app.js'







// axios 配置
axios.defaults.timeout = 9000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = '/index'
						
//POST传参序列化
axios.interceptors.request.use((config) => {
    return config;
},(error) =>{
    
    return Promise.reject(error);
});

////返回状态判断
//axios.interceptors.response.use((res) =>{
//  if(!(res.data.err_code==0)){
//      return Promise.reject(res);
//  }
//  return res;
//}, (error) => {
//  return Promise.reject(error);
//});

export function fetchPost(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
            	if(response.status == 200) {
            		resolve(response.data)  
            	}else {
            		reject(error)
	               	Toast({
					  message: '网络错误',
					  position: 'bottom',
					  duration: 2000
					});
            	}
            	  
            })
            .catch((error) => {
               	reject(error)
               	Toast({
				  message: '网络错误',
				  position: 'bottom',
				  duration: 2000
				});
            })
    })
}
export function fetchGet(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, params)
            .then(response => {
            	if(response.status == 200) {
            		resolve(response.data)  
            	}else {
            		reject(error)
	               	Toast({
					  message: '网络错误',
					  position: 'bottom',
					  duration: 2000
					});
            	}
            })
            .catch((error) => {
                reject(error)
                Toast({
				  message: '网络错误',
				  position: 'bottom',
				  duration: 2000
				});
            })
    })
}
export default {
    //分页
	page(url, params) {
		return fetchGet(url, params)
	},
	//首页轮播
	indexBanner(params) {
		return fetchGet('/search/banner', params)
	},
	
	//首页快捷分类
	indexBannerCat(params) {
		return fetchGet('/activity/index', params)
	},
	
	//首页热门商品
	indexHot(params) {
		return fetchPost('/search/hot', params)
	},
	
	//搜索历史
	searchHistory(params) {
		return fetchGet('/search/history', params)
	},
	
	//猜你想找
	searchGuess(params) {
		return fetchGet('/search/guess', params)
	},
	
	//清除搜索历史
	historyClear(params) {
		return fetchGet('/search/historyClear', params)
	},
	
	//商品详情
	goodsDetail(params) {
		return fetchGet('/goods/detail', params)
	},
	
	//我的页面
	user(params) {
		return fetchGet('/user/info', params)
	},
	
	//更新用户信息
	updataUserInfo(params) {
		return fetchPost('/user/info', params)
	},









	




















	// 资讯
	indexInformation(params) {
		return fetchGet('/news/index', params)
	},

	//资讯内容
	indexInformationContent(params) {
		return fetchGet('/news/detail', params)
	},

	//分类
	indexClassification(params) {
		return fetchGet('goods/category', params)
	},

	//健康档案
	indexHealthRecords(params) {
		return fetchGet('health/index', params)
	},

	//创建健康档案
	indexHealth(params) {
		return fetchGet('health/create', params)
	},

	//删除健康档案
	indexDeleteHealth(params) {
		return fetchGet('health/delete', params)
	},
	
	//自己健康的档案
	indexDetailMy(params) {
		return fetchGet('health/detailMy', params)
	},

	//常用标签
	indexHealthTag(params) {
		return fetchGet('health/healthTag', params)
	},
	
	//创建病情标签
	indexAddHealthTag(params) {
		return fetchGet('health/tagCreate', params)
	},

	//关系选择
	indexGetRelation(params) {
		return fetchGet('health/getRelationship', params)
	},

	
	
	
	
}

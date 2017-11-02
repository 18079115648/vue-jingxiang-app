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
        axios.post(url, qs.stringify(params))
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
        axios.get(url, {
        	params: params
        }).then(response => {
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
	
	
	//积分总额
	userPoints(params) {
		return fetchGet('/user/points', params)
	},
	
	
	//订单详情
	orderDetail(params) {
		return fetchGet('/order/detail', params)
	},
		
	//取消订单
	orderCancel(params) {
		return fetchPost('/order/cancel', params)
	},
	
	
	//删除订单
	orderDelete(params) {
		return fetchPost('/order/delete', params)
	},
	
	//订单确认收货
	orderReceipt(params) {
		return fetchPost('/order/receipt', params)
	},
	
	//更新地址
	updataAddr(params) {
		return fetchPost('/address/update', params)
	},
	
	
	//地址详情
	detailAddr(params) {
		return fetchGet('/address/detail', params)
	},
	
	//删除地址
	deleteAddr(params) {
		return fetchPost('/address/delete', params)
	},
	
	//新增地址
	createAddr(params) {
		return fetchPost('/address/create', params)
	},
	
	//获取省市区
	cityList(params) {
		return fetchGet('/api/city', params)
	},
	
	
	//关于我们
	about(params) {
		return fetchGet('/about/index', params)
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

	//跟新自己的健康档案
	indexHealth(params) {
		return fetchGet('health/updateMy', params)
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

	//删除病情标签
	indexDeleteHealthTag(params) {
		return fetchGet('health/tagDelete', params)
	},

	//关系选择
	indexGetRelation(params) {
		return fetchGet('health/getRelationship', params)
	},

	
	
	
	
}

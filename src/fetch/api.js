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
	
	//首页轮播
	indexBanner(params) {
		return fetchGet('/search/banner', params)
	},
	
	//首页快捷分类
	indexBannerCat(params) {
		return fetchGet('/activity/index', params)
	}
	
	
    
}

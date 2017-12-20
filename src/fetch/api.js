import axios from 'axios'
import qs from 'qs'
import { Toast } from 'mint-ui'
import store from '@/vuex/store.js'
import storage from '@/fetch/storage'
import router from '@/router/router'
import Token from '@/fetch/accessToken'





// axios 配置
axios.defaults.timeout = 20000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//axios.defaults.baseURL = '/index'
						
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
function buildURL(url, needToken) {
	let token = Token.getAccessToken()
    if (!needToken) {
        return token ? url + (url.indexOf('?') >= 0 ? '&' : '?') + "token=" + token : url
    }
    if (!token) {
    	storage.set('history_url', window.location.hash.substr(1))
        router.replace('/appLogin')
        return false
    }
    return url + (url.indexOf('?') >= 0 ? '&' : '?') + "token=" + token
}

export function fetchPost(needToken, url, params) {
	url = buildURL(url, needToken)
	if (!url) {
        return new Promise((resolve, reject) => {
	        reject()
	      })
    }
    return new Promise((resolve, reject) => {
        axios.post( url, qs.stringify(params))
            .then(response => {
            	store.commit('setLoadingStatus', false)
            	if(response.status == 200) {
            		if(response.data.ret == 0 && response.data.msg != '用户 未登录') {
            			reject(response.data)
            			if(/appLogin/.test(window.location.hash)) {
            				return
            			}
            			
            			Toast({
						  message: response.data.msg || '数据错误',
						  position: 'bottom',
						  duration: 1500
						});
            		}else if(response.data.ret == 0 && response.data.msg == '用户 未登录'){
            			reject(response.data)
            			Toast({
						  message: response.data.msg || '数据错误',
						  position: 'bottom',
						  duration: 1500
						});
						storage.remove('token')
						storage.set('history_url', window.location.hash.substr(1))
            			router.replace('/appLogin')
            			
            		}else {
            			resolve(response.data) 
            		} 
            	}else {
            		reject(response)
	               	Toast({
					  message: '网络错误',
					  position: 'bottom',
					  duration: 2000
					});
            	}
            	  
            })
            .catch((error) => {
            	store.commit('setLoadingStatus', false)
               	reject(error)
               	Toast({
				  message: '网络错误',
				  position: 'bottom',
				  duration: 2000
				});
            })
    })
}
export function fetchGet(needToken, url, params) {
	
	url = buildURL(url, needToken)
	if (!url) {
        return
    }
    return new Promise((resolve, reject) => {
        axios.get( url, {
        	params: params
        }).then(response => {
        	    store.commit('setLoadingStatus', false)
            	if(response.status == 200) {
            		if(response.data.ret == 0 && response.data.msg != '用户 未登录') {
            			reject(response)
            			Toast({
						  message: response.data.msg || '数据错误',
						  position: 'bottom',
						  duration: 1500
						});
            		}else if(response.data.ret == 0 && response.data.msg == '用户 未登录'){
            			reject(response)
            			if(/shopdetails/.test(window.location.hash)) {
            				return
            			}
            			
            			Toast({
						  message: response.data.msg || '数据错误',
						  position: 'bottom',
						  duration: 1500
						});
						storage.remove('token')
						storage.set('history_url', window.location.hash.substr(1))
            			router.replace('/appLogin')
            			
            		}else {
            			resolve(response.data) 
            		}
            		
            	}else {
            		reject(response)
	               	Toast({
					  message: '网络错误',
					  position: 'bottom',
					  duration: 2000
					});
            	}
            })
            .catch((error) => {
            	store.commit('setLoadingStatus', false)
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
	pageGet(needToken, url, params) {
		return fetchGet(needToken, '/index' + url, params)
	},
	
	pagePost(needToken, url, params) {
		return fetchPost(needToken, '/index' + url, params)
	},
	
	
	//首页轮播
	indexBanner(params) {
		return fetchGet(false, '/index/search/banner', params)
	},
	
	//首页快捷分类
	indexBannerCat(params) {
		return fetchGet(false, '/index/activity/index', params)
	},
	
	//首页热门商品
	indexHot(params) {
		return fetchPost(false, '/index/search/hot', params)
	},
	
	//搜索历史
	searchHistory(params) {
		return fetchGet(false, '/index/search/history', params)
	},
	
	//猜你想找
	searchGuess(params) {
		return fetchGet(false, '/index/search/guess', params)
	},
	
	//清除搜索历史
	historyClear(params) {
		return fetchGet(false, '/index/search/historyClear', params)
	},
	
	//商品详情
	goodsDetail(params) {
		return fetchGet(false, '/index/goods/detail', params)
	},
	
	//我的页面
	user(params) {
		return fetchGet(true, '/index/user/info', params)
	},
	
	//更新用户信息
	updataUserInfo(params) {
		return fetchPost(true, '/index/user/info', params)
	},
	
	
	//积分总额
	userPoints(params) {
		return fetchGet(true, '/index/user/points', params)
	},
	
	
	//订单详情
	orderDetail(params) {
		return fetchGet(true, '/index/order/detail', params)
	},
		
	//取消订单
	orderCancel(params) {
		return fetchPost(true, '/index/order/cancel', params)
	},
	
	
	//删除订单
	orderDelete(params) {
		return fetchPost(true, '/index/order/delete', params)
	},
	
	//订单确认收货
	orderReceipt(params) {
		return fetchPost(true, '/index/order/receipt', params)
	},
	
	//更新地址
	updataAddr(params) {
		return fetchPost(true, '/index/address/update', params)
	},
	
	
	//地址详情
	detailAddr(params) {
		return fetchGet(true, '/index/address/detail', params)
	},
	
	//删除地址
	deleteAddr(params) {
		return fetchPost(false, '/index/address/delete', params)
	},
	
	//新增地址
	createAddr(params) {
		return fetchPost(true, '/index/address/create', params)
	},
	
	//获取省市区
	cityList(params) {
		return fetchGet(false, '/index/api/city', params)
	},
	
	
	//关于我们
	about(params) {
		return fetchGet(false, '/index/about/index', params)
	},
	
	//获取购物车或需求清单数据
	getCartData(params) {
		return fetchGet(true, '/index/cart/index', params)
	},
	
	//商品详情获取购物车或需求清单数据
	notgetCartData(params) {
		return fetchGet(false, '/index/cart/index', params)
	},
	
	//添加商品到购物车
	addCartData(params) {
		return fetchPost(true, '/index/cart/add', params)
	},
	
	//微信分享
	wxShare(params) {
		return fetchPost(false, '/index/api/shareWeiXin', params)
	},
	
	//判断微信是否已登录
	loginAouth(params) {
		return fetchPost(false, '/index/api/auth', params)
	},
	
	
	//收货地址列表
	addressList(params) {
		return fetchGet(true, '/index/address/index', params)
	},
	
	//商品详情收货地址列表
	notaddressList(params) {
		return fetchGet(false, '/index/address/index', params)
	},
	
	//立即购买确认订单
	checkOutBuy(params) {
		return fetchPost(true, '/index/cart/checkOutBuy', params)
	},
	
	//确认订单
	checkOut(params) {
		return fetchPost(true, '/index/cart/checkOut', params)
	},
	
	//创建订单
	createOrder(params) {
		return fetchPost(true, '/index/cart/createOrder', params)
	},
		
	//购物车
	getCartData(params) {
		return fetchGet(true, '/index/cart/index', params)
	},
	
	//购物车商品数量更新
	updataCartData(params) {
		return fetchPost(true, '/index/cart/update', params)
	},
	
	//删除购物车商品
	deleteCartData(params) {
		return fetchPost(true, '/index/cart/deleteAll', params)
	},
	
	//登陆短信令牌获取
	getTokenSms(params) {
		return fetchPost(false, '/index/api/token_sms', params)
	},
	
	//登陆获取验证码
	getCodeSms(params) {
		return fetchPost(false, '/index/api/smsSend', params)
	},
	
	//app手机登陆获取验证码
	getCodeLogin(params) {
		return fetchPost(false, '/index/api/smsLogin', params)
	},
	
	//注册
	registerUser(params) {
		return fetchPost(false, '/index/register/index', params)
	},
	
	//注册
	Login(params) {
		return fetchPost(false, '/index/login/index ', params)
	},
	
	
	//微信多媒体上传头像图片
	wxUploadUserImg(params) {
		return fetchPost(true, '/index/user/img_head2', params)
	},
	
	//微信多媒体上传处方药图片
	wxUploadOrderImg(params) {
		return fetchPost(true, '/index/order/img_user2', params)
	},
	
	//会员卡绑定
	bindMemberCard(params) {
		return fetchPost(true, '/index/user/bind', params)
	},
	
	//会员卡开通城市列表
	regCityList(params) {
		return fetchGet(true, '/index/user/reg', params)
	},
	
	//会员卡开通城市列表
	regMember(params) {
		return fetchPost(true, '/index/user/reg', params)
	},
	
	//充值
	recharge(params) {
		return fetchPost(true, '/index/cart/createRecharge', params)
	},
	
	
	//评价
	createComment(params) {
		return fetchPost(true, '/index/goods/commentCreate', params)
	},
	
	//支付
	appPay(params) {
		return fetchPost(true, 'api/payment/getCode', params)
	},
	 
	//支付
	newsList(params) {
		return fetchPost(true, 'index/user/pushLog', params)
	},





	




















	// 资讯
	indexInformation(params) {
		return fetchGet(false, '/index/news/index', params)
	},

	//资讯内容
	indexInformationContent(params) {
		return fetchGet(false, '/index/news/detail', params)
	},

	//分类
	indexClassification(params) {
		return fetchGet(false, '/index/goods/category', params)
	},

	//健康档案
	indexHealthRecords(params) {
		return fetchGet(true, '/index/health/index', params)
	},

	//跟新自己的健康档案
	indexHealth(params) {
		return fetchPost(true, '/index/health/updateMy', params)
	},

	//删除健康档案
	indexDeleteHealth(params) {
		return fetchPost(true, '/index/health/delete', params)
	},
	
	//自己的健康档案
	indexDetailMy(params) {
		return fetchGet(true, '/index/health/detailMy', params)
	},

	//健康档案
	indexDetail(params) {
		return fetchGet(true, '/index/health/detail', params)
	},

	//常用标签
	indexHealthTag(params) {
		return fetchGet(false, '/index/health/healthTag', params)
	},
	
	//创建病情标签
	indexAddHealthTag(params) {
		return fetchPost(true, '/index/health/tagCreate', params)
	},

	//删除病情标签
	indexDeleteHealthTag(params) {
		return fetchPost(true, '/index/health/tagDelete', params)
	},

	//关系选择
	indexGetRelation(params) {
		return fetchGet(true, '/index/health/getRelationship', params)
	},

	//健康档案创建
	indexHealthCreate(params) {
		return fetchPost(true, '/index/health/create', params)
	},
	
	//更新健康档案
	
	indexHealthChange(params) {
		return fetchPost(true, '/index/health/update', params)
	},
}

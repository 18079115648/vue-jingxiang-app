import router from '@/router/router'
import common from '@/fetch/common'
import storage from '@/fetch/storage'
import qs from 'qs'
import axios from 'axios'

function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge)
    } else {
        document.addEventListener('WebViewJavascriptBridgeReady', function() {
            callback(WebViewJavascriptBridge)
        }, false)
    }
    if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback)
    }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'https://__bridge_loaded__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
}
setupWebViewJavascriptBridge(function(bridge) {
    //初始化
    if (common.isAndroid()) {
        bridge.init(function(message, responseCallback) {
            var data = {
                'Javascript Responds': 'Wee!'
            };
            responseCallback(data);
        })
    }
    // 跳转消息页面
    bridge.registerHandler('viewPage', (data, responseCallback) => {
    	let viewData = JSON.parse(data)
    	if(viewData.type == 1) {
    		router.push('/allOrders/10')
    	}else if(viewData.type == 2) {
    		router.push('/allOrders/100')
    	}else if(viewData.type == 3) {
    		router.push('/shopdetails/' + viewData.url)
    	}else {
    		router.push('/selected')
    	}
        
        responseCallback(1)
    })

})




export default {
    // 微信支付
    wechatPay(params) {
        return new Promise((resolve, reject) => {
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('callWeChatPay', params, response => {
                    resolve(JSON.parse(response))
                })
            })
        })
    },

    // 支付宝支付
    alipay(params) {
        return new Promise((resolve, reject) => {
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('callAlipay', params, response => {
                    resolve(response)
                })
            })
        })
    },


    // 微信OAuth认证
    wechatOAuth() {
        return new Promise((resolve, reject) => [
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('oauth', "1", response => {
                    resolve(response)
                })
            })
        ])
    },
    
    // 获取设备id
    getDeviceId() {
        return new Promise((resolve, reject) => [
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('getDeviceId', null, response => {
                    resolve(response)
                })
            })
        ])
    },

    // 分享
    share(params) {
        return new Promise((resolve, reject) => {
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('share', JSON.stringify(params), response => {
                    resolve(response)
                })
            })
        })
    },

    // 选择图片
    choosePhoto(params) {
        return new Promise((resolve, reject) => {
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('choosePhoto', JSON.stringify(params), response => {
                    resolve(JSON.parse(response))
                })
            })
        })
    },
    
    // 默认浏览器打开链接
    openLink(params) {
        return new Promise((resolve, reject) => {
            setupWebViewJavascriptBridge(bridge => {
                bridge.callHandler('openLink', params, response => {
                    resolve(response)
                })
            })
        })
    }
}
<template>
    <div class="app" id="app" :style="{ height: wH + 'px' }">
    	
    	<div class="box">
    		<Header title="登录"></Header>
    		<img src="../../static/images/1-12.png" class="logo"  />
	    	<div class="form-content">
	    		<div class="form-item">
	    			<div class="icon phone"></div>
	    			<input v-model="phone" @input="inputNumber" type="tel" style="width: 5.8rem;" placeholder="请输入手机号" maxlength="11" />
	    		</div>
	    		<div class="form-item">
	    			<div class="icon code"></div>
	    			<input v-model="code" type="tel" placeholder="请输入验证码" maxlength="6" />
	    			<div class="captcha-btn" :class="{'disabled': !enableSend}" @click="getCode">{{captchaLabel}}</div>
	    		</div>
	    	</div>
	    	<div class="agreement">
	    		<div class="agree-icon" @click="agreeStatus = !agreeStatus">
	    			<img v-show="!agreeStatus" src="../../static/images/44@3x.png" class="fullEle" />
	    			<img v-show="agreeStatus" src="../../static/images/43@3x.png" class="fullEle" />
	    		</div>
	    		<div class="text">
	    			同意
	    			<span>用户条款及隐私协议</span>
	    		</div>
	    	</div>
	    	<div class="btn-default btn-hover btn-login" :class="{'disabled': !agreeStatus}" @click="login">登录</div>
	    	<div class="quick-login">
	            <div class="title">第三方快捷登录</div>
	            <div class="channel-container">
	                <div class="channel">
	                    <img @click="wxLogin" src="../../static/images/90@3x.png" alt="微信登录">
	                </div>
	            </div>
	        </div>
    	</div>
	    	
    </div>
</template>

<script>
import $ from 'jquery'
import { Toast, Indicator } from 'mint-ui'
export default {
	data() {
	    return {
	    	agreeStatus: true,
	    	
	    	phone: '',
	    	code: '',
	    	wH: 0,
	    	captchaLabel:'获取验证码',
	    	timer: null,
	    	count: 60,
	    	enableSend: true,
	    	
	    	deviceId: null
	    }
	},
	created() {
		const self = this
//		if(this.$common.isWeixin()) {
//			let info = this.$storage.get('oauthInfo')
//          if (!info) {
//              this.$weixin.authorize()
//              return
//          }
//          this.$api.weixinLogin({
//          	open_id: info.open_id,
//          	uuid: info.uuid,
//          	nickname: info.nickname,
//          	img_head: info.img_head,
//          	sex: info.sex,
//          	type: 2	
//          }).then(res => { 
//
//	        }, err => {
//	        	
//	        })
//		}
		this.$storage.remove('token')
		this.$bridge.getDeviceId().then(res => {
			 self.deviceId = res 
 		})
		
	},
	mounted() {	
		this.wH = $('#app').height()
	},
	methods: {
		inputNumber() {
			if (!/^\d*$/.test(this.phone)) {	
	            this.phone = this.phone.replace(/\D+/g,'')            
	        } 
		},
		getTokenSms(data) {
			return this.$api.getTokenSms(data)
		},
		getCodeLogin(data) {
			return this.$api.getCodeLogin(data)
		},
		getCode() {
			if(!this.enableSend) {
				return
			}
			if(!this.checkPhone) {
				Toast({
				  message: '请输入正确的手机号',
				  position: 'bottom',
				  duration: 1000
				});
				return
			}
			
			this.getTokenSms({
				mobile: this.phone
			}).then(res => {
				if(res.ret == 1) {
					return this.getCodeLogin({
						mobile: this.phone,
						token: res.token
					})
				}
	        }).then(res => {
				if(res.ret == 1) {
					this.enableSend = false
					this.count = 60
					this.timer = setInterval(() => {
						console.log(this.count)
						this.count--
						this.captchaLabel = '重新获取('+ this.count +')'
						if(this.count < 1) {
							this.enableSend = true
							this.captchaLabel = '获取验证码'
							clearInterval(this.timer)
						}
					}, 1000)
				}
	        })
			
		},
		login() {
			if(!this.agreeStatus) {
				return
			}
			if(!this.checkPhone) {
				Toast({
				  message: '请输入正确的手机号',
				  position: 'bottom',
				  duration: 1000
				});
				return
			}
			if(!this.checkCode) {
				Toast({
				  message: '验证码错误',
				  position: 'bottom',
				  duration: 1000
				});
				return
			}
			
			this.$api.Login({
				username: this.phone,
                type: 1,
                password: this.code,
                device_id: this.deviceId,
                platform: this.$common.getPlatformType()
			}).then(res => {
				if(res.ret == 1) {
					this.$token.refreshToken(res.data.token, 7000)
					this.loginSuccess()
				}
	        }, err => {
	        	
	        })
		},
		loginSuccess() {
			let redirectURI = '/user'
            if (this.$storage.get('history_url') && this.$storage.get('history_url') != '/appLogin') {
                redirectURI = this.$storage.get('history_url')
            }
            this.$router.replace(redirectURI)
		},
		wxLogin() {
			// oauth认证
			const self = this
				
			this.$store.commit('setLoadingStatus', true)
            this.$bridge.wechatOAuth().then(response => {
                let info = JSON.parse(response)
                self.$api.Login({
	                type: 2,
	                open_id: info.openid,
	                uuid: info.unionid,
	                nickname: info.nickname,
	                img_head: info.avatar,
	                sex: info.sex || 0,
	                device_id: self.device_id,
	                platform: self.$common.getPlatformType()
				}).then(res => {
					if(res.ret == 1) {
						self.$token.refreshToken(res.data.token, 7000)
						self.loginSuccess()
					}
		        }, err => {
		        	self.$storage.set('oauthInfo', {
	                    open_id: info.openid,
	                    uuid: info.unionid,
	                    nickname: info.nickname,
	                    img_head: info.avatar,
	                    sex: info.sex || 0,
	                    deviceId: self.deviceId
	                })
		        	if(err.ret == 0) {
		        		Toast({
						  message: '需要绑定手机号码才能进入哦!',
						  position: 'bottom',
						  duration: 3000
						});
						self.$router.push('/login')
					}
		        })
                
            })
		}
	},
	computed: {
		checkPhone: function() {
			if(/^1[34578]\d{9}$/.test(this.phone)){   
		        return true; 
		    } 
		    return false
		},
		checkCode: function() {
			if(/^\d{4,6}$/.test(this.code)){   
		        return true; 
		    } 
		    return false
		}
	},
	beforeRouteLeave(to, from, next) {
		if(this.$store.state.loadingStatus) {
			this.$store.commit('setLoadingStatus', false)
			next(false)
			return
		} else {
			next()
		}

	}
}
</script>

<style lang="scss" scoped>
.box{
	background: #fff;
	position: relative;
	padding: 0.4rem 0.5rem;
	font-size: 0.28rem;
	height: 100%;
} 
.logo{
	display: block;
	width: 2rem;
	margin: 0.4rem auto;
}
.form-content{
	/*padding-top: 0.3rem;*/
}
.form-item{
	padding: 0.24rem 0;
	border-bottom: 1px solid #f3f3f3;
	display: flex;
	align-items: center;
	.icon{
		width: 0.6rem;
		height: 0.5rem;
		overflow: hidden;
		background-position: left center;
		background-repeat: no-repeat;
		background-size: 40%;
	}
	.icon.phone{
		background-image: url(../../static/images/18@3x.png);
	}
	.icon.code{
		background-image: url(../../static/images/17@3x.png);
	}
	input{
		width: 3.3rem;
		font-size: 0.28rem;
	}
	.captcha-btn{
		width: 2.3rem;
		margin-left: 0.3rem;
		padding-left: 0.3rem;
		border-left: 2px solid #3cafb6;
		color: #3cafb6;
	}
	.captcha-btn.disabled{
		color: #ccc;
	}
}
input::-webkit-input-placeholder {
	color: #ccc;
}
.btn-login{
	width: 6.5rem;
	margin-top: 0.6rem;
}
.btn-login.disabled{
	background: #ddd;
	color: #eee;
}
.agreement{
	padding: 0.1rem 0;
	display: flex;
	align-items: center;
	margin-left: -0.2rem;
	font-size: 0.24rem;
	font-weight: 700;
	.agree-icon{
		width: 0.8rem;
		height: 0.8rem;
		padding: 0.24rem;
		img.fullEle{
			width: 0.32rem;
			height: 0.32rem;
		}
		
	}
	span{
		color: #2d92f4;
	}
}
.quick-login {
    position: absolute;
    bottom: 0;
    left: 0;
    /*margin-top: 1.5rem;*/
    width: 100%;
    height: 2.5rem;
    text-align: center;
}
.quick-login .title {
    font-size: .28rem;
    color: #999;
    position: relative;
}
.quick-login .title:before, .quick-login .title:after {
    content: '';
    position: absolute;
    top: 50%;
    background: #f5f5f5;
    width: 1.6rem;
    height: 1px;
}
.quick-login .title:before {
    left: .75rem;
} 
.quick-login .title:after {
    right: .75rem;
}
.quick-login .channel {
    margin-top: .5rem;
}
.quick-login .channel img {
    width: 1rem;
    margin: 0 .2rem;
}
</style>
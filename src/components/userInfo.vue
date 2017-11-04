<template>
    <div class="app">
    	<Header title="个人中心"></Header>
    	<div class="avatar-content has-right-arror">
    		<span>头像</span>
    		<div class="avatar" @click="previewAvatar">
    			<img :src="userInfo.img_head" />
    		</div>
    		<div class="changeAvatar" @click="changeAvatar"></div>
    	</div>
    	<div class="user-info">
    		<div @click="editNickName" class="link-item  has-right-arror">
				<span>昵称</span>
				<span>{{userInfo.username}}</span>
			</div>
			<div class="link-item">
				<span>手机号</span>
				<span>{{userInfo.mobile}}</span>
			</div>
			<div class="link-item" v-if="userInfo.cardno">
				<span>会员卡绑定</span>
				<span>{{userInfo.cardno}}</span>
			</div>
			<router-link v-if="!userInfo.cardno" to="/bindMemberCard" class="link-item  has-right-arror">
				<span>会员卡绑定</span>
				<span class="grey">未绑定</span>
			</router-link>
    	</div>
    	<div class="identify-aouth">
    		<p class="tit">实名认证</p>
    		<div class="user-info" style="margin-top: 0;" @click="editAouth">
	    		<div  class="link-item  has-right-arror">
					<span>姓名</span>
					<span v-if="!userInfo.true_name" class="grey">您的真实姓名</span>
					<span v-if="userInfo.true_name">{{userInfo.true_name}}</span>
				</div>
				<div  class="link-item  has-right-arror">
					<span>身份证号</span>
					<span v-if="!userInfo.id_card" class="grey">您的身份证号</span>
					<span v-if="userInfo.id_card">{{userInfo.id_card}}</span>
				</div>
	    	</div>
    	</div>
    </div>
</template>

<script>
import wx from 'weixin-js-sdk'
export default {
	data() {
		return {
			userInfo: {}
		}
	},
	created() {
		this.$api.user().then(res => { 
			if(res.ret == 1) {
				this.userInfo = res
			}
        }, err => {
        	
        })
		this.wxJssdk()
	},
	methods: {
		wxJssdk() {
			let self = this
			this.$api.wxShare({
				url: window.location.href.split('#')[0]
			}).then((res) => {
				wx.config({
					debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
					appId: res.appId, // 必填，公众号的唯一标识
					timestamp: parseInt(res.timestamp), // 必填，生成签名的时间戳
					nonceStr: res.noncestr, // 必填，生成签名的随机串
					signature: res.signature, // 必填，签名，见附录1
					jsApiList: ['getLocation', 'chooseImage', 'previewImage', 'uploadImage', 'scanQRCode', 'chooseWXPay', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				})
//				wx.ready(function() {
//					
//				})
			}).catch((err) => {
				console.log(err)
			})
		},
		previewAvatar() {
			wx.previewImage({
			    current: this.userInfo.img_head, // 当前显示图片的http链接
			    urls: [this.userInfo.img_head] // 需要预览的图片http链接列表
			});
		},
		changeAvatar() {
			let self = this
			wx.chooseImage({
			    count: 1, // 默认9
			    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
			    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
			    success: function (res) {
			    	console.log(res)
			        wx.uploadImage({
					    localId:  res.localIds[0], // 需要上传的图片的本地ID，由chooseImage接口获得
					    isShowProgressTips: 1, // 默认为1，显示进度提示
					    success: function (res) {
					        self.$api.wxUploadImg({
					        	media_id: res.serverId
					        }).then(res => {
								if(res.ret == 1) {
									self.userInfo.img_head = res.img_head
								}
					        }, err => {
					        	
					        })
					    }
					});
			    }
			});
		},
		editNickName() {
			let info = {
				username: this.userInfo.username,
				true_name: this.userInfo.true_name,
				province: this.userInfo.province,
				city: this.userInfo.city,
				district: this.userInfo.district,
				address: this.userInfo.address,
				id_card: this.userInfo.id_card
			}
			this.$storage.set('user_info', info)
			this.$router.push('/nickName')
		},
		editAouth() {
			let info = {
				username: this.userInfo.username,
				true_name: this.userInfo.true_name,
				province: this.userInfo.province,
				city: this.userInfo.city,
				district: this.userInfo.district,
				address: this.userInfo.address,
				id_card: this.userInfo.id_card
			}
			this.$storage.set('user_info', info)
			this.$router.push('/identyAouth')
		}
	}
}
</script>

<style lang="scss" scoped>
.app{
	background: #f5f5f9;
} 
.avatar-content{
	background: #FFFFFF;
	padding: 0.2rem 0;
	margin-top: 0.3rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-right: 0.8rem;
	padding-left: 0.3rem;
	position: relative;
	.avatar{
		width: 1rem;
		height: 1rem;
		margin-right: 0.2rem;
		overflow: hidden;
		border-radius: 50%;
		position: relative;
		img{
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			height: 100%;
			max-width: 100%;
		}
	}
	.changeAvatar{
		position: absolute;
		width: 0.7rem;
		height: 1rem;
		right: 0.1rem;
		top: 0.2rem;
		z-index: 10;
	}
}
.user-info{
	background: #fff;
	padding-left: 0.3rem;
	margin-top: 0.3rem;
	.link-item{
		display: flex;
		height: 0.9rem;
		align-items: center;
		justify-content: space-between;
		padding-right: 0.3rem;
		border-bottom: 1px solid #f3f3f3;
		.grey{
			color: #999;
		}
	}
	.link-item.has-right-arror{
		padding-right: 0.6rem;
	}
}
.tit{
	height: 0.9rem;
	line-height: 1rem;
	padding-left: 0.3rem;
}
</style>
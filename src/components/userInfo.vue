<template>
    <div class="app">
    	<Header title="个人中心"></Header>
    	<div class="avatar-content has-right-arror">
    		<span>头像</span>
    		<div class="avatar">
    			<img src="../../static/images/10@3x.png" />
    		</div>
    	</div>
    	<div class="user-info">
    		<router-link to="/nickName" class="link-item  has-right-arror">
				<span>昵称</span>
				<span>一味去</span>
			</router-link>
			<div class="link-item">
				<span>手机号</span>
				<span>18079115648</span>
			</div>
			<div class="link-item">
				<span>会员卡绑定</span>
				<span>18079115648</span>
			</div>
			<router-link to="/bindMemberCard" class="link-item  has-right-arror">
				<span>会员卡绑定</span>
				<span class="grey">未绑定</span>
			</router-link>
    	</div>
    	<div class="identify-aouth">
    		<p class="tit">实名认证</p>
    		<div class="user-info" style="margin-top: 0;">
	    		<router-link to="/identyAouth" class="link-item  has-right-arror">
					<span>姓名</span>
					<span class="grey">您的真实姓名</span>
				</router-link>
				<router-link to="/identyAouth" class="link-item  has-right-arror">
					<span>身份证号</span>
					<span>18079115648</span>
				</router-link>
	    	</div>
    	</div>
    </div>
</template>

<script>

export default {
	methods: {
		back() {
			this.$router.go(-1)
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
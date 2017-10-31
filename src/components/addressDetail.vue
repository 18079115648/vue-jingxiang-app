<template>
    <div class="app">
    	<Header title="编辑服务地址"></Header>
    	<div class="user-info">
			<div class="link-item">
				<span>收货人</span>
				<input type="text" placeholder="请输入姓名" />
			</div>
			<div class="link-item">
				<span>联系电话</span>
				<input type="tel" maxlength="11" placeholder="请输入联系电话" />
			</div>
			<div class="link-item">
				<span>所在地区</span>
				<div>请选择</div>
			</div>
			<textarea class="addr-detail" placeholder="请填写详细地址"></textarea>
    	</div>
    	<div class="default-content">
    		<div class="left">
    			<p>设为默认地址</p>
    			<p class="tip">注：每次下单时会使用该地址</p>
    		</div>
    		<div class="right">
    			<mt-switch></mt-switch>
    		</div>
    		
    	</div>
		<div class="save">保存</div>
    </div>
</template>

<script>

export default {
	data() {
	    return {

	    }
	},
	mounted() {	
		
	},
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
	padding-top: 0.3rem;
} 
.user-info{
	background: #fff;
	padding-left: 0.3rem;
	.link-item{
		display: flex;
		height: 0.9rem;
		align-items: center;
		justify-content: space-between;
		padding-right: 0.3rem;
		border-bottom: 1px solid #f3f3f3;
		span{
			width: 2rem;
		}
		input{
			flex: 1;
			text-align: right;
		}
	}
	.addr-detail{
		width: 100%;
		height: 1.4rem;
		border: none;
		padding: 0.2rem 0.3rem 0.2rem 0;
	}
}
.default-content{
	background: #fff;
	margin-top: 0.3rem;
	display: flex;
	padding: 0.2rem 0.3rem;
	justify-content: space-between;
	align-items: center;
	.left{
		P{
			padding: 0.12rem 0;
		}
		.tip{
			color: #999;
			font-size: 0.24rem;
		}
	}
}
.save{
	position: fixed;
	width: 1.3rem;
	height: 0.92rem;
	right: 0;
	top: 0;
	line-height: 0.9rem;
	color: #fff;
	z-index: 60;
	text-align: center;
}
</style>
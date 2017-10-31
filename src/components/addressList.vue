<template>
    <div class="app">
    	<Header title="收货地址"></Header>
    	<!--<div class="none-data">
    		<img class="none-img" src="../../static/images/19@3x.png"  />
    		<p class="none-tip">暂无收货地址</p>
    	</div>-->
    	<div class="address-list">
    		<div class="address-item">
    			<router-link to="/addressDetail">
    				<div class="addr-contact">
	    				<span>张三</span>
	    				<span>18079115648</span>
	    			</div>
	    			<div class="addr-detail">
	    				哈市的房价和打卡机多哈空间
	    			</div>
    			</router-link>
	    			
    			<div class="addr-operate">
    				<div class="addr-default">
    					<img src="../../static/images/44@3x.png" class="default-icon" />
    					<!--<img src="../../static/images/43@3x.png" class="default-icon" />-->
    					<span>设为默认</span>
    					<!--<span>默认地址</span>-->
    				</div>
    				<div class="addr-op">
    					<span>编辑</span>
    					<span>删除</span>
    				</div>
    			</div>
    		</div>

    		
    	</div>
    	<div class="btn-default add-addr">新增收货地址</div>
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
	font-size: 0.26rem;
	position: relative;
	padding-top: 0.3rem;
	padding-bottom: 1.6rem;
} 
.address-item{
	background: #fff;
	margin-bottom: 0.3rem;
	padding-top: 0.15rem;
	& > *{
		display: block;
		padding-left: 0.3rem !important;
		padding-right: 0.3rem !important;
	}
	.addr-contact{
		display: flex;
		justify-content: space-between;
		padding: 0.15rem 0;
	}
	.addr-detail{
		padding: 0.15rem 0;
		padding-bottom: 0.35rem;
		border-bottom: 1px solid #f6f6f6;
	}
	.addr-operate{
		height: 0.8rem;
		display: flex;
		justify-content: space-between;
		line-height: 0.8rem;
		.addr-default{
			display: flex;
			align-items: center;
			.default-icon{
				width: 0.4rem;
				margin-right: 0.2rem;
			}
		}
		.addr-op{
			display: flex;
			position: relative;
			right: -0.3rem;
			span{
				padding: 0 0.3rem;
			}
		}
			
	}
}
.add-addr{
	position: absolute;
	left: 0.3rem;
	bottom: 0.5rem;
}
</style>
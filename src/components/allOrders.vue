<template>
    <div class="app">
    	<Header title="我的订单"></Header>
    	<!--<div class="none-data">
    		<img class="none-img" src="../../static/images/25@3x.png"  />
    		<p class="none-tip">暂无订单信息</p>
    	</div>-->
        <div class="order-list">
        	<div class="order-item">
        		<router-link to="/orderDetail">
        			<div class="order-top">
	        			<span>2017</span>
	        			<span class="price-color">待付款</span>
	        		</div>
	        		<div class="product-list">
			    		<div class="product-item">
			    			<img src="" class="product-img" />
			    			<div class="product-info">
			    				<div class="product-name">阿大口大利空</div>
			    				<div class="product-amount">
			    					<span class="price-color">&yen;111</span>
			    					<span class="count">x1</span>
			    				</div>
			    			</div>
			    		</div>
			    		<div class="product-item">
			    			<img src="" class="product-img" />
			    			<div class="product-info">
			    				<div class="product-name">阿大口大利空</div>
			    				<div class="product-amount">
			    					<span class="price-color">&yen;111</span>
			    					<span class="count">x1</span>
			    				</div>
			    			</div>
			    		</div>
			    		
			    	</div>
			    	<div class="order-total">
			    		共 1 件商品， 合计：&yen;100
			    	</div>
        		</router-link>
	        		
		    	<div class="order-operate">
		    		<span>取消订单</span>
		    		<span class="other">立即付款</span>
		    	</div>
        	</div>
        	
        </div>
	    	
    </div>
</template>

<script>

export default {
	data() {
	    return {
	    	editStatus: false,
		    selected: [],
		    aa: 1,
		    bb: 2
	    }
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
	line-height: 1.4;
	position: relative;
	padding-bottom: 0.3rem;
} 
.order-list .order-item:last-child{
	margin-bottom: 0;
}
.order-item{
	background: #fff;
	margin-bottom: 0.2rem;
	.order-top{
		display: flex;
		justify-content: space-between;
		padding: 0.2rem 0.3rem;
		color: #888;
	}
	.order-total{
		padding: 0.22rem 0.3rem;
		text-align: right;
		border-bottom: 1px solid #f6f6f6;
	}
	.order-operate{
		padding: 0.14rem 0.3rem;
		display: flex;
		justify-content: flex-end;
		span{
			height: 0.6rem;
			line-height: 0.56rem;
			border-radius: 0.28rem;
			padding: 0 0.35rem;
			border: 1px solid #ddd;
			margin-left: 0.24rem;
			color: #888;
		}
		span.other{
			color: #3cafb6;
			border-color: #3cafb6;
		}
	}
}
.product-list{
	background: #f9f9f9;
	.product-item{
		padding: 0.2rem 0.3rem;
		border-bottom: 1px solid #f0f0f0;
		display: flex;
		.product-img{
			width: 1.4rem;
			height: 1.4rem;
			margin-right: 0.2rem;
		}
		.product-info{
			flex: 1;
			display: flex;
			flex-direction: column;
			.product-name{
				flex: 1;
			}
			.product-amount{
				display: flex;
				justify-content: space-between;
				font-size: 0.3rem;
				.count{
					color: #888;
				}
			}
		}
	}
	.product-item:last-child{
		border: none;
	}
}

</style>
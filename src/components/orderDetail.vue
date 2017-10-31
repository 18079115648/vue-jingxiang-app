<template>
    <div class="app">
    	<Header title="订单详情"></Header>
    	<div class="order-status">
    		<img src="../../static/images/54@3x.png" class="addr-icon" />
    		<div class="order-status-info">
    			<p class="price-color">等待审核</p>
    			<p class="tip">拉矿大的</p>
    			<p class="number">订单号：1888888888</p>
    		</div>
    	</div>
    	<div class="order-addr">
    		<img src="../../static/images/52@3x.png" class="addr-icon" />
    		<div class="addr-detail">
    			<div class="addr-contact">
    				<span>收货人：张三</span>
    				<span>18079115648</span>
    			</div>
    			<div class="addr-text">阿里山</div>
    			<div class="id-card">身份证：360127</div>
    		</div>
    		<!--<img src="../../static/images/arror.png" class="more-icon" />-->
    	</div>
    	<div class="recipe-content">
    		<img src="../../static/images/51@3x.png" class="addr-icon" />
    		<div class="recipe-info">
    			<p>处方资料及联系方式</p>
    			<p class="phone">18079115648</p>
    		</div>
    		<img src="" class="recipe-img" />
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
    		<div class="cell-item">
    			<span>商品合计</span>
    			<span>&yen;111</span>
    		</div>
    		<div class="cell-item">
    			<span>运费</span>
    			<span>&yen;111</span>
    		</div>
    	</div>
    	<div class="total-price">
    		<div class="price">
    			<span>实付款</span>
    			<span class="price-color">&yen;11</span>
    		</div>
    		<p class="time">下单时间：2017</p>
    	</div>
		<div class="order-operate">
    		<span>取消订单</span>
    		<span class="other">立即付款</span>
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
	line-height: 1.5;
	padding-bottom: 0.3rem;
	position: relative;
	font-size: 0.26rem;
} 
.order-status{
	display: flex;
	background: #FFFFFF;
	padding: 0.2rem 0.3rem;
	align-items: flex-start;
	margin-bottom: 0.2rem;
	.addr-icon{
		width: 0.28rem;
		margin-right: 0.34rem;
		margin-top: 0.06rem;
	}
	.order-status-info{
		flex: 1;
		overflow: hidden;
		.tip{
			padding: 0.14rem 0;
			color: #999;
			font-size: 0.24rem;
			border-bottom: 1px solid #f6f6f6;
		}
		.number{
			padding-top: 0.15rem;
		}
	}
}
.recipe-content{
	display: flex;
	background: #FFFFFF;
	padding: 0.2rem 0.3rem;
	align-items: flex-start;
	margin-bottom: 0.2rem;
	.addr-icon{
		width: 0.22rem;
		height: 0.32rem;
		margin-right: 0.34rem;
		margin-top: 0.02rem;
	}
	.recipe-info{
		flex: 1;
		.phone{
			padding-top: 0.15rem;
		}
	}
	.recipe-img{
		width: 1rem;
		height: 1rem;
	}
}
.order-addr{
	position: relative;
	background: #FFFFFF;
	padding: 0.16rem 0.3rem;
	display: flex;
	align-items: center;
	margin-bottom: 0.2rem;
	.bg-line{
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
	}
	.addr-icon{
		width: 0.28rem;
		height: 0.36rem;
		margin-right: 0.34rem;
	}
	.more-icon{
		width: 0.16rem;
		height: 0.28rem;
		margin-left: 0.25rem;
	}
	.addr-detail{
		flex: 1;
		padding-right: 0.3rem;
		& > div{
			padding: 0.04rem 0;
			font-size: 0.24rem;
		}
		.addr-contact{
			display: flex;
			justify-content: space-between;
			font-size: 0.26rem;
		}
	}
}
.product-list{
	margin: 0.2rem 0;
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
.order-total{
	padding: 0.15rem 0.3rem;
	background: #fff;
	border-bottom: 1px solid #f6f6f6;
	.cell-item{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 0.5rem;
	}
}
.total-price{
	background: #fff;
	padding: 0.24rem 0.3rem;
	margin-bottom: 0.2rem;
	.price{
		display: flex;
		justify-content: space-between;
		padding-bottom: 0.15rem;
		.price-color{
			font-size: 0.3rem;
		}
	}
	.time{
		color: #999999;
		text-align: right;
		font-size: 0.24rem;
	}
}
.order-operate{
	padding: 0.18rem 0.3rem;
	display: flex;
	justify-content: flex-end;
	background: #fff;
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
</style>
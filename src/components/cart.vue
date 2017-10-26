<template>
    <div class="app">
    	<Header title="购物车" back="hidden"></Header>
    	<div class="edit-status">编辑</div>
    	<div class="product-list">
			<div class="product-item">
				<div class="select-status">
					<input id="1" class="checkbox" type="checkbox" :value="aa" v-model="selected" />
					<label class="fullEle" for="1">
						<span class="checkbox-icon"></span>
					</label>
				</div>
				<div class="product-detail">
					<img src="" class="product-img" />
					<div class="product-info">
						<div class="product-name">打哈卡的哈卡的哈空间</div>
						<div class="product-amount">
							<span class="price-color">&yen;111</span>
							<div class="count-content">
								<span>-</span>
								<input class="count" maxlength="3" type="tel" value="1" />
								<span>+</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="product-item">
				<div class="select-status">
					<input id="1" class="checkbox" type="checkbox" :value="aa" v-model="selected" />
					<label class="fullEle" for="1">
						<span class="checkbox-icon"></span>
					</label>
				</div>
				<div class="product-detail">
					<img src="" class="product-img" />
					<div class="product-info">
						<div class="product-name">打哈卡的哈卡的哈空间</div>
						<div class="product-amount">
							<span class="price-color">&yen;111</span>
							<div class="count-content">
								<span>-</span>
								<input class="count" maxlength="3" type="tel" value="1" />
								<span>+</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="total-content">
			<div class="select-status">
				<input id="1" class="checkbox" type="checkbox" :value="aa" v-model="selected" />
				<label class="fullEle" for="1">
					<span class="checkbox-icon"></span>
				</label>
			</div>
			<div class="total-text">
				<span>全选</span>
				<div class="total-price">
					<span>合计：</span>
					<span class="price-color">&yen;111</span>
				</div>
				<div class="btn-operate">去结算(6)</div>
			</div>
		</div>
		<Menu actived="four"></Menu>
    </div>
</template>

<script>

export default {
	data() {
	    return {
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
} 
.search-content{
	display: flex;
	background: #fff;
	height: 0.96;
	line-height: 0.6rem;
	padding: 0.18rem 0.3rem;
	border-bottom: 1px solid #F5F5F9;
	& > span{
		width: 0.9rem;
		color: #3cafb6;
	}
	.search-input{
		flex: 1;
		background: #F5F5F9;
		padding: 0 0.15rem;
		border-radius: 0.08rem;
	}
}
.edit-status{
	position: fixed;
	right: 0;
	top: 0;
	width: 1.2rem;
	height: 0.92rem;
	text-align: center;
	line-height: 0.92rem;
	z-index: 40;
	color: #fff;
}
.product-list{
	position: absolute;
	width: 100%;
	left: 0;
	top: 0.92rem;
	bottom: 1.9rem;
	overflow-y: auto;
}
.product-item{
	background: #f9f9f9;
	padding: 0.2rem 0;
	height: 2.2rem;
	display: flex;
	margin-bottom: 0.2rem;
}
.select-status{
	width: 1rem;
	& > input{
		display: none;
	}
	& > label{
		display: flex;
		align-items: center;
		justify-content: center;
		.checkbox-icon{
			width: 0.4rem;
			height: 0.4rem;
			overflow: hidden;
			border: 1px solid #666;
			border-radius: 50%;
		}
	}
}
.checkbox:checked+label .checkbox-icon{
	border: none;
	background: #3cafb6;
}
.product-detail{
	flex: 1;
	display: flex;
	.product-img{
		width: 1.8rem;
		height: 1.8rem;
		margin-right: 0.26rem;	
	}
	.product-info{
		flex: 1;
		padding-right: 0.3rem;
		display: flex;
		flex-direction: column;
		.product-amount{
			height: 0.7rem;
			display: flex;
			align-items:flex-end;
			justify-content: space-between;
			.price-color{
				font-size: 0.32rem;
			}
			.count-content{
				display: flex;
				align-items: center;
				
				*{
					height: 0.6rem;
					line-height: 0.6rem;
					text-align: center;
					background: #efefef;
					border-radius: 0.06rem;
					margin: 0 0.04rem;
				}
				& > span{
					width: 0.6rem;
					font-size: 0.36rem;
				}
				& > input{
					width: 0.7rem;
					font-size: 0.32rem;
				}
			}
		}
		.product-name{
			flex: 1;
		}
	}
}
.total-content{
	position: fixed;
	width: 100%;
	left: 0;
	bottom: 1rem;
	height: 0.9rem;
	background: #FFFFFF;
	border-top: 1px solid #eee;
	display: flex;
	.total-text{
		flex: 1;
		display: flex;
		justify-content: space-between;
		line-height: 0.9rem;
		font-size: 0.3rem;
		.total-price{
			flex: 1;
			text-align: right;
			padding: 0 0.2rem;
			display: flex;
			justify-content: flex-end;
			.price-color{
				min-width: 1rem;
				text-align: left;
				font-size: 0.34rem;
			}
		}
		.btn-operate{
			width: 2rem;
			text-align: center;
			background: #3cafb6;
			color: #fff;
		}
	}
}
</style>
<template>
    <div class="app">
    	<div class="search-content">
    		<span @click="back">取消</span>
    		<div class="search-input">
    			保健品
    		</div>
    		
    	</div>
    	<div class="pop-product-list">
			<router-link to="" class="pop-product-item">
				<div class="fullEle">
					<div class="pop-product-img">
						<img class="fullEle" src="" />
					</div>
					<div class="pop-product-desc">
						<p class="pop-product-name">参苓健脾胃颗粒（无蔗糖）8袋参苓健脾胃颗粒（无蔗糖）8袋</p>
						<p class="pop-product-price price-color">&yen; 111</p>
					</div>
				</div>
				
			</router-link>
			<router-link to="" class="pop-product-item">
				<div class="fullEle">
					<div class="pop-product-img">
						<img class="fullEle" src="" />
					</div>
					<div class="pop-product-desc">
						<p class="pop-product-name">参苓健脾胃颗粒（无蔗糖）8袋参苓健脾胃颗粒（无蔗糖）8袋</p>
						<p class="pop-product-price price-color">&yen; 111</p>
					</div>
				</div>
				
			</router-link>
			<router-link to="" class="pop-product-item">
				<div class="fullEle">
					<div class="pop-product-img">
						<img class="fullEle" src="" />
					</div>
					<div class="pop-product-desc">
						<p class="pop-product-name">参苓健脾胃颗粒（无蔗糖）8袋参苓健脾胃颗粒（无蔗糖）8袋</p>
						<p class="pop-product-price price-color">&yen; 111</p>
					</div>
				</div>
				
			</router-link>
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
.pop-product-list{
	display: flex;
	flex-wrap: wrap;
	padding: 0.2rem 0.04rem;
}
.pop-product-item{
	width: 50%;
	height: 4.9rem;
	padding: 0 0.08rem;
	margin-bottom: 0.2rem;
}
.pop-product-item>div{
	background: #fff;
	padding: 0.16rem;
}
.pop-product-img{
	width: 3.15rem;
	height: 3.15rem;
}
.pop-product-desc{
	padding-top: 0.3rem;
}
.pop-product-name{
	line-height: 1.2;
	height: 0.64rem;
	overflow: hidden;
}
.pop-product-price{
	padding-top: 0.16rem;
	font-size: 0.3rem;
}
</style>
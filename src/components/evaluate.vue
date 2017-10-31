<template>
    <div class="app">
    	<Header title="评价"></Header>
    	<section class="text-content">
				<img src="" class="goods-img"  />
				<textarea class="desc" placeholder="写下购买体验和使用感受，为其他患者提供参考"></textarea>
			</section>
			<section class="evaluate-star">
				<div class="star-item">
					<span>商品评价</span>
					<div class="star">
						<span class="active" v-for="i in starList.goodsStar" @click="changeStar(i, -1, 'goodsStar')"></span>
						<span v-for="n in 5-starList.goodsStar" @click="changeStar(n + starList.goodsStar, 1, 'goodsStar')"></span>
					</div>
				</div>
				<div class="star-item">
					<span>商品评价</span>
					<div class="star">
						<span class="active" v-for="i in starList.serveStar" @click="changeStar(i, -1, 'serveStar')"></span>
						<span v-for="n in 5-starList.serveStar" @click="changeStar(n + starList.serveStar, 1, 'serveStar')"></span>
					</div>
				</div>
				<div class="star-item">
					<span>商品评价</span>
					<div class="star">
						<span class="active" v-for="i in starList.logiStar" @click="changeStar(i, -1, 'logiStar')"></span>
						<span v-for="n in 5-starList.logiStar" @click="changeStar(n + starList.logiStar, 1, 'logiStar')"></span>
					</div>
				</div>
			</section>
			<div class="save">提交</div>
    </div>
</template>

<script>

export default {
	data() {
		return {
			starList: {
				goodsStar: 0,
				serveStar: 0,
				logiStar: 0
			}
			
		}
	},
	mounted() {	
		
	},
	methods: {
		changeStar(index, status, item) {
			if(status < 0 && this.starList[item] == index) {
				this.starList[item] = index - 1
			}else {
				this.starList[item] = index
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.app{
	background: #f5f5f9;
} 
.text-content{
	background: #fff;
	padding: 0.3rem;
	display: flex;
	justify-content: flex-start;
	.goods-img{
		border: 1px solid #eee;
		width: 0.8rem;
		height: 0.8rem;
		margin-right: 0.3rem;
	}
	.desc{
		flex: 1;
		height: 2rem;
		outline: none;
		border: 0;
	}
}
.evaluate-star{
	background: #fff;
	margin-top: 0.3rem;
	padding: 0.2rem 0.3rem;
	.star-item{
		display: flex;
		justify-content: space-between;
		padding: 0.2rem 0;
		align-items: center;
		.star{
			padding-right: 0.4rem;
			display: flex;
			
			span{
				width: 0.55rem;
				height: 0.55rem;
				background: url(../../static/images/27@3x.png) no-repeat center;
				background-size: 70%;
			}
			span.active{
				background-image: url(../../static/images/28@3x.png);
			}
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
textarea::-webkit-input-placeholder {
	color: #ccc;
}
</style>
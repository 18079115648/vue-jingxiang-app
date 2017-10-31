<template>
	<section class="fullDiv move-right">
		<Header title="我的积分"></Header>
		<div class="balance-top">
			<p class="tit">积分余额</p>
			<p class="balance-amount">0.00</p>
		</div>
		<div class="balance-bottom">
			<div class="integal-nav">
				<div class="nav-item active"><span>收入记录</span></div>
				<div class="nav-item"><span>支出记录</span></div>
			</div>
			<div class="balance-list">
				<div class="balance-item">
					<p class="item-name">
						<span>微信充值</span>
						<span class="price-color">+50.00</span>
					</p>
					<p class="item-time">
						<span>2017</span>
					</p>
				</div>
				<div class="balance-item">
					<p class="item-name">
						<span>微信充值</span>
						<span class="price-color">+50.00</span>
					</p>
					<p class="item-time">
						<span>2017</span>
					</p>
				</div>
			</div>
		</div>
			
	</section>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		created() {
			
		},
		mounted() {

		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.app{
	background: #f5f5f9;
	position: relative;
} 	
.balance-top{
	height: 2.1rem;
	background: #3cafb6;
	position: relative;
	color: #fff;
	padding: 0 0.3rem;
	.tit{
		padding: 0.2rem 0;
	}
	.balance-amount{
		font-size: 0.8rem;
		padding-top: 0.3rem;
		width: 5rem;
		overflow: hidden;
	}
	.recharge-btn{
		position: absolute;
		border: 1px solid #fff;
		height: 0.6rem;
		padding: 0 0.45rem;
		line-height: 0.56rem;
		border-radius: 0.3rem;
		right: 0.3rem;
		bottom: 0.74rem;
	}
}
.integal-nav{
	height: 0.8rem;
	line-height: 0.76rem;
	display: flex;
	border-bottom: 1px solid #eee;
	background: #fff;
	padding: 0 0.3rem;
	.nav-item{
		flex: 1;
		text-align: center;
		span{
			display: inline-block;
			height: 100%;
			padding: 0 0.1rem;
		}
	}
	.nav-item.active{
		span{
			color: #3cafb6;
			border-bottom: 2px solid #3cafb6;
		}
	}
}
.balance-list{
	background: #FFFFFF;
	padding: 0 0.3rem;
	.balance-item{
		border-bottom: 1px solid #F9F9F9;
		padding: 0.15rem 0;
		& > p{
			padding: 0.15rem 0;
			display: flex;
			justify-content: space-between;
			.price-color{
				font-weight: 700;
			}
		}
		.item-time{
			color: #999;
			font-size: 0.26rem;
		}
	}
}
</style>
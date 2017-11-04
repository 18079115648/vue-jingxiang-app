<template>
    <div class="app">
    	<Header title="确认订单"></Header>
    	<router-link to="/addressList/select" class="order-addr" v-if="addrDetail.address_id">
    		<img src="../../static/images/line.png" class="bg-line" />
    		<img src="../../static/images/52@3x.png" class="addr-icon" />
    		<div class="addr-detail">
    			<div class="addr-contact">
    				<span>收货人：{{addrDetail.contact}}</span>
    				<span>{{addrDetail.mobile}}</span>
    			</div>
    			<div class="addr-text">{{addrDetail.area}} {{addrDetail.address}}</div>
    			<div class="id-card">身份证：{{addrDetail.id_card}}</div>
    		</div>
    		<img src="../../static/images/arror.png" class="more-icon" />
    	</router-link>
    	<router-link to="/addressList/select" class="order-addr" v-if="!addrDetail.address_id">
    		<img src="../../static/images/line.png" class="bg-line" />
    		<div class="none-addr">选择收货地址</div>
    	</router-link>
    	<div class="product-list">
    		<div class="product-item" v-for="(item, index) in goodsList" :key="index">
    			<img :src="item.thumb" class="product-img" />
    			<div class="product-info">
    				<div class="product-name">{{item.title}}</div>
    				<div class="product-amount">
    					<span class="price-color">&yen;{{item.price_shop}}</span>
    					<span class="count">x{{item.num}}</span>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div class="order-total">
    		<div class="cell-item">
    			<span>商品合计</span>
    			<span>&yen;{{orderDetail.amount_goods}}</span>
    		</div>
    		<div class="cell-item">
    			<span>运费</span>
    			<span>&yen;{{orderDetail.freight}}</span>
    		</div>
    	</div>
    	<div class="points" v-if="orderDetail.points > 0">
    		<span class="point-icon">积分</span>
    		<span>返{{orderDetail.points}}积分</span>
    	</div>
    	<div class="pay-content">
    		<div class="total-num">
    			共<span class="price-color"> {{orderDetail.total}} </span>件， 
    			实付 <span class="price-color"> &yen; {{orderDetail.amount_order}}</span>
    		</div>
    		<div class="pay-btn" @click="payWx">微信支付</div>
    	</div>
    </div>
</template>

<script>

export default {
	data() {
	    return {
	    	num: 0,
	    	goods_id: null,
	    	type_id: null,
	    	address_id: null, // 默认地址
	    	order_addr_id: null, //选择的地址
	    	status: null, // status订单来源    0：立即购买， 1： 购物车， 2：需求清单
	    	
	    	addrDetail: {},
	    	goodsList: [],
	    	orderDetail: {}
	    }
	},
	created() {
		this.status = this.$route.params.status
		this.type_id = this.$route.params.type
		this.address_id = this.$storage.get('default_addr_id')
		this.order_addr_id = this.$storage.get('order_addr_id')
		this.$storage.remove('order_addr_id')
		if(this.status === '0') {
			this.goods_id = [this.$route.query.goods_id]
			this.num = this.$route.query.num
			this.$api.checkOutBuy({
				type_id: this.type_id,
				goods_id: this.goods_id[0],
				address_id: this.order_addr_id || this.address_id,
				num: this.num
			}).then(res => {
				if(res.ret == 1) {
					this.orderDetail = res
					this.addrDetail = res.address
					this.goodsList = res.data
				}
			}, err => {
	
			})
		}else if(this.status === '1') {
			this.goods_id = this.$storage.get('select_goods_arr')
//			this.$storage.remove('select_goods_arr')
			this.$api.checkOut({
				type_id: this.type_id,
				goods_ids: this.goods_id,
				address_id: this.order_addr_id || this.address_id,
			}).then(res => {
				if(res.ret == 1) {
					this.orderDetail = res
					this.addrDetail = res.address
					this.goodsList = res.data
				}
			}, err => {
	
			})
		}
		
		
		
		
			
	},
	methods: {
		payWx() {
//			this.$api.checkOut({
//				type_id: this.type_id,
//				goods_ids: [this.goods_id],
//				address_id: this.order_addr_id || this.address_id,
//			}).then(res => {
//				if(res.ret == 1) {
//					this.$api.createOrder({
//						type_id: this.type_id,
//						goods_ids: [this.goods_id],
//						address_id: this.order_addr_id || this.address_id,
//						customer: this.addrDetail.contact,
//						id_card: this.addrDetail.id_card,
//						mobile: this.addrDetail.mobile,
//						province: this.addrDetail.province,
//						city: this.addrDetail.city,
//						district: this.addrDetail.district,
//						address: this.addrDetail.address,
//						check_phone_user: ''
//					}).then(res => {
//						if(res.ret == 1) {
//							window.location.href = this.$store.state.back_uri + 'api/Payment/getCode/order_id/' + res.order_id
//						}
//					}, err => {
//			
//					})
//				}
//			}, err => {
//	
//			})
			this.$api.createOrder({
				type_id: this.type_id,
				goods_ids: this.goods_id,
				address_id: this.order_addr_id || this.address_id,
				customer: this.addrDetail.contact,
				id_card: this.addrDetail.id_card,
				mobile: this.addrDetail.mobile,
				province: this.addrDetail.province,
				city: this.addrDetail.city,
				district: this.addrDetail.district,
				address: this.addrDetail.address,
				check_phone_user: ''
			}).then(res => {
				if(res.ret == 1) {
					window.location.href = this.$store.state.back_uri + 'api/Payment/getCode/order_id/' + res.order_id
				}
			}, err => {
	
			})
				
		}
	}
}
</script>

<style lang="scss" scoped>
.app{
	background: #f5f5f9;
	line-height: 1.5;
	padding-bottom: 1.3rem;
	position: relative;
} 
.order-addr{
	position: relative;
	background: #FFFFFF;
	padding: 0.16rem 0.3rem 0.26rem;
	display: flex;
	align-items: center;
	height: 1.76rem;
	.none-addr{
		text-align: center;
		width: 100%;
		color: #3cafb6;
		font-size: 0.3rem;
	}
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
	padding: 0 0.3rem;
	background: #fff;
	.cell-item{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 0.9rem;
		border-bottom: 1px solid #f3f3f3;
	}
	.cell-item:last-child{
		border: none;
	}
}
.points{
	height: 0.9rem;
	display: flex;
	background: #fff;
	align-items: center;
	font-size: 0.24rem;
	padding-left: 0.3rem;
	margin-top: 0.2rem;
	.point-icon{
		padding: 0 0.08rem;
		border: 1px solid #f60;
		font-size: 0.2rem;
		padding-top: 0.02rem;
		border-radius: 0.06rem;
		margin-right: 0.2rem;
		color: #f60;
	}
}
.pay-content{
	position: fixed;
	width: 100%;
	height: 1rem;
	left: 0;
	bottom: 0;
	background: #fff;
	border-top: 1px solid #eee;
	display: flex;
	line-height: 1rem;
	justify-content: space-between;
	font-size: 0.3rem;
	.pay-btn{
		width: 3rem;
		text-align: center;
		background: #3cafb6;
		color: #fff;
		font-size: 0.32rem;
	}
	.total-num{
		padding-left: 0.5rem;
		padding-right: 0.2rem;
	}
}
</style>
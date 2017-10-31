<template>
    <div class="app">
        <Header title="充值"></Header>
		<div class="recharge-content">
			<div class="recharge-select">
				<div class="recharge-item active">
					100元
				</div>
				<div class="recharge-item">
					100元
				</div>
				<div class="recharge-item">
					100元
				</div>
				<div class="recharge-item">
					100元
				</div>
				<div class="recharge-item">
					100元
				</div>
				<div class="recharge-item">
					100元
				</div>
			</div>
			<div class="recharge-amount">
				充值金额： &yen;100
			</div>
		</div>
		<p class="tip">温馨提示：您可以在线进行充值，线下到指定药店办理会员卡</p>
        <div class="btn-default pay-wx">微信支付</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        created() {
            
            
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
.app{
	background: #f5f5f9;
	padding-bottom: 1rem;
} 
.recharge-content{
	background: #fff;
	.recharge-select{
		padding: 0.3rem 0.15rem;
		display: flex;
		flex-wrap: wrap;
		border-bottom: 1px solid #f6f6f6;
		.recharge-item{
			width: 2.1rem;
			height: 0.9rem;
			border: 1px solid #ddd;
			text-align: center;
			line-height: 0.86rem;
			border-radius: 0.08rem;
			color: #333;
			margin: 0.15rem;
			font-weight: 700;
		}
		.recharge-item.active{
			color: #3cafb6;
			border-color: #3cafb6;
			
		}
	}
	.recharge-amount{
		padding: 0.3rem;
	}
} 
.tip{
	color: #999;
	padding: 0.3rem;
	font-size: 0.24rem;
}
.pay-wx{
	background: #4fb21a;
	margin-top: 0.8rem;
}
</style>
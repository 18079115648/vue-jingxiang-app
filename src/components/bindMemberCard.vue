<template>
    <div class="app" id="app" :style="{ height: wH + 'px' }">
    	<Header title="会员卡绑定"></Header>
    	<section class="content">
			<input ref="Input" type="text" placeholder="请输入会员卡卡号"  />
			<div class="tip">
				<p>※ 绑定会员卡后，可以实时查询积分</p>
	            <p>※ 线上消费积分将计入会员卡</p>
			</div>
				
            <div class="btn-default">绑定</div>
		</section>
		<section class="none-member">
			<p>※ 若无会员卡，提交相关信息线下开通，开通后线下门店可以使用</p>
			<div class="btn-default" @click="openMember">开通会员卡</div>
		</section>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
	data() {
	    return {
	    	nickName: '111',
	    	wH: 0
	    }
	},
	mounted() {	
		this.wH = $('#app').height()
	},
	methods: {
		back() {
			this.$router.go(-1)
		},
		openMember() {
			this.$router.push('/openMember')
		}
	}
}
</script>

<style lang="scss" scoped>
.app{
	background: #f5f5f9;
	position: relative;
} 
.content{
	padding-top: 0.4rem;
	.tip{
		padding: 0.35rem 0;
		padding-left: 0.3rem;
		p{
			line-height: 1.6;
			color: #999999;
			font-size: 0.24rem;
		}
	}
}
.content input{
	display: block;
	width: 6.9rem;
	margin: 0 auto;
	padding: 0.2rem;
	background: #fff;
	border-radius: 0.1rem;
}
.none-member{
	position: absolute;
	width: 100%;
	left: 0;
	bottom: 1rem;
	& > p{
		padding: 0.4rem 0.3rem;
		font-size: 0.22rem;
		color: #999;
		line-height: 1.4;
	}
}

</style>
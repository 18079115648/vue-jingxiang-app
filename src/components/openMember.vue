<template>
    <div class="app" id="app" :style="{ height: wH + 'px' }">
    	<Header title="开通会员卡"></Header>
    	<div class="user-info">
			<div class="link-item">
				<span>姓名</span>
				<input type="text" placeholder="您的真实姓名" class="input" />
			</div>
			<div class="link-item">
				<span>身份证号</span>
				<input type="tel" placeholder="您的身份证号" class="input" />
			</div>
			<div class="link-item has-right-arror">
				<span>所在地区</span>
				<input type="tel" placeholder="" class="input" />
			</div>
			<div class="link-item has-right-arror">
				<span>性别</span>
				<input type="tel" placeholder="" class="input" />
			</div>
    	</div>
    	<div class="btn-default submit">提交</div>
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
		
	}
}
</script>

<style lang="scss" scoped>
.app{
	background: #f5f5f9;
	position: relative;
} 
.user-info{
	background: #fff;
	padding-left: 0.3rem;
	margin-top: 0.3rem;
	.link-item{
		display: flex;
		height: 0.9rem;
		align-items: center;
		justify-content: space-between;
		padding-right: 0.3rem;
		border-bottom: 1px solid #f3f3f3;
		& > span{
			width: 2rem;
		}
		& > input {
			flex: 1;
			text-align: right;
		}
	}
	.link-item.has-right-arror{
		padding-right: 0.6rem;
	}
}
.submit{
	position: absolute;
	bottom: 1.5rem;
	left: 0.3rem;
}
</style>
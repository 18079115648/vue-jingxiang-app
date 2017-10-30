<template>
    <div class="app">
    	<Header title="实名认证"></Header>
    	<div class="user-info">
			<div class="link-item">
				<span>姓名</span>
				<input type="text" placeholder="您的真实姓名" />
			</div>
			<div class="link-item">
				<span>身份证号</span>
				<input type="tel" maxlength="18" placeholder="您的身份证号" />
			</div>
    	</div>
		<div class="save">保存</div>
    </div>
</template>

<script>

export default {
	data() {
	    return {

	    }
	},
	mounted() {	
		
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
	padding-top: 0.3rem;
} 
.user-info{
	background: #fff;
	padding-left: 0.3rem;
	.link-item{
		display: flex;
		height: 0.9rem;
		align-items: center;
		justify-content: space-between;
		padding-right: 0.3rem;
		border-bottom: 1px solid #f3f3f3;
		span{
			width: 2rem;
		}
		input{
			flex: 1;
			text-align: right;
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
</style>
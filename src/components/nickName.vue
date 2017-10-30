<template>
    <div class="app">
    	<Header title="修改昵称"></Header>
    	<section class="content">
			<input ref="Input" type="text" placeholder="昵称" v-model="nickName" />
		</section>
		<div class="save">保存</div>
    </div>
</template>

<script>

export default {
	data() {
	    return {
	    	nickName: '111'
	    }
	},
	mounted() {	
		this.$refs.Input.focus()
		let that = this
		if(this.$refs.Input.setSelectionRange){
			setTimeout(function() { 
				that.$refs.Input.setSelectionRange(that.nickName.length, that.nickName.length)
			}, 0); 
			
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
.content{
	padding-top: 0.4rem;
}
.content input{
	display: block;
	width: 6.9rem;
	margin: 0 auto;
	padding: 0.2rem;
	background: #fff;
	border-radius: 0.1rem;
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
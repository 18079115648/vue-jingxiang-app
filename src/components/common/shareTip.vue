<template>
    <div class="share-tip" v-show="show" @click="cancel">
    	<div class="fullEle bg"></div>
    	<!--<img src="../../../static/images/share.png" />-->
    </div>
</template>

<script>
export default {
	props: {
        show: {
            type: Boolean
        }
    },
    methods: {
    	cancel() {
    		this.$emit('shareCancel')
    	}
    }
   
}
</script>

<style scoped lang="scss">
.share-tip{
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: rgba(0,0,0,0.4);
	padding: 0 15px;
	z-index: 100;
	.bg{
		background-image: url(../../../static/images/share.png);
		background-size: 100% auto;
		background-repeat: no-repeat;
	}
	
	
}
.share-tip img{
	display: block;
	width: 100%;
}

</style>
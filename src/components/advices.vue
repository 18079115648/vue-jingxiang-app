<template>
    <section class="advices">
        <Header title="消息"></Header>

        <div class="content" v-for="(item, index) in newsList" :key="index">
            <div class="advices_time">{{item.date_time}}</div>
            <div class="advices_body" :class="'status' + item.type" @click="gopage(item)">
                <div class="left" >
                    <img src="../../static/images/succ.png" v-if="item.type == 1" />
                    <img src="../../static/images/notice.png" v-if="item.type == 3 || item.type == 4" />
                    <img src="../../static/images/fai.png" v-if="item.type == 2" />
                </div>
                <div class="right">
                    <div class="advices_title">{{item.title}}</div>
                    <div class="advices_msg">{{item.content}}</div>
                </div>
            </div>
        </div>
		<div class="none-advice" v-if="newsList.length < 1">
			暂无用户消息
		</div>
        
    </section>
</template>


<script>
import { Toast, Indicator } from 'mint-ui'
export default {
    data() {
        return {
            newsList: []
        }
    },
    created() {
        
        this.$api.newsList().then(res => { 
			this.newsList = res.data
        }, err => {
        	
        })
    },
    methods: {
         gopage(viewData) {
         	if(viewData.type == 1) {
	    		this.$router.push('/allOrders/10')
	    	}else if(viewData.type == 2) {
	    		this.$router.push('/allOrders/100')
	    	}else if(viewData.type == 3) {
	    		this.$router.push('/shopdetails/' + viewData.url)
	    	}else {
	    		this.$router.push('/selected')
	    	}
         }
    }

}
</script>

<style lang="scss" scoped>
.advices{
    width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
    position: relative;
}
.content{
    padding: .3rem;
    .advices_time{
    	width: 2.9rem;
        height: 0.44rem;
        font-size: .22rem;
        background-color: #777777;
        text-align: center;
        line-height: .44rem;
        color: #fff;
        border-radius: .22rem;
        margin: 0 auto;
    }
    .advices_body{
        width: 100%;
        height: 1.6rem;
        background-color: #fff;
        border-radius: 15px;
        margin-top: .3rem;
        display: flex;
        padding: .3rem;
        align-items: center;
        &.status1{
        	.left{
        		background: #2173d6;
        	}
        	.advices_title{
        		color: #2173d6;
        	}
        }
        &.status2{
        	.left{
        		background: #f16051;
        	}
        	.advices_title{
        		color: #f16051;
        	}
        }
        &.status3, &.status4{
        	.left{
        		background: #13ae67;
        	}
        	.advices_title{
        		color: #13ae67;
        	}
        }
    }
    .left{
        width: 1rem;
        height:1rem;
        border-radius: 10px;
        display: flex;
        img{
        	display: block;
        	height: 0.6rem;
        	margin: auto;
        }
        
    }
    .right{
        display: flex;
        flex: 1;
        overflow: hidden;
        flex-direction: column;
        justify-content: space-between;
        padding: .1rem .3rem;
        height: 100%;
        .advices_title{
            font-size: .28rem;
            color: #3474CF;
            font-weight: 300;
        }
        .advices_msg{
            font-size: .24rem;
            color: #bbb;
            font-weight: 300;
        }
    }
}
.none-advice{
	padding: 1rem 0;
	text-align: center;
	color: #999;
}
</style>
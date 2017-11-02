<template>
  <section class="app">
    <section class="product-banner">
    	<img src="../../static/images/23@3x.png" class="icon-img back" @click="back" />
    	<img src="../../static/images/22@3x.png" class="icon-img share" @click="show = true" />
		<mt-swipe :auto="0">
			<mt-swipe-item v-for="(item, index) in banner" :key="index">
				<img :src="item.file" class="fullEle" />
			</mt-swipe-item>
		</mt-swipe>
	</section>

    <div class="shopdetails_title">
      <h3>{{goodsDetail.title}}</h3>
      <div>&yen; <span>{{goodsDetail.price_shop}}</span></div>
    </div>

    <!-- 评价 -->
    <div class="evaluate">
      <div class="evaluate_title">
        <div class="evaluate_left">
          <span>评价(<span>{{goodsDetail.comment_total_count}}</span>)</span>
        </div>
        <a :href="'#/reviewList/' + goodsId" class="evaluate_right">
          <span>好评度</span><span class="money">{{goodsDetail.comment_total_score}}</span><span class="money">%</span>
          <div class="icon">
          </div>
        </a>
      </div>
      <hr>
    </div>
	<div class="review" v-if="comment.length>0">
      <div class="review_info" v-for="(item, index) in comment" :key="index">
        <div class="review_portrait">
          <img :src="item.img_head">
          <h4>{{item.uid_username}}</h4>
        </div>
        <div class="review_grade">
          <img src="../../static/images/28@3x.png" v-for="n in item.score">
          <img src="../../static/images/27@3x.png" v-for="n in 5-item.score">
        </div>
      </div>
      <div class="review_body" v-html="item.content"></div>
    </div>


    

    <!-- 详情内容 -->
    <div class="picture">
      <h4>图文介绍</h4>
      <div class="pics"  style="font-size: .28rem;" v-html="goodsDetail.content">
      </div>
    </div>
    
    <!-- 立即购买 -->
    <div class="foot_button" style="display:none;">
      <div class="desired">
        <img src="../../static/images/21@3x.png">
        <div>需求清单</div>
      </div>
      <div class="commit">提交需求</div>
    </div>


    <!-- 加入购物车 -->
    <div class="foot_button" >
      <div class="desired">
        <img src="../../static/images/20@3x.png" style="width:auto;">
        <div>购物车</div>
        <span class="count">199</span>
      </div>
      <div class="operation">
        <div class="pay" >立即购买</div>
        <div class="add">加入购物车</div>
      </div>
    </div>

    <!-- 立即购买的涂层 -->
    <div class="car_model_warp" style="display:none;">
      <div class="car_model">
          <div class="model_main">
              <div class="model_pic">

              </div>
              <div class="model_title">
                  <p>￥ 100</p>
                  <p>库存: 12</p>
              </div>
              <div class="closex" >X</div>
          </div>
          <p class="commodity_p1">
              <span class="s1">数量</span>
              <span  class="commodity_num">
                  <i >-</i>
                  <input class="em" >
                  <i >+</i>
              </span>
          </p>
          <div class="btncar" >
            确 定
          </div>
      </div>
    </div>

	<share-tip v-show="show" @shareCancel="show = false"></share-tip>
  </section>
</template>



<script>

  export default {
    data() {
		return {
			show: false,
			goodsDetail: {},
			banner: [],
			comment: [],
			
			goodsId: null
		}
	},
	created() {
		window.scrollTo(0,0)
		this.goodsId = this.$route.params.id
		this.$api.goodsDetail({
			id: this.$route.params.id
		}).then(res => {
			this.goodsDetail = res
			this.banner = res.thumb_more
			this.comment = res.comment.slice(0,1)
        }, err => {
        	
        })
	},
	mounted() {
		
	},
	methods: {
		back() {
			this.$router.go(-1)
		},
		
	}
  }

</script>

<style lang="scss" scoped>
.app{
	background: #f5f5f9;
	font-size: 0.26rem;
	padding-bottom: 1rem;
} 
.product-banner{
	height: 7.5rem;
	position: relative;
	.icon-img{
		position: absolute;
		width: 0.6rem;
		height: 0.6rem;
		top: 0.5rem;
		z-index: 10;
	}
	.icon-img.share{
		right: 0.3rem;
	}
	.icon-img.back{
		left: 0.3rem;
	}
}
.shopdetails_title{
  width: 100%;
  height: 1.8rem;
  background-color: #fff;
  padding: .3rem;
  margin-bottom: .2rem;
  h3 {
    line-height: .36rem;
    font-size: 0.28rem;
  }
  div {
    font-size: .3rem;
    color: #ff6600;
    line-height: .42rem;
    margin-top: .24rem;
    span{
      font-size: .36rem;
    }
  }
}
.evaluate{
  width: 100%;
  height: auto;
  background-color: #fff;
  padding-left: .3rem;
  hr{
    border-top: #f9f9f9;
    margin: 0 auto;
  }
  .evaluate_title{
    width: 100%;
    height: .8rem;
    line-height: .8rem;
    padding-right: .3rem;
    display: flex;
    justify-content: space-between;
    align-self: center;
    .evaluate_left{
      color: #666;
    }
    .evaluate_right{
      display: flex;
      align-items: center;
      color: #666;
      justify-content: space-between;
    }
  }
  .money{
    color: #ff6600;
  }
  .icon{
    width: .3rem;
    height: .3rem;
    margin-top: -0.04rem;
    background: url('../../static/image/arror.png') no-repeat right center;
    background-size: .16rem .24rem;
    
  }
}
.review{
  width: 100%;
  height: auto;
  background-color: #fff;
  padding: .3rem;
}
.review_info{
  display: flex;
}
.review_portrait{
  display: flex;
  align-items: center;
  img{
    width: .5rem;
    height: .5rem;
    border-radius: .25rem;
    margin-right: .15rem;
  }
}
.review_grade{
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img{
    width: .3rem;
    height: .3rem;
    margin-left: .1rem;
  }
}
.review_body{
    padding-top: .3rem;
    line-height: 1.4;
    font-size: 0.26rem;
    color: #666;
}

.picture {
    width: 100%;
    height: auto;
    background-color: #fff;
	margin-top: 0.2rem;
    padding-bottom: .3rem;
    h4 {
        height: .9rem;
        font-size: .26rem;
        color: #666;
        line-height: .9rem;
        padding: 0rem .3rem
    }
    .pics {
        width: 100%;
        height: auto;
        padding: 0rem .3rem;
        font-size: .28rem;
        line-height: 1.5;
        img {
            width: 100% !important;
            height: auto !important
        }
    }
}
.foot_button{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
  background-color: #fff;
  border-top: 1px solid #dedede;
  display: flex;
  .desired{
    width: 1.5rem;
    height: 100%;
    color: #999;
    line-height: .24rem;
    text-align: center;
    position: relative;
    img{
      width: .29rem;
      height: .36rem;
      margin-top: .18rem; 
      color: #666;
    }
    div{
      font-size: .2rem;
      line-height: .24rem;
      margin-top: .1rem;
    }
    span.count{
    	position: absolute;
    	height: 0.34rem;
    	min-width: 0.34rem;
    	text-align: center;
    	line-height: 0.36rem;
    	background: rgba(55,55,55, 0.7);
    	left: 50%;
    	top: 0.1rem;
    	color: #fff;
    	font-size: 0.2rem;
    	border-radius: 50%;
    	padding: 0 0.04rem;
    }
  }
  .commit{
    flex: 1;
    background-color: #3CAFB6;
    color: #fff;
    text-align: center;
    line-height: .98rem;
    font-size: .34rem;
  }
  .operation{
    display: flex;
    flex: 1;
    text-align: center;
    line-height: .98rem;
    color: #fff;
    font-size: 0.3rem;
    .pay{
      flex: 1;
      background-color: #F8B62D;
    }
    .add{
      flex: 1;
      background-color: #3CAFB6;
    }
  }
}


// car
.car_model_warp {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .6);
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0
}

.car_model {
    width: 100%;
    height: 4.65rem;
    background-color: #fff;
    position: fixed;
    z-index: 1000;
    bottom: 0px;
}

.model_main {
    width: 100%;
    height: 1.45rem;
    padding: 0rem .3rem;
    display: flex;
    align-content: center;
    align-items: center;
    align-self: center;
    justify-content: space-between;
    position: relative
}

.model_pic {
    height: 1.8rem;
    width: 1.8rem;
    position: absolute;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    bottom: 0;
    background-color: #fff
}

.model_title {
    height: 100%;
    margin-left: 2.2rem;
    display: flex;
    align-content: center;
    align-items: center;
    align-self: center;
    justify-content: space-between;
    flex-direction: column;
    p {
        margin-top: .2rem;
        font-size: .34rem;
        color: #ff6600;
        line-height: .48rem
    }
    p:last-child {
        font-size: .26rem;
        line-height: .48rem;
        color: #222
    }
}

.closex {
    font-size: .42rem;
}

.commodity_p1 {
    display: flex;
    align-content: center;
    align-items: center;
    align-self: center;
    justify-content: space-between;
    margin: .60rem 0px .5rem;
    padding: 0rem .3rem;
    font-size: .3rem;
    color: #222
}

.btncar {
    width: 100%;
    height: .98rem;
    text-align: center;
    line-height: .98rem;
    color: #fff;
    background-color: #3CAFB6;
    position: absolute;
    bottom: 0px;
    left: 0px;
    font-size: .34rem;
    font-weight: 100;
    
}

.commodity_num {
    width: 2rem;
    display: flex;
    align-content: center;
    align-items: center;
    align-self: center;
    justify-content: space-between;
    i,
    em,
    .em {
        font-style: normal;
        width: .6rem;
        height: .6rem;
        background-color: #EFEFEF;
        color: #666666;
        text-align: center;
        line-height: .6rem;
        font-size: .3rem;
        color: #222
    }
    i {
        color: #ccc
    }
    em,
    .em {
        width: .72rem;
        font-size: .36rem
    }
}
</style>
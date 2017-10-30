<template>
  <section class="shopdetails">
    <Header title="详情"></Header>

    <div class="shopdetails_title">
      <h3>超级无敌神奇的大补丸可活络筋骨、延年益寿、滋阴壮阳、上天入地就此一家</h3>
      <div>¥ <span>999.00</span></div>
    </div>

    <!-- 评价 -->
    <div class="evaluate">
      <div class="evaluate_title">
        <div class="evaluate_left">
          <span>评价(<span>666</span>)</span>
        </div>
        <div class="evaluate_right">
          <span>好评度</span><span class="money">90</span><span class="money">%</span>
          <div class="icon">
          </div>
        </div>
      </div>
      <hr>
    </div>

    <div class="review">
      <div class="review_info">
        <div class="review_portrait">
          <img src="../../static/images/图/1-13.png">
          <h4>萨达萨达</h4>
        </div>


        <div class="review_grade">
          <img src="../../static/images/28@3x.png">
          <img src="../../static/images/28@3x.png">
          <img src="../../static/images/28@3x.png">
          <img src="../../static/images/27@3x.png">
          <img src="../../static/images/27@3x.png">
        </div>
      </div>

      <div class="review_body">
        萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达
      </div>
    </div>


    

    <!-- 详情内容 -->
    <div class="picture">
      <h4>图文介绍</h4>
      <div class="pics"  style="font-size: .28rem;">
        <img src="../../static/images/图/1-13.png">
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


  </section>
</template>



<script>

  export default {
    data (){
      return{
      }
    },







  }

</script>

<style lang="scss" scoped>
.shopdetails{
  width: 100%;
  height: 100vh;
  background-color: #f5f5f9;
  color: #444;
}
.shopdetails_title{
  width: 100%;
  height: 1.8rem;
  background-color: #fff;
  padding: .24rem .24rem;
  margin-bottom: .2rem;
  h3 {
    font-size: .30rem;
    color: #444;
    line-height: .36rem;
  }
  div {
    font-size: .28rem;
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
  padding-left: .24rem;
  hr{
    border-top: #ccc;
    margin: 0 auto;
  }
  .evaluate_title{
    width: 100%;
    height: .8rem;
    line-height: .8rem;
    padding-right: .24rem;
    display: flex;
    justify-content: space-between;
    align-self: center;
    .evaluate_left{
      color: #999;
    }
    .evaluate_right{
      display: flex;
      align-items: center;
      color: #999;
      justify-content: space-between;
    }
  }
  .money{
    color: #ff6600;
  }
  .icon{
    width: .4rem;
    height: .3rem;
    background: url('../../static/image/arror.png') no-repeat;
    background-size: .2rem .3rem;
    background-position-x: .2rem;
    
  }
}
.review{
  width: 100%;
  height: auto;
  background-color: #fff;
  padding: .24rem;
  margin-bottom: .2rem;
}
.review_info{
  display: flex;
}
.review_portrait{
  display: flex;
  img{
    width: .8rem;
    height: .8rem;
    border-radius: .4rem;
    margin-right: .24rem;
  }
  h4{
    display: flex;
    line-height: .8rem;
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
}

.picture {
    width: 100%;
    height: auto;
    background-color: #fff;

    padding-bottom: .3rem;
    h4 {
        height: .8rem;
        font-size: .26rem;
        color: #999;
        line-height: .8rem;
        padding: 0rem .34rem
    }
    .pics {
        width: 100%;
        height: auto;
        min-height: 3.6rem;
        padding: 0rem .14rem;
        p,
        i,
        em,
        li,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        strong {
            font-size: .28rem !important;
            line-height: .32rem !important
        }
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
  height: .98rem;
  background-color: #fff;
  display: flex;
  .desired{
    width: 1.5rem;
    height: 100%;
    color: #999;
    line-height: .24rem;
    text-align: center;
    img{
      width: .29rem;
      height: .36rem;
      margin-top: .15rem; 
      color: #666;
    }
    div{
      font-size: .2rem;
      line-height: .24rem;
      margin-top: .14rem;
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
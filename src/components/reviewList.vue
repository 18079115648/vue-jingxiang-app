<template>
  <section class="reviewList">

    <Header title="评论列表"></Header>

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

        <div class="review_data">
            2017-10-10
        </div>
        <div class="review_body">
            萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达
        </div>
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

        <div class="review_data">
            2017-10-10
        </div>
        <div class="review_body">
            萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达
        </div>
    </div>

    
  

   

  </section>
</template>

<script>

export default {
  data() {
    return {

    }
  }

}
</script>

<style lang="scss" scoped>
.reviewList{
    width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
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
    padding: .24rem;
    background-color: #fff;
    margin-bottom: .24rem;
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
.review_data{
    padding-top: .24rem;
    font-size: .28rem;
    color: #999;
    
}
.review_body{
    padding-top: .24rem;
    line-height: .34rem;
}

</style>
<template>
    <section class="article">
        <Header title="资讯"></Header>
        <!-- 文章内容 -->
        <article >
            <h1>{{title}}</h1>
            <h5>{{time}}</h5>
            <div class="zhuanyi" v-html="content"></div>
        </article>

        <!-- 文章商品标题 -->
        <div class="warp">
            <h2>
                <hr>
                <span>文章商品</span>
                <hr>
            </h2>
        </div>

        <!-- 文章商品列表 -->
        <div class="list" v-for="item in goodList">
            <div class="list_main">
                <div class="imgs">
                    <img :src="item.thumb">
                </div>
                <div class="info">
                    <h3>{{item.title}}</h3>
                    <p>
                        <span class="price">￥{{item.price_shop}}</span>
                        <span class="button" @click="goto()">去购买</span>
                    </p>
                </div>
            </div>
        </div>
        
    </section>
</template>

<script>

export default {
    data() {
        return {
            title: '', // 商品名字
            time: '', // 发布时间
            content: '', // 文章富文本
            items: '',
            imgs: '', // imgs列表
            shares: false, //
            url: '',
            goodList:[
                {title:"大力丸",price_shop:'1100'}
            ],
        
        }
    },
    created() {
        const self = this
        this.$api.indexInformationContent(
            {
                params: {
                    id: self.$route.query.newsId
                }
            }
        ).then(res => {
            this.title = res.title
            this.content = res.content
            this.time = res.time_add
            // this.goodList = res.goods
        }, err => {
            
        })
    },
    methods: {
        goto(){
            this.$router.push({path: '/shopdetails'})
        }
    }
   

}
</script>

<style lang="scss" scoped>
.article {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #F5F5F9;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    position: relative
}



.shopdetails_main {
    width: 100%;
    height: auto
}

.shopdetails_scroll {
    width: 100%;
    height: auto;
    position: relative
}

.swiper_main {
    height: 4.56rem;
    background-color: #fff;
    img {
        height: 100%;
        width: auto
    }
}

article {
    width: 100%;
    height: auto;
    padding: .5rem .2rem;
    background-color: #fff;
    h1 {
        font-size: .36rem;
        color: #222;
        margin: 0;
        line-height: .42rem
    }
    h5 {
        font-size: .24rem;
        line-height: .24rem;
        color: #999;
        margin: .5rem 0;
    }
    p {
        font-size: .3rem;
        line-height: .42rem
    }
    img {
        width: 100%;
        height: auto;
        margin: .5rem 0
    }
}


.list {
    width: 100%;
    height: 1.8rem;
    padding: .2rem .2rem .2rem .2rem;
    background-color: #fff;
    margin-bottom: .2rem
}

.list_main {
    display: flex;
    align-items: center;
    align-content: center;
    align-self: center;
    justify-content: space-between
}

.imgs {
    width: 1.4rem;
    height: 1.4rem;
    margin-right: .2rem;
    img {
        width: 100%;
        height: 100%
    }
}

.info {
    width: 5.3rem;
    height: 1.4rem;
    flex: auto;
    h3 {
        color: #222;
        font-size: .3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        // display: -webkit-box;
        // -webkit-line-clamp: 2;
        // -webkit-box-orient: vertical;
        height: .88rem;
        line-height: .34rem;
    }
    p {
        color: #999;
        font-size: .22rem;
        line-height: .3rem;
        display: flex;
        align-items: flex-end;
        align-content: center;
        align-self: center;
        justify-content: space-between;
        .price {
            color: #ff6600;
            font-size: .34rem;
        }
        .button {
            width: 1.5rem;
            height: .53rem;
            line-height: .53rem;
            color: #fff;
            font-size: .3rem;
            background-color: #3cafb6;
            text-align: center;
            border-radius: 60px
        }
    }
}



    h2 {
        height: 1rem;
        line-height: 1rem;
        display: flex;
        align-items: center;
        align-content: center;
        align-self: center;
        justify-content: center;
        color: #ffad06;
        hr {
            width: .56rem;
            height: 2px;
            background-color: #ffad06;
            margin: 0 .26rem;
            border-top: #ffad06;
        }
        span{
            font-size: .28rem;
        }
    }


.maps {
    width: 100%;
    height: 4.56rem;
    img {
        width: 100%;
        height: 100%;
    }
}

.zhuanyi {
    width: 100%;
    font-size: .28rem;
    line-height: .3rem;
    text-indent: .56rem;
}
.zhuanyi>img{
    width: 100%;
}

</style>
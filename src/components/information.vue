<template>
  <section class="information">

    <Header title="资讯"></Header>

    <!-- 资讯列表 -->
    <div class="msg_title"  v-for="item in banner" @touchend="goto(item.news_id)">
      <!-- 列表图标 -->
      <div class="img_left">
        <img :src="item.thumb" >
      </div>
      <!-- 列表文字 -->
      <div class="msg_text">
        <div>{{item.title}}</div>
        <div class="teat_info">{{item.time_add}}</div>
      </div>
    </div>


    <Menu actived="third"></Menu>

  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      loading: false,
      scroller: null,
      per_page: 20, // 每页条数
      page: 1, // 当前页
      last_page: 1, // 总页数
      ismove: true, // 判断滑动和点击
      imgs: '', // imgs
      items: '', // 内容
      banner: [] // banner
    }
  },
  created() {
    const self = this
    this.$api.indexInformation().then(res => {
        this.banner = res.data
      
    }, err => {
        
    })
  },
  methods: {
    goto(val){
      this.$router.push({path: '/article', query: {newsId: val}})
    }
  }

}
</script>

<style lang="scss" scoped>
* {
    line-height: .28rem
  }

.information {
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f9
}

.msg_title{
  width: 100%;
  height: 1.8rem;
  background-color: #fff;
  padding: .2rem .2rem .2rem .2rem;
  position: relative;
  border-bottom: solid 1px #f5f5f5;
  display: flex;
  
}
.img_left{
  width: 1.4rem;
  height: 1.4rem;
  
  img{
    width: 100%;
    height: 100%;
  }
}
.msg_text{
  width: 100%;
  height: 1.4rem;
  font-size: .27rem;
  flex: 1;
  flex-wrap: wrap;
  padding-left: .2rem;
  div{
    line-height: .34rem;
    font-weight: 400;
  }
}
.teat_info{
  width: auto;
  height: .24rem;
  font-size: .9em;
  position: absolute;
  bottom: .2rem;
  color: #ccc;
}
</style>
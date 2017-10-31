<template>
  <section class="healthRecords">
    <Header title="健康档案"></Header>
    
    <div class="recordsList">
        <div class="records">
            <span class="records_label">朋友</span>
            <span class="records_name">刘德华</span>
            <span class="records_years">
                <span>55</span><span>岁</span>
            </span>
        </div>
        <div class="condition">
            <div>健康</div>
            <div>心脏病</div>
            <div>哮喘</div>
        </div>
    </div>

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
    
  },
  methods: {
    
  }

}
</script>

<style lang="scss" scoped>
.healthRecords{
    background-color: #f5f5f6;
    height: 100vh;
    width: 100vw;
}
.recordsList{
    width: 100%;
    height: 2rem;
    background-color: #fff;
    margin-top: .2rem;
    padding: .3rem;
    .records{
        display: flex;
        width: 100%;
        .records_label{
            display: block;
            width: .6rem;
            height: .3rem;
            background-color: #ff6600;
            color: #fff;
            text-align: center;
            line-height: .3rem;
            font-size: .08rem;
            margin-right: .3rem;
            font-weight: 100;
            
        }
        .records_name{
            font-weight: 400;
            font-size: .28rem;
            padding-right: .15rem;
        }
    }
}
</style>
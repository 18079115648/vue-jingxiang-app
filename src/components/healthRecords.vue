<template>
  <section class="healthRecords">
    <Header title="健康档案"></Header>
    
    <div class="recordsList" v-for="(item, index) in items">
        <div class="records">
            <span class="records_label">{{item.relationship_id_name}}</span>
            <span class="records_name">{{item.true_name}}</span>
            <span class="records_years">
                <span>{{item.age}}</span><span>岁</span>
            </span>
        </div>
        <div class="condition">
            <div v-for="(list, index) in item.data">{{list.name}}</div>
        </div>
        <div class="arror_img">
            <img src="../../static/images/arror.png" >
        </div>
    </div>

    <div class="add_disease" @click="add_disease">
        <span>添加亲属健康状况</span>
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
      items: [
          {relationship_id_name: '爸爸',true_name: '刘德华',age: '50',data:[
              {name:'健康'}
          ]}
      ], // 内容
      banner: [] // banner
    }
  },
  created() {
    const self = this
    this.$api.indexHealthRecords(
            {
                p: this.page
            }
        ).then(res => {
            
        }, err => {
            console.log(err)
        })
    },
    methods: {
        add_disease() {
            this.$router.push({path: '/health'})
        }
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
    background-color: #fff;
    margin-top: .2rem;
    padding: .3rem;
    position: relative;
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
.condition{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    div{
        width: 1.8rem;
        border: solid 1px #3cafb6;
        color: #3cafb6;
        text-align: center;
        line-height: .58rem;
        border-radius: 5px;
        margin-top: .2rem;
        margin-right: .2rem;
    }
}
.arror_img{
    position: absolute;
    width: .15rem;
    height: .25rem;
    top: 50%;
    margin-top: -.125rem;
    right: .2rem;
    img{
        width: 100%;
        height: 100%;
    }
}
.add_disease{
    width: 100%;
    height: .78rem;
    padding: 0 .3rem;
    margin-top: 1.5rem;
    span{
        width: 100%;
        height: 100%;
        background-color: #3cafb6;
        display: block;
        text-align: center;
        line-height: .78rem;
        font-size: .34rem;
        border-radius: .05rem;
        color:#fff;
        font-weight: 100;
        
    }
}
</style>
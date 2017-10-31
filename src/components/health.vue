<template>
  <section class="health">

    <Header title="我的健康"></Header>

    <div class="datum">
        <span>基本资料</span>
    </div>
    
    <div class="field">
        <label for="name">姓名</label>
        <input type="text" name="name" placeholder="请输入姓名" id="input-test">
    </div>
   
    <div class="field">
        <span>性别</span>
        <div>请选择</div>
        <img src="../../static/images/arror.png" >
    </div>

    <div class="field">
        <span>关系</span>
        <div>请选择</div>
        <img src="../../static/images/arror.png" >
    </div>    

    <div class="field">
        <span>生日</span>
        <div>选择生日</div>
        <img src="../../static/images/arror.png" >
    </div>

    <div class="field">
        <label for="name">身高</label>
        <input type="text" name="name" placeholder="请输入身高" id="input-test">
    </div>

    <div class="field" style="border:none;">
        <label for="name">体重</label>
        <input type="text" name="name" placeholder="请输入体重" id="input-test">
    </div>

    <div class="datum">
        <span>健康状况</span>
    </div>

    <div class="condition">
        <div class="illness">健康</div>
        <div class="illness">心脏病</div>
        <div class="illness">哮喘</div>
        <div class="add_illness">+添加</div>
        <div class="kong"></div>
        <div class="kong"></div>
    </div>

    <div class="delete_record">
        <span>删除此亲属记录</span>
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
.health{
    width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
}
.datum{
    width: 100%;
    height: .88rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 .34rem;
    font-weight: 100;
    color: #999;
    display: none;
}
.field{
    width: 100%;
    height: .88rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .34rem;
    font-weight: 100;
    background-color: #fff;
    position: relative;
    border-bottom: solid 1px #f5f5f9;
    input{
        height: 100%;
        flex: 1;
        text-align: right;
        font-size: .28rem;
    }
    hr{
        position: absolute;
        border-top: solid .01rem #eee;
        width: 100%;
        bottom: 0;
        margin: 0 auto;
    }
    div{
        text-align: right;
        flex: 1;
        padding-right: .24rem;
        color: #ddd;
        font-size: .28rem;
        font-weight: 100;
    }
    img{
        width: .15rem;
        height: .25rem;
    }
}
#input-test::-webkit-input-placeholder{
        color: #ddd;
        font-size: .28rem;
        font-weight: 100;
}
.condition{
    background-color: #fff;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.illness{
    width: 1.8rem;
    border: solid 1px #3cafb6;
    color: #3cafb6;
    text-align: center;
    line-height: .58rem;
    border-radius: 5px;
    margin:.2rem .3rem;
}
.add_illness{
    width: 1.8rem;
    height: .58rem;
    border: dashed 1px #ddd;
    border-radius: 5px;
    margin: .15rem;
    text-align: center;
    line-height: .58rem;
    color: #ddd; 
}
.delete_record{
    width: 100%;
    height: .88rem;
    background-color: #fff;
    color: #3cafb6;
    text-align: center;
    line-height: .88rem;
    position: absolute;
    bottom: .34rem;
}
.kong{
    width: 1.8rem;
    height: .58rem;
    margin: .15rem;
}
</style>
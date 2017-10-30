<template>
  <section class="classification">
    <main>
      <div class="left_nav" ref="navtabs">
        <ul >
          <li v-for="nav in navtab" :class="{iscur: iscurnum === nav.cat_id}" @touchstart="active(nav, nav.cat_id, nav.name)">{{nav.name}}</li>
        </ul>
      </div>
      <div class="right_main_warp">
        <div class="right_main">
          <div class="two" v-for="lists in navlist">
            <div class="nav_main">
            	<h3>{{lists.name}}</h3>
	            <div class="nav_main_list" v-for="list in lists.data" @click="goto(list.cat_id, list.name)">
	              <img :src="list.thumb">
	              <p>{{list.name}}</p>
	            </div>
          	</div>
          </div>
        </div>
      </div>
    </main>


  </section>
</template>

<script>
export default {
  data (){
    return {
      iscurnum: 0, // 选中的nav
      title: '', // nav标题
      ismove: true, // 判断滑动和点击
      navtab: [
        {name: "小小小"},
        {name: "小小小"},
        {name: "小小小"},
        {name: "小小小"},
        {name: "小小小"},
        {name: "小小小"},
        {name: "小小小"},
        {name: "小小小"},
        {name: "小小小"},
        {name: "小小小"},
        {name: "小小小"},
      ], // nav 分类
      navlist: [ ],
      searchContent: '' // 搜索内容
    }
  },
  

  
    
  

}
</script>

<style lang="scss" scoped>
.classification {
  height: 100vh
}

header {
  width: 100%;
  background-color: #3CAFB6;
  padding: .16rem .34rem;
  overflow: hidden
}

main {
  width: 100%;
  overflow: hidden;
  background-color: #F5F5F9;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center
}

.left_nav {
  width: 1.88rem;
  height: 100%; // overflow-y:scroll
  overflow-y: auto;
}

ul {
  width: 100%; // height: 100%;
  height: auto;
  font-size: .24rem;
  color: #222;
  background-color: #fff; // overflow-y:scroll;
  // -webkit-overflow-scrolling: touch
}

li {
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  border-bottom: 2px solid #F5F5F9
}

.iscur {
  background-color: #F5F5F9;
  color: #3CAFB6
}

.right_main_warp {
  flex: 1;
  height: 100%;
  padding: 0rem .36rem 0rem .34rem
}

h3 {
  width: 100%;
  height: .9rem;
  line-height: .9rem;
  font-size: .24rem;
  color: #222;
  text-align: center;
}

.right_main {
  width: 100%;
  height: 100%;
  background-color: #fff;
  overflow-y: auto;
  // padding-bottom: .36rem
}
.two h3{
	background: #F5F5F9;
	text-align: left;
}
.two h4 {
  font-size: .3rem;
  text-align: center
}

.nav_main {
  display: flex;
  align-items: center;
/*  justify-content: center;*/
  align-self: center;
  flex-wrap: wrap;
  font-size: .24rem;
  color: #666
}

.nav_main_list {
  width: 33%;
  height: 1.84rem;
  text-align: center;
  img {
    width: .9rem;
    height: .9rem;
    margin-top: .3rem
  }
  p {
    line-height: .36rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
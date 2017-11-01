<template>
    <div class="app">
    	<Header :title="title"></Header>
    	<Pagination :render="render" :param="pagination" :autoload="false" ref="pagination" uri="/activity/goods">
			<div class="pop-product-list">
				<router-link :to="'/shopdetails/' + item.goods_id + '/' + item.type_id" class="pop-product-item" v-for="(item, index) in pagination.content" :key="index">
					<div class="fullEle">
						<div class="pop-product-img">
							<img class="fullEle" :src="item.thumb" />
						</div>
						<div class="pop-product-desc">
							<p class="pop-product-name">{{item.title}}</p>
							<p class="pop-product-price price-color">&yen; {{item.price_shop}}</p>
						</div>
					</div>
					
				</router-link>
				
			</div>
		</Pagination>
	    	
    </div>
</template>

<script>

export default {
	data() {
		return {
			title: '',
			pagination: {
                content: [],
                loadEnd: false,
                data: {
                	params: {
						p: 1,
						id: null
					}
                }
            },
		}
	},
	created() {
		
	},
	mounted() {
		this.pagination = {
            content: [],
            loadEnd: false,
            data: {
            	params: {
					p: 1,
					id: this.$route.params.id
				}
            }
        }
		this.$refs.pagination.refresh()
	},
	methods: {
		render(res) {
			if(res.data.length>0) {
				this.title = res.data[0].name
			}else {
				this.title = '分类商品'
			}
            res.data.forEach((item) => {
            	this.pagination.content.push(item)
            })
        }
	}
}
</script>

<style lang="scss" scoped>
.app{
	background: #f5f5f9;
} 
.search-content{
	display: flex;
	background: #fff;
	height: 0.96;
	line-height: 0.6rem;
	padding: 0.18rem 0.3rem;
	border-bottom: 1px solid #F5F5F9;
	& > span{
		width: 0.9rem;
		color: #3cafb6;
	}
	.search-input{
		flex: 1;
		background: #F5F5F9;
		padding: 0 0.15rem;
		border-radius: 0.08rem;
	}
}
.pop-product-list{
	display: flex;
	flex-wrap: wrap;
	padding: 0.2rem 0.04rem;
}
.pop-product-item{
	width: 50%;
	height: 4.9rem;
	padding: 0 0.08rem;
	margin-bottom: 0.2rem;
}
.pop-product-item>div{
	background: #fff;
	padding: 0.16rem;
}
.pop-product-img{
	width: 3.23rem;
	height: 3.23rem;
}
.pop-product-desc{
	padding-top: 0.3rem;
}
.pop-product-name{
	line-height: 1.2;
	height: 0.64rem;
	overflow: hidden;
}
.pop-product-price{
	padding-top: 0.16rem;
	font-size: 0.3rem;
}
</style>
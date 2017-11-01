<template>
    <div class="app">
    	<Header title="收货地址"></Header>
    	<!--<div class="none-data" v-show="pagination.content.length<1 && pagination.loadEnd">
    		<img class="none-img" src="../../static/images/19@3x.png"  />
    		<p class="none-tip">暂无收货地址</p>
    	</div>-->
    	<Pagination :render="render" :param="pagination" ref="pagination" uri="/address/index">
			<div class="address-list" v-show="pagination.content.length>0">
	    		<div class="address-item" v-for="(item, index) in pagination.content" :key="index">
	    			<div>
	    				<div class="addr-contact">
		    				<span>{{item.contact}}</span>
		    				<span>{{item.mobile}}</span>
		    			</div>
		    			<div class="addr-detail">
		    				{{item.province_name}}{{item.city_name}}{{item.district_name}}{{item.address}}
		    			</div>
	    			</div>
		    			
	    			<div class="addr-operate">
	    				<div class="addr-default" @click="setDefault(item)">
	    					<img v-show="!item.is_default" src="../../static/images/44@3x.png" class="default-icon" />
	    					<img v-show="item.is_default" src="../../static/images/43@3x.png" class="default-icon" />
	    					<span v-show="!item.is_default">设为默认</span>
	    					<span v-show="item.is_default">默认地址</span>
	    				</div>
	    				<div class="addr-op">
	    					<span @click="editAddr(item.address_id)">编辑</span>
	    					<span>删除</span>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
		</Pagination>
    	<div class="btn-default add-addr">新增收货地址</div>
    </div>
</template>

<script>
import qs from 'qs'
import { Toast } from 'mint-ui'
export default {
	data() {
		return {
			pagination: {
                content: [],
                loadEnd: false,
                data: {
                	params: {
						p: 1
					}
                }
            },
		}
	},
	created() {

	},
	methods: {
		render(res) {
			res.data.forEach((item) => {
            	this.pagination.content.push(item)
            })
		},
		setDefault(item){
			if(item.is_default) {
				return
			}
			this.$api.updataAddr(qs.stringify({
				id:  item.address_id,
			    contact: item.contact,
			    mobile: item.mobile, 
			    id_card: item.id_card,
			    province: item.province,
			    city: item.city,  
			    district: item.district,
			    address:  item.address,
			    is_default: 1
			})).then(res => {
				if(res.ret !== 1) {
					Toast({
					  message: res.msg,
					  position: 'bottom',
					  duration: 1000
					});
					return
				}
				this.pagination.content.forEach((obj) => {
					obj.is_default = (item.address_id == obj.address_id)
				})
				
	        }, err => {
	        	
	        })
		},
		editAddr(id){
			this.$router.push('/addressDetail/' + id)
		}
	}
}
</script>

<style lang="scss" scoped>
.app{
	background: #f5f5f9;
	font-size: 0.26rem;
	position: relative;
	padding-top: 0.3rem;
	padding-bottom: 1.6rem;
} 
.address-item{
	background: #fff;
	margin-bottom: 0.3rem;
	padding-top: 0.15rem;
	& > *{
		display: block;
		padding-left: 0.3rem !important;
		padding-right: 0.3rem !important;
	}
	.addr-contact{
		display: flex;
		justify-content: space-between;
		padding: 0.15rem 0;
	}
	.addr-detail{
		padding: 0.15rem 0;
		padding-bottom: 0.35rem;
		border-bottom: 1px solid #f6f6f6;
	}
	.addr-operate{
		height: 0.8rem;
		display: flex;
		justify-content: space-between;
		line-height: 0.8rem;
		.addr-default{
			display: flex;
			align-items: center;
			.default-icon{
				width: 0.4rem;
				margin-right: 0.2rem;
			}
		}
		.addr-op{
			display: flex;
			position: relative;
			right: -0.3rem;
			span{
				padding: 0 0.3rem;
			}
		}
			
	}
}
.add-addr{
	position: absolute;
	left: 0.3rem;
	bottom: 0.5rem;
}
</style>
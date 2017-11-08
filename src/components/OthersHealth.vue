<template>
  <section class="health">

    <Header title="健康档案"></Header>
    <div class="save" @click="save">保存</div>

    <div class="datum">
        <span>基本资料</span>
    </div>
    
    <div class="field">
        <label for="name">姓名</label>
        <input type="text" name="name" placeholder="请输入姓名" id="input-test" v-model="name">
    </div>
   
    <div class="field">
        <span>性别</span>
        <div v-if="sex_name">请选择</div>
        <select @change="change" v-model="sex" dir="rtl">
            <option value="0">保密</option>
            <option value="1">男</option>
            <option value="2">女</option>
        </select>
        <img src="../../static/images/arror.png" >
    </div>

    <div class="field" >
        <span>关系</span>
        <div  v-if="relationship_name" :class="{'relation': isA,}">请选择</div>
        <select @click="guanxi" v-model="relationship_id" dir="rtl" >
            <option>关系</option>
            <option v-for="list in relationship" :value="list.value">{{list.text}}</option>
        </select>
        <img src="../../static/images/arror.png" >
    </div>

    <div class="field" >
        <span>生日</span>
        <div v-if="birth_time" @click="openPicker">请选择</div>
        <div class="birth" @click="openPicker">{{birth}}</div>
        <mt-datetime-picker
            ref="picker"
            v-model="birthday"
            type="date"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
            :startDate="startDate"
            :endDate="endDate"
            @confirm="handleConfirm">
        </mt-datetime-picker>
        <img src="../../static/images/arror.png"  @click="openPicker">
    </div>

    <div class="field">
        <label for="name">身高</label>
        <input type="text" name="name" placeholder="请输入身高" id="input-test" v-model="height">
    </div>

    <div class="field" style="border:none;">
        <label for="name">体重</label>
        <input type="text" name="name" placeholder="请输入体重" id="input-test" v-model="weight">
    </div>

    <div class="datum">
        <span>健康状况</span>
    </div>

    <div class="condition">
        <div class="illness" :class="{'active': item.active}"  v-for="(item,index) in HealthTag"  @click="selectComTag(item)">{{item.value}}</div>

        <div class="illness active" v-for="(item, index) in aloneHealth" @click="deleteTag_show(item)">
            {{item.name}}
            <div class="deleteTag" v-show="item.deleteIcon" @click="deleteTag(item.health_tag_id, index)"></div>
        </div>
        <div class="add_illness" @click="add_label">+添加</div>
    </div>

    <div class="delete_record" @click="deleteHealth" v-if=" id != '' " >
        <span>删除此亲属记录</span>
    </div>
    



  </section>
</template>

<script>
import $ from 'jquery';
import { DatetimePicker } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import { Toast } from 'mint-ui'
export default {
    data() {
        return {
            name: '',
            weight: '',
            height: '',
            sex: '',
            birthday: '',
            HealthTag:[],      //常用健康标签
            aloneHealth:[], //新增疾病标签
            relationship: [], // 关系
            relationship_id: '', // 选中的关系id
            relationship_id_name:'请选择',
            sex_name: true,
            relationship_name: true,
            birth_time: true,
            birth: '',
            id :'',
            startDate: new Date('1917-1-1'),
            endDate: new Date(),
            tag: '', // 常用健康标签
            is_my:'',
            deleteIcon:false,
            isA:false,
        }
    },
    created() {
        const self = this
        //健康档案
        this.id = self.$route.params.id
        this.is_my = self.$route.params.is_my
        console.log(this.id)
        if(this.id != 'undefined') {
            this.$api.indexDetail(
                {
                    id: this.id,
                    is_my: this.is_my,
                }
            ).then(res => {
                
                this.sex = res.sex
                this.weight = res.weight
                this.height = res.height
                this.id = res.health_id
                this.name = res.true_name
                this.birth = res.birthday
                this.lists = res.data
                res.data.forEach((item) => {
                    item.deleteIcon = false
                    this.aloneHealth.push(item)
                })
                // this.relationship_id_name = res.relationship_id_name
                this.relationship_id = res.relationship_id
                var option = $(res.form_relationship).children('option')
                // console.log(option)
                option.each(function () {
                    self.relationship.push({ value: $(this).val(), text: $(this).text() })
                // console.log(self.relationship)
                })
                if(res.sex){
                    this.sex_name = false
                }
                if(res.relationship_id_name){
                    // this.isA = true
                    this.relationship_name = false
                }
                if(res.birthday){
                    this.birth_time = false
                }
                
            }, err => {
                
            })
        }
        

        //获取标签接口
        this.$api.indexHealthTag().then(res => {
        	res.data.forEach((value) => {
        		 let obj = {
        		 	value: value,
        		 	active: false
        		 }
        		 this.HealthTag.push(obj)
        	})
        }, err => {
            
        })

        //获取关系列表
        this.$api.indexGetRelation().then(res => {
             self.relationship_id = res.relationship_id
            var option = $(res.form_relationship).children('option')

            // console.log(option)
            option.each(function () {
                self.relationship.push({ value: $(this).val(), text: $(this).text() })
            // console.log(self.relationship)
            })
            
        }, err => {
            
        })

        
    },
    methods: {

        //保存健康档案
        save(){ 
            if(!this.name || this.name == '自己') {
        		Toast({
                message: '请输入姓名',
                position: 'bottom',
                duration: 1000
            })
        		return
            }
            if(!this.height) {
        		Toast({
                message: '请输入身高',
                position: 'bottom',
                duration: 1000
            })
        		return
        	}
        	if(!this.weight) {
        		Toast({
                message: '请输入体重',
                position: 'bottom',
                duration: 1000
            })
        		return
        	}
            const self = this
            if(this.id && this.id != 'undefined') {
                this.$api.indexHealthChange(
                    {
                        id: self.id,
                        sex: self.sex,
                        height: self.height,
                        weight: self.weight,
                        birthday:self.birth,
                        true_name: self.name,
                        relationship_id: self.relationship_id,
                        data:"感冒"
                    }
                ).then(res => {
                    if(res.ret == 1) {
                        Toast({
                            message: '更新成功',
                            position: 'bottom',
                            duration: 1000
                        })
                        setTimeout(() => {
                            this.$router.go(-1)
                        },800)
                    }else {
                       
                    }
                    
                }, err => {
                    
                })
            }else {
                this.$api.indexHealthCreate(
                    {
                        sex: self.sex,
                        height: self.height,
                        weight: self.weight,
                        birthday:self.birth,
                        true_name: self.name,
                        relationship_id: self.relationship_id,
                        data:"感冒"
                        
                    }
                ).then(res => {
                    if(res.ret == 1) {
                        Toast({
                            message: '保存成功',
                            position: 'bottom',
                            duration: 1000
                        })
                        setTimeout(() => {
                            this.$router.go(-1)
                        },800)
                    }else {
                        Toast({
                            message: res.msg,
                            position: 'bottom',
                            duration: 1000
                        })
                    }
                    
                }, err => {
                    
                })
            }
            
        },
        change() {
            this.sex_name = false
            
        },
        bian() {
                
        },
        
        guanxi() {
            var self = this
            // this.relationship_name = false
            // self.changeceshi = $(ele.target).find('option:selected').text()
            // self.relationship_id = $(ele.target).find('option:selected').val()
            
        },
        //打开时间选择器
        openPicker() {
            this.$refs.picker.open();
        },
       //点击生日选择器上的确定
        handleConfirm(value) {
            this.birth_time = false
            this.birth  = value.getFullYear() + '-' + this.toTwo(value.getMonth() + 1) + '-' + this.toTwo(value.getDate())
            

        },
        toTwo(n) {
        	return n <10 ? '0' + n : n
        },
        //切换标签
        selectComTag(item){
        	item.active = !item.active
        },
        //删除标签
        deleteTag_show(item) {
            item.deleteIcon = !item.deleteIcon
        },
        deleteTag(id, index) {
            const self = this
            this.$api.indexDeleteHealthTag(
                {
                    health_tag_id: id,
                    health_id: this.id
                }
            ).then(res => {
                if(res.ret == 1) {
                	this.aloneHealth.splice(index, 1)
                    Toast({
                        message: '删除成功',
                        position: 'bottom',
                        duration: 1000
                    })
                }
            }, err => {
                
            })
        },
        //添加疾病标签
        add_label() {
            const self = this
            
            MessageBox.prompt('请输入慢性病').then(({ value, action }) => {
                this.$api.indexAddHealthTag(
                    {
                        health_id: this.id,
                        name: value
                    }
                ).then(res => {
                    if(res.ret == 1) {
                        Toast({
                            message: '添加成功',
                            position: 'bottom',
                            duration: 1000
                        })
                        this.initData().then(res => {
                        		this.aloneHealth = []
								            res.data.forEach((item) => {
								            	item.deleteIcon = false
								            	this.aloneHealth.push(item)
								            })
								        }, err => {
								            
								        })
                    }
                }, err => {
                    
                })
            }, err => {
                
            })
        },
        //删除健康档案
        deleteHealth() {
            MessageBox.confirm('',{
                showConfirmButton:true,
                confirmButtonClass:'affirm',
                message:'你确定删除此档案吗？',
                title: '提示',
            }).then(action => {
                const self = this
                this.$api.indexDeleteHealth(
                    {
                        id: this.id
                    }
                ).then(res => {
                    if(res.ret == 1){
                        Toast({
                            message: '删除成功',
                            position: 'bottom',
                            duration: 1000
                        })
                        setTimeout(() => {
                            this.$router.go(-1)
                        },800)
                    }else if(res.ret == 0) {
                        Toast({
                            message: res.msg,
                            position: 'bottom',
                            duration: 1000
                        })
                    }
                }, err => {
                    
                })
            }, err => {
                    
            })
            
        },

        
        
         //获取新的健康标签
        upData (){
            const self = this
            this.$api.indexDetail().then(res => {

                this.lists = res.data
                
            }, err => {
                
            })
        }
        
    }

}
</script>

<style lang="scss" scoped>
.health{
    width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
    position: relative;
}
.save{
	position: fixed;
	width: 1.3rem;
	height: 0.92rem;
	right: 0;
	top: 0;
	line-height: 0.9rem;
	color: #fff;
	z-index: 60;
	text-align: center;
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
    select{
        position: absolute;
        right: .79rem;
        font-size: .28rem;
    }
    .birth{
        position: absolute;
        right: .49rem;
        color: black;
        font-size: .28rem;        
        font-weight:400; 
    }
    .relation{
        color: black;
        font-size: .28rem;
        font-weight:400; 
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
    flex-wrap: wrap;
    padding: 0.15rem;
}
.condition>div{
	margin: 0.15rem 0.2rem;
	min-width: 2rem;
}
.illness{
    border: solid 1px #efefef;
    color: #999;
    background-color: #efefef;
    text-align: center;
    line-height: .58rem;
    border-radius: 5px;
    margin:.2rem .3rem;
    position: relative;
    padding: 0 0.15rem;
    
}
.illness.active{
	border: solid 1px #3cafb6;
	background-color: #fff;
	color: #3cafb6;
}

.add_illness{
    height: .58rem;
    border: dashed 1px #ddd;
    border-radius: 5px;
    margin: .2rem .3rem;
    text-align: center;
    line-height: .58rem;
    color: #ddd; 
}
.deleteTag{
    position: absolute;
    width: .36rem;
    height: .36rem;
    background: url('../../static/images/29@3x.png') no-repeat center;
    background-size: 50%;
    right: -.14rem;
    top: -.14rem;
    background-color: #ccc;
    border-radius: 50%;
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
    margin:.2rem .3rem;
}
.model{
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(0, 0, 0, .6);
    z-index: 100;
    left: 0;
    top: 0;

}
.bounces{
    background-color: #fff;
    width: 80vw;
    height: auto;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-left: -40vw;
    text-align: center;
    p{
        text-align: center;
    }
    input{
        width: 80%;
        height: .88rem;
        margin: 0 auto;
    }
}
.affirm{
    color: #3cafb6;
    font-size: .28rem;
}
</style>
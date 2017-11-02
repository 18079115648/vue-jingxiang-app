<template>
  <section class="health">

    <Header title="我的健康"></Header>
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
        <select @change="change" v-model="sex" >
            <option value="0">保密</option>
            <option value="1">男</option>
            <option value="2">女</option>
        </select>
        <img src="../../static/images/arror.png" >
    </div>

    <div class="field" >
        <span>关系</span>
        <div v-if="relationship_name">请选择</div>
        <select @change="guanxi" v-model="relationship_id">
            <option>关系</option>
            <option v-for="op in relationship" :value="op.value">{{op.text}}</option>
        </select>
        <img src="../../static/images/arror.png" >
    </div>

    <div class="field" >
        <span>生日</span>
        <div v-if="birth_time" @click="openPicker">请选择</div>
        <div class="birth">{{birth}}</div>
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
        <div class="illness" v-for="item in HealthTag">{{item}}</div>
        <div class="add_illness" @click="add_label">+添加</div>
        <div class="kong"></div>
        <div class="kong"></div>
    </div>

    <div class="delete_record" @click="deleteHealth">
        <span>删除此亲属记录</span>
    </div>
    

    
  </section>
</template>

<script>
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
            relationship: [],
            HealthTag:[],
            relationship_id:'',
            sex_name: true,
            relationship_name: true,
            birth_time: true,
            birth: '',
            id :'',
            startDate: new Date('1917-1-1'),
            endDate: new Date(),
            
        }
    },
    created() {
        const self = this
        //自己的健康档案
        this.$api.indexDetailMy().then(res => {
            
        }, err => {
            
        })

        //获取标签接口
        this.$api.indexHealthTag().then(res => {
            this.HealthTag = res.data
        }, err => {
            
        })

        //获取关系列表
        this.$api.indexGetRelation().then(res => {
            this.relationship = res.form_relationship
        }, err => {
            
        })


        
    },
    methods: {

        //保存健康档案
        save(){
            const self = this
            this.$api.indexHealth(
                {
                        true_name: this.name,
                        weight: this.weight,
                        height: this.height,
                        sex:this.sex,
                        relationship_id: "1",
                        is_my: "1",
                        birthday:"",
                        data:"1",
                }
            ).then(res => {
                Toast({
				  message: '保存成功',
				  position: 'bottom',
				  duration: 1000
				})
				setTimeout(() => {
					// this.$router.go(-1)
				},800)
            }, err => {
                
            })
        },
        change() {
            this.sex_name = false
            
        },
        bian() {
                
        },
        
        guanxi() {
            this.relationship_name = false
            
        },
        //打开时间选择器
        openPicker() {
            this.$refs.picker.open();
        },
        //点击时间选择器上的确定
        handleConfirm(value) {
            this.birth_time = false
            this.birth  = value.toString();
            
        },
        //添加疾病标签
        add_label() {
            MessageBox.prompt('慢性病','').then(({ value, action }) => {
                this.$api.indexAddHealthTag(
                    {
                        health_id: this.id,
                        name: value
                }
                ).then(res => {
                    Toast({
                        message: '添加成功',
                        position: 'bottom',
                        duration: 1000
                    })
                }, err => {
                    
                })
            }, err => {
                
            })
        },
        //删除健康档案
        deleteHealth() {
            const self = this
            this.$api.indexDeleteHealth(
                {
                        id: this.id
                }
            ).then(res => {
                
            }, err => {
                
            })
        },
        

        
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
        right: .49rem;
    }
    .birth{
        position: absolute;
        right: .49rem;
        color: black;
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
    margin: .2rem .3rem;
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
</style>
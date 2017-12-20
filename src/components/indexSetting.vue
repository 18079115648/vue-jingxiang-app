<template>
    <section class="app">
        <Header title="设置"></Header>

        <router-link to="/aboutUs" class="field">
            <div>关于我们</div>

            <div>
                <img src="../../static/images/arror.png" class="arror">
            </div>

            <div class="line"></div>
        </router-link>


        <div class="field">
            <div>版本</div>

            <div class="version">V1.0</div>
        </div>
        <div class="btn-default login-out" @click="outShow = true">
        	退出登录
        </div>
        <confirm-modal :show="outShow" @confirm_modal="loginOut" @closeModal="outShow = false" message="确定退出登录?"></confirm-modal>	
    </section>
</template>


<script>
import { Toast, Indicator } from 'mint-ui'
export default {
    data() {
        return {
           outShow: false 
        }
    },
    created() {
        
    },
    methods: {
        loginOut() {
        	this.$router.push('/appLogin')
            this.$storage.remove('history_url')
            this.$storage.remove('oauthInfo')
            this.$storage.remove('token')
        }
    }

}
</script>

<style lang="scss" scoped>
.app{
    background-color: #f5f5f5;
    position: relative;
    padding-top: 0.4rem;
}
.field{
    width: 100%;
    height: 1rem;
    background-color: #fff;
    padding: 0 .3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .3rem;
    position: relative;
    .arror{
        width: .15rem;
        height: .25rem;
    }
    .version{
        color: #3cafb6;
        font-size: .28rem;
    }
}
.line{
    position: absolute;
    width: 100%;
    height: 100%;
    border-bottom:solid 1px #f5f5f9;
}
.login-out{
	position: absolute;
	bottom: 1rem;
	left: 0.3rem;
}
</style>
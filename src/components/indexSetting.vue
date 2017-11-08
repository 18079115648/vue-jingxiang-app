<template>
    <section class="indexSetting">
        <Header title="设置"></Header>

        <div class="field">
            <div class="left">消息通知</div>
            
            <div class="right">
    			<mt-switch ></mt-switch>
    		</div>
        </div>

        <div class="field" style="margin-top:.4rem;">
            <div>关于我们</div>

            <div>
                <img src="../../static/images/arror.png" class="arror">
            </div>

            <div class="line"></div>
        </div>


        <div class="field">
            <div>版本</div>

            <div class="version">V1.0</div>
        </div>
    </section>
</template>


<script>
import { Toast, Indicator } from 'mint-ui'
export default {
    data() {
        return {
            
        }
    },
    created() {
        
    },
    methods: {
           
    }

}
</script>

<style lang="scss" scoped>
.indexSetting{
    width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
    position: relative;
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
    font-weight: 100;
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
</style>
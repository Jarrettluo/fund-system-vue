<template>
    <div class="box" v-if="isShow">
        <h3>{{title}}</h3>
        <p class="box-content">{{message}}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        },
        message: {
            type: String,
            default: ""
        },
        duration: {
            type: Number,
            default: 1000 //默认1000毫秒消失
        }
    },
    data() {
        return {
            isShow: false //是否显示标识
        };
    },
    methods: {
        show() {
            this.isShow = true;
            setTimeout(this.hide, this.duration);//设置时间自动消失
        },
        hide() {
            this.isShow = false;
            this.remove();//移除
        }
    }
};
</script>

<style scoped>
.box {
    position: fixed;
    width: 100%;
    top: 16px;
    left: 0;
    text-align: center;
    pointer-events: none;
    background-color: #fff;
    border: grey 3px solid;
    box-sizing: border-box;
}
.box-content {
    width: 200px;
    margin: 10px auto;
    font-size: 14px;
    padding: 8px 16px;
    background: #fff;
    border-radius: 3px;
    margin-bottom: 8px;
}
</style>
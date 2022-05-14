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
    },
    // watch
};
</script>

<style scoped>
.box {
    position: fixed;
    width: 160px;
    top: 20%;
    left: calc(50% - 80px);
    max-height: 300px;
    text-align: center;
    pointer-events: none;
    color: white;
    /*background-color: #fff;*/
    /*border: grey 3px solid;*/
    /*box-sizing: border-box;*/
    padding: 5px;
    background-color:#000000;
    filter:alpha(opacity:50); opacity:0.5;  -moz-opacity:0.5;-khtml-opacity: 0.5;
    border-radius: 12px;
}
.box-content {
    /*width: 200px;*/
    /*margin: 10px auto;*/
    font-size: 14px;
    padding: 4px 16px;
    /*background: #fff;*/
    /*border-radius: 3px;*/
    /*margin-bottom: 8px;*/
}
</style>
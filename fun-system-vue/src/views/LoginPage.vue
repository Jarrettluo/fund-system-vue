<template>
  <div class="main-body">
    <van-form @submit="onSubmit">
      <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <div class="info-msg" @click="toRegister">
      <span>新用户注册</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      onSubmit(values) {
        console.log('submit', values);
        this.toMyselected()

      },
      toMyselected() {
        this.$router.push("/mySelected")
      },
      toRegister() {
        this.$router.push("/register")
      }
    },
  };
</script>

<style lang="scss" scoped>
  .main-body {
    width: 100%;
    height: 100vh;
    //background-color: #38b5ab;38b5ab
    position: relative;
    .van-form {
      width: 100%;
      position: absolute;
      top: calc( 50% - 200px);
      left: 0px;
    }
    .info-msg {
      position: absolute;
      top: calc( 50% - 40px);
      right: calc(50% - 35px);
      font-size: 0.75rem;
      color: #999999;
      &:active {
        color: #666;
      }
    }
  }
</style>

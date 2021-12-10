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
          v-model="telephone"
          name="手机号"
          label="手机号"
          placeholder="请输入手机号"
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
        <van-button round block type="info" native-type="submit">注册用户</van-button>
      </div>
    </van-form>
    <div class="info-msg" @click="toLogin">
      <span>现在去登录</span>
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
      telephone: ''
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
      // this.toMyselected()

    },
    toLogin() {
      this.$router.push("/login")
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
    top: calc( 50% - 0px);
    right: calc(50% - 35px);
    font-size: 0.75rem;
    color: #999999;
    &:active {
      color: #666;
    }
  }
}
</style>

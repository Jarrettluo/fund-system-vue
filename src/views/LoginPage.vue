<template>
  <div class="main-body">
    <div class="container">
      <van-form @submit="login">
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
  </div>
</template>
<script>
  import loginPageRequest from '../request/requests'
  import md5 from 'js-md5';
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

      },
      toMyselected() {
        this.$router.push("/mySelected")
      },
      toRegister() {
        this.$router.push("/register")
      },
      async login(){
        let data = {
          userName: 'luojiarui', // this.username,
          userPassword: '123456' // this.password
        }
        await loginPageRequest.loginRequest(data)
            .then(res => {
              this.updateLoginResult(res)
            })
            .catch(err => {
              console.log(err)
            })
      },
      updateLoginResult(res) {
        if(res.code==200) {
          sessionStorage.setItem("token", res.data);
          sessionStorage.setItem("userId", this.username);
          sessionStorage.setItem("username", this.password);
          this.toMyselected()
        }
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
    .container {
      position: absolute;
      top: calc(50% - 200px);
      left: 0px;
      width: 100%;
    }
  }
</style>

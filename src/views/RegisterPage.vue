<template>
  <div class="main-body">
    <div class="container">
      <van-form @submit="register">
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
            :rules="[{ required: true, message: '请填写手机号' }]"
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
  </div>
</template>
<script>
import loginPageRequest from "@/request/requests";
import md5 from 'js-md5';
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
    },
    /**
     *
     */
    async register(){
      let data = {
        userName: this.username,
        userPassword: md5(this.password),
        userTelephone: this.telephone
      }
      await loginPageRequest.registerRequest(data)
          .then(res => {
            this.updateRegisterResult(res);
          })
          .catch(err => {
            console.log(err)
          })
    },
    /**
     * 更新注册以后的结果
     * @param res
     */
    updateRegisterResult(res){
      if(res.code==200) {
        this.$router.push("/login")
          this.$Alert({message: "注册成功！",title:"提示",duration:2000});
      }else {
          console.log(res.message)
          this.$Alert({message:res.message,title:"提示",duration:2000});
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

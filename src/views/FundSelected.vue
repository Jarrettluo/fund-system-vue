<template>
  <div class="main-body">
      <div class="fund-header">
        <span>基金自选</span>
        <div class="quit-button" @click="logout">
          <van-icon name="cross" size="2.0rem"/>
        </div>
      </div>

      <div class="fund-group">
        <div class="fund-group-header">
          <span class="left">基金名称</span>
          <span class="right">净值</span>
        </div>
        <div class="fund-group-item" @click="fundDetal">
            <div class="fund-info">
              <div class="fund-info-name">
                富国中证红利指数增强C
              </div>
              <div class="fund-info-id">
                008682
              </div>
            </div>
          <div class="fund-price">
            <div class="fund-price-xx">
              1.0779
            </div>
            <div class="fund-price-percent">
              -0.64%
            </div>
          </div>
        </div>
        <div class="fund-group-footer" @click="addSelected">
            <span><van-icon name="add-o" />  添加自选</span>
        </div>
      </div>
      <div class="fund-foot">
        <span>
          最新估值根据基金持仓和指数走势估算，仅供参考，实际涨幅以基金公司披露为准。
        </span>
      </div>


  </div>
</template>

<script>
  export default {
    name: 'FundSelected',
    data() {
      return {

      }
    },
    methods: {
      logout() {
        console.log("logout")
        this.$router.push("/login")
      },
      fundDetal() {
        this.$router.push("/detail")
      },
      addSelected() {
        this.$router.push("/searchPage")
      }
    }
  }

</script>

<style lang="scss" scoped>
  .main-body {
    background-color: #f5f6f7;
    min-height: 100vh;
    .fund-header {
      width: 100%;
      height: 60px;
      background-color: #0082f9;
      color: #fff;
      position: relative;
      span {
        line-height: 60px;
        font-size: 1.25rem;
        font-weight: bold;
      }
      .quit-button {
        position: absolute;
        right: 10px;
        top: 0;
        color: #ffffff;
        .van-icon {
          line-height: 60px;
        }
        &:active {
          color: #999;
        }
      }
    }
    .fund-group {
      width: 100%;
      background-color: #ffffff;
      .fund-group-header {
        min-height: 48px;
        font-size: 1.25rem;
        font-weight: bold;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        color: #333;
        padding: 0 20px 0 20px;
        span {
          line-height: 48px;
        }
      }
      .fund-group-item {
        border-bottom: 0.001rem solid #eee;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 10px 20px 10px 20px;
        font-size: 1.24rem;
        font-weight: 500;
        .fund-info {
          width: 80%;
          text-align: left;
          line-height: 24px;
          .fund-info-name {
            line-height: 24px;
          }
          .fund-info-id {
            line-height: 24px;
          }
        }
        .fund-price {
          width: 20%;
          text-align: center;
          line-height: 24px;
          font-weight: 600;
          .fund-price-xx {

          }
          .fund-price-percent {
            color: #38b5ab;
          }

        }

      }
      .fund-group-footer {
        height: 60px;
        text-align: center;
        color: #0082f9;
        span {
          line-height: 60px;
          font-size: 1.25rem;
          font-weight: bolder;
        }
        &:active {
          color: #7fb6ff;
          cursor: pointer;
          //padding: 2px 0 0 2px;
        }
      }
    }
    .fund-foot {
      padding: 20px;
      text-align: center;
      span {
        color: #999;
        line-height:22px;
        font-size: 1rem;
      }
    }
  }

</style>
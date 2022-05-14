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
        <div class="fund-group-item" @click="fundDetal(selectedFund.finfoWindCode)"
             v-for="selectedFund in fundList">
            <div class="fund-info">
              <div class="fund-info-name">
                {{selectedFund.finfoFullname}}
              </div>
              <div class="fund-info-id">
                {{ selectedFund.finfoWindCode }}
              </div>
            </div>
          <div class="fund-price">
            <div class="fund-price-xx">
              {{ selectedFund.newNavUnit }}
            </div>
            <div class="fund-price-percent" :class="[selectedFund.newPercent > 0 ? 'red':'']">
              {{ selectedFund.newPercent | numFilter }}%
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
  import requestPage from '../request/requests'
  export default {
    name: 'FundSelected',
    data() {
      return {
        fundList: [],
      }
    },
    filters: {
      numFilter(value) {
        // 截取当前数据到小数点后两位
        let realVal = parseFloat(value*100).toFixed(2);
        return realVal;
      }
    },
    mounted() {
      this.getSelectFundListData();
    },
    methods: {
      logout() {
        console.log("logout")
        this.$router.push("/login")
        sessionStorage.clear();
      },
      fundDetal(windCode) {
        this.$router.push({
          path: '/detail',
          query: {
            windCode: windCode
          }
        })
      },
      addSelected() {
        this.$router.push("/searchPage")
      },
      /**
       * 异步提交数据给后台
       * @author: 罗佳瑞
       * @since: 2021年1月19日
       */
      async getSelectFundListData(){
        let param = {
          userId: sessionStorage.getItem("userId")
        }
        if(!param.userId) return
        await requestPage.listFundRequest(param)
            .then(res => {
              console.log(res)
              this.updateFundList(res)
            })
            .catch(err => {
              console.log(err)
            })
      },
      updateFundList(res) {
        if(res.code == 200 ) {
          this.fundList = res.data;
        }
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
          .red {
            color: red;
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
<template>
  <div class="main-body">
    <div class="fund-header">
      <span>产品详情</span>
      <div class="quit-button" @click="backTo()">
        <van-icon name="cross" size="2.0rem"/>
      </div>
    </div>
    <div class="fund-container">
      <div class="fund-detail">
        <div class="fund-detail-name">
          大成中证红利指数A
        </div>
        <div class="fund-detail-id">
          090010
          <span><van-tag plain type="primary">高风险</van-tag></span>
        </div>
        <div class="fund-detail-group">
          <div class="fund-detail-group-item">
            <div class="title person">夏高</div>
            <span>基金经理</span>
          </div>
          <div class="fund-detail-group-item">
            <div class="title red">0.72%</div>
            <span>日涨跌幅</span>
          </div>
          <div class="fund-detail-group-item">
            <div class="title">1.9480</div>
            <span>最新净值</span>
          </div>
        </div>
      </div>
      <div class="fund-detail-back">
      </div>
      <div class="fund-trend">
        <div class="fund-trend-title">
          业绩走势
        </div>
        <div class="fund-trend-chart">
          曲线图
        </div>
        <div class="fund-trend-button">
          <div class="button-item">
            近1个月
          </div>
          <div class="button-item">
            近3个月
          </div>
          <div class="button-item">
            近6个月
          </div>
          <div class="button-item">
            近1年
          </div>
          <div class="button-item">
            近3年
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FundDetail",
  data() {
    return {

    }
  },
  methods: {
    backTo() {
      console.log("====")
      this.$router.push("/mySelected")
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
  .fund-container {
    padding: 0px 12px 0px 12px;
    position: relative;
    .fund-detail {
      height: 140px;
      background-color: #ffffff;
      z-index: 999;
      position: absolute;
      top: 0px;
      left: 10px;
      width: calc( 100% - 20px);
      border-radius: 8px;
      padding: 18px;
      box-sizing: border-box;
      .fund-detail-name {
        width: 100%;
        text-align: left;
        font-size: 1.5rem;
        line-height: 32px;
        font-weight: bolder;
      }
      .fund-detail-id {
        margin-top: -6px;
        text-align: left;
        line-height: 24px;
      }

      .fund-detail-group {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        text-align: left;
        padding: 10px 0px;
        .fund-detail-group-item {
          width: 30%;
          height: 80px;
          .title {
            font-size: 1.2rem;
            line-height: 24px;
            color: #333;
          }
          .person {
            line-height: 24px;
            font-size: 1.75rem;
            font-weight: bolder;
          }
          .red {
            color: red;
          }
          span {
            width: 100%;
            font-size: 1rem;
            color: #999;
            line-height: 28px;
            font-weight: 500;
          }
        }
      }
    }
    .fund-detail-back {
      height: 34px;
      z-index: 0;
      background-color: #0082f9;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
    }
    .fund-trend {
      position: absolute;
      top: 152px;
      left: 10px;
      width: calc( 100% - 20px);
      background-color: #ffffff;
      border-radius: 8px;
      //height: 520px;
      padding: 20px;
      box-sizing: border-box;
      .fund-trend-title {
        text-align: left;
        line-height: 32px;
        font-size: 1.25rem;
        color: #0082f9;
        font-weight: bolder;
      }
      .fund-trend-chart {
        height: 300px;
        background-color: #deebfd;
        line-height: 300px;
      }
      .fund-trend-button {
        //height: 80px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 20px 0px 10px 0px;
        .button-item {
          border-radius: 20px;
          background-color: #eee;
          padding: 6px 8px;
          color: #666;
          font-size: 0.75rem;
        }
      }
    }
  }

}
</style>
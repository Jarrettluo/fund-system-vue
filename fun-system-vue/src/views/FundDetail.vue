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
          {{fundDetail.finfoFullname}}
        </div>
        <div class="fund-detail-id">
          {{ fundDetail.finfoWindCode }}
          <span><van-tag plain type="primary">高风险</van-tag></span>
        </div>
        <div class="fund-detail-group">
          <div class="fund-detail-group-item">
            <div class="title person">
              {{ fundDetail.manager }}
            </div>
            <span>基金经理</span>
          </div>
          <div class="fund-detail-group-item">
            <div class="title" :class="[fundDetail.newPercent > 0 ? 'red':'']">
              {{ fundDetail.newPercent | numFilter }}%</div>
            <span>日涨跌幅</span>
          </div>
          <div class="fund-detail-group-item">
            <div class="title">
              {{fundDetail.newNavUnit }}
            </div>
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
        <div class="fund-trend-chart" style="width: 100%" >
          <TrendCurve :data="fundTrend" ref="trend"></TrendCurve>
        </div>
        <div class="fund-trend-button">
          <div class="button-item" :class="[choosedId == 1 ? 'choosed':'']" @click="choosedId=1; getFundTrend(3)">
            近1个月
          </div>
          <div class="button-item" :class="[choosedId == 2 ? 'choosed':'']" @click="choosedId=2; getFundTrend(9)">
            近3个月
          </div>
          <div class="button-item" :class="[choosedId == 3 ? 'choosed':'']" @click="choosedId=3; getFundTrend(18)">
            近6个月
          </div>
          <div class="button-item" :class="[choosedId == 4 ? 'choosed':'']" @click="choosedId=4; getFundTrend(36)">
            近1年
          </div>
          <div class="button-item" :class="[choosedId == 5 ? 'choosed':'']" @click="choosedId=5; getFundTrend(108)">
            近3年
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import requestPage from '../request/requests'
import TrendCurve from "@/components/TrendCurve";
export default {
  name: "FundDetail",
  data() {
    return {
      fundDetail: {},
      fundTrend: [],
      choosedId: 1,

    }
  },
  components: {
    TrendCurve
  },
  filters: {
    numFilter(value) {
      // 截取当前数据到小数点后两位
      let realVal = parseFloat(value*100).toFixed(2);
      return realVal;
    }
  },
  mounted() {
    this.getFundDetailRequest();
  },
  methods: {
    backTo() {
      console.log("====")
      this.$router.push("/mySelected")
    },
    async getFundDetailRequest(){
      let param = {
        windCode: this.$route.query.windCode
      }
      if(!param.windCode) return
      await requestPage.detailRequest(param)
          .then(res => {
            console.log(res)
            this.updateFundDetail(res)
          })
          .catch(err => {
            console.log(err)
          })
    },
    updateFundDetail(res) {
      if(res.code == 200 ) {
        this.fundDetail = res.data;
        if(this.fundDetail.chinamutualfundmanagers.length > 1) {
          this.fundDetail.manager = this.fundDetail.chinamutualfundmanagers[0].finfoFundmanager + "等"
        } else {
          this.fundDetail.manager = this.fundDetail.chinamutualfundmanagers[0].finfoFundmanager
        }
        this.choosedId = 1;
        this.getFundTrend(3);// 获取最近一个月的数据
      }
    },
    async getFundTrend(period) {
      let param = {
        fInfoWindcode: this.$route.query.windCode,
        period: period
      }
      if(!param.fInfoWindcode || !param.period) return
      await requestPage.trendRequest(param)
          .then(res => {
            console.log(res)
            this.updateFundTrend(res)
          })
          .catch(err => {
            console.log(err)
          })
    },
    updateFundTrend(res){
      if(res.code==200){
        console.log(res.data)
        var trendData = []
        res.data.forEach(element => {
          trendData.push({
            time : element.priceDate,
            tem : element.fnavUnit
          })
        })
        // this.fundTrend = trendData;
        this.$refs.trend.init(trendData); // 更新数据
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
        //background-color: #deebfd;
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
          padding: 6px 8px;
          color: #666;
          font-size: 0.75rem;
          &:hover {
            cursor: pointer;
          }
        }
        .choosed {
          background-color: #eee;
        }
      }
    }
  }

}
</style>
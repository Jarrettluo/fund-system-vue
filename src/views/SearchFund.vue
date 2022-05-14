<template>
  <div class="main-body">
    <div class="search-container">
      <div class="search-input">
        <input v-model="keyWord" placeholder="输入……">
      </div>
      <div class="search-button">
        <span @click="getSearchFundListData">
          搜索
        </span>
        <span @click="backToSelected">
          取消
        </span>
      </div>
    </div>
    <div class="search-result-group">
      <div class="search-result-item" v-for="searchedFund in fundList">
        <div class="fund-title">
          <div class="fund-title-name">
            <span>{{searchedFund.finfoFullname }}</span>
          </div>
          <div class="fund-title-code">
            {{ searchedFund.finfoWindCode }}
          </div>
          <div v-if="!searchedFund.selected" class="fund-button" @click="addSelected(searchedFund.objectId)">
            <span >添加</span>
          </div>
          <div v-else class="fund-button" @click="deleteSelected(searchedFund.objectId)">
            <span class="cancle">取消</span>
          </div>
        </div>
        <div class="fund-detail-info">
          <div class="fund-detail">
            <div class="detail-info title">
              基金经理人
            </div>
            <div class="detail-info manager">
              {{ searchedFund.manager }}
            </div>
          </div>
          <div class="fund-detail">
            <div class="detail-info title">
              成立时间
            </div>
            <div class="detail-info time">
              {{ searchedFund.finfoSetupdate }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import requestPage from '../request/requests'
export default {
  name: 'SearchFund',
  data() {
    return {
      keyWord: null,
      fundList: []
    }
  },
    mounted() {
      this.getSearchFundListData();
    },
    methods: {
    backToSelected() {
      this.$router.push("/mySelected")
    },
    async getSearchFundListData(){
      let param = {
        keyWord: "" | this.keyWord,
        userId: sessionStorage.getItem("userId")
      }
      // if(!param.keyWord) return
      await requestPage.searchRequest(param)
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
        this.fundList.forEach(item => {
          if(item.chinamutualfundmanagers.length > 1) {
            item.manager = item.chinamutualfundmanagers[0].finfoFundmanager + "等"
          } else {
            item.manager = item.chinamutualfundmanagers[0].finfoFundmanager
          }
        })
      }
    },
    async addSelected(fundId) {
      let param = {
        fundId: fundId,
        userId: sessionStorage.getItem("userId")
      }
      if(!param.fundId || !param.userId ) return
      await requestPage.addFundRequest(param)
          .then(res => {
            console.log(res)
            // this.updateFundList(res)r
            this.getSearchFundListData()
          })
          .catch(err => {
            console.log(err)
          })
    },
    async deleteSelected(fundId) {
      let param = {
        fundId: fundId,
        userId: sessionStorage.getItem("userId")
      }
      if(!param.fundId || !param.userId ) return
      await requestPage.deleteFundRequest(param)
          .then(res => {
            console.log(res)
            // this.updateFundList(res)
            this.getSearchFundListData()
          })
          .catch(err => {
            console.log(err)
          })
    }
  }
}

</script>

<style lang="scss" scoped>
.main-body {
  background-color: #f5f6f7;
  min-height: 100vh;
  width: 100%;
  .search-container {
    background-color: #ffffff;
    height: 60px;
    font-size: 1.25rem;
    width: 100%;
    display: flex;
    .search-input {
      width: 70%;
      line-height: 60px;
      input {
        height: 40px;
        outline-style: none;
        border: 0px;
        padding: 4px 0px;
        width: 100%;
        font-size: 1.25rem;
        font-family: "Microsoft Sans Serif";
        border-radius: 4px;
        font-weight: bolder;
        &::before {
          padding: 10px;
        }
        &:focus {
          border-color: #66afe9;
          outline: 0;
          -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
          box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
        }
      }

    }
    .search-button {
      width: 30%;
      line-height: 60px;
      display: flex;
      justify-content: space-between;
      color: #666;
      span {
        width: 50%;
        &:active {
          color: #0082f9;
        }
      }

    }

  }
  .search-result-group {
    padding-top: 10px;
    .search-result-item {
      background-color: #ffffff;
      margin-bottom: 10px;
      padding: 20px 10px;
      .fund-title {
        display: flex;
        //justify-content: space-between;
        min-width: 300px;
        width: 100%;
        line-height: 32px;
        font-size: 1.25rem;
        text-align: center;
        .fund-title-name {
          font-size: 1.5rem;
          width: 60%;
          text-align: left;
          span {
            display: inline-block;
            white-space: nowrap;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .fund-title-code {
          width: 20%;
        }
        .fund-button {
          width: 20%;
          color: #ffffff;
          span{
            font-size: 1rem;
            background-color: #0082f9;
            border-radius: 16px;
            padding: 4px 16px;
          }
          .cancle {
            background-color: #999999;
          }
        }

      }
      .fund-detail-info {
        display: flex;
        width: 100%;
        text-align: left;
        font-size: 1rem;
        font-weight: bold;
        .fund-detail {
          width: 40%;
          .detail-info {

          }
          .manager {
            font-size: 1.5rem;
            line-height: 28px;
            color: #38b5ab;
          }
          .title {
            color: #999;
          }
          .time {
            line-height: 28px;
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="main-body">
    <div class="search-container">
      <div class="search-input">
        <input v-model="keyWord" placeholder="输入……">
      </div>
      <div class="search-button">
        <span>
          搜索
        </span>
        <span @click="backToSelected">
          取消
        </span>
      </div>
    </div>
    <div class="search-result-group">
      <div class="search-result-item">
        <div class="fund-title">
          <div class="fund-title-name">
            <span>富国中证红利指数增强乐基儿乐基儿</span>
          </div>
          <div class="fund-title-code">
            008682
          </div>
          <div class="fund-button">
            <span>添加</span>
          </div>
        </div>
        <div class="fund-detail-info">
          <div class="fund-detail">
            <div class="detail-info title">
              基金经理人
            </div>
            <div class="detail-info manager">
              徐由华等
            </div>
          </div>
          <div class="fund-detail">
            <div class="detail-info title">
              成立时间
            </div>
            <div class="detail-info time">
              2021-03-10
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchFund',
  data() {
    return {
      keyWord: null,
    }
  },
  methods: {
    backToSelected() {
      this.$router.push("/mySelected")
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
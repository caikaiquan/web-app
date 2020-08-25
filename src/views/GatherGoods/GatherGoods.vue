<template>
  <div class="gather-goods">
    <v-header :title="title" :backText="backText" :clickFun="handleSubmit" :rightText="rightText" :goBack="goback"></v-header>
    <div class="container">
      <div class="cont-select">
        <p class="title">收银系统调研：</p>
        <div class="manager-system">
          <p>掌柜是否有收银系统</p>
          <van-radio-group v-model="useStatus" direction="horizontal" icon-size="15">
            <van-radio name="1">有</van-radio>
            <van-radio name="2">没有</van-radio>
          </van-radio-group>
        </div>
        <div class="frequency">
          <p>掌柜使用收银系统频率</p>
          <van-radio-group v-model="frequency" direction="horizontal" icon-size="15">
            <van-radio name="1">一直使用</van-radio>
            <van-radio name="2">偶尔使用</van-radio>
            <van-radio name="3">几乎不用</van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="search-goods">
        <p class="goods-num">
          采集商品数：(
          <span>2</span>/10)
        </p>
        <p class="mark">
          采集
          <span>10</span>个热销商品，扫描/输入条形码并填写商品信息
        </p>
        <div class="query-box">
          <van-row>
            <van-col :span="spanNum">
              <div class="scan-btn" @click="handleScan">
                <van-icon name="scan" />扫一扫
              </div>
            </van-col>
            <van-col :span="24 - spanNum" class="search-line" :class="spanNum === 8 ? 'blur' : ''">
              <van-field v-model="upc" placeholder="输入条码编号" @focus="spanNum = 8" />
              <van-icon name="search" class="search-icon" />
            </van-col>
          </van-row>
        </div>
      </div>
      <div class="no-good" v-if="0">
        <img src="../assets/img/no-goods.png" alt />
        <p>暂无任何商品</p>
      </div>
      <div class="goods-list">
        <div class="good-item" v-for="(item,index) in goodsList" :key="index">
          <p>百事可乐</p>
          <p>upc码：780909088898989</p>
          <van-icon name="arrow" class="arrow-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      title: '热销商品价格调研',
      rightText: '提交',
      backText: '返回',
      useStatus: '1',
      frequency: '1',
      upc: '',
      spanNum: 16,
      goodsList: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  created () {
    this.$messageBox.confirm({
      title: '提交成功',
      message: `<p>当前本周任务还有<span style='color:#fb503f'>${8}</span>个商品未采集<p>`,
      confirmButtonColor: '#FB503F'
    })
      .then(() => {
        // on confirm
      })
      .catch(() => {
        // on cancel
      })
  },
  mounted () {
  },
  methods: {
    // 头部的提交按钮
    handleSubmit () {
      console.log('点击了提交按钮')
    },
    // 点击返回箭头
    goback () {
      console.log('点击了回退按钮')
    },
    // 点击扫一扫
    handleScan () {
      this.spanNum = 16
    }
  }
}
</script>

<style lang='less'>
@mainColor: #fb503f;
.gather-goods {
  // min-height: 100vh;
  background-color: #f7f7f7;
  width: 100%;
  box-sizing: border-box;
  color: #555;
  font-family: PingFang SC Medium, PingFang SC Medium-Medium;
  .container {
    .cont-select {
      padding-top: 1px;
      background-color: #fff;
      & > .title {
        margin: 20px 0;
        color: #555;
        font-weight: 600;
        font-size: 16px;
        padding: 0 10px;
      }
      .manager-system,
      .frequency {
        padding: 0 10px 20px 10px;
        & > p {
          font-size: 15px;
          font-weight: 400px;
          color: #555;
          margin-bottom: 10px;
        }
        .van-radio-group {
          font-size: 14px;
          .van-radio {
            & + .van-radio {
              margin-left: 20px;
            }
            .van-radio__icon--checked {
              .van-icon {
                background-color: @mainColor;
                border-color: @mainColor;
              }
            }
            .van-radio__label {
              color: #777;
            }
          }
        }
      }
      .manager-system {
        border-bottom: 1px solid #eaeaea;
        .van-radio-group {
          .van-radio + .van-radio {
            margin-left: 64px;
          }
        }
      }
      .frequency {
        margin-top: 20px;
      }
    }
    .search-goods {
      margin-top: 10px;
      padding-bottom: 20px;
      background-color: #fff;
      .goods-num {
        font-size: 16px;
        font-weight: 600;
        padding: 25px 10px 12px 10px;
        span {
          color: @mainColor;
        }
      }
      .mark {
        font-size: 12px;
        color: #999;
        padding: 0 10px;
        margin-bottom: 20px;
        span {
          color: @mainColor;
        }
      }

      .query-box {
        padding: 0 10px;
        height: 45px;
        // margin-bottom: 20px;
        .van-col--8,
        .van-col--16 {
          transition: width 0.15s;
        }
        .scan-btn {
          font-size: 16px;
          width: calc(100% - 10px);
          height: 45px;
          background: linear-gradient(#fc5746 0%, #ff8280 100%);
          border-radius: 23px;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          i {
            margin-right: 5px;
          }
        }
        .search-line {
          position: relative;
          &.blur {
            .search-icon {
              display: block;
            }
          }
          .search-icon {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translate(0, -50%);
            font-size: 26px;
            color: @mainColor;
            display: none;
          }
        }
        .van-field {
          padding: 0;
          input {
            padding: 0 15px;
            height: 45px;
            border-radius: 23px;
            background: #f7f7f7;
          }
        }
      }
    }
    .no-good {
      text-align: center;
      img {
        width: 161px;
        height: 141px;
        margin: 20px auto 0 auto;
      }
      p {
        color: #555;
      }
    }
    .goods-list {
      background: #fff;
      .good-item {
        height: 80px;
        border-bottom: 1px solid #eaeaea;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        padding: 0 15px;
        p {
          color: #555;
          font-size: 15px;
          font-weight: Regular;
          & + p {
            margin-top: 10px;
            color: #999;
            font-size: 14px;
          }
        }
        .arrow-right {
          position: absolute;
          right: 15px;
          top: 35px;
          color: #999999;
        }
      }
    }
  }
}
</style>

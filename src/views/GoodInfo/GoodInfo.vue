<template>
  <div class="good-info">
    <v-header :title="title" :goBack="goback"></v-header>
    <div class="good-content">
      <div
        class="good-item"
        v-for="(item,index) in infoIputs"
        :key="index"
        :class="[item.mark ? 'mark' : '' , item.inputStatus ? 'readonly' : '']"
      >
        <van-field
          :label="item.label"
          v-model="form[item.props]"
          :readonly="item.inputStatus ? true : false"
          :placeholder="item.placeholder"
          :type="item.type ? item.type : ''"
          @input="(value) =>{handleInput(item.props,value)}"
        />
        <p class="unit" v-if="item.unit">{{item.unit}}</p>
      </div>
      <div class="good-item-select mark good-item">
        <div class="label">商品月销售量</div>
        <div class="select">
          <p :class="form.dealer ? 'active' : ''" @click="form.dealer = form.dealer ? 0 : 1">经销商</p>
          <p :class="form.plat ? 'active' : ''" @click="form.plat = form.plat ? 0 : 1">平台</p>
        </div>
      </div>
      <div class="plat" :class="form.plat?'select-plat':''">
        <van-checkbox-group direction="horizontal" v-model="form.selectPlat">
          <van-checkbox
            v-for="(item,index) in platList"
            :key="index"
            shape="square"
            checked-color="#fb503f"
            :name="item.key"
            icon-size="14"
          >{{item.name}}</van-checkbox>
        </van-checkbox-group>
      </div>
      <div class="up-load mark good-item" v-if="!form.img">
        <div class="label">上传商品图片</div>
        <van-uploader v-model="form.fileList" multiple :max-count="1" />
      </div>
    </div>
    <van-button
      type="primary"
      class="confirm-btn"
      :class="btnStatus ? 'do-click' : '' "
      block
      @click="handleSubmit"
      :disabled="!btnStatus"
    >确认采集</van-button>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      title: '热销商品采集',
      form: {
        upc: '690609789909',
        itemName: '',
        salePrice: '',
        purchasePrice: '',
        saleNum: '',
        dealer: false,
        plat: false,
        selectPlat: [],
        fileList: [],
        img: false
      },
      infoIputs: [
        {
          props: 'upc',
          label: '商品条码',
          inputStatus: true
        },
        {
          props: 'itemName',
          label: '商品名',
          inputStatus: false,
          mark: '*',
          placeholder: '请输入商品名称'
        },
        {
          props: 'salePrice',
          label: '商品零售价',
          inputStatus: false,
          mark: '*',
          placeholder: '请输入价格',
          type: 'number',
          unit: '瓶/桶/个'
        },
        {
          props: 'purchasePrice',
          label: '商品进货价',
          inputStatus: false,
          mark: '*',
          placeholder: '请输入价格',
          type: 'number',
          unit: '箱'
        },
        {
          props: 'saleNum',
          label: '商品月销售量',
          inputStatus: false,
          mark: '*',
          placeholder: '请输入月销售量',
          type: 'number',
          unit: '箱'
        }
      ],
      flag: true,
      platList: [
        {
          name: '阿里零售通',
          key: '0'
        },
        {
          name: '京东掌柜宝',
          key: '1'
        },
        {
          name: '邮乐',
          key: '2'
        },
        {
          name: '其他',
          key: '3'
        }
      ]
    }
  },
  computed: {
    btnStatus () {
      let flag = true
      for (const key in this.form) {
        if (!this.form[key] && ['upc', 'itemName', 'salePrice', 'purchasePrice', 'saleNum'].includes(key)) {
          flag = false
          break
        }
      }
      if (!flag) {
        return false
      }

      if (!this.form.dealer && !this.form.plat) {
        return false
      }

      if (!this.form.img && !this.form.fileList.length) {
        return false
      }

      return flag
    }
  },
  created () {
    this.infoIputs.forEach(item => {
      if (this.form[item.props]) {
        item.inputStatus = true
      }
    })
  },
  methods: {
    goback () {
      console.log('点击了回退按钮')
    },
    // 点击确认采集
    handleSubmit () {
      console.log(this.form)
    },
    handleInput (key, value) {
      if (key === 'salePrice' || key === 'purchasePrice') {
        this.form[key] = value.match(/^\d*(\.?\d{0,2})/g)[0]
      } else if (key === 'saleNum') {
        this.form[key] = Math.floor(value)
      }
    }
  }
}
</script>

<style lang='less'>
@mainColor: #fb503f;
.good-info {
  font-family: PingFang SC Medium, PingFang SC Medium-Medium;
  color: #555;
  background-color: #f7f7f7;
  box-sizing: border-box;
  padding-bottom: 20px;
  .good-content {
    background: #fff;
    .good-item {
      height: 55px;
      font-size: 15px;
      font-family: PingFang SC Regular;
      position: relative;
      border-bottom: 1px solid #eaeaea;
      &.up-load {
        height: 163px;
      }

      &.mark {
        &::before {
          position: absolute;
          left: 6px;
          top: 14px;
          z-index: 10;
          content: "*";
          color: @mainColor;
          font-size: 16px;
        }
      }

      &.readonly {
        input {
          color: #999;
        }
      }

      .unit {
        position: absolute;
        top: 15px;
        right: 10px;
        font-size: 14px;
        color: #777777;
      }

      .van-field {
        height: 100%;
        .van-cell__title,
        .van-cell__value {
          display: flex;
          align-items: center;
        }

        .van-field__body {
          color: #999;
        }
      }
    }

    .good-item-select {
      height: 55px;
      display: flex;
      justify-content: space-between;
      position: relative;
      &.mark {
        &::before {
          position: absolute;
          left: 6px;
          top: 14px;
          z-index: 10;
          content: "*";
          color: @mainColor;
          font-size: 16px;
        }
      }
      .label {
        line-height: 55px;
        padding-left: 15px;
        font-size: 15px;
        font-family: PingFang SC Regular;
      }
      .select {
        display: flex;
        align-items: center;
        margin-right: 16px;
        p {
          font-size: 14px;
          font-family: PingFang SC Regular;
          color: #999;
          width: 60px;
          height: 25px;
          line-height: 23px;
          border: 1px solid #999;
          border-radius: 13px;
          text-align: center;
          box-sizing: border-box;
          &.active {
            color: #fff;
            background: @mainColor;
            border-color: @mainColor;
          }
          & + p {
            margin-left: 14px;
          }
        }
      }
    }
    .plat {
      height: 0;
      transition: height 0.15s;
      overflow: hidden;
      &.select-plat {
        height: 50px;
      }
      padding-left: 10px;
      .van-checkbox-group {
        display: flex;
        justify-content: space-around;
        .van-checkbox {
          height: 50px;
          .van-checkbox__label {
            font-size: 14px;
            color: #777777;
          }
        }
      }
    }
    .up-load {
      & > .label {
        height: 45px;
        line-height: 55px;
        padding-left: 15px;
      }
      .van-uploader__upload {
        width: 98px;
        height: 98px;
        padding: 0;
        margin: 0;
        position: relative;
        i {
          position: absolute;
          top: 28%;
          left: 50%;
          transform: translate(-50%, 0);
        }
        &::before {
          position: absolute;
          top: 55px;
          content: "上传图片";
          text-align: center;
          font-size: 12px;
          color: #999;
        }
      }

      .van-uploader {
        width: 98px;
        height: 98px;
        margin-left: 17px;
        .van-uploader__preview {
          width: 98px;
          height: 98px;
          margin: 0;
          padding: 0;
          .van-image {
            width: 100%;
            height: 100%;
          }
        }
        img {
        }
      }
    }
  }

  .confirm-btn {
    &.do-click{
      background: @mainColor;
    }
    margin: 50px 15px 0 15px;
    width: calc(100% - 30px);
    background: #e0e0e0;
    border-color: #e0e0e0;
  }
}
</style>

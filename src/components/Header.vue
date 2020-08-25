<template>
  <header>
    <div class="head-left" @click="handleClickBack">
      <slot>
        <van-icon name="arrow-left" />
        <span class="left-text" v-if="backText">{{backText}}</span>
      </slot>
    </div>
    <div class="head-content">
      <slot>
        <span>{{title}}</span>
      </slot>
    </div>
    <div class="head-right"  @click="handleClickRight">
      <slot>
        <span v-if="rightText">{{rightText}}</span>
      </slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header-model',
  props: {
    backText: {
      type: String,
      default: ''
    },
    goBack: {
      type: Function
    },
    title: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
    clickFun: {
      type: Function
    }
  },
  methods: {
    // 点击左侧返回或是自定义事件
    handleClickBack () {
      if (this.goBack) {
        this.goBack()
        console.log('这里说明父组件提供了返回方法2222')
        return
      }
      console.log('这里执行组件本身的返回3333')
    },
    // 点击右侧自定义事件
    handleClickRight () {
      if (this.clickFun) {
        console.log('父组件传递过来 的方法')
        this.clickFun()
        return
      }
      console.log('点击了右侧的事件')
    }
  }
}
</script>

<style scoped lang='less'>
@mainColor: #fb503f;
header {
  background: @mainColor;
  height: 50px;
  color: #fff;
  position: relative;
  font-size: 20px;
  .head-left {
    position: absolute;
    left: 10px;
    top: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    i {
      font-size: 28px;
    }
  }
  .head-content {
    line-height: 50px;
    font-size: 20px;
    text-align: center;
  }
  .head-right {
    position: absolute;
    top: 0;
    right: 20px;
    line-height: 50px;
    font-size: 16px;
  }
}
</style>

<template>
  <div class="yzs-box">
    <div class="box">
      <keep-alive>
        <!-- 这里是要被缓存的组件 -->
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      height: ''
    }
  },
  mounted () {
    this.height = document.documentElement.clientHeight - 50
  }

}
</script>
<style scoped lang="less">
@bgColor: #f2f2f2;
.yzs-box {
  padding-top: 50px;
  height: calc(100% - 50px);
  background-color: @bgColor;
  .box {
    height: 100%;
  }
}
</style>

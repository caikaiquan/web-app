<template>
  <div class="home">
    <v-header :title="title" :backText="backText" :rightText="rightText" :goBack="goBack"></v-header>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      title: '首 页',
      backText: '返回',
      rightText: '提交'
    }
  },
  methods: {
    goBack () {
      console.log('这里是传递给header组件的方法1111')
    }
  }
}
</script>
<style lang="less">
.demo{
  height: 50px;
}
</style>

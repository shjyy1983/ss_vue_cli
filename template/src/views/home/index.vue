<template>
  <div class="page home">
    <div class="page-content">
      <div class="title">{{msg}}</div>
      <div class="btn" @click="navigateTo('/login')">go to login page</div>
      <div class="logo"></div>
      <img :src="url" class="avatar" @click="changeAvatar" />
      <BlueBox></BlueBox>
      <div class="list">
        <li v-for="user in userList" :key="user.id">{{user.username}}</li>
      </div>
    </div>
  </div>
</template>

<script>
import BlueBox from '@components/BlueBox'
import bridge from '@util/bridgeTool'
import service from './service'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Home',
      url: './static/images/smile.png', // 本地静态图片的处理
      userList: []
    }
  },
  mounted () {
    service.getListAll().then((res) => {
      this.userList = res.data
    })
  },
  methods: {
    navigateTo(path) {
      bridge.navigateTo(path)
    },
    changeAvatar() {
      this.url = './static/images/box.png'
    }
  },
  components: {
    BlueBox
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "./style";
</style>

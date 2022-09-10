<template>
  <div
    v-if="visible"
    :class="{
      'user-list w100 h100':true,
      'user-list-show':componentsShow
    }"
    :style="{
      transition:`all ${ time }s`
    }"
    @click="close"
  >
    <div
      :class="{
        'container pa w100':true,
        'container-show':componentsShow
      }"
      :style="{
        transition:`all ${ time }s`
      }"
      @click.stop=""
    >
      <div class="content">
        <Title :close="close" />
        <List :list="userList" :send-data="sendData" />
      </div>

    </div>
  </div>
</template>

<script>
import Title from './title'
import List from './list'
export default {
  components: {
    Title,
    List
  },
  props: {
    focus: {
      type: Function,
      default: () => () => {}
    },
    addData: {
      type: Function,
      default: () => () => {}
    }
  },
  data: () => ({
    visible: false,
    componentsShow: false,
    time: 0.3,
    userList: [
      { name: 'A', children: [{ name: '女神1号' }, { name: '女神2号' }, { name: '女神3号' }, { name: '女神4号' }] },
      { name: 'B', children: [{ name: '女神5号' }, { name: '女神6号' }, { name: '女神7号' }, { name: '女神8号' }] },
      { name: 'D', children: [{ name: '女神9号' }, { name: '女神10号' }, { name: '女神11号' }, { name: '女神12号' }] }
    ]
  }),
  methods: {
    sendData(item) {
      this.addData(item)
      this.close('isAdd')
    },
    async show() {
      this.visible = true
      document.body.classList.add('oh')
      await this.$nextTick()
      setTimeout(() => {
        this.componentsShow = true
      })
    },
    async close(type = '') {
      this.componentsShow = false
      document.body.classList.remove('oh')
      setTimeout(async() => {
        this.visible = false
        await this.$nextTick()
        this.focus(type)
      }, this.time * 1000)
    }
  }
}
</script>

<style lang="less" scoped >
.user-list{
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
  .container{
    height: 100%;
    background-color: #fff;
    border-radius: 8px 8px 0 0;
    transform: translateY(100%);
    .content{
      height: 80%;
    }
  }
  .container-show{
    transform: translateY(20%);

  }
}
.user-list-show{
  background-color: #00000050;

}
</style>

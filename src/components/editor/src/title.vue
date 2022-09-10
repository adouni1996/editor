<template>
  <div class="title pr">
    <div class="svg-icon fl ac pa jc" @click="close">
      <svg-icon icon-class="btn_arror_expanded" />
    </div>
    <span class="bold">选择提醒的人</span>
  </div>
</template>

<script>
export default {
  props: {
    close: {
      type: Function,
      default: () => () => {}
    }
  }
}
</script>

<style lang="less" scoped>
.title{
  padding: 16px 20px;
  text-align: center;
  font-size: 16px;
  .svg-icon{
    left: 0px;
    width: 56px;
    height: 32px;
    top: 50%;
    transform: translateY(-50%);

  }
  svg{
    height: 16px;
    width: 16px;
  }
}
</style>

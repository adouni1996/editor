<template>
  <div class="list">
    <div class="top pr">
      <DxTextBox
        v-model="value"
        placeholder="搜索"
      />
    </div>
    <div class="list">
      <div
        v-for="(item,index) in list"
        :key="index"
        class="group"
      >
        <div class="title">
          {{ item.name }}
        </div>
        <template v-if="item.children">
          <div
            v-for="(chilItem,chilIndex) in item.children"
            :key="chilIndex"
            class="item active fl ac pr"
            contenteditable="true"
            @click="sendData(chilItem)"
          >
            <img :src="img">
            <span class="name">{{ chilItem.name }}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import img from '@/assets/img/1.png'
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    sendData: {
      type: Function,
      default: () => () => {}
    }
  },
  data: () => ({
    value: '',
    img
  })
}
</script>

<style lang="less" scoped>
.list{
  height: calc(100% - 48px);
  .top{
    padding: 0 20px;
    /deep/ .dx-placeholder{
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .list{
    margin-top: 10px;
    height: calc(100% - 41px);
    overflow-y: auto;
    .group{
      &:last-of-type{
        padding-bottom: 10px;
      }
    }
    .title{
      padding: 5px 20px;
      background-color: #eaedf0;
      color: #8D96A9;
    }
    .item{
      caret-color:transparent;
      padding: 8px 20px;
      outline: none;
      &::before{
        content: '';
        position: absolute;
        height: 1px;
        background-color: #eee;
        bottom: 0;
        width: calc(100% - 70px);
        right: 0;
      }
      &:last-of-type{
        &::before{
          display: none;
        }
      }
      img{
        border-radius: 4px;
        width: 38px;
        height: 38px;
        object-fit: cover;
      }
      .name{
        margin-left: 16px;
      }
    }
  }
}
</style>

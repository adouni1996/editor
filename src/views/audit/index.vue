<template>
  <div
    ref="audit"
    :class="{
      'audit':true,
      'audit-reachBottom':reachBottom
    }"
    :style="{
      paddingBottom:reachBottom?'0':`${ handlerHeight }px`
    }"
  >
    <Top
      :img="img"
      title="张三的生产计划申请"
      status="default"
      status-text="待审批"
    />
    <div class="container">
      <ProductionPlan />
      <ApprovalProcess />
      <Remark :remark-list="remarkList" />
    </div>
    <Handler
      ref="Handler"
      :reach-bottom="reachBottom"
      :set-handler-height="setHandlerHeight"
      :class="{
        'handler-reachBottom':reachBottom
      }"
    />
  </div>
</template>

<script>
import { isReachBottom } from '@/utils/tool'
import Handler from './modules/handler'
import { on, off } from 'devextreme/events'
export default {
  components: {

    Handler
  },
  data: () => ({
    value: '',
    reachBottom: false,
    handlerHeight: 0
  }),
  computed: {
    handlerDom() {
      return this.$refs.Handler?.$el || {}
    }
  },
  mounted() {
    this.onscroll()
  },
  methods: {
    onscroll() {
      this.setReachBottom()
      on(window, 'scroll', this.setReachBottom)
      this.$once('hook:beforeDestroy', () => {
        off(window, 'scroll', this.setReachBottom)
      })
    },
    // 判断是否到达底部
    setReachBottom(e) {
      this.setHandlerHeight()
      this.reachBottom = isReachBottom()
    },
    setHandlerHeight() {
      this.handlerHeight = this.handlerDom.clientHeight
    }
  }
}
</script>

<style lang="less" scoped>
.audit{
  // overflow: auto;
  background-color: #f4f6fb;
  .container{
    padding: 10px;
    & > div{
      margin-bottom: 11px;

    }
  }
  .handler-reachBottom{
    position: relative;
  }
}
.audit-reachBottom{
  .container{
    padding-bottom: 0;

  }

}
</style>

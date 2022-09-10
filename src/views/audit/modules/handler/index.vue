<template>
  <div class="handler">
    <XhEditor v-model="value" />
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    reachBottom: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    value: ''
  }),
  methods: {
  }
}
</script>

<style lang="less">
.handler{
  position: fixed;
  padding: 7px 20px;
  background-color: #fff;
  width: 100%;
  bottom: 0;
  left: 0;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.118);
}
</style>

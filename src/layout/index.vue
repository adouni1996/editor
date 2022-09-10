<template>
  <div class="layout-wrap">
    <div class="main-content-wrap">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    path() {
      return this.$route.path
    }
  },
  watch: {
    path: {
      handler(val) {
        if (val !== '/') return
        this.$router.push('/home')
      },
      immediate: true
    }
  }
}
</script>
<style lang='less' scoped>
.layout-wrap {
  position: relative;
}
</style>

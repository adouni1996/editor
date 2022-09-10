<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName() {
      return `#${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return `xh-svg-icon za-icon-${this.iconClass} ` + this.className
      } else {
        return `xh-svg-icon za-icon-${this.iconClass}`
      }
    }
  }
}
</script>

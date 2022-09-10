<template>
  <div>
    <div
      ref="editor"
      class="editor"
      :placeholder="placeholder"
      contenteditable="true"
      @input="input"
    />
    <UserList
      ref="UserList"
      :focus="focus"
      :add-data="addData"
    />
  </div>
</template>

<script>
import UserList from './user-list'
import { isReachBottom, toBtm } from '@/utils/tool'
export default {
  name: 'XhEditor',
  components: {
    UserList
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    valueChanged: {
      type: Function,
      default: () => () => {}
    },
    placeholder: {
      type: String,
      default: '输入你想对他/她说的话，然后@她！'
    },
    getUserList: {
      type: Function,
      default: () => () => {}
    }

  },
  data: () => ({
    isReachBottom: false,
    selectionIndex: 0,
    // 当前编辑的文档节点
    dom: {},
    // 当前编辑的文档节点的下标
    domIndex: 0

  }),
  computed: {
    editor() {
      return this.$refs.editor || {}
    }

  },
  mounted() {
    this.isReachBottom = isReachBottom()
  },
  methods: {
    addData(item) {
      const text = document.createDocumentFragment()
      // const span = document.createElement('span')
      const html = this.dom.textContent

      // 左边的节点
      const textLeft = document.createTextNode(html.substring(0, this.selectionIndex - 1) + '')
      // 这里如果textLeft是个空的文本节点，会导致@用户无法删除，这里添加一个判断，如果是空，则插入一个空的span节点
      text.appendChild(textLeft.textContent ? textLeft : textLeft)
      // 加入@人的节点
      text.appendChild(this.createAtDom(item))
      // 右边的节点
      const textRight = document.createTextNode(html.substring(this.selectionIndex, html.length))
      textRight.textContent && text.appendChild(textRight)

      this.editor.insertBefore(text, this.dom)
      this.editor.removeChild(this.dom)
    },
    createAtDom(item) {
      const dom = document.createElement('span')
      dom.classList.add('active-text')
      dom.setAttribute('contenteditable', 'false')
      dom.setAttribute('data-id', item.id)
      dom.innerHTML = `&nbsp@${item.name}&nbsp`
      return dom
    },
    async focus(type) {
      const selection = getSelection()
      selection.removeAllRanges()
      const range = new Range()

      // 添加了数据之后的聚焦
      // 没有添加数据的聚焦
      const index = (type === 'isAdd' ? this.domIndex + 2 : this.selectionIndex)
      const dom = (type === 'isAdd' ? this.editor : this.dom)
      dom.click()
      await this.$nextTick()
      range.setStart(dom, index)
      range.setEnd(dom, index)
      selection.addRange(range)
    },
    async input(e) {
      if (e.data === '@') {
        this.saveIndex()
        this.$refs.UserList.show()
        this.editor.blur()
      }
      this.$emit('input', this.getEditorHtml())
      this.valueChanged()
      this.setScroll()
    },
    async saveIndex() {
      const selection = getSelection()
      this.selectionIndex = selection.anchorOffset
      const nodeList = this.editor.childNodes
      // 保存当前编辑的dom节点

      for (const [index, value] of nodeList.entries()) {
        if (selection.containsNode(value, true)) {
          this.dom = value
          this.domIndex = index
        }
      }
    },
    getEditorHtml() {
      return this.editor.innerHTML || ''
    },
    setScroll() {
      if (this.isReachBottom && !isReachBottom()) toBtm()
      this.isReachBottom = isReachBottom()
    }
  }

}
</script>

<style lang="less" scoped>
.editor{
  overflow-y: auto;
  background: #F4F6FB;
  white-space: pre-wrap;
  border-radius: 4px;
  border: 1px solid transparent;
  min-height: 40px;
  max-height:200px;
  padding: 14px 9px;
  line-height: 20px;
  &:empty{
    &::before{
      content:'输入你想对他/她说的话，然后@她！';
      color: #999999;
    }
  }
  &:focus{
    outline: none;
    border-color: #3656C6;
    border-radius: 4px;
  }
  /deep/.active-text{
    color: #3656C6;
  }
}

</style>

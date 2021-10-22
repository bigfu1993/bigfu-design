<script lang="ts">
import { h, defineComponent } from 'vue'
interface commonType {
  [key: string]: any
}
export default defineComponent({
  name: 'FuRow',
  props: {
    align: {
      type: String,
      default: () => 'center'
    },
    justify: {
      type: String,
      default: () => 'start'
    },
    gutter: {
      type: Number || Object || Array,
      default: () => [10, 10]
    }
  },
  render() {
    let attr: commonType = {
      style: {}
    }
    let childrenAttr: commonType = {
      style: {}
    }
    let children: any | undefined = this.$slots
    let gutter: any = this.gutter
    attr.style['align-items'] = this.align
    attr.style['justify-content'] = this.justify
    if (gutter instanceof Array) {
      childrenAttr.style['padding'] = `${gutter[0] / 2}px ${gutter[1] / 2}px`
    }
    console.log(children.default())
    return h(
      'div',
      {
        class: 'fu-row',
        ...attr
      },
      {
        default: (props: any) => {
          return children.default().map((node: any) => {
            return h(node, { ...childrenAttr })
          })
        }
      }
    )
  }
})
</script>
​
<style lang="less" scoped>
.fu-row {
  display: flex;
}
</style>

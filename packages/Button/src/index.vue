<template>
  <button class="mu-button"
    @click="handleClick"
    :class="[
      type ? 'mu-button-' + type : '',
      size ? 'mu-button-' + size : '',
			shape?`shape-`+ shape:'',
      {
				'mu-button-ghost': ghost,
        'mu-button-disabled': disabled,
        'mu-button-block': block,
        'mu-button-loading': loading
      }
    ]"
    :type="type">
    <i class="mmxlicon mi-strategy mu-icon-loading"
      v-if="loading"></i>
    <i :class="icon"
      v-if="icon && !loading"></i>
    <slot name="left"></slot>
    <slot></slot>
    <slot name="right"></slot>
  </button>
</template>

<script>
export default {
  name: 'FuButton',
  props: {
    type: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String
    },
    loading: {
      type: Boolean
    },
    shape: {
      type: String
    },
    round: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    ghost: {
      type: Boolean
    },
    autofocus: {
      type: Boolean
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="less" scoped>
@import './style/index';
</style>

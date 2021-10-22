<template>
  <div style="margin:10px;">
    <h5>通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：type -> shape -> size -> loading -> disabled。</h5>
    <h3>按钮尺寸</h3>
    <div class=" button-module button-size">
      <fu-button size="mini">mini</fu-button>
      <fu-button>middle</fu-button>
      <fu-button size="large">large</fu-button>
    </div>
    <h3>按钮样式</h3>
    <div class="button-module button-style">
      <fu-button type="primary"
        shape="straight">straight</fu-button>
      <fu-button>radius</fu-button>
      <fu-button shape="circle">circle</fu-button>
    </div>
    <h3>按钮类型</h3>
    <div class="button-module button-type">
      <fu-button>default</fu-button>
      <fu-button type="primary">primary</fu-button>
      <fu-button type="dashed">dashed</fu-button>
      <fu-button type="danger">danger</fu-button>
      <fu-button type="text">text</fu-button>
    </div>
    <h3>幽灵模式</h3>
    <div class="button-module">
      <div class="button-ghost">
        <fu-button ghost>ghost</fu-button>
        <fu-button type="primary"
          ghost>ghost primary</fu-button>
        <fu-button type="dashed"
          ghost>ghost dashed</fu-button>
        <fu-button type="danger"
          ghost>ghost danger</fu-button>
        <fu-button type="text"
          ghost>ghost text</fu-button>
      </div>
    </div>
    <h3>禁用状态</h3>
    <div class="button-module button-status">
      <div class="button-line">
        <fu-button>default</fu-button>
        <fu-button disabled>disabled default</fu-button>
      </div>
      <div class="button-line">
        <fu-button type="primary">primary</fu-button>
        <fu-button type="primary"
          disabled>disabled primary</fu-button>
      </div>
      <div class="button-line">
        <fu-button type="dashed">dashed</fu-button>
        <fu-button type="dashed"
          disabled>disabled dashed</fu-button>
      </div>
      <div class="button-line">
        <fu-button type="text">text</fu-button>
        <fu-button type="text"
          disabled>text</fu-button>
      </div>
      <div class="button-line button-ghost">
        <fu-button ghost>ghost</fu-button>
        <fu-button disabled
          ghost>disabled ghost</fu-button>
      </div>
    </div>
    <h3>图标插槽</h3>
    <div class="button-module button-slot">
      <fu-button>
        <template v-slot:left>
          <i class="mmxlicon mi-scan"></i>
        </template>
        left solt
      </fu-button>
      <fu-button>
        <template v-slot:right>
          <i class="mmxlicon mi-relation"></i>
        </template>
        right solt
      </fu-button>
      <fu-button>
        <template v-slot:left>
          <i class="mmxlicon mi-oa"></i>
        </template>
        <template v-slot:right>
          <i class="mmxlicon mi-setting"></i>
        </template>
        both solt
      </fu-button>
    </div>
    <h3>loading按钮</h3>
    <div class="button-module button-loading">
      <fu-button type="primary"
        loading>disabled</fu-button>
    </div>
    <h3>block按钮</h3>
    <div class="button-module button-block">
      <fu-button block
        class="mb10">block default</fu-button><i></i>
      <fu-button type="primary"
        block
        class="mb10">block primary</fu-button><i></i>
      <fu-button type="dashed"
        block
        class="mb10">block dashed</fu-button><i></i>
      <fu-button type="danger"
        block
        class="mb10">block danger</fu-button><i></i>
      <fu-button type="text"
        block
        class="mb10">block text</fu-button>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="less" scoped>
.mb10 {
  margin-bottom: 10px;
}
h5 {
  margin: 10px 0;
}
h3 {
  margin: 10px 0;
}
.button-module {
  .button-ghost {
    padding: 10px;
    background: #000000;
    display: inline-block;
  }
  .button-line {
    margin-top: 10px;
  }
}
.button-block {
  width: 600px;
  padding: 10px;
  border: 1px solid #ddd;
}
.mu-button + .mu-button {
  margin-left: 10px;
}
.mu-button-text + .mu-button-text {
  position: relative;
  &::before {
    display: inline-block;
    content: '|';
    position: absolute;
    color: #d9d9d9;
    top: 0;
    left: -10px;
    transform: translateY(50%);
    font-size: 12px;
    margin-top: 2px;
  }
}
</style>

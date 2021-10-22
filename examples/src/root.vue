<template>
  <div class="layout">
    <div class="layout-l menu">
      <div v-for="route of routes"
        :key="route.path">
        <router-link :to="route.path">{{route.path}}（{{route.name}}）</router-link>
      </div>
    </div>
    <div class="layout-r">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Root',
  setup() {
    let routes = [
      { path: 'button', name: '按钮' },
      { path: 'grid', name: '栅格' },
      { path: 'input', name: '输入框' }
    ]
    return {
      routes
    }
  }
})
</script>

<style lang="less" scoped>
.layout {
  display: flex;
  .layout-l {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 30%;
    max-width: 150px;
    background: #d2d2d2;
  }
  .layout-r {
    width: 80%;
    height: 900px;
    flex: 1;
    overflow: auto;
  }
}
</style>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  overflow: hidden;
}
input {
  border: 1px solid #ddd;
}
#root {
  height: 100%;
}
</style>

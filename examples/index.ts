console.log(`[runtime env] : ${process.env.BUILD_ENV}`)

import { createApp, h } from "vue"
import { createRouter, createWebHashHistory } from 'vue-router'
import Root from './src/root.vue'
import routes from './router/index'
import FuDesign from '../packages/index'
import './assets/styles/iconfont.css'
let Vue = createApp({
	render: () => h(Root)
})
let Router = createRouter({
	history:  createWebHashHistory(),
	routes: routes
})
Vue.use(Router)
Vue.use(FuDesign)
Vue.mount("#root")


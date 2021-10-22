import { RouteRecordRaw } from 'vue-router'
const Button = ()=>import('../src/button/index.vue')
const Input = ()=>import('../src/input/index.vue')
const Grid = ()=>import('../src/grid/index.vue')
const routes:RouteRecordRaw[] = [
	{
		path:'/button',
		component:Button
	},
	{
		path:'/grid',
		component:Grid
	},
	{
		path:'/input',
		component:Input
	}
 ]
export default routes

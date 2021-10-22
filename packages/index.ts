import * as Fs from 'fs'
import * as Path from 'path'
import FuButton from './Button'
import FuInput from './Input'
import FuRow from './Row'
const components = [
  FuButton,FuInput,FuRow
]
const install = function (Vue:any, opts = {}) {
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
	// let Components = Fs.readdirSync(Path.resolve(__dirname, '../packages'), 'utf8')
	// Components.forEach((component:any) => {
	// 	Vue.component(`Fu${component}`, import(Path.resolve(__dirname, `./${component}/index.ts`)))
	// })
	// Vue.component('FuButton',FuButton)
	// Vue.component('FuInput',FuInput)
	// Vue.component('FuRow',FuRow)
}

export default {
	install,
	...components,
}

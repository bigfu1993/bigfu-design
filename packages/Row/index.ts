
import Row from './src/index.vue'

Row.install = function (Vue:any) {
	Vue.component('FuRow', Row)
}

export default Row

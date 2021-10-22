
import Col from './src/index.vue'

Col.install = function (Vue:any) {
	Vue.component('FuCol', Col)
}

export default Col


import Button from './src/index.vue'

Button.install = function (Vue:any) {
	Vue.component('FuButton', Button)
}

export default Button

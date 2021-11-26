import App from './App'
import uView from "uview-ui";

// #ifndef VUE3
import Vue from 'vue'
//引入vuex
import store from './store'
//把vuex定义成全局组件

Vue.prototype.$store = store
Vue.use(uView);
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$Url = "http://daby.top:3000"
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif


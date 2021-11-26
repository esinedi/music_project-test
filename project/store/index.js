import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
 
export default new Vuex.Store({
	state: {
		myCookie:''
	},
	getters: {
		
	},
	mutations: {
		myCookies(state,userCookie){
		    state.myCookie = userCookie
		},
	},
	actions: {
	},
	modules: {
		
	}
})
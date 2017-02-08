import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions.js'
import * as getters from './getters'
import data from './modules/data.js'

Vue.use(Vuex)

export default new Vuex.Store({
	actions,
	getters,
	modules: {
		data
	}
})
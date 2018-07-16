import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
  isLogin: false,
  lookData:true,
  token:''
}

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  state,
  actions,
  getters,
  mutations
})

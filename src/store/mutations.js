import * as types from './mutation-types'

export default {
  [types.UPDATEISLOGIN](state,arg){
    state.isLogin = arg;
  },
  [types.LOOKOUTDATA](state,arg){
    state.lookData=arg
  }
}

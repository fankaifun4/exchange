import * as types from './mutation-types'

export default {
  [types.UPDATEISLOGIN](state,arg){
    state.isLogin = arg;
  },
  [types.LOOKOUTDATA](state,arg){
    state.lookData=arg
  },
  [types.SETTOKEN](state,arg){
    state.token=arg
  },
  [types.CLEARTOKEN](state){
    state.token=''
  }
}

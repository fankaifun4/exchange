import * as types from './mutation-types'

export const updateIsLogin = ({commit}, arg) => {
  commit(types.UPDATEISLOGIN, arg)
}

export const lookOutData=  ({commit}, arg)=>{
  commit(types.LOOKOUTDATA, arg)
}

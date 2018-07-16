import * as types from './mutation-types'

export const updateIsLogin = ({commit}, arg) => {
  commit(types.UPDATEISLOGIN, arg)
}

export const lookOutData=  ({commit}, arg)=>{
  commit(types.LOOKOUTDATA, arg)
}

export const setToken=({commit},arg)=>{
  commit(types.SETTOKEN,arg)
}

export const clearToken=({commit})=>{
  commit(types.CLEARTOKEN)
}

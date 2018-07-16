import http from '../config/service'

/**
 *
 * @param users
 * @param pass
 * @returns { 
  "code": 200,
  "msg": "登陆成功",
  "token": "7af20f4ceb654defe51590bd5f9b73cc"
}
 */
export const login=(users,pass)=>http.post('/login',{users,pass})


import http from "../config/service";

/**
 *
 * @param mobile
 * @param email
 * @param pass
 * @param quepass
 * @param nickname
 * @param verify
 * @returns { "code": 200,
  "msg": "注册成功"}
 */
export const regUser= (mobile,email,pass,quepass,nickname,verify)=>http.post('/reg',{
  mobile,email,pass,quepass,nickname,verify
})

/**
 *
 * @param mobile
 * @returns {*}
 */
export const sendsm= (mobile)=>http.post('/sendsm',{
  mobile
})

/**
 *
 * @param email
 * @returns {*}
 */
export const sendemail= (email)=>http.post('/sendemail',{
  email
})

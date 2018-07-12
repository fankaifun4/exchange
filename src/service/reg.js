import http from "../config/service";

/**
 * 手机号：mobile
 *邮箱：email
 *推荐码：code
 *密码：pass
 *确认密码：quepass
 *昵称：nickname
 *验证码：verify
 */
export const regUser= (mobile,email,pass,quepass,nickname,verify)=>http.post('/api/reg',{
  mobile,email,pass,quepass,nickname,verify
})

/**
 *获取短信验证码:post
 *地址：域名/sendsm
 *请求参数：mobile
**/
export const sendsm= (mobile)=>http.post('/api/reg',{
  mobile
})

/**
 * 获取邮箱验证码:post
 *地址：域名/sendemail
 *请求参数：email
 **/
export const sendemail= (email)=>http.post('/api/reg',{
  email
})

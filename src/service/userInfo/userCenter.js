import http from '@/config/service'

/**
 * 登录记录
 * @returns data:[{ 
      "id": 1,
      "user_id": 6,
      "symbol": "ico",
      "value": 421,
      "freeze_value": 200,
      "in_address": null
    }]
 */
export const loginRecord = ()=>http.post('/loginRecord')

/**
 * 邀请人数
 * @returns {
  "code": 200,
  "zong": 2,   //总邀请人数
  "auth": 0,   //认证人数
  "usercode": 99571827    //推荐码
}
 */
export const Invitation = ()=>http.post('/Invitation')

/**
 * 用户中心
 * @returns {"code": 200,
  "data": {
    "mobile": "",    //手机号
    "email": "18874084967@163.com",  //邮箱
    "google": 0,    //谷歌验证
    "tx_password": null     //交易密码
  }}
 */
export const userMain=()=>http.post('/userMain')


/**
 * 绑定短信或邮箱
 * @param type 1短信，2邮箱
 * @param value 绑定的值
 * @param code 验证码
 * @param pass  登录密码
 * @returns {  
 * "code": 200,
 * "msg":"绑定成功"
 * }
 */
export const binding=(type,value,code,pass)=>http.post('/binding',{  type,value,code,pass })


/**
 * 谷歌绑定图形
 * @returns {
 * "code": "JXACTSF7UV4HTQL4",    密钥
 * 二维码
 * "img": "https://chart.googleapis.com/chart?chs=200x200&chld=M|0&cht=qr&chl=otpauth%3A%2F%2Ftotp%2F18874084966%40163.com%3Fsecret%3DJXACTSF7UV4HTQL4"
 * }
 */
export const gooleVerif=()=>http.post('/gooleVerif')


/**
 * 绑定谷歌验证器
 * code     谷歌验证码
 * secret    密钥
 * pass     登陆密码
 * @returns { 
 * "code": 200,
  * "msg":"绑定成功"
  * }
 */
export const googleBind=(code,secret,pass)=>http.post('/googleBind',{code,secret,pass})

/**
 * 更换短信绑定
 * code     验证码
 * mobile    原绑定手机号
 * newmobile   新绑定的手机号
 * @returns {  
 * "code": 200,
 * "msg":"绑定成功"
 * }
 */
export const update_binding = (code,mobile,newmobile)=>http.post('/update_binding',{code,mobile,newmobile})


/**
 * 更换邮箱绑定
 *  code     验证码
 *  mobile    原绑定邮箱号
 *  newmobile   新绑定的邮箱号
 * @returns {*}
 */
export const update_email=(code,mobile,newmobile)=>http.post('/update_email',{code,mobile,newmobile})

/**
 * 更换谷歌绑定
 * oneCode 验证码
 * @returns {*}
 */
export const update_google=(oneCode)=>http.post('/update_google',{oneCode})

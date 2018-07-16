<style lang="scss" >
  @import "../css/index.scss";
</style>
<template>
  <div class="main min-w">
    <div class="bindsms child-main min-w">
      <div class="max-w rela">
        <div class="return">
          <reback><span>绑定短信验证</span></reback>
          <form action="" name="resetPwd">
            <div class="safe-common mg-t24">
              <div class="sc-title mg-r16 ts-14 color-grey">登录密码：</div>
              <div class="sc-input">
                <div class="box-input">
                  <div class="box-input-box">
                    <span class="box-input_prefix pd-l8"></span>
                    <span  class="box-input_suffix pd-r8" style="z-index: 1;"></span>
                    <input  v-model="pass" type="password" placeholder="请输入登录密码" class="box-input_input input__input_style js_input input_big box-input_input-Light" style="padding-left: 8px; padding-right: 8px;">
                  </div>
                  <div  class="box-input_err text-left ts-12">{{passError}}</div>
                </div>
              </div>
              <div class="sc-vice-box"><p class="sc-vice router-link mg-l16 ts-12 color-theme">忘记密码</p></div>
            </div>
            <div class="safe-common mg-t24">
              <div class="sc-title mg-r16 ts-14 color-grey">手机号：</div>
              <div class="sc-input">
                <div class="box-input">
                  <div class="box-input-box">
                    <span class="box-input_prefix pd-l8"></span>
                    <span  class="box-input_suffix pd-r8" style="z-index: 1;"></span>
                    <input  v-model="value" type="text" placeholder="请输入手机号" class="box-input_input input__input_style js_input input_big box-input_input-Light" style="padding-left: 8px; padding-right: 8px;">
                  </div>
                  <div  class="box-input_err text-left ts-12">{{mobileError}}</div>
                </div>
              </div>
              <div class="sc-vice-box"><p class="sc-vice router-link mg-l16 ts-12 color-grey"></p></div>
            </div>
            <div class="safe-common mg-t24">
              <div class="sc-title mg-r16 ts-14 color-grey">验证码：</div>
              <div class="sc-input">
                <div class="countdown">
                  <div class="box-input" style="width: 212px;">
                    <div class="box-input-box">
                      <span class="box-input_prefix pd-l8"></span>
                      <span  class="box-input_suffix pd-r8" style="z-index: 1;"></span>
                      <input v-model="code" type="text"  placeholder="请输入手机验证码" class="box-input_input input__input_style js_input input_big box-input_input-Light" style="padding-left: 8px; padding-right: 8px;">
                    </div>
                    <div  class="box-input_err text-left ts-12">{{VerificationCode}}</div>
                  </div>
                  <button data-v-2947059a="" :disabled="disabled" @click="sendSMS" class="box-button mg-l8 box-btn-s_big box-btn-t_primary" style="width: 180px;">发送验证码({{timeoutSeconds}})</button>
                </div>
              </div>
              <div class="sc-vice-box"><p class="sc-vice router-link mg-l16 ts-12 color-grey"></p></div>
            </div>
            <div class="safe-common mg-t24">
              <div class="sc-title mg-r16 ts-14 color-grey"></div>
              <div class="sc-input">
                <div class="box-input">
                  <div class="box-input-box">
                    <button    class="box-button box-btn-s_big box-btn-t_primary" style="width: 400px;" @click="bindSMS">确认修改</button>
                  </div>
                  <div  class="box-input_err text-left ts-12"></div>
                </div>
              </div>
              <div class="sc-vice-box"><p class="sc-vice router-link mg-l16 ts-12 color-grey"></p></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import reback from '../components/Return'
  import {binding} from '../../../../service/userInfo/userCenter'
  import { sendsm } from "@/service/reg";
  export default {
    data(){
      return{
        type:1,
        value:"",
        code:'',
        pass:'',
        disabled:false,
        passError:'',
        mobileError:'',
        VerificationCode:'',
        timeoutSeconds:60
      }
    },
    components:{
      reback
    },
    methods:{
      async bindSMS(){

        if( this.isKong(this.pass) ){
          this.passError='原密码不能为空'
          return
        }else{
          this.passError=''
        }
        if( this.isKong(this.value) ){
          this.mobileError='手机号不能为空'
          return
        }else{
          this.mobileError=''
        }
        if( this.isKong(this.code) ){
          this.VerificationCode='验证码不能为空'
          return
        }else{
          this.VerificationCode=''
        }
        let Sms = await binding(this.type,this.value,this.code,this.pass)
        if(Sms.error){
          alert(Sms.error)
          return
        }else{
          alert('绑定短信验证成功')
        }
      },
      async sendSMS(){
        if( this.isKong(this.pass) ){
          this.passError='原密码不能为空'
          return
        }else{
          this.passError=''
        }
        if( this.isKong(this.value) ){
          this.mobileError='手机号不能为空'
          return
        }else{
          this.mobileError=''
        }
        if(this.disabled) return
        this.disabled=true
        let time = setInterval(()=>{
          if(this.timeoutSeconds>0){
            this.timeoutSeconds-=1
          }else{
            this.hasSendSMS=false
            clearInterval(time)
          }
        },1000)
        let verify = await sendsm(this.value)
        if(verify.error){
          alert( verify.error )
        }else{
          console.log( verify )
        }
      },
      isKong(val){
        let isN=/(^\s*)|(\s*$)/g
        return val.replace(isN,'').length==0? true: false
      },

    }
  }
</script>

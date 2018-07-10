<style lang="scss" >
  @import "../css/index.scss";
</style>
<template>
  <div class="main min-w">
    <div class="loginpwd child-main min-w">
      <div class="max-w rela">
        <div class="return">
          <reback><span>设置资金密码</span></reback>
          <form action="" name="resetPwd">
            <div class="safe-common mg-t24">
              <div class="sc-title mg-r16 ts-14 color-grey">设置资金密码：</div>
              <div class="sc-input">
                <div class="box-input">
                  <div class="box-input-box">
                    <span class="box-input_prefix pd-l8"></span>
                    <span  class="box-input_suffix pd-r8" style="z-index: 1;"></span>
                    <input  type="password" placeholder="请设置资金密码,8-20位字符，支持数字，字母或组合" class="box-input_input input__input_style js_input input_big box-input_input-Light" style="padding-left: 8px; padding-right: 8px;">
                  </div>
                  <div  class="box-input_err text-left ts-12"></div>
                </div>
              </div>
              <div class="sc-vice-box"><!----> <p class="sc-vice router-link mg-l16 ts-12 color-grey">8-20位字符，支持数字，字母或组合</p></div>
            </div>
            <div class="safe-common mg-t24">
              <div class="sc-title mg-r16 ts-14 color-grey">确认资金密码：</div>
              <div class="sc-input">
                <div class="box-input">
                  <div class="box-input-box">
                    <span class="box-input_prefix pd-l8"></span>
                    <span  class="box-input_suffix pd-r8" style="z-index: 1;"></span>
                    <input  type="password"  placeholder="请确认资金密码" class="box-input_input input__input_style js_input input_big box-input_input-Light" style="padding-left: 8px; padding-right: 8px;">
                  </div>
                  <div  class="box-input_err text-left ts-12"></div>
                </div>
              </div>
              <div class="sc-vice-box"><!----> <p class="sc-vice router-link mg-l16 ts-12 color-grey"></p></div>
            </div>
            <div class="safe-common mg-t24">
              <div class="sc-title mg-r16 ts-14 color-grey">登录密码：</div>
              <div class="sc-input">
                <div class="box-input">
                  <div class="box-input-box">
                    <span class="box-input_prefix pd-l8"></span>
                    <span  class="box-input_suffix pd-r8" style="z-index: 1;"></span>
                    <input  type="password" placeholder="请输入登录密码" class="box-input_input input__input_style js_input input_big box-input_input-Light" style="padding-left: 8px; padding-right: 8px;">
                  </div>
                  <div  class="box-input_err text-left ts-12"></div>
                </div>
              </div>
              <div class="sc-vice-box"><!----> <p class="sc-vice router-link mg-l16 ts-12 color-theme">忘记密码</p></div>
            </div>
            <div class="safe-common mg-t24">
              <div class="sc-title mg-r16 ts-14 color-grey">验证码：</div>
              <div class="sc-input">
                <div class="countdown">
                  <div class="box-input" style="width: 212px;">
                    <div class="box-input-box">
                      <span class="box-input_prefix pd-l8"></span>
                      <span  class="box-input_suffix pd-r8" style="z-index: 1;"></span>
                      <input  type="text"  placeholder="请输入手机验证码" class="box-input_input input__input_style js_input input_big box-input_input-Light" style="padding-left: 8px; padding-right: 8px;">
                    </div>
                    <div  class="box-input_err text-left ts-12"></div>
                  </div>
                  <button data-v-2947059a="" disabled="disabled" class="box-button mg-l8 box-btn-s_big box-btn-t_primary" style="width: 180px;">发送验证码</button>
                </div>
              </div>
              <div class="sc-vice-box"><p class="sc-vice router-link mg-l16 ts-12 color-grey"></p></div>
            </div>
            <div class="safe-common mg-t24">
              <div class="sc-title mg-r16 ts-14 color-grey"></div>
              <div class="sc-input">
                <div class="box-input">
                  <div class="box-input-box">
                    <button  disabled  class="box-button box-btn-s_big box-btn-t_primary" style="width: 400px;"><!----> 确认修改</button>
                  </div>
                  <div  class="box-input_err text-left ts-12"></div>
                </div>
              </div>
              <div class="sc-vice-box"><!----> <p class="sc-vice router-link mg-l16 ts-12 color-grey"></p></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import reback from '../components/Return'
  export default {
    data(){
      return{

      }
    },
    components:{
      reback
    }
  }
</script>

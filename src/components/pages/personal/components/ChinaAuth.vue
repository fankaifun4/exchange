<style lang="scss" scoped>
  @import "../css/id_auth.scss";
</style>
<template>
  <div class="guonei-rz entrance-box mg-t16 pd-lr24 pd-tb32">
    <div class="card-t pd-b16"><p class="color-primary ts-16">中国大陆身份认证</p> <p class="ts-12 color-grey mg-t8"><span>*</span>请确保使用的是真实身份，平台会加密存储您的身份信息并自动审核，即便是平台工作人员也无法查看，请放心填写。</p></div>
    <div class="card-b pd-t24 pd-b24">
      <div class="chinad">
        <div class="el-form w-600 el-form--label-right">
          <div class="el-form-item">
            <label for="first_name" class="el-form-item__label" style="width: 240px;">姓氏：</label>
            <div class="el-form-item__content" style="margin-left: 240px;">
              <div >
                <div  class="box-input-box">
                  <span  class="box-input_prefix pd-l8"></span>
                  <span  class="box-input_suffix pd-r8" style="z-index: 1;"></span>
                  <input  v-model="userInfo.user" type="text" placeholder="请输入身份证上的姓氏" class="box-input_input input__input_style js_input input_normal box-input_input-Light" style="padding-left: 8px; padding-right: 8px;">
                </div>
                <div  class="box-input_err text-left ts-12"></div>
              </div>
            </div>
          </div>
          <div class="el-form-item">
            <label for="first_name" class="el-form-item__label" style="width: 240px;">名字：</label>
            <div class="el-form-item__content" style="margin-left: 240px;">
              <div >
                <div  class="box-input-box">
                  <span  class="box-input_prefix pd-l8"></span>
                  <span  class="box-input_suffix pd-r8" style="z-index: 1;"></span>
                  <input  type="text" placeholder="请输入身份证上的名字" class="box-input_input input__input_style js_input input_normal box-input_input-Light" style="padding-left: 8px; padding-right: 8px;">
                </div>
                <div  class="box-input_err text-left ts-12"></div>
              </div>
            </div>
          </div>
          <div class="el-form-item">
            <label for="first_name" class="el-form-item__label" style="width: 240px;">有效身份证：</label>
            <div class="el-form-item__content" style="margin-left: 240px;">
              <div >
                <div  class="box-input-box">
                  <span  class="box-input_prefix pd-l8"></span>
                  <span  class="box-input_suffix pd-r8" style="z-index: 1;"></span>
                  <input  type="text" placeholder="请输入身份证号" class="box-input_input input__input_style js_input input_normal box-input_input-Light" style="padding-left: 8px; padding-right: 8px;">
                </div>
                <div  class="box-input_err text-left ts-12"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-bt">
          <div class="idcard">
            <div class="el-form clearfix mg-t24 el-form--label-right">
              <div class="el-form-item">
                <label for="file" class="el-form-item__label" style="width: 240px;">本人身份证正面照片：</label>
                <div class="el-form-item__content" style="margin-left: 240px;">
                  <p class="ts-12 color-grey marginNo"><span style="color: #ff8838;">*</span> 证件需在有效期内，照片文字清晰可见，图片格式支持 .jpg .png。</p>
                  <div element-loading-text="上传中" element-loading-spinner="el-icon-loading"
                       element-loading-background="rgba(0,255,0,.3)" class="ww mg-t4 pull-left czheng">
                    <span class="error-position ts-12">上传失败，请重新上传</span>
                    <div>
                      <div tabindex="0" class="el-upload el-upload--text">
                        <input type="file" name="file" class="el-upload__input">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="el-form-item clearfix mg-t24">
                <label class="el-form-item__label" style="width: 240px;">本人身份证背面照片：</label>
                <div class="el-form-item__content" style="margin-left: 240px;">
                  <div element-loading-text="上传中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0,255,0,.3)" class="ww mg-8 pull-left cfan">
                    <span class="error-position ts-12">上传失败，请重新上传</span>
                    <div>
                      <div tabindex="0" class="el-upload el-upload--text">
                        <input type="file" name="file" class="el-upload__input">
                      </div>
                    </div>
                  </div> <!----><!---->
                </div>
              </div>
              <div class="el-form-item clearfix mg-t24">
                <label class="el-form-item__label" style="width: 240px;">手持本人身份证正面照和个人签字：</label>
                <div class="el-form-item__content" style="margin-left: 240px;">
                  <p class="ts-12 color-grey marginNo conditions"><span style="color: #ff8838;">*</span> 请您上传一张手持身份证正面照和个人签字的照片，个人签字的内容包含“<span style="color: #ffffff;">CoinPark</span>”和<span style="color: #ffffff;">当前日期</span>，请确保照片和个人签字的内容清晰可见。</p>
                  <p class="ts-12 color-grey marginNo conditions mg-t8 mg-b16"><span><span class="dian">•</span>   人像清晰</span><span><span class="mg-l16 dian">•</span>   证件号码清晰</span><span><span class="mg-l16 dian">•</span>   手写文字清晰</span><span><span class="mg-l16 dian">•</span>   手写文字包含当前信息</span></p>
                  <div element-loading-text="上传中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0,255,0,.3)" class="ww pull-left cshou">
                    <span class="error-position ts-12">上传失败，请重新上传</span>
                    <div>
                      <div tabindex="0" class="el-upload el-upload--text">
                        <input type="file" name="file" class="el-upload__input">
                      </div>
                    </div>
                  </div>
                  <div class="pull-left instance mg-l40"><!----> <img src="../../../../assets/img/shili.jpg" alt=""> <div class="meng ts-16" @click="lookShili">查看示例</div></div>
                </div>

              </div>
              <div class="el-form-item pd-t24 commitborder">
                <div class="el-form-item__content" style="margin-left: 240px;">
                  <div class="errC text-red"></div>
                  <button  class="box-button box-btn-s_normal box-btn-t_primary" @click="submitChinaAuth"><!----> 提交</button>
                  <!---->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <lookout :open="lookSh" @closeShap="closeShap">
        <img src="/static/img/shili.jpg" alt="">
    </lookout>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        lookSh:false,
        userInfo:{
          firstName:"",
          lastName:"",
          code:""

        }
      }
    },
    methods:{
      lookShili(){
        this.lookSh=true
      },
      closeShap(){
        this.lookSh=false
      },
      submitChinaAuth(){

      }
    }
  }
</script>

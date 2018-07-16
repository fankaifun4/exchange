<style lang="scss" scoped>
  @import "../css/index.scss";
  @media screen and(max-width: 900px) {
    .googlebox{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      >div{
        margin-bottom:40px;
        width:80%;
      }
      .download{
        padding-left:40px;
        .down-list{
          padding-left:40px;
        }
      }
    }
  }
  @media screen and(min-width: 900px) {
    .googlebox{
      display: flex;
      justify-content: center;
      align-items:flex-start;
    }
  }
  .googlebox{
    .down-list{
      >div{
        width:160px;
        height:48px;
        position: relative;
        >img{
          display: block;
          border:none;
          width:100%;
        }
        &:hover .icon{
          display: block;
        }
      }
    }
    .icon{
      width:150px;
      height: 150px;
      padding:10px;
      background: #fff;
      position: absolute;
      right:-190px;
      top:-51px;
      display: none;
      border-radius: 5px;
      >img{
        width: 100%;
      }
      &:after{
        position: absolute;
        content: "";
        width:0;
        height:0;
        border: 10px solid transparent;
        border-right:10px solid #fff;
        left:-19px;
        top:65px;
      }
    }
    .sm-2wm{
      width:170px;
      height: 170px;
      margin: 0 auto;
      background:#fff;
      padding:10px;
      box-sizing: border-box;
      .l2wm-wp{
        >img{
          width:100%;
          border:none;
        }
      }
      .input__input_style.input_normal{
        height: 36px;
      }
      .input__input_style{
        outline: none;
        border: 1px solid transparent;
        box-sizing: border-box;
        width: 100%;
        border-radius: 3px;
        background-color: #363c47;
        padding-left: 8px;
        color: #fff;
      }
    }
    .clearfix{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .width-260 {
      width: 260px;
    }
    .input_normal{
      height:36px;
      line-height: 36px;
    }
  }
</style>
<template>
  <div class="main min-w">
    <div class="bindsms child-main min-w">
      <div class="max-w rela">
        <div class="return">
          <reback><span>开启谷歌验证</span></reback>
          <div class="googlebox clearfix">
            <div class="download  pd-r40 ">
                <div  class="ts-16 color-primary marginNo mg-b16 delails"><span class="ts-16">1. 下载并安装</span></div>
                <div class="down-list">
                  <div class="mg-t8">
                    <img src="../../../../assets/img/google-down.png" alt="">
                    <div class="icon"><img src="../../../../assets/img/app2wm.png" alt=""></div>
                  </div>
                  <div class="mg-t8">
                    <img src="../../../../assets/img/yingyongbao-down.png" alt="">
                    <div class="icon"><img src="../../../../assets/img/app2wm.png" alt=""></div>
                  </div>
                  <div class="mg-t8">
                    <img src="../../../../assets/img/appstore-down.png" alt="">
                    <div class="icon"><img src="../../../../assets/img/yyb2wm.png" alt=""></div>
                  </div>
                </div>
              </div>
            <div class="scanning  pd-l40 pd-r40 ">
              <p  class="ts-16 color-primary marginNo mg-b16">2. 扫描二维码</p>
              <div class="sm-2wm">
                <div class="l2wm-wp">
                  <img :src="googleView.img" alt="">
                </div>
              </div>
              <div  class="key clearfix mg-t16">
                <p  class="ts-12 color-grey  marginNo">密钥：</p>
                <div   readonly="readonly"
                     class="width-260  mg-l16 ts-12 pset-text"
                     :data-clipboard-text="googleView.code" data-tooltips="点击复制">
                  <div  class="box-input-box">
                    <input type="text"  :value="googleView.code" class=" input__input_style  input_normal " readonly="readonly" style="padding-left: 8px; padding-right: 8px;">
                  </div>
                </div>
              </div>
            </div>
            <div class="seting  pd-l40">
              <p  class="ts-16 color-primary marginNo mg-b16">3. 完成设置</p>
              <div class="safe-common mg-t24">
                <div class="sc-title mg-r16 ts-14 color-grey" style="width: 140px;">登录密码：</div>
                <div class="sc-input" style="width: 260px;">
                  <div class="box-input">
                    <div class="box-input-box">
                      <span  class="box-input_prefix pd-l8"></span>
                      <span  class="box-input_suffix pd-r8" style="z-index: 1;"></span>
                      <input type="password" v-model="pass"  placeholder="请输入登录密码 " class="box-input_input input__input_style js_input input_big box-input_input-Light" style="padding-left: 8px; padding-right: 8px;">
                    </div>
                    <div class="box-input_err text-left ts-12">{{passError}}</div>
                  </div>
                </div>
                <div class="sc-vice-box" style="width: 130px;"><!----> <p class="sc-vice router-link mg-l16 ts-12 color-theme">忘记密码</p></div>
              </div>
              <div class="safe-common mg-t24">
                <div class="sc-title mg-r16 ts-14 color-grey" style="width: 140px;">谷歌验证码：</div>
                <div class="sc-input" style="width: 260px;">
                  <div class="box-input">
                    <div class="box-input-box">
                      <span  class="box-input_prefix pd-l8"></span>
                      <span  class="box-input_suffix pd-r8" style="z-index: 1;"></span>
                      <input type="text" v-model="code" placeholder="请谷歌验证码 " class="box-input_input input__input_style js_input input_big box-input_input-Light" style="padding-left: 8px; padding-right: 8px;">
                    </div>
                    <div class="box-input_err text-left ts-12">{{codeError}}</div>
                  </div>
                </div>
                <div class="sc-vice-box" style="width: 130px;"><!----> <p class="sc-vice router-link mg-l16 ts-12 color-theme"></p></div>
              </div>
              <div class="safe-common mg-t24">
                <div class="sc-title mg-r16 ts-14 color-grey" style="width: 140px;"></div>
                <div class="sc-input" style="width: 260px;">
                  <div class="box-input">
                    <div class="box-input-box">
                      <button @click="googleBindData" class="box-button box-btn-s_big box-btn-t_primary" style="width: 260px;"><!----> 确认</button>
                    </div>
                  </div>
                </div>
                <div class="sc-vice-box" style="width: 130px;"><!----> <p class="sc-vice router-link mg-l16 ts-12 color-theme"></p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import reback from '../components/Return'
  import {gooleVerif,googleBind} from '@/service/userInfo/userCenter'
  import {isKong} from "../../../../factory";

  export default {
    data(){
      return{
        googleView:{
          code:'',
          img:''
        },
        pass:'',
        code:'',
        passError:'',
        codeError:''
      }
    },
    components:{
      reback
    },
    created(){
      this.getGooleVerif()
    },
    methods:{
      async getGooleVerif(){
        let googleView= await  gooleVerif()
        if( googleView.error ){

        }else{
          this.googleView=googleView.data
        }
      },
      async googleBindData(){
        if(isKong(this.pass) ){
          this.passError='密码不能为空'
          return
        }
        if(isKong(this.code)){
          this.codeError='验证码不能为空'
          return
        }
        let bind= await googleBind(this.code,this.googleView.code,this.pass)
        console.log(bind)
        if(bind.error){
          alert('绑定失败')
        }else{
          alert('绑定成功')
        }
      },
    }
  }
</script>

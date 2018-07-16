<template>
  <div class="login">
    <p class="top">
      Bibox 强强联手 Bibox Fund, FBG, 丹华资本，BlockWater Capital，八维资本，臻果基金 等全球顶级数字基金，战略投资 CoinPark。
在CoinPark交易即挖矿，手续费100%返利，上线前两周持CP再享100%收益分红，后将调整为90%。
    </p>
    <div class="box" v-if="pageData==0">
      <p class="title">登录</p>
      <p class="inp">
        <input type="text" placeholder="请输入手机号码" v-model="userInfo.users">
      </p>
      <p class="inp">
        <input type="password" placeholder="请输入密码"  v-model="userInfo.pass">
      </p>
      <p class="btn" @click="login">登录</p>
      <div class="bot">
        <p @click="forget()">忘记密码</p>
        <p>
          <span>还没有账号？</span>
          <span @click="change()">注册</span>
        </p>
      </div>
    </div>
    <div class="box" v-else>
      <p class="title">注册</p>
      <p class="inp">
        <input type="text" placeholder="请输入手机号码"  v-model="regInfo.mobile">
      </p>
      <p class="inp">
        <input type="password" maxlength="20" placeholder="请设置密码"  v-model="regInfo.pass">
      </p>
      <p class="inp">
        <input type="password"  maxlength="20"  placeholder="请确认密码"  v-model="regInfo.quepass">
      </p>
      <div class="code">
        <input type="text" placeholder="请输入验证码"  v-model="regInfo.verify">
        <p @click="getVerify">获取验证码({{timeoutSeconds}})</p>
      </div>
      <p class="btn" @click="register()">注册</p>
      <div class="bot">
        <p></p>
        <p>
          <span style="color: #27b7c2;" @click="change()">登录</span>
        </p>
      </div>
    </div>
    <v-props v-if="isProps" @emitMsg="recMsg" :parent-data="childPropsData"></v-props>
  </div>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs';
  import Props from "../common/Props";
  import {login} from '@/service/login'
  import { regUser , sendsm } from "@/service/reg";

  export default {
    name: "login",
    data () {
      return {
        userInfo:{
          users:"",
          pass:""
        },
        timeoutSeconds:60,
        regInfo:{
          mobile:'',
          email:'',
          code:'',
          pass:'',
          quepass:'',
          nickname:'',
          verify:''
        },
        hasSendSMS:false,
        isProps: false,
        childPropsData:{type:0,title:"",text:"",name:""},
        pageData: 0,
        title:"",
        btnTxt: "",
        changeTxt: "",
      };
    },
    created(){
      this.$parent.isHead = true;
      this.isProps = true;
      this.childPropsData = {
        type: 2,
        title: "温馨提示",
        text: "数字资产是创新型的投资产品，价格波动较大，请您理性判断自己的投资能力，审慎做出投资决策，祝您交易愉快！"
      };
      this.pageData = this.$route.query.pageData;
    },
    mounted () {

    },
    methods: {
      recMsg(msg){
        if(msg.name=="entrue"){
          this.isProps = false;
        }
      },
      done(){
        if(this.pageData==0){
          this.isProps = true;
          this.childPropsData = {
            type: 0,
            title: "登录成功",
          };
          this.$store.dispatch("updateIsLogin",true);
          sessionStorage.isLogin = true;
          this.$router.push("index");
        }
      },
      forget(){
        this.pageData = 2;
      },
      change(){
        this.pageData=this.pageData==0 ?  1 : 0;
      },
      async login(){
        let isN=/(^\s*)|(\s*$)/g
        if(this.userInfo.users.replace(isN,'').length==0 || this.userInfo.pass==''){
          return
        }
        this.loginApp('adkas+klasjdlkj1239==1232uadjasdlkjasdasdasd121312fewr14')
        return
        let logins = await login(this.userInfo.users,this.userInfo.pass)
        if(logins){
         if(logins.error){
           alert(logins.error)
         }else{
           this.loginApp(logins.token)
         }
        }
      },
      loginApp(token){
        this.$router.push({name:'index'})
        this.$store.dispatch('setToken',token)
        this.$store.dispatch("updateIsLogin",true)
        sessionStorage.token=this.$store.state.token
        sessionStorage.isLogin=true
      },
      async getVerify(){
        if(this.hasSendSMS) return
        this.hasSendSMS=true
        let mobile=this.regInfo.mobile
        if(this.isKong(mobile)){
          this.hasSendSMS=false
          alert('手机号码不能为空')
          return
        }
        let time = setInterval(()=>{
          if(this.timeoutSeconds>0){
            this.timeoutSeconds-=1
          }else{
            this.hasSendSMS=false
            clearInterval(time)
          }
        },1000)
        let verify = await sendsm(mobile)
        if(verify.error){
          alert( verify.error )
        }else{
          console.log( verify )
        }
      },
      async register(){
        let mobile=this.regInfo.mobile
        let pass = this.regInfo.pass
        let quepass= this.regInfo.quepass
        let verify= this.regInfo.verify
        let email = this.regInfo.email
        let code = this.regInfo.code
        let nickname= this.regInfo.nickname
        if( this.isKong(mobile) ){
          alert('请输入电话号码')
          return
        }
        if( this.isKong(pass) ){
          alert('请输入您的登录密码')
          return
        }
        if(this.isKong(quepass)){
          alert('请再次确认您的登录密码')
          return
        }
        if(this.isKong(verify)){
          alert('验证码不能为空')
          return
        }
        if(  pass != quepass ){
          alert('登录密码，和确认密码不同')
          return
        }
        if( pass.length<8 || pass.length>20 ){
          alert('密码长度至少8位到20位字符')
          return
        }
        let reg = await regUser(mobile,email,pass,quepass,nickname,verify)
        if(reg.error){
          alert(reg.error)
          return
        }else{
          let logins = await login(mobile,pass)
          if(logins.error){
            alert(logins.error)
            return
          }else{
            this.loginApp(logins.token)
          }
        }
      },

      isKong(val){
        let isN=/(^\s*)|(\s*$)/g
        return val.replace(isN,'').length==0? true: false
      }
    },
    watch: {
      $route(to, from) {
        console.log(to)
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        this.pageData = to.query.pageData;
      }
    },
    components: {
      vProps:Props
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width: 900px) {
  .login{
    width: 100%;
    background: #1d2129;
    padding-bottom:100px;
  }
  .login .top{
    font-size: 16px;
    line-height: 30px;
    color: #80f2ff;
    width: 1040px;
    padding: 20px 80px;
    border: 2px solid #242933;
    margin: 30px auto;
  }
  .login .box{
    width: 350px;
    padding: 30px;
    background: #fff;
    border-radius: 5px;
    margin: 0 auto;
  }
  .login .box .title{
    font-size: 18px;
    color: #0098a3;
    line-height: 30px;
  }
  .login .inp input{
    width:100%;
    background: #fff;
    font-size: 16px;
    text-indent: 10px;
    line-height: 40px;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    margin-top: 20px;
  }
  .login .code::after{
    content: "";
    display: block;
    clear: both;
    overflow: hidden;
  }
  .login .code input{
    width: 190px;
    background: #fff;
    font-size: 16px;
    text-indent: 10px;
    line-height: 40px;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    margin-top: 20px;
    float: left;
  }
  .login .code p{
    padding:0 15px;
    background: #52c5ce;
    font-size: 16px;
    color: #fff;
    text-indent: 10px;
    line-height: 40px;
    border-radius: 4px;
    /* border: 1px solid #d9d9d9; */
    margin-top: 20px;
    float: right;
    cursor: pointer;
  }
  input:focus{
    border-color: #27b7c2;
  }
  .login .btn{
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    width: 100%;
    border-radius: 5px;
    color: #fff;
    background: #52c5ce;
    margin-top: 30px;
    cursor: pointer;
  }
  .login .bot{
    margin-top: 10px;
    color: #27b7c2;
  }
  .login .bot::after{
    content: "";
    display: block;
    clear: both;
    overflow: hidden;
  }
  .login .bot p:nth-child(1){
    float: left;
    cursor: pointer;
  }
  .login .bot p:nth-child(2){
    float: right;
    cursor: pointer;
  }
  .login .bot p:nth-child(2) span:nth-child(1){
    cursor: auto;
    color: #333;
  }
}
@media screen and (max-width: 900px) {
  .login{
    width: 100%;
    padding-bottom:100px;
    background: #1d2129;
  }
  .login .top{
    font-size: 16px;
    line-height: 30px;
    color: #80f2ff;
    width: 600px;
    padding: 20px 80px;
    border: 2px solid #242933;
    margin: 30px auto;
  }
  .login .box{
    width: 350px;
    padding: 30px;
    background: #fff;
    border-radius: 5px;
    margin: 0 auto;
  }
  .login .box .title{
    font-size: 18px;
    color: #0098a3;
    line-height: 30px;
  }
  .login .inp input{
    width: 100%;
    background: #fff;
    font-size: 16px;
    text-indent: 10px;
    line-height: 40px;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    margin-top: 20px;
  }
  .login .code::after{
    content: "";
    display: block;
    clear: both;
    overflow: hidden;
  }
  .login .code input{
    width: 190px;
    background: #fff;
    font-size: 16px;
    text-indent: 10px;
    line-height: 40px;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    margin-top: 20px;
    float: left;
  }
  .login .code p{
    padding:0 15px;
    background: #52c5ce;
    font-size: 16px;
    color: #fff;
    text-indent: 10px;
    line-height: 40px;
    border-radius: 4px;
    /* border: 1px solid #d9d9d9; */
    margin-top: 20px;
    float: right;
    cursor: pointer;
  }
  input:focus{
    border-color: #27b7c2;
  }
  .login .btn{
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    width: 100%;
    border-radius: 5px;
    color: #fff;
    background: #52c5ce;
    margin-top: 30px;
    cursor: pointer;
  }
  .login .bot{
    margin-top: 10px;
    color: #27b7c2;
  }
  .login .bot::after{
    content: "";
    display: block;
    clear: both;
    overflow: hidden;
  }
  .login .bot p:nth-child(1){
    float: left;
    cursor: pointer;
  }
  .login .bot p:nth-child(2){
    float: right;
    cursor: pointer;
  }
  .login .bot p:nth-child(2) span:nth-child(1){
    cursor: auto;
    color: #333;
  }
}
</style>

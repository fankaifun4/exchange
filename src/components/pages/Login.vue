<template>
  <div class="login">
    <p class="top">
      Bibox 强强联手 Bibox Fund, FBG, 丹华资本，BlockWater Capital，八维资本，臻果基金 等全球顶级数字基金，战略投资 CoinPark。
在CoinPark交易即挖矿，手续费100%返利，上线前两周持CP再享100%收益分红，后将调整为90%。
    </p>
    <div class="box">
      <p class="title">{{title}}</p>
      <p class="inp">
        <input type="text" placeholder="请输入手机号码">
      </p>
      <p v-if="pageData==1" class="inp">
        <input type="password" placeholder="请设置密码">
      </p>
      <p v-if="pageData==1" class="inp">
        <input type="password" placeholder="请确认密码">
      </p>
      <div v-if="pageData==1" class="code">
        <input type="password" placeholder="请输入验证码">
        <p>获取验证码</p>
      </div>
      <p v-if="pageData==0" class="inp">
        <input type="password" placeholder="请输入密码">
      </p>
      <p class="btn" @click="done()">{{btnTxt}}</p>
      <div class="bot">
        <p v-show="pageData==0" @click="forget()">忘记密码</p>
        <p>
          <span>{{pageData==0 ? "还没有账号？" : "已有账号？"}}</span>
          <span @click="change()">{{changeTxt}}</span>
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

  export default {
    name: "login",
    data () {
      return {
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
      switch(Number(this.pageData)){
        case 0:
          this.title = "登录";
          this.btnTxt = "登录";
          this.changeTxt = "注册";
          console.log(this.title)
          break;
        case 1:
          this.title = "注册";
          this.btnTxt = "注册";
          this.changeTxt = "登录";
          break;
        case 2:
          this.title = "找回密码";
          this.btnTxt = "确定";
          this.changeTxt = "注册";
          break;
      }
      // console.log(this.$route)
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
        this.pageData==0 ? this.pageData = 1 : this.pageData = 0;
      },
    },
    watch: {
      $route(to, from) {
        console.log(to)
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        this.pageData = to.query.pageData;
        // console.log(to)
      },
      pageData: function(val, oldVal) {
        switch(Number(val)){
          case 0:
            this.title = "登录";
            this.btnTxt = "登录";
            this.changeTxt = "注册";
            console.log(this.title)
            break;
          case 1:
            this.title = "注册";
            this.btnTxt = "注册";
            this.changeTxt = "登录";
            break;
          case 2:
            this.title = "找回密码";
            this.btnTxt = "确定";
            this.changeTxt = "注册";
            break;
        }
      },
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
    position: fixed;
    top:60px;
    bottom: 0;
    background: #1d2129;
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
    width: 320px;
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
    width: 320px;
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
    width: 100px;
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
    width: 322px;
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
    position: fixed;
    top:40px;
    bottom: 0;
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
    width: 320px;
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
    width: 320px;
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
    width: 100px;
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
    width: 322px;
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
<template>
  <div class="introduce">
    <div class="i-head">
      <div class="content">
        <img src="../../../static/img/logo1.jpg" alt="">
        <div class="right">
          <span>提交请求</span>
          <span @click="toLogin()">登录</span>
        </div>
      </div>
    </div>
    <h2>
      <span class="active" @click="toIndex()">CoinPark</span>
      <span :class="isDetails?'active':''" @click="toItem()">> 帮助中心</span>
      <span v-if="isDetails">> 常见问题</span>
    </h2>
    <div v-if="!isDetails" class="title-box">
      <p>帮助中心</p>
      <p>常见问题</p>
      <ul>
        <li :class="item.isActive" v-for="(item,index) in titles" :key="item.index" @click="toContent(index,item)">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div v-if="isDetails" class="box">
      <ul class="title">
        <li :class="item.isActive" v-for="(item,index) in titles" :key="item.index" @click="changeContent(index)">
          {{item.name}}
        </li>
      </ul>
      <div class="content">
        <h3>CoinPark充值、提现到账时间及限制说明</h3>
        <div class="small">
          <img src="../../../static/img/logo2.jpg" alt="">
          <div>
            <p>CoinPark</p>
            <p>3 天前 更新于</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs';

  export default {
    name: "introduce",
    data () {
      return {
        isDetails: false,
        titles: [
          {isActive:"active",name:"CoinPark充值、提现到账时间及限制说明"},
          {isActive:"",name:"交易挖矿规则说明"},
          {isActive:"",name:"CoinPark分红细则"},
          {isActive:"",name:"费率说明"}
        ],
      };
    },
    created(){
      this.$parent.isHead = false;
      
    },
    mounted () {
   
    },
    methods: {
      toLogin(){
         this.$router.push({ path: "/login", query: { pageData: 0 } });
      },
      toIndex(){
        this.$router.push("index");
      },
      toItem(){
        this.isDetails = false;
      },
      toContent(idx,item){
        this.isDetails = true;
      },
      changeContent(idx,item){
        
      },
    },
    watch: {
      
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width: 900px) {
  .introduce{
    color: #333;
  }
  .introduce .i-head{
    width: 1920px;
    height: 70px;
    border-bottom: 1px solid #ccc;
  }
  .introduce .i-head .content{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .introduce .i-head .content img{
    width: 150px;
    height: 40px;
    margin-top: 15px;
  }
  .introduce .i-head .content{
    color: #27b7c2;
    font-size: 18px;
    line-height: 70px;
  }
  .introduce .i-head .content span{
    margin-left: 30px;
    cursor: pointer;
  }
  .introduce .i-head .content span:hover{
    text-decoration: underline;
  }
  .introduce h2{
    font-size: 18px;
    font-weight: 400;
    line-height: 70px;
    width: 1200px;
    margin: 0 auto 10px;
  }
  .introduce h2 .active{
    color: #27b7c2;
    cursor: pointer;
  }
  .introduce h2 .active:hover{
    text-decoration: underline;
  }
  .introduce .title-box{
    width: 900px;
    margin: 0 auto;
  }
  .introduce .title-box p:nth-child(1){
    font-size: 24px;
    line-height: 55px;
    /* font-weight: 700; */
  }
  .introduce .title-box p:nth-child(2){
    font-size: 18px;
    line-height: 35px;
    font-weight: 700;
  }
  .introduce .title-box li{
    font-size: 16px;
    line-height: 50px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
  }
  .introduce .title-box li:hover{
    text-decoration: underline;
  }
  .introduce .box{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .introduce .box .title li{
    font-size: 16px;
    width: 160px;
    line-height: 25px;
    padding: 10px 20px;
    border-radius: 8px;
    margin-bottom: 15px;
  }
  .introduce .box .title li.active,.introduce .box .title li:hover{
    background: #27b7c2;
    color: #fff;
  }
  .introduce .box .content{
    width: 960px;
  }
  .introduce .box .content h3{
    font-size: 28px;
  }
  .introduce .box .content .small{
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 12px;
  }
  .introduce .box .content .small img{
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
}
@media screen and (max-width: 900px) {
   .introduce{
    color: #333;
  }
  .introduce .i-head{
    width: 750px;
    height: 40px;
    border-bottom: 1px solid #ccc;
  }
  .introduce .i-head .content{
    width: 700px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .introduce .i-head .content img{
    width: 70px;
    height: 20px;
    margin-top: 10px;
  }
  .introduce .i-head .content{
    color: #27b7c2;
    font-size: 14px;
    line-height: 40px;
  }
  .introduce .i-head .content span{
    margin-left: 20px;
    cursor: pointer;
  }
  .introduce .i-head .content span:hover{
    text-decoration: underline;
  }
  .introduce h2{
    font-size: 18px;
    font-weight: 400;
    line-height: 70px;
    width: 700px;
    margin: 0 auto 10px;
  }
  .introduce h2 .active{
    color: #27b7c2;
    cursor: pointer;
  }
  .introduce h2 .active:hover{
    text-decoration: underline;
  }
  .introduce .title-box{
    width: 600px;
    margin: 0 auto;
  }
  .introduce .title-box p:nth-child(1){
    font-size: 24px;
    line-height: 55px;
    /* font-weight: 700; */
  }
  .introduce .title-box p:nth-child(2){
    font-size: 18px;
    line-height: 35px;
    font-weight: 700;
  }
  .introduce .title-box li{
    font-size: 16px;
    line-height: 50px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
  }
  .introduce .title-box li:hover{
    text-decoration: underline;
  }
  .introduce .box{
    width: 700px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .introduce .box .title li{
    font-size: 14px;
    width: 120px;
    line-height: 25px;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 15px;
  }
  .introduce .box .title li.active,.introduce .box .title li:hover{
    background: #27b7c2;
    color: #fff;
  }
  .introduce .box .content{
    width: 560px;
    margin-left: 40px;
  }
  .introduce .box .content h3{
    font-size: 24px;
  }
  .introduce .box .content .small{
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 12px;
  }
  .introduce .box .content .small img{
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
}
</style>
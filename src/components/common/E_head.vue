<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@media screen and (min-width: 900px) {
  .e-head{
    height: 60px;
    background: #242933;
  }
  .e-head .logo{
    height: 40px;
    float: left;
    margin: 10px 25px auto 20px;
    cursor: pointer;
  }
  .e-head .base-line{
    width: 1px;
    height: 30px;
    float: left;
    background: #666;
    margin-top: 15px;
  }
  .e-head .content .title{
    color: #fff;
    font-size: 14px;
    line-height: 60px;
    float: left;
    margin-left: 25px;
    cursor: pointer;
  }
  .e-head .content .title:hover{
    color: #27b7c2;
  }
  .e-head .right{
    float: right;
    margin-right: 15px;
    .user-list{
      width:400px;
      height:300px;
      background: #fff;
    }
  }
  .e-head .right .ways{
    float: left;
    font-size: 14px;
    color: #27b7c2;
    line-height: 32px;
    margin-top: 14px;
    margin-right: 15px;
    padding: 0 10px;
    cursor: pointer;
    position:relative;
  }
  .e-head .right .ways.active{
    color: #fff;
    background: #27b7c2;
  }
  .e-head .right .user{
    float: left;
    color: #fff;
  }
  .e-head .right .user img{
    height: 30px;
    margin-top: 12px;
    float: left;
    cursor: pointer;
  }
  .e-head .right .user span{
    float: left;
    margin: 0 15px auto 0;
    line-height: 60px;
    cursor: pointer;
  }
  .e-head .right .user span:nth-child(1){
    margin-left: 5px;
  }
  .e-head .right .user span:hover{
    color: #27b7c2;
  }
  .e-head .right .info{
    float: left;
    cursor: pointer;
    /* padding: 0 10px; */
    position: relative;
  }
  .e-head .right .info span{
    display: inline-block;
    font-size: 14px;
    color: #fff;
    line-height: 32px;
    padding: 14px 15px 14px;
  }
  .e-head .right .info ul{
    font-size: 16px;
    color: #fff;
    width: 90px;
    line-height: 40px;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: -110px;
    background: #2C3548;
    z-index: 999;
  }
  .e-head .right .info ul li:hover{
    background: #666;
  }
}

@media screen and (max-width: 900px) {
  .e-head{
    height: 40px;
    background: #242933;
  }
  .e-head .logo{
    height: 30px;
    float: left;
    margin: 5px 15px auto 20px;
    cursor: pointer;
  }
  .e-head .base-line{
    width: 1px;
    height: 20px;
    float: left;
    background: #666;
    margin-top: 10px;
  }
  .e-head .content .title{
    color: #fff;
    font-size: 14px;
    line-height: 40px;
    float: left;
    margin-left: 15px;
    cursor: pointer;
  }
  .e-head .content .title:hover{
    color: #27b7c2;
  }
  .e-head .right{
    float: right;
    margin-right: 15px;
  }
  .e-head .right .ways{
    float: left;
    font-size: 14px;
    color: #27b7c2;
    line-height: 20px;
    margin-top: 10px;
    margin-right: 15px;
    padding: 0 10px;
    cursor: pointer;
  }
  .e-head .right .ways.active{
    color: #fff;
    background: #27b7c2;
  }
  .e-head .right .user{
    float: left;
    color: #fff;
  }
  .e-head .right .user img{
    height: 20px;
    margin-top: 10px;
    float: left;
    cursor: pointer;
  }
  .e-head .right .user span{
    float: left;
    margin: 0 15px 0 0;
    line-height: 40px;
    cursor: pointer;
  }
  .e-head .right .user span:nth-child(1){
    margin-left: 5px;
  }
  .e-head .right .user span:hover{
    color: #27b7c2;
  }
  .e-head .right .info{
    float: left;
    cursor: pointer;
    /* padding: 0 10px; */
    position: relative;
  }
  .e-head .right .info span{
    display: inline-block;
    font-size: 14px;
    color: #fff;
    line-height: 20px;
    padding: 10px 15px 0;
  }
  .e-head .right .info ul{
    font-size: 16px;
    color: #fff;
    width: 90px;
    line-height: 30px;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: -90px;
    background: #2C3548;
    z-index: 999;
  }
  .e-head .right .info ul li:hover{
    background: #666;
  }

}
.posinal-parent{
  position:relative;
  boreder-radius:18px;
}
.posinal-list{
  position: absolute;
  top:40px;
  z-index: 100;
  left:-290px;
  width:300px;
  background:#363c47;
  color:#fff;
  overflow: hidden;
  border-radius: 4px;
  padding:10px 0;
  >ul>li{
    padding:0 30px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover{
      background:#272d38;
    }
    >div{
      line-height: 1.2;
    }
    .color-grey{
      color:#999;
      font-size:14px;
      text-align: right;
    }
  }
}
  .person-list-man{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 30px;
    .isSec{
      font-size:20px;
      line-height: 1;
      padding:5px 10px;
      border:1px solid #999;
      color:#999;
      border-radius: 4px;
      &.active{
        color:#27b7c2;
        border:1px solid #27b7c2;
      }
    }
  }

</style>
<template>
  <div class="e-head">
    <img class="logo" @click="toIndex()" src="../../../static/img/logo.png" alt="">
    <div class="base-line"></div>
    <div class="content">
      <p class="title" :class="item.isActive" v-for="(item,index) in titles" :key="item.index" @click="goNew(index)">
        {{item.name}}
      </p>
    </div>
    <div class="right">
      <div class="ways" v-if="!isLogin" :class="item.isActive" v-for="(item,index) in ways" :key="item.index" @click="toWay(index)">
        {{item.name}}
      </div>
      <div class="user" v-if="isLogin" @mouseover="isUserInfo=true"  @mouseout="isUserInfo=false"   @touchstart="isUserInfo=true">
        <img src="../../../static/img/user.png" alt="">
        <span  class="posinal-parent">
          <span>个人中心</span>
          <div class="posinal-list"  @mouseover="isUserInfo=true"  @mouseout="isUserInfo=false"     v-if="isUserInfo">
            <div class="person-list-man">
              <div>fanka**com</div>
              <div class="isSec iconfont icon-yj" :class="{'active':isLookData}" @click="lookOutDataDis"></div>
            </div>
            <ul>
              <li v-for="item in userInfo"  @click="goPath(item.type)">
                <span>{{item.name}} </span>
                <div v-if="item.BTC">
                  <div v-if="lookData">BTC {{item.BTC}}</div>
                  <div v-else>BTC ***</div>
                  <div  v-if="lookData" class="color-grey">{{item.CNY}} CNY</div>
                  <div  v-else class="color-grey">*** CNY</div>
                </div>
              </li>
            </ul>
          </div>
        </span>
        <span @click="loginOut()">退出</span>
      </div>
      <div class="base-line"></div>
      <p class="info">
        <span @mouseover="isInfo=true" @mouseout="isInfo=false" @touchstart="isInfo=true" @touchend="isInfo=false">公告/帮助</span>
        <ul v-if="isInfo">
          <li @mouseover="isInfo=true" @mouseout="isInfo=false" v-for="(item,index) in infos" :key="item.index" @click="toInfo(index)">
            {{item.name}}
          </li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs';
  import { mapState, mapGetters,mapActions,mapMutations } from "vuex";
  export default {
    name: "e_head",
    data () {
      return {
        isUserInfo: false,
        isInfo: false,
        isLookData:true,
        titles: [
          {isActive:"",name:"币币交易"},
          {isActive:"",name:"挖矿"},
          {isActive:"",name:"邀请得佣金"}
        ],
        ways: [
          {isActive:"",name:"登录"},
          {isActive:"active",name:"注册"}
        ],
        userInfo: [
          {type:"Property",name:"账户资产",BTC:'0.000000000',CNY:'0.00'},
          {type:"UserInfo",name:"账户信息"},
          {type:"WtGuanli",name:"委托管理"}
        ],
        infos: [
          {isActive:"",name:"公告"},
          {isActive:"",name:"帮助"},
          {isActive:"",name:"提交工单"}
        ],
      };
    },
    computed: {
      ...mapState(["isLogin","lookData"]),
    },
    created(){

    },
    mounted () {

    },
    methods: {
      ...mapActions(['lookOutData']),
      toIndex(){
        this.$router.push("index");
      },
      goNew(idx){

      },
      toWay(idx){
        if(idx==0){
          this.$router.push({ path: "/login", query: { pageData: 0 } });
        }else{
          this.$router.push({ path: "/login", query: { pageData: 1 } });
        }
      },
      loginOut(){
        sessionStorage.isLogin = false;
        this.$store.dispatch("updateIsLogin",false);
      },
      toInfo(idx){
        if(idx==0){
          this.$router.push("notice");
        }else if(idx==1){
          this.$router.push("introduce");
        }
      },
      lookOutDataDis(){
        this.isLookData=!this.isLookData
        this.lookOutData(this.isLookData)
      },
      goPath(routeName){
        this.$router.push({ name: routeName})
      }
    },
    watch: {
    },
  };
</script>


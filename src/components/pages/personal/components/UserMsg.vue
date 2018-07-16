<style lang="scss" scoped>
  .icon-qipao {
    color:#f90;
  }
  .user-img{
    width:48px;
    height:120px;
  }
  .userm-top {
    border-bottom: 1px dashed hsla(0,0%,100%,.1);
  }
  .userm-top .us-uid {
    line-height: 1.5;
  }
  .errd {
    border-radius: 4px;
    background-color: rgba(255,148,76,.06);
    border: 1px solid rgba(255,148,76,.3);
    padding: 8px 24px;
  }
  .errd .errList {
    margin-left: 30px;
    display: flex;
    line-height: 1.5;
    padding: 0;
    list-style: none;
    ul{
      list-style-type: decimal
    }
    li {
      list-style: decimal!important;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
  }
  .safe-box.border-bottom-solid {
    border-bottom: 1px solid hsla(0,0%,100%,.1);
  }
  .safe-box.border-top-solid{
    border-top: 1px solid hsla(0,0%,100%,.1);
  }
  .safe-box {
    height: 68px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .line-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .box-left{
      display:flex;
      justify-content: space-between;
      align-items: center;
      >div{
        padding:30px 0;
      }
    }
  }
  .line-boder{
    border-top:1px solid hsla(0,0%,100%,.1);
    border-bottom:1px solid hsla(0,0%,100%,.1);
  }
  .line-boder-ds{
    border: 1px dashed hsla(0,0%,100%,.1);
    border-top:0;
    border-left:0;
    border-right:0;
  }
  .accounts .api .apis {
    padding-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ip_address{
    width:100%;
    thead>tr>th{
      padding:15px 0;
    }
    tr>th{
      text-align: center;
    }
    tr>td{
      text-align: center;
      padding:10px 0;
    }
    tbody>tr:nth-of-type(odd){
      background:#181f2e;

    }
  }
</style>
<template>
  <div class="accounts">
    <div class="massage common-padding">
      <div class="user-img"></div>
      <div class="user-msg mg-l16">
        <div class="userm-top  mg-b24 pd-b16">
          <div class="username clearfix" >
            <p class="ts-16 pull-left color-primary us-email">{{userInfo.email}}</p>
            <p class="pull-left isname mg-l24">
              <i class="iconfont icon-qipao ts-12"></i>
              <span class="ts-12 color-default">未实名认证</span>
            </p>
          </div>
        </div>
        <div class="userM-bottom">
          <p class="color-grey ts-12 mg-t16 mg-b16">
            上次登录时间： {{loginAddressInfo.length?loginAddressInfo[1].addtime:''}}
            <span class="pd-l8">IP：</span>
            {{loginAddressInfo.length?loginAddressInfo[1].ip:''}}
          </p>
        </div>
      </div>
    </div>
    <div class="errd mg-t16">
      <p class="errTitle marginNo" v-if="!userInfo.google && !userInfo.tx_password">
        <i class="iconfont icon-qipao ts-16"></i>
        <span class="ts-14 mg-l8 text-warn">您的账户存在安全风险</span>
      </p>
      <p v-else class="errTitle marginNo">
        <span class="ts-14 mg-l8 text-warn">您的账户存在安全级别较高</span>
      </p>
      <ul class="errList marginNo">
        <li v-if="userInfo.google" class="ts-14 color-grey mg-r16"><div class="infor-dot mg-r8"></div>谷歌验证未绑定</li>
        <!--<li class="ts-14 color-grey mg-r16"><div class="infor-dot mg-r8"></div>短信认证未绑定</li>-->
        <li v-if="userInfo.tx_password" class="ts-14 color-grey mg-r16"><div class="infor-dot mg-r8"></div>资金密码未设置</li>
      </ul>
    </div>
    <div class="safe common-padding mg-t16 pd-b4">
      <p class="common-title mg-b24">安全设置</p>
      <div class="safecommon">
        <div class="line-box line-boder">
          <div class="box-left">
            <div class="iconfont icon-iconfont color-exclamation"></div>
            <div class="ts-16 color-primary">登录密码</div>
            <div class="ts-12 color-grey mg-l48">登录时使用</div>
          </div>
          <div class="box-right">
            <button class="box-button box-btn-s_normal box-btn-t_normal" @click="goLoginPswd">修改</button>
          </div>
        </div>
      </div>

      <div class="safecommon">
        <div class="line-box line-boder-ds">
          <div class="box-left">
            <div class="iconfont icon-iconfont color-exclamation"></div>
            <div class="ts-16 color-primary">短信验证</div>
            <div class="ts-12 color-grey mg-l48">登录时使用</div>
          </div>
          <div class="box-right">
            <p class="ts-12 color-grey notbind mg-r24">
              <span class="iconfont icon-tubiao2"></span>
              <i>未绑定</i>
            </p>
            <button  class="box-button box-btn-s_normal box-btn-t_primary" @click="bindSMS">绑定</button>
          </div>
        </div>
      </div>
      <div class="safecommon">
        <div class="line-box line-boder-ds">
          <div class="box-left">
            <div class="iconfont icon-iconfont color-exclamation"></div>
            <div class="ts-16 color-primary">谷歌验证</div>
            <div class="ts-12 color-grey mg-l48">为了您的账户安全，请绑定谷歌验证器 </div>
          </div>
          <div class="box-right">
            <p class="ts-12 color-grey notbind mg-r24">
              <span class="iconfont icon-tubiao2"></span>
              <i v-if="userInfo.google">已绑定</i>
              <i v-else>未绑定</i>

            </p>
            <button v-if="!userInfo.google" class="box-button box-btn-s_normal box-btn-t_primary" @click="bindGoogle">绑定</button>
          </div>
        </div>
      </div>
      <div class="safecommon">
        <div class="line-box line-boder-ds" style="border-bottom:0">
          <div class="box-left">
            <div class="iconfont icon-iconfont color-exclamation"></div>
            <div class="ts-16 color-primary">资金密码</div>
            <div class="ts-12 color-grey mg-l48">提现时使用，开启谷歌验证后方可进行设置未设置</div>
          </div>
          <div class="box-right">
            <p class="ts-12 color-grey notbind mg-r24">
              <span class="iconfont icon-tubiao2"></span>
              <i v-if="userInfo.tx_password">已绑定</i>
              <i v-else>未绑定</i>
            </p>
            <button v-if="!userInfo.tx_password" class="box-button box-btn-s_normal box-btn-t_primary" @click="setBalancePwd">设置</button>
          </div>
        </div>
      </div>
    </div>
    <div class="api common-padding mg-t16">
      <p class="common-title">API</p>
      <div class="apis pd-b24">
        <p class="greatapi ts-14 color-grey china">
          创建API密钥可以让您借助第三方网站或移动应用使用 CoinPark 的行情查询、各类交易服务。 请参阅
          <a href="" target="_blank" rel="noopener noreferrer nofollow" class="APIdoc">API文档</a> 了解如何使用您的API keys
        </p>
        <button  class="box-button box-btn-s_normal box-btn-t_normal">添加</button>
      </div>
    </div>
    <div class="logAddress common-padding mg-t16">
      <p class="common-title">登录记录</p>
      <div class="pd-b24">
        <div v-if="loginAddressData">
          <table class="ip_address" border="0" cellspacing="0">
            <thead>
              <tr>
                <th>登录时间</th>
                <th>IP地址</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in loginAddressInfo">
                <td>{{item.addtime}}</td>
                <td>{{item.ip}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else class="no-data">
           暂无数据
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {userMain,loginRecord} from '@/service/userInfo/userCenter'
  export default {
    data(){
      return{
        loginAddressData:true,
        loginAddressInfo:[],
        userInfo:{}
      }
    },
    created(){
      this.initData()
    },
    mounted(){

    },
    methods:{
      goLoginPswd(){
        this.$router.push({name:'LoginPwd'})
      },
      bindSMS(){
        this.$router.push({name:'BindSMS'})
      },
      bindGoogle(){
        this.$router.push({name:'BindGoogle'})
      },
      setBalancePwd(){
        this.$router.push({name:'BalancePwd'})
      },
      //  async start
      initData(){
        this.getLoginAddress()
        this.getUserMain()
      },
      //获取登录IP
      async getLoginAddress(){
         let loginAddress = await loginRecord()
         if(loginAddress.error){
            this.loginAddressData=false
         }else{
           this.loginAddressData=true
           this.loginAddressInfo=loginAddress.data
         }
      },
      //获取用户信息
      async getUserMain(){
        let userInfo= await userMain()
        if( userInfo.error){
          alert( userInfo.error )
          return
        }else{
          this.userInfo=userInfo.data
        }
      }
    }
  }
</script>

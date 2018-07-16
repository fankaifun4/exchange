<style lang="scss" scoped>
  @import "../css/index.scss";
  .container{
    padding:0;
  }
  .invite-banner{
    width:100%;
    background:#191c2e  url("/static/img/banner.jpg") no-repeat center top;
    height: 350px;
    background-size: auto 100%; 
  }
  .invite-box .invites {
    background-color: #191c2e;
  }
  .invite-box .invites .invite-main .invite-paddimg {
    background-color: #323857;
    border-radius: 6px;
    padding: 36px 48px;
  }
  .agains .againemail, .logins {
    font-size: 14px;
    color: #27b7c2;
    text-decoration: none;
  }
  .logins {
    margin-left: 5px;
  }
  .invite-box .invites .invite-main .invite-content .logins .logins-top .lt-left .numbers {
    width: 360px;
  }
  .invite-box .invites .invite-main .invite-content .logins .logins-top .lt-left .numbers p {
    margin: 0;
  }
  .invite-box .ts-32 {
    font-size: 32px;
  }
  .invite-box .grey-color {
    color: #b1b7cc;
  }
  .invite-box .invites .invite-main .invite-content .logins .logins-top .lt-right .invite-id .invite-input .box-input_input {
    background: #272c45;
  }
  .input__input_style.input_normal {
    height: 36px;
  }
  @media screen and (max-width:900px){
    .invite-box .invites .invite-main .invite-content .logins .logins-top .lt-right .invite-id .invite-input {
      width: 200px;
    }
  }
  @media screen and (min-width:900px){
    .invite-box .invites .invite-main .invite-content .logins .logins-top .lt-right .invite-id .invite-input {
      width: 400px;
    }
  }
 
  .input__input_style {
    outline: none;
    border: 1px solid transparent;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    border-radius: 3px;
    background-color: #363c47;
    padding-left: 8px;
    color: #fff;
  }

  .invite-box .invites .invite-main .invite-content .logins .logins-top .lt-right {
    border-bottom: 1px solid #272c45;
  }
  .flex-box.space-between {
    justify-content: space-between;
  }
  .flex-box {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }
  .invite-box  .invite-left .invite-ul {
    padding: 0;
    list-style: none;
  }
  .invite-box  .circulation-table .circulation-comon {
    border-radius: 2px;
    padding:10px 20px;
  }

  .invite-box  .circulation-table .circulation-header {
    color: #7e849c;
  }
  .invite-box .circulation-table .circulation-tr:nth-of-type(2n) {
    background: #272c45;
  }
  .invite-box .circulation-table .circulation-tr:nth-of-type(2n-1) {
    background: rgba(39,44,69,.5);
  }
</style>
<template>
  <div class="invite-box">
    <div class="invite-banner"></div>
    <div class="min-w child-main invites">
      <div class="invite-main max-w" style="padding: 0;">
        <div class="invite-content invite-paddimg">
          <div class="logins">
            <!--top-->
            <div class="logins-top pd-b32">
              <div class="lt-left flex-box pd-b32 space-around">
                <div class="numbers">
                  <p class="ts-32" style="color: rgb(230, 232, 242);"> {{ iviteInfo.zong }} <span class="ts-14">人</span></p>
                  <p class="ts-14 grey-color">已邀请的人数</p>
                </div>
                <div class="numbers pd-l40 number-border">
                  <p class="ts-32" style="color: rgb(230, 232, 242);"> {{ iviteInfo.auth }}<span class="ts-14">人</span></p>
                  <p class="ts-14 grey-color">有效人数（完成实名人数）</p>
                </div>
                <div class="numbers pd-l40 number-border">
                  <p class="ts-32" style="color: rgb(230, 232, 242);">0.0000 <span class="ts-14">BTC</span></p>
                  <p class="ts-14 grey-color">已获返利佣金额预估</p>
                </div>
              </div>
              <div class="lt-right flex-box space-between pd-tb32">
                <div class="invite-id flex-box ts-14 grey-color">
                  <p class="id-name">您的专属ID：</p>
                  <p>{{iviteInfo.usercode}}</p>
                </div>
                <div class="invite-id flex-box ts-14 grey-color">
                  <p class="id-name">专属邀请链接：</p>
                  <div class="flex-box">
                    <div data-v-1405135a="" id="inp-i" readonly="readonly" class="invite-input">
                      <div data-v-1405135a="" class="box-input-box">
                        <span data-v-1405135a="" class="box-input_prefix pd-l8"></span>
                        <span data-v-1405135a="" class="box-input_suffix pd-r8" style="z-index: 1;"></span> <!---->
                        <input data-v-1405135a="" type="text" class="box-input_input input__input_style js_input input_normal box-input_input-Light" readonly="readonly" style="padding-left: 8px; padding-right: 8px;">
                      </div>
                      <div data-v-1405135a="" class="box-input_err text-left ts-12"></div>
                    </div>
                    <button data-v-2947059a="" class="box-button box-btn-s_normal box-btn-t_primary" data-clipboard-text="https://www.coinpark.cc/login/Register?id=811374571&amp;lang=zh"><!----> 复制</button>
                  </div>
                </div>
              </div>
            </div>
            <!--btootm-->
            <div class="logins-bottom mg-t32 flex-box align-items_start space-between">
              <p class="ts-14 bill mg-t32">去查看我的账单</p>
            </div>
          </div>
        </div>
        <div class="invite-paddimg mg-t16 invite-rule grey-color ts-14 flex-box align-items_start space-between">
          <div class="invite-left borders"><p class="invite-title ts-20">活动周期：</p>
            <ul class="invite-ul">
              <li>自正式挖矿日开始，3个月。</li>
            </ul>
            <p class="invite-title ts-20 mg-t24">活动规则：</p>
            <ul class="invite-ul">
              <li>1. 成功邀请好友注册完成实名认证并进行交易的用户，即可享受好友每一笔交易手续费返佣</li>
              <li>2. 返佣比例根据CP总流通量动态调整，于次日折算为CP发放，详见说明；</li>
              <li>3. 当CP总流通量到达3亿时，每日返佣奖励数量不超过用户当日持有CP数量的2倍；</li>
              <li>4. 邀请人与被邀请人实名信息一致，不可享受返佣奖励；</li>
              <li>5. 活动为期三个月，结束后邀请人不再享受返佣奖励；</li>
            </ul>
            <ul class="invite-ul opacity">
              <li>* 注册即获CoinPark专属邀请链接</li>
              <li>* 仅承认使用CoinPark官方邀请链接产生的邀请行为</li>
              <li>* 官方根据实际运营情况，保留对活动规则做出修改的权利，请关注官方公告。</li>
            </ul>
          </div>
          <div class="invite-left invite-right"><p class="invite-title ts-20">返佣比例说明：</p>
            <ul class="invite-ul">
              <li>根据CP总流通量确定实际返佣比例，详细如下：</li>
            </ul>
            <div class="circulation-table ts-14">
              <div class="circulation-comon circulation-header flex-box space-between pd-lr16 pd-tb10"><p>CP总流通量</p>
                <p>返佣比例</p></div>
              <div class="circulation-comon circulation-tr flex-box space-between pd-lr16 pd-tb10"><p>0亿 ～ 3亿</p>
                <p>30%</p></div>
              <div class="circulation-comon circulation-tr flex-box space-between pd-lr16 pd-tb10"><p>3亿 ～ 5亿</p>
                <p>20%</p></div>
              <div class="circulation-comon circulation-tr flex-box space-between pd-lr16 pd-tb10"><p>5亿 ～ 10亿</p>
                <p>10%</p></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import {Invitation} from '../../../../service/userInfo/userCenter'

  export default {
    data(){
      return{
        iviteInfo:{
          "zong": 0,   //总邀请人数
          "auth": 0,   //认证人数
          "usercode": ''    //推荐码
        }
      }
    },
    mounted(){
      this.getIviteNumb()
    },
    methods:{
      async getIviteNumb(){
        let Numb= await  Invitation()
        if(Numb.error){

        }else{
          this.iviteInfo=Numb
        }
      }
    }
  }
</script>

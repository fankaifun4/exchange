<style lang="scss" scoped>
@media screen and (min-width: 900px) {
  .top-step{
    display: flex;
    justify-content: center;
    align-content: center
  }

}
@media screen and (max-width: 900px) {
  .top-step{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center
  }
}
  .top-step{
    .top{
      display: flex;
      justify-content: center;
      align-items: center;
      .step-s{
        margin-left: 20px;
        .explain{
          margin-left:32px;
          &.active{
            color: #9ed147!important;
          }
        }
        .step-top-item{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .active{
            color:#9ed147!important;
          }
          .step-icon{
            font-size:24px;
            color:#999;
            &.active{
              color:#9ed147!important;
            }
          }
          .line {
            background: #fff;
            width: 90px;
            height: 2px;
            &.active{
              background: #3d5d26;
            }
          }
        }
      }
    }
  }
  .entrance-box{
    border-radius: 4px;
    background-color: #272d38;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,.05), 0 7px 14px 0 rgba(18,18,26,.1);
  }
  .country-box{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .box-size{
    width: 440px;
    height: 112px;
    padding: 32px;
    border-radius: 4px;
    background-color: #363c47;
    box-sizing: border-box;
    border: 1px solid rgba(0,152,163,0);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &.active{
      background:#00F7DE;
      color:#9aa6b8;
    }
    .box-gj-left{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .china-qi,.shijie-qi{
        width:80px;
        height:55px;
        margin-right: 20px;
      }
      .china-qi{
        background: url("/static/img/china.jpg");
        background-size:100% 100% ;
      }
      .shijie-qi{
        background: url("/static/img/lhg.png");
        background-size:100% 100% ;
      }
    }
    &:hover{
      border:1px solid #27b7c2;
    }
  }
</style>
<template>
      <div>
        <!--header-->
        <div class="top-step">
          <div class="top-left">
            <p class="ts-14 color-primary">完成个人身份认证</p>
            <p class="ts-14 color-grey">即可获得更高的日提现额度</p>
          </div>
          <div  class="top">
            <div class="step-s">
              <div class="step-top-item">
                <i class="iconfont icon-chose-yes step-icon mg-r8" :class="{active:!isPassed}"></i>
                <span class="" :class="{active:!isPassed}">每日限额 2 BTC</span>
                <div class="line mg-l8 " :class="{active:!isPassed}"></div>
              </div>
              <div class="explain color-grey" :class="{active:!isPassed}">当前</div>
            </div>
            <div class="step-s">
              <div class="step-top-item">
                <i class="iconfont icon-chose-yes step-icon mg-r8" :class="{active:isPassed}"></i>
                <span :class="{active:isPassed}">每日限额 20 BTC</span>
                <div class="line mg-l8" :class="{active:isPassed}"></div>
              </div>
              <div class="explain color-grey" :class="{active:isPassed}">{{isPassed?'已实名认证':'未实名认证'}}</div>
            </div>
            <div class="step-s">
              <div class="step-top-item">
                <i class="iconfont icon-chose-yes step-icon mg-r8"></i>
                <span>更高额度，请联系</span>
                <div class="line mg-l8"></div>
              </div>
              <div class="explain color-grey">support@coinpark.zendesk.com</div>
            </div>
          </div>
        </div>
        <!--body-->

        <div  class="entrance-box mg-t16 pd-lr24 pd-tb32">
          <p>选择认证地区</p>
          <div class="country-box mg-t64 mg-b48">
            <div class="china-box box-size" @click="getAuthPass('ChinaAuth')" :class="{active:authPassType==='ChinaAuth'}">
              <div class="box-gj-left">
                <div class="china-qi" >
                </div>
                <div>中国大陆</div>
              </div>
              <div class="color-theme">去认证</div>
            </div>
            <div class="shijie-box box-size"  @click="getAuthPass('GuowaiAuth')" :class="{active:authPassType==='GuowaiAuth'}">
              <div class="box-gj-left">
                <div class="shijie-qi" >
                </div>
                <div>其他国家</div>
              </div>
              <div class="color-theme">去认证</div>
            </div>
          </div>
        </div>
        <div>
          <router-view></router-view>
        </div>
      </div>
</template>
<script>
  export  default {
    data(){
      return{
        authPassType:'',
        isPassed:true
      }
    },
    mounted(){

    },
    methods:{
      getAuthPass(type){
        this.$router.push({name:type})
        this.authPassType=type
      }
    }
  }
</script>

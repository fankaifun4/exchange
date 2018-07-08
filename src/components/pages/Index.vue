<template>
  <div class="index">
    <div class="banner">
      <p class="title">交易即挖矿</p>
      <p class="tell">交易手续费 100% 返利，持有CP再享平台 100% 收益</p>
      <div class="content">
        <div class="left">
          <p>公测中，即将开启创世挖矿</p> 
          <p>【公告】关于CoinPark开启公测的公告</p>
        </div>
        <div class="right">
          <p>
            Bibox 强强联手 Bibox Fund, FBG, 丹华资本，BlockWater Capital，八维资本，臻果基金 等 全球顶级数字基金，战略投资 CoinPark
          </p>
          <div class="btns">
            <div class="btn" v-for="(item,index) in btns" :key="item.index" @click="toNews(index)">
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ranking">
      <p class="title">交易量排名</p>
      <ul class="content">
        <li :class="index<3?'tuchu':''" v-for="(item,index) in rankData" :key="item.index">
          <div class="top">
            <div>
              No.
              <span>{{index+1}}</span>
            </div>
            <div>
              UID: {{item.userId}}
            </div>
          </div>
          <p class="bottom">
            {{item.num}}
            <span>BTC</span>  
          </p>
        </li>
      </ul>
    </div>
    <div class="trade">
      <ul class="ways"></ul>
    </div>
    <div class="how">
      <div class="content">
        <div class="left">
          <h3>如何挖矿？</h3>
          <p>
            在CoinPark进行交易即被视作挖矿，用户即被视为“矿工”，挖矿产出物为CP，您仅需在CoinPark交易，产生的交易手续费会折算为CP，于次日0：00按小时陆续发放前一日同时段收益至您账户。
          </p>
          <p>
            *  CP是CoinParkToken 的简称，是以太坊ERC20标准代币。CP通过“交易即挖矿”的方式产生，总量100亿，其中60%由矿工挖出，其余40%为预先发行且冻结，冻结部分也随着矿工挖矿而按日解冻。
          </p>
          <div class="btn">详细规则</div>
        </div>
        <img src="../../../static/img/how-to-dug.png">
      </div>
    </div>
    <div class="profits">
      <div class="content">
        <img src="../../../static/img/how-to-dividend.png">
        <div class="right">
          <h3>如何分红？</h3>
          <p>
            每个自然天，CoinPark会将平台总收益的100%作为分红奖励，奖励给持有CP的用户。全天24小时，每小时整点对持CP账户进行快照，统计每账户应得分红额度，并于次日15:00（新加坡时间）陆续将分红奖励发放至CP持有者账户，发放时间持续约2~3个小时。
          </p>
          <div class="btn">详细说明</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs';

  export default {
    name: "index",
    data () {
      return {
        btns: [
          {isActive:"",name:"交易即挖矿介绍"},
          {isActive:"",name:"充值/提现"},
          {isActive:"",name:"Bibox授权登录"}
        ],
        rankData: [
          {userId:" ***7489",num:"13449.86375155"},
          {userId:" ***7489",num:"13449.86375155"},
          {userId:" ***7489",num:"13449.86375155"},
          {userId:" ***7489",num:"13449.86375155"},
          {userId:" ***7489",num:"13449.86375155"},
          {userId:" ***7489",num:"13449.86375155"},
          {userId:" ***7489",num:"13449.86375155"},
          {userId:" ***7489",num:"13449.86375155"},
          {userId:" ***7489",num:"13449.86375155"},
          {userId:" ***7489",num:"13449.86375155"}
        ]
      };
    },
    created(){
      this.$parent.isHead = true;
    },
    mounted () {
   
    },
    methods: {
      toNews(idx){
        if(idx==0){
          this.$router.push("introduce");
        }
      },
    },
    watch: {
      
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@media screen and (min-width: 900px) {
  .index .banner{
    width: 1920px;
    height: 486px;
    background: url(static/img/index-bg.png) no-repeat;
    background-size: 100% 100%;
  }
  .index .banner .title{
    font-size: 36px;
    color: #27b7c2;
    padding-top: 50px;
    text-align: center;
  }
  .index .banner .tell{
    font-size: 18px;
    line-height: 40px;
    color: #eee;
    text-align: center;
  }
  .index .banner .content{
    width: 1920px;
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
  .index .banner .content .left p:nth-child(1){
    width: 789px;
    height: 148px;
    line-height: 148px;
    font-size: 40px;
    text-align: center;
    color: #27b7c2;
    background: #223E4D;
    background-image: linear-gradient(270deg,#191c2e,#223e4d 29%,#223e4d 75%,#191c2e);
    box-shadow: 0 30px 25px -41px rgba(0,0,0,.5);
  }
  .index .banner .content .left p:nth-child(2){
    width: 789px;
    height: 60px;
    line-height: 60px;
    color: #7e849c;
    text-align: center;
  }
  .index .banner .content .left p:nth-child(2):hover{
    color: #27b7c2;
  }
  .index .banner .content .right{
    width: 379px;
    height: 202px;
    margin-left: 32px;
  }
  .index .banner .content .right p:nth-child(1){
    font-size: 16px;
    color: #b1b7cc;
    margin-bottom: 15px;
  }
  .index .banner .content .right .btns{
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    color: #27b7c2;
  }
  .index .banner .content .right .btns .btn{
    margin-right: 16px;
    margin-bottom: 16px;
    line-height: 36px;
    padding: 0 16px;
    border: 1px solid #27b7c2;
    cursor: pointer;
  }
  .index .banner .content .right .btns .btn:hover{
    border: 1px solid rgba(0,152,163,.3);
    background-color: rgba(0,152,163,.06);
  }
  .index .ranking{
    width: 1920px;
    background-color: #22283C;
    padding-bottom: 58px;
  }
  .index .ranking .title{
    padding-top: 60px;
    width: 1200px;
    margin: 0 auto;
    color: #e6e8f2;
    font-weight: 500;
    font-size: 32px;
  }
  .index .ranking .content{
    width: 1200px;
    padding-top: 40px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .index .ranking .content li{
    color: #e6e8f2;
    border-radius: 4px;
    background-color: #43458a;
    padding:16px;
    width: 180px;
    margin-bottom: 30px;
  }
  .index .ranking .content li:nth-child(1){
    background-image: linear-gradient(71deg,#d96a45,#f7a74a);
  } 
  .index .ranking .content li:nth-child(2){
    background-image: linear-gradient(71deg,#cc8c3d,#e6c267);
  } 
  .index .ranking .content li:nth-child(3){
    background-image: linear-gradient(71deg,#946d41,#ccab7a);
  } 
  .index .ranking .content .tuchu .top div:nth-child(1){
    color: #ffdf6b;
    height: 50px;
    line-height: 50px;
    margin-top: -20px;
  }
  .index .ranking .content .tuchu .top div:nth-child(1) span{
    font-size: 48px;
  }
  .index .ranking .content li .top div:nth-child(2){
    color: rgba(230,232,242,.6);
  }
  .index .ranking .content li .top{
    font-size: 16px;
    height: 30px;
    line-height: 30px;
    font-style:italic;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
  }
  .index .ranking .content li .bottom{
    font-size: 18px;
    line-height: 40px;
    font-weight: 700;
  }
  .index .ranking .content li .bottom span{
    font-size: 14px;
    line-height: 30px;
    margin-top: 15px;
  }
  .index .trade{
    width: 1920px;
    padding: 40px 0;
    background-color: #22283C;
  }

  .index .how,.index .profits{
    background: rgb(41, 52, 80);
    padding: 64px 0;
  }
  .index .profits{
    background: rgb(36, 44, 69);
  }
  .index .how .content,.index .profits .content{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .index .how .content .left,.index .profits .content .right{
    width: 520px;
  }
  .index .how .content h3,.index .profits .content h3{
    font-size: 32px;
    color: rgb(230, 232, 242);
    margin-bottom: 32px;
  }
  .index .how .content .left p:nth-child(2),.index .profits .content .right p:nth-child(2){
    color: rgb(177, 183, 204);
    font-size: 14px;
    margin-bottom: 24px;
  }
  .index .how .content .left p:nth-child(3),.index .profits .content .right p:nth-child(3){
    color: rgb(126, 132, 156);
    font-size: 12px;
    margin-bottom: 24px;
  }
  .index .how .content .left .btn,.index .profits .content .right .btn{
    background-color: rgba(39, 183, 194, 0.0588235);
    color: rgb(39, 183, 194);
    border-width: 1px;
    border-style: solid;
    border-color: rgba(39, 183, 194, 0.298039);
    width: 90px;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
  }
  .index .how .content img,.index .profits .content img{
    width: 500px;
    height: 350px;
  }
}

@media screen and (max-width: 900px) {
  .index .banner{
    width: 750px;
    height: 300px;
    background: url(static/img/index-bg.png) no-repeat;
    background-size: 100% 100%;
  }
  .index .banner .title{
    font-size: 28px;
    color: #27b7c2;
    padding-top: 20px;
    text-align: center;
  }
  .index .banner .tell{
    font-size: 20px;
    line-height: 35px;
    color: #eee;
    text-align: center;
  }
  .index .banner .content{
    width: 750px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  .index .banner .content .left p:nth-child(1){
    width: 300px;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
    color: #27b7c2;
    background: #223E4D;
    background-image: linear-gradient(270deg,#191c2e,#223e4d 29%,#223e4d 75%,#191c2e);
    box-shadow: 0 30px 25px -41px rgba(0,0,0,.5);
  }
  .index .banner .content .left p:nth-child(2){
    width: 300px;
    height: 30px;
    line-height: 30px;
    color: #7e849c;
    text-align: center;
  }
  .index .banner .content .left p:nth-child(2):hover{
    color: #27b7c2;
  }
  .index .banner .content .right{
    width: 379px;
    height: 100px;
    margin-left: 32px;
  }
  .index .banner .content .right p:nth-child(1){
    font-size: 12px;
    color: #b1b7cc;
    margin-bottom: 10px;
  }
  .index .banner .content .right .btns{
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    color: #27b7c2;
  }
  .index .banner .content .right .btns .btn{
    margin-right: 16px;
    margin-bottom: 16px;
    line-height: 25px;
    font-size: 16px;
    padding: 0 8px;
    border: 1px solid #27b7c2;
    cursor: pointer;
  }
  .index .banner .content .right .btns .btn:hover{
    border: 1px solid rgba(0,152,163,.3);
    background-color: rgba(0,152,163,.06);
  }
  .index .ranking{
    width: 750px;
    background-color: #22283C;
    padding-bottom: 58px;
  }
  .index .ranking .title{
    padding-top: 60px;
    width: 700px;
    margin: 0 auto;
    color: #e6e8f2;
    font-weight: 500;
    font-size: 32px;
  }
  .index .ranking .content{
    width: 700px;
    padding-top: 40px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .index .ranking .content li{
    color: #e6e8f2;
    border-radius: 4px;
    background-color: #43458a;
    padding:4px;
    width: 120px;
    margin-bottom: 30px;
  }
  .index .ranking .content li:nth-child(1){
    background-image: linear-gradient(71deg,#d96a45,#f7a74a);
  } 
  .index .ranking .content li:nth-child(2){
    background-image: linear-gradient(71deg,#cc8c3d,#e6c267);
  } 
  .index .ranking .content li:nth-child(3){
    background-image: linear-gradient(71deg,#946d41,#ccab7a);
  } 
  .index .ranking .content .tuchu .top div:nth-child(1){
    color: #ffdf6b;
    height: 50px;
    line-height: 50px;
    margin-top: -20px;
  }
  .index .ranking .content .tuchu .top div:nth-child(1) span{
    font-size: 16px;
  }
  .index .ranking .content li .top div:nth-child(2){
    font-size: 12px;
    color: rgba(230,232,242,.6);
  }
  .index .ranking .content li .top{
    font-size: 10px;
    height: 25px;
    line-height: 25px;
    font-style:italic;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
  }
  .index .ranking .content li .bottom{
    font-size: 6px;
    line-height: 16px;
    /* font-weight: 700; */
  }
  .index .ranking .content li .bottom span{
    font-size: 8px;
    line-height: 30px;
    margin-top: 15px;
  }
  .index .trade{
    width: 750px;
    padding: 40px 0;
    background-color: #22283C;
  }

  .index .how,.index .profits{
    background: rgb(41, 52, 80);
    padding: 64px 0;
  }
  .index .profits{
    background: rgb(36, 44, 69);
  }
  .index .how .content,.index .profits .content{
    width: 700px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .index .how .content .left,.index .profits .content .right{
    width: 400px;
  }
  .index .how .content h3,.index .profits .content h3{
    font-size: 32px;
    color: rgb(230, 232, 242);
    margin-bottom: 32px;
  }
  .index .how .content .left p:nth-child(2),.index .profits .content .right p:nth-child(2){
    color: rgb(177, 183, 204);
    font-size: 14px;
    margin-bottom: 24px;
  }
  .index .how .content .left p:nth-child(3),.index .profits .content .right p:nth-child(3){
    color: rgb(126, 132, 156);
    font-size: 12px;
    margin-bottom: 24px;
  }
  .index .how .content .left .btn,.index .profits .content .right .btn{
    background-color: rgba(39, 183, 194, 0.0588235);
    color: rgb(39, 183, 194);
    border-width: 1px;
    border-style: solid;
    border-color: rgba(39, 183, 194, 0.298039);
    width: 90px;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    text-align: center;
  }
  .index .how .content img,.index .profits .content img{
    width: 300px;
    height: 350px;
  }
}
</style>
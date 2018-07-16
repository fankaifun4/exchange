<style lang="scss">
  @import "./css/index.scss";
  .table-container{
    margin-top:30px;
    padding: 18px 30px;
    border-radius: 4px;
    background-color: #272d38;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,.05), 0 7px 14px 0 rgba(18,18,26,.1);
    color: #fff;
    table{
      width:100%;
    }
    .table-header{
      tr{
        th{
          padding: 10px 0 10px 8px;
          color:#626c7a !important;
          &:first-child{
            padding-left:28px;
          }
        }
      }
    }
    .table-body{
      tr{
        td{
          padding: 10px 0 10px 8px;
          word-wrap: break-word;
          word-break:break-all;
          &:first-child{
            padding-left:28px;
          }
        }
        &:hover{
          background: #363c47;
        }
      }
    }
    .box-button{
      text-decoration: none;
      line-height: 1.5;
      outline: none;
      cursor: pointer;
      white-space: nowrap;
      border-radius: 3px;
      box-sizing: border-box;
      border: 1px solid rgba(39,183,194,.3);
      background-color: rgba(39,183,194,.06);
      color: #27b7c2;
      height: 28px;
      padding: 0 12px;
      font-size: 12px;
    }
    .box-button[disabled]{
      background-color: rgba(39,183,194,.06);
      border: 1px solid rgba(39,183,194,.06);
      opacity: .2;
      cursor: not-allowed;
    }
  }
  .select-bz{
    height:28px;
    padding:0 12px;
    min-width:130px;
    border-radius: 3px;
    background: #363c47;
    color: #fff;
  }
  .date_fw{
    height:28px;
    padding:0 12px;
    width:200px;
    border-radius: 3px;
  }
  .input_btype{
    height:28px;
    width:100%;
    padding:0 10px;
    outline: none;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 3px;
    background-color: #363c47;
    color: #fff;
  }
  .select-bz{
    height:28px;
    padding:0 12px;
    min-width:130px;
    border-radius: 3px;
    background: #363c47;
    color: #fff;
  }
  .date_fw{
    height:28px;
    padding:0 12px;
    width:200px;
    border-radius: 3px;
  }
  .box-button.box-btn-t_primary.box-btn-s_small{
    height: 28px;
    padding: 0 12px;
    font-size: 12px;
    background-color: #27b7c2;
    border-color: transparent;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.06);
    color: #fff;
    font-weight: 600;
    border-style: solid;
  }
</style>
<template>
  <div class="container">
    <div class="main min-w">
      <div class="child-main min-w">
        <div class="max-w">
          <div class="child-nav-main pd-t24">
            <div class="child-nav_title color-primary"><span>委托管理</span></div>
            <div class="child-nav_nav">
						<span  class="child-nav_item" @click="goRouterPath(0)" :class="{' router-link-exact-active':tableChecked===0}" >
							<span>当前委托</span>
							<span  class="after ts-12"></span>
						</span>
              <span  class="child-nav_item"  @click="goRouterPath(1)" :class="{' router-link-exact-active':tableChecked===1}">
							<span >历史委托</span>
							<span  class="after ts-12"></span>
						</span>
              <span  class="child-nav_item"  @click="goRouterPath(2)" :class="{' router-link-exact-active':tableChecked===2}">
							<span>成交记录</span>
							<span  class="after ts-12"></span>
						</span>
            </div>
          </div>
          <div class="pd-t24">
            <!--当前委托-->
            <div class="table-1"  v-if="tableChecked===0">
              <div class="flex-box space-between pd-t16">
                <div class="flex-box" style="min-width: 350px;">
                  <div  class="ts-14" style="width: 100px;">
                    <div  class="box-input-box">
                      <input placeholder="币种" type="text" class="input_btype ">
                    </div>
                  </div>
                  <div style="padding:0 10px;"> / </div>
                  <div class="ts-14">
                    <div  class="box-input-box">
                      <select  class="select-bz">
                        <option value="">全部</option>
                        <option value="">USTD</option>
                        <option value="">BTC</option>
                        <option value="">ETH</option>
                      </select>
                    </div>
                  </div>
                  <button  class="box-button mg-l8 mg-r24 box-btn-s_small box-btn-t_primary"><!----> 查询</button>
                </div>
              </div>
              <div class="">
                <div class="zicanmingxi">
                  <div class="table-container">
                    <table v-if="true" border="0" cellspacing="0" cellpadding="0">
                      <thead class="table-header zcmx">
                      <tr>
                        <th class="text-left">时间</th>
                        <th class="text-left">市场</th>
                        <th class="text-right">方向</th>
                        <th class="text-right">委托/成交价格	</th>
                        <th class="text-right">委托/成交数量</th>
                        <th class="text-right">委托/成交金额	</th>
                      </tr>
                      </thead>
                      <tbody class="table-body">
                      <tr>
                        <td class="text-left">BTC</td>
                        <td class="text-left">Bitcoin</td>
                        <td class="text-right">0.00000000</td>
                        <td class="text-right">0.00000000</td>
                        <td class="text-right">0.00000000</td>
                        <td class="text-right">0.00000000</td>
                      </tr>
                      <tr>
                        <td class="text-left">ETC</td>
                        <td class="text-left">Bitcoin</td>
                        <td class="text-right">0.00000000</td>
                        <td class="text-right">0.00000000</td>
                        <td class="text-right">0.00000000</td>
                        <td class="text-right">0.00000000</td>
                      </tr>
                      <tr>
                        <td class="text-left">ETH</td>
                        <td class="text-left">Bitcoin</td>
                        <td class="text-right">0.00000000</td>
                        <td class="text-right">0.00000000</td>
                        <td class="text-right">0.00000000</td>
                        <td class="text-right">0.00000000</td>
                      </tr>
                      <tr>
                        <td class="text-left">BTC</td>
                        <td class="text-left">Bitcoin</td>
                        <td class="text-right">0.00000000</td>
                        <td class="text-right">0.00000000</td>
                        <td class="text-right">0.00000000</td>
                        <td class="text-right">0.00000000</td>
                      </tr>
                      </tbody>
                    </table>
                    <div v-else class="no-data">暂无数据</div>
                  </div>
                </div>
              </div>
            </div>
            <!--历史委托-->
            <div class="table-2"  v-if="tableChecked===1">
              <div class="flex-box space-between pd-t16">
                <div class="box-ratio-group">
                  <div  class="ts-14" style="width: 100px;">
                    <div  class="box-input-box">
                      <input placeholder="币种" type="text" class="input_btype ">
                    </div>
                  </div>
                  <div style="padding:0 10px;"> / </div>
                  <div class="ts-14">
                    <div  class="box-input-box">
                      <select  class="select-bz">
                        <option value="">全部</option>
                        <option value="">USTD</option>
                        <option value="">BTC</option>
                        <option value="">ETH</option>
                      </select>
                    </div>
                  </div>
                  <button  class="box-button mg-l8 mg-r24 box-btn-s_small box-btn-t_primary"><!----> 查询</button>
                  <label class="box-ratio-main">
                    <span class="checked-box iconfont" :class="checkLswt==1?'icon-yduidanxuankuangxuanzhong':'icon-yduidanxuankuang'"></span>
                    <input type="radio" name="check-lswt"  @click="getCheckHistory(1)"  :checked="checkLswt==1" style="display:none" >
                    <span class="mg-l4">最近2天</span>
                  </label>
                  <label class="box-ratio-main" >
                    <span class="checked-box iconfont" :class="checkLswt==2?'icon-yduidanxuankuangxuanzhong':'icon-yduidanxuankuang'"></span>
                    <input type="radio"  name="check-lswt"  @click="getCheckHistory(2)" style="display:none" :checked="checkLswt==2" >
                    <span class="mg-l4">最近一周年</span>
                  </label>
                  <label class="box-ratio-main" >
                    <span class="checked-box iconfont" :class="checkLswt==3?'icon-yduidanxuankuangxuanzhong':'icon-yduidanxuankuang'"></span>
                    <input type="radio"  name="check-lswt"  @click="getCheckHistory(3)" style="display:none" :checked="checkLswt==3" >
                    <span class="mg-l4">最近一月</span>
                  </label>
                </div>
              </div>
              <div>
                <div class="chongzhijilu">
                  <div class="table-container">
                    <table v-if="true" border="0" cellspacing="0" cellpadding="0">
                      <thead class="table-header czjl">
                      <tr>
                        <th class="text-left">时间</th>
                        <th class="text-left">市场</th>
                        <th class="text-left">方向</th>
                        <th class="text-left">委托/成交价格</th>
                        <th class="text-left">委托/成交数量</th>
                        <th class="text-left">委托/成交金额</th>
                        <th class="text-center">状态</th>
                      </tr>
                      </thead>
                      <tbody class="table-body">
                      <tr>
                        <td class="text-left">BTC</td>
                        <td class="text-left">2018-7-7 20:56:22</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-left">2</td>
                        <td class="text-left">2018-7-7 20:56:22</td>
                        <td class="text-left">2123</td>
                        <td class="text-center">
                          <div class="color-primary">进行中</div>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">ETC</td>
                        <td class="text-left">Bitcoin</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-center">
                          <div class="color-red">失败</div>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">ETH</td>
                        <td class="text-left">Bitcoin</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-center">
                          <div class="color-light">成功</div>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">BTC</td>
                        <td class="text-left">Bitcoin</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-center">
                          <div class="color-red">失败</div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <div v-else class="no-data">暂无数据</div>
                  </div>
                </div>
              </div>
            </div>
            <!--成交记录-->
            <div class="table-2"  v-if="tableChecked===2">
              <div class="flex-box space-between pd-t16">
                <div class="box-ratio-group">
                  <div  class="ts-14" style="width: 100px;">
                    <div  class="box-input-box">
                      <input placeholder="币种" type="text" class="input_btype ">
                    </div>
                  </div>
                  <div style="padding:0 10px;"> / </div>
                  <div class="ts-14">
                    <div  class="box-input-box">
                      <select  class="select-bz">
                        <option value="">全部</option>
                        <option value="">USTD</option>
                        <option value="">BTC</option>
                        <option value="">ETH</option>
                      </select>
                    </div>
                  </div>
                  <button  class="box-button mg-l8 mg-r24 box-btn-s_small box-btn-t_primary"><!----> 查询</button>
                  <label class="box-ratio-main" @click="getCheckOkType(1)" >
                    <span class="checked-box iconfont" :class="checkCjjl==1?'icon-yduidanxuankuangxuanzhong':'icon-yduidanxuankuang'"></span>
                    <input type="radio" name="check-cjjl" :checked="checkCjjl==1"  style="display:none" >
                    <span class="mg-l4">最近2天</span>
                  </label>
                  <label class="box-ratio-main" @click="getCheckOkType(2)">
                    <span class="checked-box iconfont" :class="checkCjjl==2?'icon-yduidanxuankuangxuanzhong':'icon-yduidanxuankuang'"></span>
                    <input type="radio"  name="check-cjjl" :checked="checkCjjl==2" style="display:none" >
                    <span class="mg-l4">最近一周年</span>
                  </label>
                  <label class="box-ratio-main" @click="getCheckOkType(3)">
                    <span class="checked-box iconfont" :class="checkCjjl==3?'icon-yduidanxuankuangxuanzhong':'icon-yduidanxuankuang'"></span>
                    <input type="radio"  name="check-cjjl" :checked="checkCjjl==3" style="display:none" >
                    <span class="mg-l4">最近一月</span>
                  </label>
                </div>
              </div>
              <div>
                <div class="chongzhijilu">
                  <div class="table-container">
                    <table v-if="true" border="0" cellspacing="0" cellpadding="0">
                      <thead class="table-header czjl">
                      <tr>
                        <th class="text-left">时间</th>
                        <th class="text-left">市场</th>
                        <th class="text-left">方向</th>
                        <th class="text-left">成交价格	</th>
                        <th class="text-left">成交数量</th>
                        <th class="text-left">手续费(单位)	</th>
                        <th class="text-center">成交金额</th>
                      </tr>
                      </thead>
                      <tbody class="table-body">
                      <tr>
                        <td class="text-left">BTC</td>
                        <td class="text-left">2018-7-7 20:56:22</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-left">2</td>
                        <td class="text-left">2018-7-7 20:56:22</td>
                        <td class="text-left">123123</td>
                        <td class="text-center">
                          <div class="color-primary">进行中</div>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">ETC</td>
                        <td class="text-left">Bitcoin</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-center">
                          <div class="color-red">失败</div>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">ETH</td>
                        <td class="text-left">Bitcoin</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-center">
                          <div class="color-light">成功</div>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">BTC</td>
                        <td class="text-left">Bitcoin</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-left">0.00000000</td>
                        <td class="text-center">
                          <div class="color-red">失败</div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <div v-else class="no-data">暂无数据</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      tableChecked:0,
      checkCjjl:1,
      checkLswt:1
    }
  },
  mounted(){

  },
  methods:{
    goRouterPath(val){
      this.tableChecked=val
    },
    getCheckHistory(type){
      console.log(type)
      this.checkLswt=type
    },
    getCheckOkType(type){
      this.checkCjjl=type
    }
  }
}
</script>

<style  lang='scss' scoped>
@import './css/index.scss';
.table-container{
	margin-top:30px;
	padding: 18px;
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
				color:#626c7a !important;
			}
		}

	}
    .table-header.zcmx{
		tr{
			th{
				padding: 10px 0 10px 8px;

				 &:first-child{
				 	width:98px;
				 	padding-left:28px;
				 }
				 &:nth-child(2){
				 	width:154px;
				 }
				 &:nth-child(3){
				 	width:154px;
				 }
				 &:nth-child(4){
				 	width:158px;
				 }
				 &:nth-child(5){
				 	width:158px;
				 }
				 &:nth-child(6){
				 	width:158px;
				 }
				 &:nth-child(7){
				 	width:203px;
				 }

			}
		}
    }
    .table-header.czjl{
		tr{

			th{
				padding: 10px 0 10px 8px;
				 &:first-child{
				 	width:98px;
				 	padding-left:28px;
				 }
				 &:nth-child(2){
				 	width:154px;
				 }
				 &:nth-child(3){
				 	width:154px;
				 }
				 &:nth-child(4){
				 	width:158px;
				 }
				 &:nth-child(5){
				 	width:158px;
				 }
				 &:nth-child(6){
				 	width:208px;
				 }
				 &:nth-child(7){
				 	width:238px;
				 }

			}
		}
    }
    .table-header.txjl{
		tr{

			th{
				padding: 10px 0 10px 8px;
				 &:first-child{
				 	width:98px;
				 	padding-left:28px;
				 }
				 &:nth-child(2){
				 	width:154px;
				 }
				 &:nth-child(3){
				 	width:348px;
				 }
				 &:nth-child(4){
				 	width:158px;
				 }
				 &:nth-child(5){
				 	width:158px;
				 }
				 &:nth-child(6){
				 	width:158px;
				 }
				 &:nth-child(7){
				 	width:112px;
				 }

			}
		}
    }
    .table-header.wdzd{
		tr{

			th{
				padding: 10px 0 10px 8px;
				 &:first-child{
				 	width:96px;
				 	padding-left:28px;
				 }
				 &:nth-child(2){
				 	width:156px;
				 }
				 &:nth-child(3){
				 	width:176px;
				 }
				 &:nth-child(4){
				 	width:176px;
				 }
				 &:nth-child(5){
				 	width:176px;
				 }
				 &:nth-child(6){
				 	width:176px;
				 }
				 &:nth-child(7){
				 	width:244px;
				 }

			}
		}
    }
    .table-body{
      tr{
        &:nth-of-type(even){
          background:#181f2e
        }
      }
      tr{
        td{
          padding: 10px 0 10px 8px;
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
  .asset-loading{
    height:200px;
  }
</style>
<template>
	<div class="container">
		<div class="main min-w">
			<div class="child-main min-w">
				<div class="max-w">
					<div class="child-nav-main pd-t24">
						<div class="child-nav_title color-primary"><span>资产管理</span></div>
						<div class="child-nav_nav">
							<span  class="child-nav_item" @click="selectTable(0)" :class="{' router-link-exact-active':tableChecked===0}" >
								<span>资产明细</span>
								<span  class="after ts-12"></span>
							</span>
							<span  class="child-nav_item"  @click="selectTable(1)" :class="{' router-link-exact-active':tableChecked===1}">
								<span >充值记录</span>
								<span  class="after ts-12"></span>
							</span>
							<span  class="child-nav_item"  @click="selectTable(2)" :class="{' router-link-exact-active':tableChecked===2}">
								<span>提现记录</span>
								<span  class="after ts-12"></span>
							</span>
							<span  class="child-nav_item"  @click="selectTable(3)" :class="{' router-link-exact-active':tableChecked===3}">
								<span>我的账单</span>
								<span  class="after ts-12"></span>
							</span>
						</div>
					</div>
					<div class="table-wrap">
						<div class="table-1"  v-if="tableChecked===0">
							<div class="flex-box space-between pd-t16">
								<div class="flex-box">
									<div  class="ts-14" style="width: 180px;">
										<div  class="box-input-box">
											<span  class="box-input_prefix pd-l8">
												<div  class="iconfont icon-tubiao-copy color-grey"></div>
											</span>
											<span  class="box-input_suffix pd-r8" style="z-index: 1;"></span> <!---->
											<input  type="text" class="input__input_style  input_small " v-model="AssetConfig.currencyType" @keypress.enter="searchCurrencyType">
										</div>
									</div>
									<label  class="box-checkbox-main ts-14 color-grey mg-l16" @click="hideSmallType">
										<span class="checked-box iconfont " :class="AssetConfig.HideSmallType?'icon-yduidanxuankuangxuanzhong':'icon-yduidanxuankuang '"></span>
										<span class="ft-14 color-grey">隐藏小额资产</span>
									</label>
								</div>
								<div class="ts-14 color--grey text-right">
									<div>
										 <span> 账户总资产(估值)</span>
										 <span class="color-primary" v-if="lookData"> ≈ 0.00000000 BTC / 0.00CNY</span>
                     <span class="color-primary" v-else> ≈ *** BTC / ***CNY</span>
									</div>
									<div class="ts-12">
										<span>日提现额度</span>
										<span class="color-primary mg-l8 mg-r24" v-if="lookData">2 BTC</span>
                    <span class="color-primary mg-l8 mg-r24" v-else>*** BTC</span>
										<span>今日已用</span>
										<span class="color-primary mg-l8" v-if="lookData">0 BTC</span>
                    <span class="color-primary mg-l8" v-else> ≈ *** BTC</span>
									</div>
								</div>
							</div>
							<div class="">
								<div class="zicanmingxi">
									<div class="table-container">
                    <div class="asset-loading" v-if="chargeLoading">
                      <loading :size="20"></loading>
                    </div>
                    <div v-else>
                      <table v-if="AssetDetail.length>0" border="0" cellspacing="0" cellpadding="0">
                        <thead class="table-header zcmx">
                        <tr>
                          <th class="text-left">币种</th>
                          <!--<th class="text-left">币种全称</th>-->
                          <th class="text-right">地址</th>
                          <th class="text-right">可用</th>
                          <th class="text-right">冻结</th>
                          <!--<th class="text-right">估值 BTC</th>-->
                          <th class="text-center">操作</th>
                        </tr>
                        </thead>
                        <tbody class="table-body">
                        <tr v-for="(item,key) in AssetDetail" v-if="showSmall(item)" >
                          <td class="text-left">{{item.symbol}}</td>
                          <!--<td class="text-left">{{item.fullName}}</td>-->
                          <td class="text-right">{{item.in_address||'***'}}</td>
                          <td class="text-right">{{lookData?item.value:'***'}}</td>
                          <td class="text-right">{{lookData?item.freeze_value:'***'}}</td>
                          <!--<td class="text-right">{{lookData?item.valuation:'***'}}</td>-->
                          <td class="text-center">
                            <div>
                              <button  class="box-button mg-r8" @click="chargeCoin"><!----> 充值</button>
                              <button  class="box-button" @click="putForwardCoin"><!----> 提现</button>
                            </div>
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
						<div class="table-2"  v-if="tableChecked===1">
							<div class="flex-box space-between pd-t16">
								<div class="flex-box" style="min-width: 350px;">
									<div  class="ts-14" style="width: 180px;">
										<div  class="box-input-box">
											<span  class="box-input_prefix pd-l8">
												<div  class="iconfont icon-tubiao-copy color-grey"></div>
											</span>
											<span  class="box-input_suffix pd-r8" style="z-index: 1;"></span> <!---->
											<input  type="text" class="input__input_style  input_small " v-model="RechargeConfig.searchText" @keypress.enter="searchChargeType">
										</div>
									</div>
								</div>
								<div class="box-ratio-group">
									<label class="box-ratio-main">
										<span class="checked-box iconfont" :class="RechargeConfig.type==1?'icon-yduidanxuankuangxuanzhong':'icon-yduidanxuankuang'" ></span>
										<input type="radio"   name="check-czzt"  style="display:none"  @click="ReChargeWatchType(1)" >
										<span class="mg-l4">全部</span>
									</label>
									<label class="box-ratio-main" >
										<span class="checked-box iconfont" :class="RechargeConfig.type==2?'icon-yduidanxuankuangxuanzhong':'icon-yduidanxuankuang'"></span>
										<input type="radio"  name="check-czzt" style="display:none" @click="ReChargeWatchType(2)">
										<span class="mg-l4">成功</span>
									</label>
									<label class="box-ratio-main">
										<span class="checked-box iconfont" :class="RechargeConfig.type==3?'icon-yduidanxuankuangxuanzhong':'icon-yduidanxuankuang'"></span>
										<input type="radio"     name="check-czzt" style="display:none"  @click="ReChargeWatchType(3)" >
										<span class="mg-l4">进行中</span>
									</label>
									<label class="box-ratio-main">
										<span class="checked-box iconfont" :class="RechargeConfig.type==4?'icon-yduidanxuankuangxuanzhong':'icon-yduidanxuankuang'"></span>
										<input type="radio"   name="check-czzt"  style="display:none"  @click="ReChargeWatchType(4)">
										<span class="mg-l4">失败</span>
									</label>
								</div>
							</div>
							<div>
								<div class="chongzhijilu">
									<div class="table-container">
                    <div class="asset-loading" v-if="chargeLoading">
                      <loading :size="20"></loading>
                    </div>
                    <div v-else>
                      <table v-if="RechargeRecord.length>0" border="0" cellspacing="0" cellpadding="0">
                        <thead class="table-header czjl">
                        <tr>
                          <th class="text-left">币种</th>
                          <th class="text-left">时间</th>
                          <th class="text-left">金额</th>
                          <th class="text-left">确认次数</th>
                          <th class="text-left">处理时间</th>
                          <th class="text-left">充值地址</th>
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
                          <td class="text-left">asdasdasdasdasdasdasdasdasdas</td>
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
						<div class="table-3"  v-if="tableChecked===2">
							<div class="flex-box space-between pd-t16">
								<div class="flex-box" >
									<div  class="ts-14" style="width: 180px;">
										<div  class="box-input-box">
											<span  class="box-input_prefix pd-l8">
												<div  class="iconfont icon-tubiao-copy color-grey"></div>
											</span>
											<span  class="box-input_suffix pd-r8" style="z-index: 1;"></span> <!---->
											<input  type="text" class="input__input_style  input_small" v-model="PresentConfig.searchText" @keypress.enter="searchPresentType">
										</div>

									</div>
								</div>
								<div class="box-ratio-group">
									<label class="box-ratio-main">
										<span class="checked-box iconfont " :class="PresentConfig.type==1?'icon-yduidanxuankuangxuanzhong':'icon-yduidanxuankuang'" ></span>
										<input type="radio" name="check-txjl"  style="display:none" @click="PresentWatchTYpe('1')" >
										<span class="mg-l4">全部</span>
									</label>
									<label class="box-ratio-main">
										<span class="checked-box iconfont " :class="PresentConfig.type==2?'icon-yduidanxuankuangxuanzhong':'icon-yduidanxuankuang'"></span>
										<input type="radio"  name="check-txjl" style="display:none" @click="PresentWatchTYpe('2')" >
										<span class="mg-l4">成功</span>
									</label>
									<label class="box-ratio-main">
										<span class="checked-box iconfont " :class="PresentConfig.type==3?'icon-yduidanxuankuangxuanzhong':'icon-yduidanxuankuang'"></span>
										<input type="radio"  name="check-txjl" style="display:none" @click="PresentWatchTYpe('3')" >
										<span class="mg-l4">进行中</span>
									</label>
									<label class="box-ratio-main">
										<span class="checked-box iconfont " :class="PresentConfig.type==4?'icon-yduidanxuankuangxuanzhong':'icon-yduidanxuankuang'"></span>
										<input type="radio"  name="check-txjl"  style="display:none" @click="PresentWatchTYpe('4')" >
										<span class="mg-l4">失败</span>
									</label>
								</div>
							</div>
							<div>
								<div class="chongzhijilu tixianjilu">
									<div class="table-container">
                    <div class="asset-loading" v-if="PresentLoading">
                      <loading :size="20"></loading>
                    </div>
                   <div v-else>
										<table v-if="PresentRecord.length>0" border="0" cellspacing="0" cellpadding="0">
											<thead class="table-header txjl">
												<tr>
													<th class="text-left">币种</th>
													<th class="text-left">时间</th>
													<th class="text-left">接收地址</th>
													<th class="text-left">金额</th>
													<th class="text-left">实到金额</th>
													<th class="text-left">处理时间</th>
													<th class="text-center">状态</th>
												</tr>
											</thead>
											<tbody class="table-body">
												<tr>
													<td class="text-left">BTC</td>
													<td class="text-left">2018-7-7 20:56:22</td>
													<td class="text-left">asdasdasdasdasdasdasdasdasdas</td>
													<td class="text-left">2222222</td>
													<td class="text-left">23333333</td>
													<td class="text-left">2018-7-7 20:56:22</td>
													<td class="text-center">
														<div class="color-primary">进行中</div>
													</td>
												</tr>
												<tr>
													<td class="text-left">BTC</td>
													<td class="text-left">2018-7-7 20:56:22</td>
													<td class="text-left">asdasdasdasdasdasdasdasdasdas</td>
													<td class="text-left">2222222</td>
													<td class="text-left">23333333</td>
													<td class="text-left">2018-7-7 20:56:22</td>
													<td class="text-center">
														<div class="color-primary">进行中</div>
													</td>
												</tr>
												<tr>
													<td class="text-left">BTC</td>
													<td class="text-left">2018-7-7 20:56:22</td>
													<td class="text-left">asdasdasdasdasdasdasdasdasdas</td>
													<td class="text-left">2222222</td>
													<td class="text-left">23333333</td>
													<td class="text-left">2018-7-7 20:56:22</td>
													<td class="text-center">
														<div class="color-primary">进行中</div>
													</td>
												</tr>
												<tr>
													<td class="text-left">BTC</td>
													<td class="text-left">2018-7-7 20:56:22</td>
													<td class="text-left">asdasdasdasdasdasdasdasdasdas</td>
													<td class="text-left">2222222</td>
													<td class="text-left">23333333</td>
													<td class="text-left">2018-7-7 20:56:22</td>
													<td class="text-center">
														<div class="color-primary">进行中</div>
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
						<div class="table-4"  v-if="tableChecked===3">
							<div class="flex-box space-between pd-t16">
								<div class="flex-box">
									<div  class="ts-14 mg-r24 ">
										<span class="mg-r8 color--grey">币种</span>
										<select name="" v-model="MyBillConfig.coinType"  class="select-bz" @change="searchCoinType">
											<option value="">全部</option>
											<option value="BTC">ETC</option>
											<option value="BTC">ETH</option>
											<option value="BTC">EOS</option>
											<option value="BTC">FI</option>
											<option value="BTC">SEO</option>
										</select>
									</div>
									<div  class="ts-14 mg-r24">
										<span class="mg-r8 color--grey">类型</span>
										<select name="" v-model="MyBillConfig.type" id="" class="select-bz" @change="searchCoinType" >
											<option value="">全部</option>
											<option value="BTC">ETC</option>
											<option value="BTC">ETH</option>
											<option value="BTC">EOS</option>
											<option value="BTC">FI</option>
											<option value="BTC">SEO</option>
										</select>
									</div>
									<div class="ts-14">
										<span class="mg-r8 color--grey">时间范围</span>
										<input type="text" v-model="MyBillConfig.date" class="date_fw input__input_style  " id="date_fw" readonly="readonly" >
									</div>
								</div>
								<div class="box-ratio-group" @click="exportData" >
									导出数据
								</div>
							</div>
							<div>
								<div class="chongzhijilu wodezhangdan">
									<div class="table-container">
                    <div class="asset-loading" v-if="MyBillLoading">
                      <loading :size="20"></loading>
                    </div>
                    <div v-else>
                      <table v-if="MyBill.length>0" border="0" cellspacing="0" cellpadding="0">
                        <thead class="table-header wdzd">
                          <tr>
                            <th class="text-left">币种</th>
                            <th class="text-left">时间</th>
                            <th class="text-left">类型</th>
                            <th class="text-left">数量</th>
                            <th class="text-left">手续费(单位)</th>
                            <th class="text-left">账户余额</th>
                            <th class="text-center">备注</th>
                          </tr>
                        </thead>
                        <tbody class="table-body">
                          <tr>
                            <td class="text-left">BTC</td>
                            <td class="text-left">2018-7-7 20:56:22</td>
                            <td class="text-left">add多</td>
                            <td class="text-left">2222222</td>
                            <td class="text-left">23333333</td>
                            <td class="text-left">2018-7-7 20:56:22</td>
                            <td class="text-center">
                              <div class="color-primary">进行中</div>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-left">BTC</td>
                            <td class="text-left">2018-7-7 20:56:22</td>
                            <td class="text-left">asdasdasdasdasdasdasdasdasdas</td>
                            <td class="text-left">2222222</td>
                            <td class="text-left">23333333</td>
                            <td class="text-left">2018-7-7 20:56:22</td>
                            <td class="text-center">
                              <div class="color-primary">进行中</div>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-left">BTC</td>
                            <td class="text-left">2018-7-7 20:56:22</td>
                            <td class="text-left">asdasdasdasdasdasdasdasdasdas</td>
                            <td class="text-left">2222222</td>
                            <td class="text-left">23333333</td>
                            <td class="text-left">2018-7-7 20:56:22</td>
                            <td class="text-center">
                              <div class="color-primary">进行中</div>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-left">BTC</td>
                            <td class="text-left">2018-7-7 20:56:22</td>
                            <td class="text-left">asdasdasdasdasdasdasdasdasdas</td>
                            <td class="text-left">2222222</td>
                            <td class="text-left">23333333</td>
                            <td class="text-left">2018-7-7 20:56:22</td>
                            <td class="text-center">
                              <div class="color-primary">进行中</div>
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
	</div>
</template>
<script>
const layui =require('../../../assets/js/libs/laydate/laydate.js')
import {debounce,throttle } from "../../../assets/js/dt_time"
import { mapState, mapGetters,mapActions,mapMutations } from "vuex";
import {getSearch,assets} from '../../../service/property'
	//账户资产
	export default{
		data(){
			return {
				tableChecked:0,
        AssetLoading:false,
        chargeLoading:false,
        PresentLoading:false,
        MyBillLoading:false,
        AssetDetail:[],
        AssetConfig:{
          currencyType:'',
          debounce:null,
          HideSmallType:false
        },
        RechargeRecord:[],
        RechargeConfig:{
				  type:1,
          searchText:'',
          debounce:null
        },
        PresentRecord:[],
        PresentConfig:{
				  type:1,
          searchText:''
        },
        MyBill:[],
        MyBillConfig:{
				  coinType:'',
          type:'',
          date:''
        }
			}
		},
    computed:{
      ...mapState(['isLogin','lookData'])
    },
		methods:{
			inputClick(val){
				console.log(val)
			},
			change(val){
				console.log(val)
			},
			dateInit(){
				let tdate=new Date()
				let today = tdate.setFullYear(tdate.getFullYear(), tdate.getMonth(),tdate.getDate() )
				let ydate=new Date()
				let yesday = ydate.setFullYear(ydate.getFullYear(), ydate.getMonth(),ydate.getDate()-1 )

				function isTen (val){
					return val<10?'0'+val:val
				}
				let daystart=ydate.getFullYear()+'/'+isTen(ydate.getMonth()+1)+'/'+isTen(ydate.getDate())
				let dayend=tdate.getFullYear()+'/'+isTen(tdate.getMonth()+1)+'/'+isTen(tdate.getDate())
        let _this=this
        _this.MyBillConfig.date=daystart+' - '+dayend,
				laydate.render({
				  elem: '#date_fw',
				  range: true,
				  type: 'date',
				  format: 'yyyy/MM/dd',
				  theme: '#393D49',
				  value:daystart+' - '+dayend,
          done(value, date, endDate){
            _this.MyBillConfig.date=value
            _this.searchCoinType()
				  }
				});
			},
			selectTable(val){
				this.tableChecked=val
        if(val==3){
				  this.$nextTick(()=>{
            this.dateInit()
          })
        }
			},
      /**
       * 资产管理
       * 2018-7-12 16:18:45
       **/
      //获取数据列表
      async getAssets(){
        this.AssetLoading=true
        let assetsData= await assets()
        this.AssetLoading=false
        if(assetsData.error){
          this.AssetDetail=[]
        }else{
          this.AssetDetail=assetsData.data
        }
      },

      //搜索资产明细
      searchCurrencyType(){
        this.AssetConfig.debounce()
      },
      //隐藏小额币种控制键
      hideSmallType(){
        this.AssetConfig.HideSmallType=!this.AssetConfig.HideSmallType
      },
      //是否显示小额币种
      showSmall(model){
          if( this.AssetConfig.HideSmallType ){
            if(model.value>0.001)
              return true
            else
              return false
          }
          return true
      },
      async chargeCoin(){
        alert('充值')
      },
      async putForwardCoin(){
        alert('提现')
      },
      /**
       * 充值记录
       */
      //查看类型
      ReChargeWatchType(type){
        if( this.RechargeConfig.type==type ) return
        this.RechargeConfig.type=type
      },
      //搜索
      searchChargeType(){
        this.RechargeConfig.debounce()
      },
      /**
       * 提现记录
       */
      PresentWatchTYpe(type){
        if( this.PresentConfig.type==type ) return
        this.PresentConfig.type=type
      },
      searchPresentType(){
        this.PresentConfig.debounce()
      },
      /**
       * 我的账单
       */
      searchCoinType(){
        console.log(this.MyBillConfig)
      },
      exportData(){
        alert('导出')
      }
		},
    created(){
      //搜索资产明细防抖
      this.AssetConfig.debounce=throttle(()=>{
        getSearch(this.AssetConfig.currencyType).then(res=>{
          console.log(res)
        })
      },2000)
      this.RechargeConfig.debounce=throttle(()=>{
        getSearch(this.RechargeConfig.searchText).then(res=>{
          console.log(res)
        })
      },2000)
      this.PresentConfig.debounce=throttle(()=>{
        getSearch(this.PresentConfig.searchText).then(res=>{
          console.log(res)
        })
      },2000)

      this.getAssets()
    },
		mounted(){

		},
    watch:{
		  login(){

      }
    }
	}
</script>

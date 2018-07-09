<style scoped lang='scss'>
@import "./css/index.scss";
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
.accounts .safe {
    padding-bottom: 24px;
}
.accounts .common-padding {
    background: #272d38;
    padding: 24px 24px 0;
    border-radius: 4px;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,.05), 0 7px 14px 0 rgba(18,18,26,.1);
}
.safe-box.border-bottom-solid[data-v-6d8e5883] {
    border-bottom: 1px solid hsla(0,0%,100%,.1);
}
.safe-box.border-top-solid[data-v-6d8e5883] {
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
.box-button.box-btn-t_normal {
    border: 1px solid rgba(39,183,194,.3);
    background-color: rgba(39,183,194,.06);
    color: #27b7c2;
}
.box-button.box-btn-s_normal {
    height: 36px;
    padding: 0 16px;
    font-size: 14px;
}
.box-button {
    text-decoration: none;
    line-height: 1.5;
    outline: none;
    cursor: pointer;
    white-space: nowrap;
    border-radius: 3px;
    box-sizing: border-box;
    background-color: #fff;
}
.line-boder-ds{
	 border: 1px dashed hsla(0,0%,100%,.1);
	 border-top:0;
	 border-left:0;
	 border-right:0;
}
.box-button.box-btn-t_primary {
    background-color: #27b7c2;
    border-color: transparent;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.06);
    color: #fff;
    font-weight: 600;
    border-style: solid;
}
.box-button.box-btn-s_normal {
    height: 36px;
    padding: 0 16px;
    font-size: 14px;
}
.box-button {
    text-decoration: none;
    line-height: 1.5;
    outline: none;
    cursor: pointer;
    white-space: nowrap;
    border-radius: 3px;
    box-sizing: border-box;
    background-color: #fff;
}
.color-exclamation {
    color: #ff9147;
    margin-right:30px;
    font-size: 25px;
}
.box-right{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.common-title {
    margin: 0;
    line-height: 1.5;
    color: #fff;
    font-size: 16px;
}
.accounts .api .apis {
    padding-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
<template>
  <div class="container">
    <div class="main min-w">
		<div class="child-main min-w">
			<div class="max-w">
				<div class="child-nav-main pd-t24">
					<div class="child-nav_title color-primary"><span>用户中心</span></div>
					<div class="child-nav_nav">
						<span  class="child-nav_item" @click="selectTable(0)" :class="{' router-link-exact-active':tableChecked===0}" >
							<span>账户信息</span>
							<span  class="after ts-12"></span>
						</span>
						<span  class="child-nav_item"  @click="selectTable(1)" :class="{' router-link-exact-active':tableChecked===1}">
							<span >身份认证</span>
							<span  class="after ts-12"></span>
						</span>
						<span  class="child-nav_item"  @click="selectTable(2)" :class="{' router-link-exact-active':tableChecked===2}">
							<span>我的邀请</span>
							<span  class="after ts-12"></span>
						</span>
					</div>
				</div>
				<div class="account-body max-w mg-t16">
					<div class="accounts">
						<div class="massage common-padding	">
							<div class="user-img"></div>
							<div class="user-msg mg-l16">
								<div class="userm-top">
									<div class="username clearfix">
										<p class="ts-16 pull-left color-primary us-email">fanka****com</p>
										<p class="pull-left isname mg-l24">
											<i class="iconfont icon-qipao ts-12"></i>
											<span class="ts-12 color-default">未实名认证</span>
										</p>
									</div>
									
									<div class="ts-12 color-grey us-uid mg-b24">UID<span class="mg-l4">811374571</span></div>
									
								</div>
								<div class="userM-bottom">
									<p class="color-grey ts-12 mg-t16 mg-b16">
						          		上次登录时间： 2018-07-09 19:02:58
						          		<span class="pd-l8">IP：</span>  
						          		222.240.107.226
						          	</p>
						        </div>
							</div>	
						</div>	
						<div class="errd mg-t16">
							<p class="errTitle marginNo">
								<i class="iconfont icon-qipao ts-16"></i> 
								<span class="ts-14 mg-l8 text-warn">您的账户存在安全风险</span>
							</p>
							<ul class="errList marginNo">
								<li class="ts-14 color-grey mg-r16"><div class="infor-dot mg-r8"></div>谷歌验证未绑定</li> 
								<li class="ts-14 color-grey mg-r16"><div class="infor-dot mg-r8"></div>短信认证未绑定</li> 
								<li class="ts-14 color-grey mg-r16"><div class="infor-dot mg-r8"></div>资金密码未设置</li>
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
										<button class="box-button box-btn-s_normal box-btn-t_normal">修改</button>
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
										<button class="box-button box-btn-s_normal box-btn-t_primary">绑定</button>
									</div>
								</div>
							</div>
							<div class="safecommon">
								<div class="line-box line-boder-ds">
									<div class="box-left">
										<div class="iconfont icon-iconfont color-exclamation"></div>
										<div class="ts-16 color-primary">谷歌验证</div>
										<div class="ts-12 color-grey mg-l48">短信验证用于登录，提现和修改安全验证未绑定</div>
									</div>
									<div class="box-right">
										<p class="ts-12 color-grey notbind mg-r24">
											<span class="iconfont icon-tubiao2"></span>
											<i>未绑定</i>
										</p>	
										<button class="box-button box-btn-s_normal box-btn-t_primary">绑定</button>
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
											<i>未绑定</i>
										</p>	
										<button class="box-button box-btn-s_normal box-btn-t_primary">设置</button>
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
								<button data-v-2947059a="" class="box-button box-btn-s_normal box-btn-t_normal">添加</button>
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
  data() {
    return {
      tableChecked: 0
    };
  }
};
</script>

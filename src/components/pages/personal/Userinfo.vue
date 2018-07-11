<style  lang='scss'>
@import "./css/index.scss";
</style>
<template>
  <div class="container">
    <div class="main min-w">
		<div class="child-main min-w">
			<div class="max-w">
				<div class="child-nav-main pd-t24">
					<div class="child-nav_title color-primary"><span>用户中心</span></div>
					<div class="child-nav_nav">
						<span  class="child-nav_item" @click="goRouterPath('UserCenter')" :class="{' router-link-exact-active':tableChecked==='UserCenter'}" >
							<span>账户信息</span>
							<span  class="after ts-12"></span>
						</span>
						<span  class="child-nav_item"  @click="goRouterPath('IdAuth')" :class="{' router-link-exact-active':tableChecked==='IdAuth'}">
							<span >身份认证</span>
							<span  class="after ts-12"></span>
						</span>
						<span  class="child-nav_item"  @click="goRouterPath('MyInvite')" :class="{' router-link-exact-active':tableChecked==='MyInvite'}">
							<span>我的邀请</span>
							<span  class="after ts-12"></span>
						</span>
					</div>
				</div>
				<div class="account-body max-w mg-t16">
          <router-view></router-view>
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
      tableChecked: 'UserCenter',
      tplInfo:{}
    }
  },
  components:{

  },
  mounted(){

  },
  methods:{
    goRouterPath(val){
      this.$router.push({name:val})
      this.tableChecked=val
    }
  },
  watch:{
    $route(to,form){
      if( to.path.indexOf('idAuth')>-1 ){
        this.tableChecked='IdAuth'
      }else{
        this.tableChecked=to.name
      }
    }
  }

};
</script>

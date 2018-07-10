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
						<span  class="child-nav_item" @click="goUserCenter(0)" :class="{' router-link-exact-active':tableChecked===0}" >
							<span>账户信息</span>
							<span  class="after ts-12"></span>
						</span>
						<span  class="child-nav_item"  @click="goIdAuth(1)" :class="{' router-link-exact-active':tableChecked===1}">
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
      tableChecked: 0,
      tplInfo:{}
    }
  },
  components:{

  },
  mounted(){

  },
  methods:{
    goUserCenter(val){
      this.$router.push({name:'UserCenter'})
      this.tableChecked=val
    },
    goIdAuth(val){
      this.$router.push({name:'IdAuth'})
      this.tableChecked=val
    }
  }
};
</script>

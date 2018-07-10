<style lang="scss">
  .returnBox{
    .leftJ{
      font-size: 14px;
    }
    a {
      text-decoration: none;
    }
    .titled {
      line-height: 1.5;
      border-bottom: 1px solid hsla(0,0%,100%,.1);
    }
    .two {
      text-align: center;
      color: #ff944c;
    }
  }
</style>
<template>
    <div class="returnBox pd-t24 mg-b40">
      <a class="color-theme ts-12" @click="goBack">
        <i class="iconfont icon-left2 leftJ"></i>
        返回用户中心
      </a>
      <p class="mg-t8 mg-b24 pd-b16 titled color-primary ts-20"><slot></slot></p>
    </div>
</template>
<script>
  export default {
    data(){
      return{}
    },
    mounted(){},
    methods:{
      goBack(){
        this.$router.go(-1)
      }
    }

  }
</script>

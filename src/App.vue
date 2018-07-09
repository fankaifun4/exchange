<template>
  <div id="app">
    <v-head v-if="isHead"></v-head>
    <div  class="wrapper">
      <transition :name="transitionName">
      <router-view >
      </router-view>
    </transition>
    </div>
    <E_footer/>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import E_head from "./components/common/E_head";
import { Fun } from "@/lib/uTool.js"

export default {
  name: 'App',
  data() {
    return {
      transitionName: "",
      responseData: {},
      isHead: true,
    };
  },
  created(){
    function getParams(name){
      var results = new RegExp('[\\?&]'+ name + '=([^&#]*)').exec(window.location.href);
      if(!results) { return 0; }
      return results[1] || 0;
    }
    if(sessionStorage.isLogin=="true"){
      this.$store.dispatch("updateIsLogin",true);
    }else{
      sessionStorage.isLogin = false;
      this.$store.dispatch("updateIsLogin",false);
    }
  },
  methods:{

  },
  watch: {
    $route(to, from) {
      // console.log(to)
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName =
        toDepth < fromDepth ? "router-pop-out" : "router-pop-in";
    },
  },
  components: {
    vHead: E_head
  }
}
</script>

<style lang="scss">
@import './assets/css/comm.scss';
html,body{
  width: 100%;
  height: 100%;
  user-select: none;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
}

* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;

  word-wrap:break-word;
  word-break:break-all;
}

button, input, select, textarea {
  margin: 0;
  outline-offset: 0;
  outline-style: none;
  outline-width: 0;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  /*IOS去掉阴影*/
  -webkit-tap-highlight-color:rgba(255,0,0,0);
  border: 0;
  appearance: none;
  outline:none;
  -webkit-font-smoothing: inherit;
  background-image: none;
}

:focus, a, a:active, a:focus, a:hover, button, button:focus {
  /*去掉获取焦点后的外边框*/
  outline: 0;
}
.wrapper{
  position:relative;
}
.router-pop-out-enter-active,
.router-pop-out-leave-active,
.router-pop-in-enter-active,
.router-pop-in-leave-active {
  will-change: transform;
  transition: all 300ms;
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  backface-visibility: hidden;
}

.router-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.router-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.router-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.router-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>

<template>
  <div class="props">
    <div class="box">
      <p class="title">{{parentData.title}}</p>
      <p v-if="parentData.type!=0" class="text">
        {{parentData.text}}
      </p>
      <div v-if="parentData.type==2" class="btn" @click="entrue()">确定</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs';

  export default {
    name: "props",
    props: {
      parentData: {
        type: Object,
        default: null
      }
    },
    data () {
      return {
   
      };
    },
    created(){
      this.$parent.isHead = true;
      
    },
    mounted () {
   
    },
    methods: {
      entrue(){
        this.$emit("emitMsg",{name:"entrue"})
      },
    },
    watch: {
      
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width: 900px) {
  .props{
    width: 100%;
    position: fixed;
    top:0;
    bottom: 0;
    background: rgba(0,0,0,0.1);
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items:center; 
  }
  .props .box{
    width: 400px;
    height: auto;
    padding: 20px 30px;
    background: #fff;
  }
  .props .box .title{
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    line-height: 50px;
  }
  .props .box .text{
    font-size: 16px;
    color: #666;
    line-height: 30px;
  }
  .props .box .btn{
    width: 400px;
    font-size: 18px;
    line-height: 35px;
    margin: 20px auto 0;
    color: #fff;
    text-align: center;
    background: #27b7c2;
    cursor: pointer;
  }
}
@media screen and (max-width: 900px) {
  .props{
    width: 100%;
    position: fixed;
    top:0;
    bottom: 0;
    background: rgba(0,0,0,0.1);
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items:center; 
  }
  .props .box{
    width: 400px;
    height: auto;
    padding: 20px 30px;
    background: #fff;
  }
  .props .box .title{
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    line-height: 50px;
  }
  .props .box .text{
    font-size: 16px;
    color: #666;
    line-height: 30px;
  }
  .props .box .btn{
    width: 400px;
    font-size: 18px;
    line-height: 35px;
    margin: 20px auto 0;
    color: #fff;
    text-align: center;
    background: #27b7c2;
    cursor: pointer;
  }
}
</style>
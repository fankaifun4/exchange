const Fun = {
  //域名
  // web_host: "http://www.qkl.com",
  // web_host: "http://192.168.2.129",     //测试
  web_host: "http://www.gwcoin.hk",
  //去掉字符串中所有空格
  removeAllSpace: function (str) {
    return str.replace(/\s+/g, "");
  },
  //生成马的图片
  horseImg: function(obj){
    obj.forEach((v, k) => {
      v.ma = [];
      let ma = [];
      let n = 0;
      let genes = v.genes;
      for (let i = 0; i < 6; i++) {
        let zMa = "../../../static/images/" + n + "/" + genes[i] + ".png";
        n++;
        ma.push(zMa);
      }
      v.ma = ma;
    });
  },
  //删除数组中指定的元素
  removeElement: function(arr,arg,val){
    for (let i = 0; i < arr.length; i++) { 
      let obj = arr[i];
      if (obj[arg] == val) {
        arr.splice(i, 1);
        i--;
      }; 
    } 
  }
};

export {
  Fun
};
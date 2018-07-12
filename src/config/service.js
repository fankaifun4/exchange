import config from './http.config'
import axios from 'axios'

axios.defaults.baseURL=config.baseUrl

axios.interceptors.request.use(function (config) {
  config.headers['token']='adasdkljadkljadksljaskldjasd'
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

const HTTPREQUEST={
  timeout:100000,
}

function get(url,params){
  return axios.get(url,{
    params:{
      ...params
    }
  }).then((res)=>{
    return res
  })
}

function post(url,params){
  return axios.request({
    url,
    method:'POST',
    ...HTTPREQUEST
  },{
    ...params
  }).then((res)=>{
    return res
  })
}

function all (arr,fn) {
  return axios.all(arr)
    .then(axios.spread(fn))
}


export default {
  get,
  post,
  all
}

import {urls} from './urls'
import axios from 'axios'
import qs from 'qs';
/*function post(url,par){
  axios.post(url,par).then((res)=>{
    return Promise.resolve(res.data)
  })
}*/
//const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
const u = navigator.userAgent;
const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
const par={
  //os:isiOS?'ios':'android',
  //os:'ios',
  os:'alipayLife',
  v:'1.0',
  channel:'1'
};
const v = "1.0";
function combine(a,b){
  return  Object.assign({},a,b)
}
export function bannerImg(){//首页轮播图
  return axios.post (urls.bannerImg,qs.stringify(Object.assign({},par,{
    position:'1',
  }) )).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getCode(phoneNum){//获取验证码
  return axios.post(urls.vCode,qs.stringify( combine(par,{
    mobile:phoneNum
  }))).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function vCodeValid(phoneNum,code){//验证码是否正确？
  return axios.post(urls.vCodeValid,qs.stringify(combine(par,{
    mobile:phoneNum,
    params:{vcode:code}
  })) ).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function cookie(){//获取cookie
  return axios.post(urls.cookie, qs.stringify(combine(par,{
  }))).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function addressList(){//获取我的收货地址
  return axios.post(urls.addressList, qs.stringify(combine(par,{
  }))).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function login(phoneNum,code){//验证码登录
  return axios.post(urls.login, qs.stringify(combine(par,{
    mobile:phoneNum,
    params:'{"loginT":"mobile","vcode":'+code+'}'
  }))).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function activity(){//活动专区
  return axios.post(urls.activity,
    qs.stringify(combine(par,{
      position:'1'
    }))
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getCommodityDetail(id){//商品详情
  return axios.post(urls.getCommodityDetail,
    qs.stringify(combine(par,{
      id:id
    }))
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function commodityPropertiesList(cid){//商品详情
  return axios.post(urls.commodityPropertiesList,
    qs.stringify(combine(par,{
      commodityId:cid
    }))
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function cat(){//商品类别
  return axios.post(urls.cat,   qs.stringify(combine(par,{}))).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function catChild(cid){//商品子类别
  return axios.post(urls.catChild,   qs.stringify(combine(par,{
cid:cid,
pageNo :1,
pageSize:100,
  }))).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function commodityList(cid){//商品列表
  return axios.post(urls.commodityList,   qs.stringify(combine(par,{
    cid:cid,
    pageNo :1,
    pageSize:100,
  }))).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function commodityBrandList(){//商品品牌
  return axios.post(urls.commodityBrandList,qs.stringify({
    channel:'1',
    v:'1.0'
  }) ).then((res) => {
    return Promise.resolve(res.data)
  })
}

/*export function commodityList(){//商品列表接口
  return axios.post(urls.commodityList, {
    channel:'1'
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}*/ //参数没有齐



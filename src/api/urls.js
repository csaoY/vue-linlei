//let url = "http://120.76.94.141:8180/";//测试环境

export const urls= {
  cookie:'api/route.htm?method=user.cookie',//用户首次获取cookie
  vCode:'api/route.htm?method=vcode.mobile',//通过手机号获取验证码
  vCodeValid:'api/route.htm?method=user.vcode.mobile.valid',//验证码是否正确
  register:'api/route.htm?method=register',//注册
  login:'api/route.htm?method=user.login',//登录
  updatePassword:'api/route.htm?method=update.password',//修改密码
  addressList:'api/route.htm?method=user.address.list',//查询收货地址
  addAddress:'api/route.htm?method=user.address.add',//新增收货地址
  updateAddress:'api/route.htm?method=user.address.update',//更改收货地址
  removeAddress:'api/route.htm?method=user.address.remove',
  updateDefaultAddress:'api/route.htm?method=user.address.uptdefault',
  commonImg:'api/route.htm?method=base.img.common',
  bannerImg:'api/route.htm?method=commodity.base.banner',
  news:'api/route.htm?method=base.news',
  configuration:'api/route.htm?method=base.configuration',//租赁公告信息
  activity:'api/route.htm?method=commodity.activity',//活动专区4.41
  cat:'api/route.htm?method=commodity.cat.get',//商品类别4.2.2
  catChild:'api/route.htm?method=commodity.cat.child',//商品子集类别借口
  commodityBrandList:'api/route.htm?method=commodity.commodityBrandList',//4.2.3、商品品牌接口
  commodityList:'api/route.htm?method=commodity.commodityList',//4.2.4商品列表接口
  getCommodityDetail:'api/route.htm?method=commodity.getCommodityDetail',//4.2.5、商品详情
  commodityPropertiesList:'api/route.htm?method=commodity.commodityPropertiesList'

  //activity:'api/route.htm?method=commodity.activity',//	4.4.1、活动专区接口0015




};

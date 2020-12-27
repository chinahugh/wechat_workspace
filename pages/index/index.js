//index.js
//获取应用实例
const app = getApp()
Page({
  data: { 
    motto: '周围附近的那些事',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    background: ['/images/swiper1.png', '/images/swiper2.png', '/images/swiper1.png'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    productlist: [{ "id": "0", "name": "16.8L包装饮用水(大矿)", "num": 5, "price": "18.0", "packfee": "0.0", "picture": "/images/item.png" },
    { "id": "1", "name": "16.8L包装饮用水(大矿)1", "num": 5, "price": "18.0", "packfee": "0.0", "picture": "/images/item.png" },
    { "id": "2", "name": "16.8L包装饮用水(大矿)2", "num": 5, "price": "18.0", "packfee": "0.0", "picture": "/images/item.png" },
    { "id": "3", "name": "16.8L包装饮用水(大矿)3", "num": 5, "price": "18.0", "packfee": "0.0", "picture": "/images/item.png" },
    { "id": "4", "name": "16.8L包装饮用水(大矿)3", "num": 5, "price": "18.0", "packfee": "0.0", "picture": "/images/item.png" },
    { "id": "5", "name": "16.8L包装饮用水(大矿)3", "num": 5, "price": "18.0", "packfee": "0.0", "picture": "/images/item.png" },
    { "id": "6", "name": "16.8L包装饮用水(大矿)3", "num": 5, "price": "18.0", "packfee": "0.0", "picture": "/images/item.png" }]

  },

  //事件处理函数
  bindViewTap: function () {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
    //  wx.redirectTo({
    wx.navigateTo({
      url: '../user/user'
    })
  },
  onLoad: function () {
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        console.log(res)
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  tabChange(e) {
    console.log('tab change', e)
    app.tabChange(e);
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  reduce: function (item) {
    console.log(item)
  },
  add: function (item) {
    console.log(item)
  }
})

var json = require('../common/common.js')

Page({
  data: {
    imgUrls: [
      '/image/b1.jpg',
      '/image/b2.jpg',
      '/image/b3.jpg',
      '/image/b4.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800
  },
  /* 生命周期函数--监听页面加载 */
  onLoad: function (options) {
    this.setData({
      main_key: json.homeIndex
    })
  },
  // 跳转子页面 详情页面
  btn: function (e) {
    var HomeId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../component/details/details?id=' + HomeId,
    })
  }
})
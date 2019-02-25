// page/component/list/list.js
Page({
  data:{
    list: [
      { img: "/image/s9.png", name: "芒果干", weight: "100g", price: "0.01" },
      { img: "/image/s8.png", name: "夏威夷果", weight: "500g", price: "0.02" },
      { img: "/image/s7.png", name: "牛扎铁", weight: "300g", price: "0.03" },
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
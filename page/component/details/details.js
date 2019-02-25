var json = require('../../common/common.js')

Page({
  data:{
    HomeIndex: 0,
    num: 1,
    value: 0,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false
  },
  cutCount:function(){
    let num = this.data.num;
    if (num <= 1) {
      return false;
    }
      num--;
      this.setData({
        num: num
      })
  },
  addCount:function() {
    let num = this.data.num;
    num++;
    this.setData({
      num : num
    })
  },

  addToCart:function(e) {
    const self = this;
    const num = this.data.num;
    const total = this.data.totalNum;
    let cartItems = wx.getStorageSync("cartItems") || []
    let exist = cartItems.find(function (el) {
      return el.id == e.currentTarget.dataset.id
    })
    //有则+num
    if (exist) {
      exist.value = parseInt(exist.value) + num
    } else {
      cartItems.push({
        id: e.currentTarget.dataset.id,
        title: e.currentTarget.dataset.title,
        image: e.currentTarget.dataset.img,
        price: e.currentTarget.dataset.price,
        value: e.currentTarget.dataset.num,
        selected: true
      })
    }
    //更新缓存数据
    wx.setStorageSync("cartItems", cartItems)

    self.setData({
      show: true
    })
    setTimeout( function() {
      self.setData({
        show: false,
        scaleCart : true
      })
      setTimeout( function() {
        self.setData({
          scaleCart: false,
          hasCarts : true,
          totalNum: num + total
        })
      }, 200)
    }, 300);
  },

  bindTap:function(e) {
    console.log(e)
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  },
  onLoad: function (option) {
    let homeid = option.id
    let Homedata = json.homeIndex[homeid];
    this.setData({
      data: Homedata
    })
  }
})
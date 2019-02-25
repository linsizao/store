Page({
  data: {
    cartItems:[],               // 购物车列表
    hasList:false,          // 列表是否有数据
    totalPrice:0,           // 总价，初始为0
    selectAllStatus:true,    // 全选状态，默认全选
  },
  onShow() {
    // 获取
    var cartItems = wx.getStorageSync("cartItems")
    if (cartItems.length >0){
      this.setData({
        hasList: true,
        cartItems: cartItems
      })
    }
    this.getTotalPrice();
  },
  /**
   * 当前商品选中事件
   */
  selectList:function(e) {
    const index = e.currentTarget.dataset.index;
    let cartItems = this.data.cartItems;
    const selected = cartItems[index].selected;
    cartItems[index].selected = !selected;
    this.setData({
      cartItems: cartItems
    });
    this.getTotalPrice();
  },

  /**
   * 删除购物车当前商品
   */
  deleteList:function(e) {
    const index = e.currentTarget.dataset.index;
    let cartItems = this.data.cartItems;
    cartItems.splice(index,1);
    this.setData({
      cartItems: cartItems
    });
    if (cartItems.length < 1){
      this.setData({
        hasList: false
      });
      this.getTotalPrice(),
        wx.setStorageSync("cartItems", cartItems)
    }else{
      this.getTotalPrice(),
      wx.setStorageSync("cartItems", cartItems)
    }
  },

  /**
   * 购物车全选事件
   */
  selectAll:function(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let cartItems = this.data.cartItems;
    for (let i = 0; i < cartItems.length; i++) {
      cartItems[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      cartItems: cartItems
    });
    this.getTotalPrice();
  },

  /**
   * 绑定加数量事件
   */
  addCount:function(e) {
    const index = e.currentTarget.dataset.index;
    let cartItems = this.data.cartItems;
    let value = cartItems[index].value;
    value ++;
    cartItems[index].value = value;
    this.setData({
      cartItems: cartItems
    });
    this.getTotalPrice();
  },

  /**
   * 绑定减数量事件
   */
  minusCount:function(e) {
    const index = e.currentTarget.dataset.index;
    let cartItems = this.data.cartItems;
    let value = cartItems[index].value;
    if (value <= 1){
      return false;
    }
    value --;
    cartItems[index].value = value;
    this.setData({
      cartItems: cartItems
    });
    this.getTotalPrice();
  },

  /**
   * 计算总价
   */
  getTotalPrice:function() {
    let cartItems = this.data.cartItems;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {         // 循环列表得到每个数据
      if (cartItems[i].selected) {                     // 判断选中才会计算价格
        total += cartItems[i].value * cartItems[i].price;   // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      cartItems: cartItems,
      totalPrice: total.toFixed(2)
    });
  },
  toPay:function() {
    var orders = wx.getStorageSync("orders") || []
    let cartItems = this.data.cartItems;
    let cartItems2 = [];
    for (let i = 0; i < cartItems.length; i++){
      if (cartItems[i].selected){
        orders.push({
          di: cartItems[i].id,
          title: cartItems[i].title,
          image: cartItems[i].image,
          value: cartItems[i].value,
          status: "代付款",
          money: cartItems[i].price * cartItems[i].value,
        })
        wx.showModal({
          title: '提示',
          content: '个人小程序无法开通微信支付',
          showCancel: false,
          complete() {
            wx.switchTab({
              url: '/page/component/user/user'
            })
          }
        })
      }
      else{
        cartItems2.push(cartItems[i])
      }
      this.setData({
        cartItems: cartItems2
      })
    }
    wx.setStorageSync("cartItems", cartItems2)
    if (cartItems2.length < 1) {
      this.setData({
        hasList: false,
      })
    }
    wx.setStorageSync("orders", orders)
  }
})
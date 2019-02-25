Page({
    data: {
        category: [
            {name:'果味',id:'guowei'},
            {name:'糖果',id:'tangguo'},
            {name:'坚果',id:'jianguo'},
            {name:'点心',id:'dianxin'},
            {name:'膨化',id:'penghua'},
        ],
        categoryList:[
          {
            "id": "guowei",
            "banner": "/image/c1.png",
            "cate": "果味",
            "detail": [
              {
                "thumb": "/image/s9.png",
                "name": "芒果干 100g"
              },
              {
                "thumb": "/image/s8.png",
                "name": "夏威夷果 500g"
              },
              {
                "thumb": "/image/s7.png",
                "name": "牛扎铁 100g"
              },
              {
                "thumb": "/image/s9.png",
                "name": "芒果干 100g"
              },
              {
                "thumb": "/image/s8.png",
                "name": "夏威夷果 500g"
              },
              {
                "thumb": "/image/s7.png",
                "name": "牛扎铁 100g"
              }
            ]
          },
          {
            "id": "tangguo",
            "banner": "/image/c1.png",
            "cate": "糖果",
            "detail": [
              {
                "thumb": "/image/s9.png",
                "name": "芒果干 100g"
              },
              {
                "thumb": "/image/s8.png",
                "name": "夏威夷果 500g"
              },
              {
                "thumb": "/image/s7.png",
                "name": "牛扎铁 100g"
              },
              {
                "thumb": "/image/s9.png",
                "name": "芒果干 100g"
              },
              {
                "thumb": "/image/s8.png",
                "name": "夏威夷果 500g"
              },
              {
                "thumb": "/image/s7.png",
                "name": "牛扎铁 100g"
              }
            ]
          },
          {
            "id": "jianguo",
            "banner": "/image/c1.png",
            "cate": "坚果",
            "detail": [
              {
                "thumb": "/image/s9.png",
                "name": "芒果干 100g"
              },
              {
                "thumb": "/image/s8.png",
                "name": "夏威夷果 500g"
              },
              {
                "thumb": "/image/s7.png",
                "name": "牛扎铁 100g"
              },
              {
                "thumb": "/image/s9.png",
                "name": "芒果干 100g"
              },
              {
                "thumb": "/image/s8.png",
                "name": "夏威夷果 500g"
              },
              {
                "thumb": "/image/s7.png",
                "name": "牛扎铁 100g"
              }
            ]
          },
          {
            "id": "dianxin",
            "banner": "/image/c1.png",
            "cate": "点心",
            "detail": [
              {
                "thumb": "/image/s9.png",
                "name": "芒果干 100g"
              },
              {
                "thumb": "/image/s8.png",
                "name": "夏威夷果 500g"
              },
              {
                "thumb": "/image/s7.png",
                "name": "牛扎铁 100g"
              },
              {
                "thumb": "/image/s9.png",
                "name": "芒果干 100g"
              },
              {
                "thumb": "/image/s8.png",
                "name": "夏威夷果 500g"
              },
              {
                "thumb": "/image/s7.png",
                "name": "牛扎铁 100g"
              }
            ]
          },
          {
            "id": "penghua",
            "banner": "/image/c1.png",
            "cate": "膨化",
            "detail": [
              {
                "thumb": "/image/s9.png",
                "name": "芒果干 100g"
              },
              {
                "thumb": "/image/s8.png",
                "name": "夏威夷果 500g"
              },
              {
                "thumb": "/image/s7.png",
                "name": "牛扎铁 100g"
              },
              {
                "thumb": "/image/s9.png",
                "name": "芒果干 100g"
              },
              {
                "thumb": "/image/s8.png",
                "name": "夏威夷果 500g"
              },
              {
                "thumb": "/image/s7.png",
                "name": "牛扎铁 100g"
              }
            ]
          }
        ],
        curIndex: 0,
        isScroll: false,
        toView: 'guowei'
    },
    switchTab:function(e){
      const self = this;
      this.setData({
        isScroll: true
      })
      setTimeout(function(){
        self.setData({
          toView: e.target.dataset.id,
          curIndex: e.target.dataset.index
        })
      },0)
      setTimeout(function () {
        self.setData({
          isScroll: false
        })
      },1)
        
    }
    
})
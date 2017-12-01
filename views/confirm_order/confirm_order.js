// views/confirm_order/confirm_order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: [
      {
        goods_id: 1,
        goods_name: '清新小甜品早餐',
        stock: '30',
        thumbnail: '/images/delete/1.jpg',
        price: '8.00',
        content: [
          {
            name: '全麦面包',
            unit: '份',
            number: 1
          },
          {
            name: '山花原味牛奶',
            unit: '份',
            number: 1
          },
          {
            name: '水果杯',
            unit: '杯',
            number: 1
          }
        ]
      },
      {
        goods_id: 2,
        goods_name: '清新小甜品早餐2',
        stock: '30',
        thumbnail: '/images/delete/2.jpg',
        price: '10.00',
        content: [
          {
            name: '全麦面包',
            unit: '份',
            number: 1
          },
          {
            name: '山花原味牛奶',
            unit: '份',
            number: 1
          },
          {
            name: '水果杯',
            unit: '杯',
            number: 1
          }
        ]
      },
      {
        goods_id: 3,
        goods_name: '清新小甜品早餐3',
        stock: '30',
        thumbnail: '/images/delete/3.jpg',
        price: '12.00',
        content: [
          {
            name: '全麦面包',
            unit: '份',
            number: 1
          },
          {
            name: '山花原味牛奶',
            unit: '份',
            number: 1
          },
          {
            name: '水果杯',
            unit: '杯',
            number: 1
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  /**
   * 监听复选框变化
   */
  checkboxChange(e){
    console.log(e);
  },
  /**
   * 立即支付
   */
  nowPayment(){

    //TODO 调用支付方法

    //支付成功后跳转
    wx.navigateTo({url: '/views/take/take'});

  }
})
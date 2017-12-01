// views/take/take.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList : [1,2,3,4,5,6,7],
    //取消赠送按钮是否显示
    btnShow : true,
    //当前显示的订单下标
    orderIndex : 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 立即取餐
   */
  nowGive(){
    let _this = this;
    wx.showModal({
      content: '是否现在取餐',
      confirmColor:'#FA9C46',
      success(btn){
        if (btn.confirm) _this.giveSuccess();
      }
    });
  },

  /**
   * 取餐成功
   */
  giveSuccess(){
    let _this = this;
    wx.showToast({
      title: '取餐成功',
      icon: 'success',
      success(){
        _this.setData({ btnShow: false });
      }
    });
  },

  /**
   * 拨打申诉电话
   */
  callPhone(){
    wx.makePhoneCall({phoneNumber: '18984316437'});
  },

  /**
   * 订单切换
   */
  change(e){
    this.setData({ orderIndex : e.detail.current + 1});
  }

})
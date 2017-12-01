// welcom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //动画持续时间
    duration : 300,
    //图片组
    pics : [
      '/images/welcom/welcom_1.jpg',
      '/images/welcom/welcom_2.jpg',
      '/images/welcom/welcom_3.jpg'
    ],
    //swiper当前索引
  },
  //监听swiper change
  change(e){
    this.i = e.detail.current;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  /**
   *  手势事件
   *  手指按下
   */
  touchStart(e){
    this.start = e.touches[0].pageX;
  },

  /**
   * 手指按下后移动
   */
  touchmove(e){
    let moveX = e.touches[0].pageX;
    if(this.start,moveX - this.start <= -40){
      //右向左 ←
      
      //判断 当前 swiper 值
      if (this.i == (this.data.pics.length - 1)){
        //清除此事件 防止频繁触发
        this.touchmove = function(){};
        //跳转至首页，并记录缓存
        wx.redirectTo({
          url: '../index/index',
          success(){
            //临时清除缓存
            wx.setStorage({
              key: 'isOpen',
              data: '1',
            });
          }
        });
      };
    }else{
      //左向右 →
    };
  }
})
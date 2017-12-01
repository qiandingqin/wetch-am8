// views/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //用户头像
    nick : '花花童鞋',
    avatar : '',
    fans : 0,
    follow : 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.UserInfo();
  },

  //获取并设置用户信息
  UserInfo(){

    let _this = this;

    wx.getUserInfo({
      success(res){
        _this.data.nick = res.userInfo.nickName;
        _this.data.avatar = res.userInfo.avatarUrl;
        //更新数据
        _this.setData(_this.data);
      },
      error(){
        wx.showToast({title: '获取头像失败'});
      }
    });

  }
})
// views/index/index.js
import { aMapGeo, ICON} from '../../config.js';
import U from '../../utils/utils.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //总价栏示隐藏
    isHide : '',
    pics : [
      '/images/welcom/welcom_1.jpg',
      '/images/welcom/welcom_2.jpg',
      '/images/welcom/welcom_3.jpg'
    ],
    nowbuys : [
      {
        avatar: '/images/welcom/welcom_3.jpg',
        nick : '夏日清',
        price : 8,
        goods_name : '清新小甜品早点'
      },
      {
        avatar: '/images/welcom/welcom_2.jpg',
        nick: '没有的事',
        price: 8,
        goods_name: '清新小甜品早点'
      },
      {
        avatar: '/images/welcom/welcom_1.jpg',
        nick: '牛的不行',
        price: 8,
        goods_name: '清新小甜品早点'
      }
    ],
    //商品列表
    goodsList : [
      {
        cart : 0,
        goods_id: 1,
        goods_name : '清新小甜品早餐',
        stock : '30',
        thumbnail : '/images/delete/1.jpg',
        price : '8.00',
        content : [
          {
            name : '全麦面包',
            unit: '份',
            number : 1
          },
          {
            name: '山花原味牛奶',
            unit : '份',
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
        cart: 0,
        goods_id: 2,
        goods_name : '清新小甜品早餐2',
        stock : '30',
        thumbnail : '/images/delete/2.jpg',
        price : '10.00',
        content : [
          {
            name : '全麦面包',
            unit: '份',
            number : 1
          },
          {
            name: '山花原味牛奶',
            unit : '份',
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
        cart: 0,
        goods_id : 3,
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
    ],
    //当前用户地址
    address : '',
    //总价
    amount : 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    //获取用户信息
    wx.getUserInfo({
      success(res){
        //console.log(res);
      }
    });

    //获取GPS坐标 经纬度
    wx.getLocation({
      type: 'wgs84',
      success: _this.Geo,
      fail(){
        wx.showToast({title: '获取位置失败'});
      }
    })
  },

  /**
   * 经纬度地址编码 使用高德
   */

  Geo(res){
    let url = aMapGeo;
    let _this = this;
    url += `location=${res.longitude},${res.latitude}`;
    wx.request({
      url: url,
      success(data){
        let o = data.data.regeocode.addressComponent;
        let address = o.city + o.district + o.streetNumber.street + o.streetNumber.number;
        _this.setData({address: address});
      },
      fail(){
        console.log('获取地址失败');
      }
    });
  },

  /**加 */
  add(e){
    this.addAndMinus(e,true);
  },
  /**减 */
  minus(e){
    this.addAndMinus(e);
  },
  /**加减共用 */
  addAndMinus(e,isAdd){
    let i = e.currentTarget.dataset.index;
    let max = 9,min = 0;
    let msg = '';
    let n = this.data.goodsList[i].cart;
    n = isAdd?++n:--n;

    if (n > max){
      msg = `最大输入 ${max}`;
    } else if (n < min){
      msg = `最小输入 ${min}`;
    };

    if(msg){
      wx.showToast({ title: msg, image: ICON.WARNING});
      return;
    };

    this.data.goodsList[i].cart = n;
    this.setData({ goodsList: this.data.goodsList });
    this.calc();
  },

  /**计算总价 */
  calc(){
    let amount = 0;

    this.data.goodsList.forEach(item => {
      amount += item.cart * item.price;
    });

    this.setData({ 
      amount: U.FormMoney(amount, 2, ''),
      isHide: amount?'bounceInLeft':'bounceOutLeft'
    });
  },
  /**图片预览 */
  preViewImage(e){
    let index = e.currentTarget.dataset.index;
    let urls = [];

    urls = this.data.goodsList.map(item => {
      return encodeURI(item.thumbnail);
    });

    wx.previewImage({
      current : index,
      urls: urls,
      success(){
        console.log(666);
      },
      fail(){
        console.log(777);
      }
    });
  },
  confirm(){
    wx.navigateTo({url: '/views/confirm_order/confirm_order'});
  }
})
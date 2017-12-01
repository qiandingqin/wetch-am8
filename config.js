/**服务器各种api地址 */
const HOST = 123;
const PIC_HOST = 456;

const API = {
  INDEX : HOST + '456'
};

/**第三方API */
const aMapKey = '489e54c511fbcc7621d989233413b707';
const aMapGeo = `https://restapi.amap.com/v3/geocode/regeo?key=${aMapKey}&`;

/**自定义toastIcon路径  */
const ICON = {
  WARNING : '/images/public/w.png'
};
export { aMapGeo, ICON};

/**
 * 小程序密钥信息
 * AppId : wx1942536bc832f077
 * AppSecert : ec1458acc698f7db9c20f24348c15388
 * 获取openId以及session_key 接口：
 * https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
 */
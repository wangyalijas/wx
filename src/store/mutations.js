/* eslint-disable */
function isIos(){
  const u = navigator.userAgent;
  return u.indexOf("iPhone") > -1 || u.indexOf("Mac OS") > -1;
}

export default {
  settingEnum(state, data) {
    state.enum = data;
  },
  settingConstant(state, data) {
    state.constant = data;
  },
  getOpenIdUserId(state, data) {
    state.header = data;
  },
  handleIsSchool(state, data) {
    state.isSchool = data;
  },
  settingWechatSignUrl(state, data) {
    // 关键点
    // IOS仅记录第一次进入页面时的URL
    // IOS微信切换路由实际URL不变，只能使用第一进入页面的URL进行签名
    if (isIos() && state.wxSignUrl !== '') {
      return;
    }
    state.wxSignUrl = data;
  }
};

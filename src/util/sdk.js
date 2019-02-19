import wx from 'weixin-js-sdk';
import axios from 'axios';
import Store from '@/store/index';

const jsApiList = ['updateAppMessageShareData', 'onMenuShareAppMessage'];

function getJSSDK(url, dataForWeixin) {
  alert(url)
  axios({
    url: `http://hufe.club:7002/api/getSignature?url=${encodeURIComponent(url)}`,
    method: 'get',
    headers: Store.state.header,
  }).then((res) => {
    wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: 'wx1d821f971ddee0f0', // 必填，公众号的唯一标识
      timestamp: res.data.timestamp, // 必填，生成签名的时间戳
      nonceStr: res.data.noncestr, // 必填，生成签名的随机串
      signature: res.data.signature, // 必填，签名
      jsApiList, // 必填，需要使用的JS接口列表
    });
    wx.ready(() => {
      wx.updateAppMessageShareData({
        title: dataForWeixin.title, // 分享标题
        desc: dataForWeixin.title, // 分享描述
        link: dataForWeixin.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'http://hufe.club/3.png', // 分享图标
        success(success) {
          alert(success);
        },
        fail(error) {
          alert(JSON.stringify(error));
        },
      });
    });
    wx.error((resError) => {
      alert(resError);
    });
  });
}
export default {
  // 获取JSSDK
  getJSSDK,
};

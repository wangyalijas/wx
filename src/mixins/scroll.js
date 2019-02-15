const bodyScroll = function (event) {
  console.log(event)
  event.preventDefault();
};

export default {
  methods: {
    /**
     * 禁止页面滚动和解除滚动的共用函数，具体看这个文章
     * https://blog.csdn.net/qq_29606781/article/details/67650869
     * 1：相同事件绑定和解除，需要使用共用函数；绑定和解除事件时 事件没有"on" 即onclick写成click
     * 2：共用函数不能带参数；（即下面在调用的时候是用的 this.bodyScroll，不能带()。）
     */
    bodyScroll(event) {
      event.preventDefault();
    },
    /**
     * 禁止页面滚动，解决弹框出现时 IOS 上滚动穿透的问题
     */
    forbidBodyScroll() {
      console.log(bodyScroll)
      document.body.addEventListener('touchmove', (e) => {
        e.preventDefault();
      }, false);
      console.log('forbidBodyScroll');
    },
    /**
     * 解除禁止滚动，解决弹框出现时 IOS 上滚动穿透的问题
     */
    allowBodyScroll() {
      document.getElementsByTagName('body')[0].removeEventListener('touchmove', (e) => {
        e.preventDefault();
      }, false);
      console.log('allowBodyScroll');
    },
  },
};

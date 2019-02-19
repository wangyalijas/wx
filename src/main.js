import Vue from 'vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import VeeValidate, { Validator } from 'vee-validate';
import App from './App.vue';
import router from './router';
import store from './store/index.js';
import RouterMixin from './mixins/router';
import LoadMoreMixin from './mixins/loadMore';
import ScrollMixin from './mixins/scroll';
import Http from './services';
import Api from './services/config';
import wexin from './assets/wexin';
import longtap from './directive/longtap';

Vue.use(VeeValidate);
Validator.extend('phone', {
  messages: {
    zh_CN: field => `${field}必须是11位手机号码`,
  },
  validate: value => value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value),
});

Vue.use(longtap);
Vue.use(Mint);

Vue.prototype.$http = Http;
Vue.prototype.Api = Api;

Vue.config.productionTip = false;
Vue.mixin(LoadMoreMixin);
Vue.mixin(RouterMixin);
Vue.mixin(ScrollMixin);

let isJumpToFollow = false;

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  // 除了职位详情，其他页面点开没有UserId 不能打开

  if (store.state.header['X-UserId'] === 8) {
    if (to.path !== '/job-detail' && isJumpToFollow === false) {
      isJumpToFollow = true;
      console.log(1, isJumpToFollow)
      next('follow');
    } else {
      isJumpToFollow = false;
      next();
    }
  } else {
    next();
  }
  // 生产环境 限制只能在微信端打开
  const env = process.env.NODE_ENV;
  if (env === 'production') {
    if (wexin.wexin()) {
      next();
    } else if (!wexin.wexin()) {
      if (to.path !== '/config') {
        next({ path: 'config' });
      } else {
        next();
      }
    }
  } else if (env === 'development') {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

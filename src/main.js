import Vue from 'vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import App from './App.vue';
import router from './router';
import store from './store/index.js';
import RouterMixin from './mixins/router';
import LoadMoreMixin from './mixins/loadMore';
import Http from './services';
import Api from './services/config';

Vue.use(Mint);

Vue.prototype.$http = Http;
Vue.prototype.Api = Api;

Vue.config.productionTip = false;
Vue.mixin(LoadMoreMixin);
Vue.mixin(RouterMixin);

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

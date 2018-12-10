import Vue from 'vue';
import Mint from 'mint-ui';
import { Select } from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Mint);
Vue.use(Select);
Vue.config.productionTip = false;

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

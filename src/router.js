import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// webpack 懒加载
function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadView('Home'),
    },
  ],
});

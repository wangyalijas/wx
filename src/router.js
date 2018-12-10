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
      name: 'Job',
      component: loadView('job/Job'),
      meta: {
        title: '职位列表',
      },
    },
    {
      path: '/jobDetail',
      name: 'JobDetail',
      component: loadView('job/JobDetail'),
      meta: {
        title: '职位详情',
      },
    },
    {
      path: '/campus-process',
      name: 'campusProcess',
      meta: {
        title: '校园行程',
      },
      component: loadView('personal/campusProcess'),
    },
    {
      path: '/campus-process-details',
      name: 'campusProcessDetails',
      meta: {
        title: '校园行程',
      },
      component: loadView('personal/campusProcessDetails'),
    },
    {
      path: '/deliver-resume',
      name: 'deliverResume',
      meta: {
        title: '投递简历',
      },
      component: loadView('personal/deliverResume'),
    },
    {
      path: '/personal-center',
      name: 'personalCenter',
      meta: {
        title: '个人中心',
      },
      component: loadView('personal/personalCenter'),
    },
  ],
});

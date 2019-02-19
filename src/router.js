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
      path: '/home',
      name: 'home',
      component: loadView('home'),
      meta: {
        title: '跳转',
      },
    },
    {
      path: '/config',
      name: 'config',
      component: loadView('config/index'),
      meta: {
        title: '微信客户端',
      },
    },
    {
      path: '/follow',
      name: 'follow',
      component: loadView('config/follow'),
      meta: {
        title: '关注卫宁招聘',
      },
    },
    {
      path: '/job',
      name: 'Job',
      component: loadView('job/Job'),
      meta: {
        title: '职位列表',
      },
    },
    {
      path: '/job-detail',
      name: 'JobDetail',
      component: loadView('job/JobDetail'),
      meta: {
        title: '职位详情',
      },
    },
    {
      path: '/job-resume',
      name: 'JobResume',
      component: loadView('job/JobResume'),
      meta: {
        title: '个人简历',
      },
    },
    {
      path: '/job-experience',
      name: 'JobExperience',
      component: loadView('job/JobExperience'),
      meta: {
        title: '添加工作经历',
      },
    },
    {
      path: '/job-education',
      name: 'JobEducation',
      component: loadView('job/JobEducation'),
      meta: {
        title: '添加教育经历',
      },
    },
    {
      path: '/job-attachment-detail',
      name: 'JobAttachmentDetail',
      component: loadView('job/JobAttachmentDetail'),
      meta: {
        title: '简历附件详情',
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
      path: '/campus-register',
      name: 'campusRegister',
      meta: {
        title: '报名信息',
      },
      component: loadView('personal/campusRegister'),
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
    {
      path: '/job-collection',
      name: 'jobCollection',
      meta: {
        title: '职位收藏',
      },
      component: loadView('personal/jobCollection'),
    },
    {
      path: '/post-records',
      name: 'postRecords',
      meta: {
        title: '投递记录',
      },
      component: loadView('personal/postRecords'),
    },
    {
      path: '/group-activity',
      name: 'groupActivity',
      meta: {
        title: '卫宁健康',
      },
      component: loadView('groupActivity/home'),
    },
    {
      path: '/group-activity-details',
      name: 'groupActivityDetails',
      meta: {
        title: '文化列表',
      },
      component: loadView('groupActivity/details'),
    },
  ],
});

import setting from '@/services/config';
import api from '@/services/index';

const user = {
  namespaced: true,
  state: {
  },
  getters: {},
  // 同步操作
  mutations: {
  },
  // 异步操作
  actions: {
    getUserCollectionJob(state, params) {
      return new Promise((resolve, reject) => {
        api(setting.urlConfig.getUserCollectionJob, params).then((data) => {
          console.log('%c%s', 'color:blue', '=======> 获取用户收藏职位');
          resolve(data);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    getUserDeliveryJob(state, params) {
      return new Promise((resolve, reject) => {
        api(setting.urlConfig.getUserDeliveryJob, params).then((data) => {
          console.log('%c%s', 'color:blue', '=======> 获取用户投递职位');
          resolve(data);
        }).catch((err) => {
          reject(err);
        });
      });
    },
  },
};
export default user;

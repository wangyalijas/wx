import setting from '@/services/config';
import api from '@/services/index';

const campusProcess = {
  namespaced: true,
  state: {
  },
  getters: {},
  // 同步操作
  mutations: {
  },
  // 异步操作
  actions: {
    getScheduleList(state, params) {
      return new Promise((resolve, reject) => {
        api(setting.urlConfig.getScheduleList, params).then((data) => {
          console.log('%c%s', 'color:blue', '=======> 获取校园行程列表');
          resolve(data);
        }).catch((err) => {
          reject(err);
        });
      });
    },
  },
};
export default campusProcess;

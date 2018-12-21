import setting from '@/services/config';
import api from '@/services/index';
/* eslint-disable */
const state = {
};

const getters = {
};

const mutations = {
};

const actions = {
  getJobList({ commit }, payload) {
    return new Promise(((resolve, reject) => {
      api(setting.urlConfig.job.getJobList, payload).then(res => {
        console.log('%c%s', 'color:blue', '=======> 职位列表');
        resolve(res)
      }).catch(res => {
        reject(res)
      });
    }))
  },
  getJob({ commit }, payload) {
    return new Promise(((resolve, reject) => {
      api(setting.urlConfig.job.getJob, payload).then(res => {
        console.log('%c%s', 'color:blue', '=======> 职位详情');
        resolve(res)
      }).catch(res => {
        reject(res)
      });
    }))
  },
  postCollection(state, params) {
    return new Promise((resolve, reject) => {
      api(setting.urlConfig.postCollection, params).then((data) => {
        console.log('%c%s', 'color:blue', '=======> 职位收藏');
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  postDelivery({ commit }, payload) {
    return new Promise(((resolve, reject) => {
      api(setting.urlConfig.job.postDelivery, payload).then(res => {
        console.log('%c%s', 'color:blue', '=======> 职位详情');
        resolve(res)
      }).catch(res => {
        reject(res)
      });
    }))
  },
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

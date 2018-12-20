import setting from '@/services/config';
import api from '@/services/index';
/* eslint-disable */
const state = {
  // jobList: null,
};

const getters = {
};

const mutations = {
  // settingJobList(state, data) {
  //   state.jobList = data;
  // },
};

const actions = {
  getJobList({ commit , rootState}, payload) {
    return new Promise(((resolve, reject) => {
      api(setting.urlConfig.job.getJobList, payload, rootState.header).then(res => {
        // commit('settingJobList', res);
        resolve(res)
      }).catch(res => {
        reject(res)
      });
    }))
  },
  getJob({ commit , rootState}, payload) {
    return new Promise(((resolve, reject) => {
      api(setting.urlConfig.job.getJob, payload, rootState.header).then(res => {
        // commit('settingJobList', res);
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
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

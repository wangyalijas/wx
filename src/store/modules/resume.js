import setting from '@/services/config';
import api from '@/services/index';
/* eslint-disable */
const state = {
  resume: null,
};

const getters = {
  handleResume({resume}) {
    return resume ? resume : {};
  },
};

const mutations = {
  settingResume(state, payload) {
    state.resume = payload;
  }
};

const actions = {
  getResume({ commit }, payload) {
    return new Promise(((resolve, reject) => {
      api(setting.urlConfig.resume.getResume, payload).then(res => {
        console.log(res)
        console.log('%c%s', 'color:blue', '=======> 获取简历信息');
        commit('settingResume', res)
        resolve(res)
      }).catch(res => {
        reject(res)
      });
    }))
  },
  postResume({ commit }, payload) {
    return new Promise(((resolve, reject) => {
      api(setting.urlConfig.resume.postResume, payload).then(res => {
        console.log('%c%s', 'color:blue', '=======> 上传或者修改简历');
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

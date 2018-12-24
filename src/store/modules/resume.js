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
  },
  modifyEducation(state, payload) {
    let index = state.resume.educations.indexOf(payload.data);
    state.resume.educations.splice(index, 1, payload.form);
  },
  settingNewEducation(state, payload) {
    state.resume.educations.push(payload);
  },
  modifyWork(state, payload) {
    let index = state.resume.works.indexOf(payload.data);
    state.resume.works.splice(index, 1, payload.form);
  },
  settingNewWork(state, payload) {
    state.resume.works.push(payload);
  },
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
  postResumeEducation({ commit }, payload) {
    return new Promise(((resolve, reject) => {
      api(setting.urlConfig.resume.postResumeEducation, payload).then(res => {
        console.log('%c%s', 'color:blue', '=======> 上传教育经历');
        resolve(res)
      }).catch(res => {
        reject(res)
      });
    }))
  },
  putResumeEducation({ commit }, payload) {
    return new Promise(((resolve, reject) => {
      const urlConfig = {
        url: `putResumeEducation/${payload.id}`,
        mockUrl: '',
        method: 'PUT',
      }
      api(urlConfig, payload).then(res => {
        console.log('%c%s', 'color:blue', '=======> 修改教育经历');
        resolve(res)
      }).catch(res => {
        reject(res)
      });
    }))
  },
  postResumeWork({ commit }, payload) {
    return new Promise(((resolve, reject) => {
      api(setting.urlConfig.resume.postResumeWork, payload).then(res => {
        console.log('%c%s', 'color:blue', '=======> 上传工作经历');
        resolve(res)
      }).catch(res => {
        reject(res)
      });
    }))
  },
  putResumeWork({ commit }, payload) {
    return new Promise(((resolve, reject) => {
      const urlConfig = {
        url: `putResumeWork/${payload.id}`,
        mockUrl: '',
        method: 'PUT',
      }
      api(urlConfig, payload).then(res => {
        console.log('%c%s', 'color:blue', '=======> 修改工作经历');
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

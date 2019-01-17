import setting from '@/services/config';
import api from '@/services/index';

/* eslint-disable */
const state = {
  resume: {
    resume: {
      name: '',
      genderType: '其他',
      phone: '',
      email: '',
      workYear: '',
    },
    educations: [],
    works: [],
    attachments: [],
  },
};

const getters = {
  handleResume({resume}) {
    return resume;
  },
};

const mutations = {
  settingResume(state, payload) {
    state.resume = payload;
  },
  modifyEducation(state, {form, data}) {
    let educations = state.resume.educations;
    let index = educations.indexOf(educations.filter(item => item.id === data.id).shift());
    educations.splice(index, 1, form);
  },
  settingNewEducation(state, payload) {
    state.resume.educations.push(payload);
  },
  modifyWork(state, {form, data}) {
    let works = state.resume.works;
    let index = works.indexOf(works.filter(item => item.id === data.id).shift());
    works.splice(index, 1, form);
  },
  settingNewWork(state, payload) {
    state.resume.works.push(payload);
  },
  deleteAttachment(state, payload) {
    let attachments = state.resume.attachments;
    let index = attachments.indexOf(attachments.filter(item => item.id === payload).shift())
    attachments.splice(index, 1);
  },
  addAttachment(state, payload) {
    let attachments = state.resume.attachments;
    attachments.push(payload);
  },
};

const actions = {
  getResume({ commit }, payload) {
    return new Promise(((resolve, reject) => {
      api(setting.urlConfig.resume.getResume, payload).then(res => {
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
  postResumeAttachment({ commit }, payload) {
    return new Promise(((resolve, reject) => {
      api(setting.urlConfig.resume.postResumeAttachment, payload).then(res => {
        console.log('%c%s', 'color:blue', '=======> 上传简历');
        if(res.state) {
          commit('addAttachment', {id: res.id, address: res.address});
        }
        resolve(res)
      }).catch(res => {
        reject(res)
      });
    }))
  },
  deleteResumeAttachment({ commit }, payload) {
    return new Promise(((resolve, reject) => {
      const urlConfig = {
        url: `deleteResumeAttachment/${payload}`,
        mockUrl: '',
        method: 'DELETE',
      }
      api(urlConfig, payload).then(res => {
        console.log('%c%s', 'color:blue', '=======> 删除附件');
        console.log(res, 'res')
        if(res.state) {
          commit('deleteAttachment', payload);
        }
        resolve(res)
      }).catch(res => {
        reject(res)
      });
    }))
  }
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

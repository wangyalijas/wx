import Vue from 'vue';

export default {
  getEnum({ commit }, type = '') {
    const params = {
      type,
    };
    Vue.$http(Vue.Api.getEnum, params).then(({ data }) => {
      commit('settingEnum', data.data);
    });
  },
  getConstant({ commit }, type = '') {
    const params = {
      type,
    };
    Vue.$http(Vue.Api.getConstant, params).then(({ data }) => {
      commit('settingConstant', data.data);
    });
  },
};

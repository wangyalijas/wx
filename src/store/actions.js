import http from '../services';
import Api from '../services/config';

export default {
  getEnum({ commit, state }, type = '') {
    const params = {
      type,
    };
    http(Api.urlConfig.getEnum, params, state.header).then(({ data }) => {
      commit('settingEnum', data);
    });
  },
  getConstant({ commit, state }, type = '') {
    const params = {
      type,
    };
    http(Api.urlConfig.getConstant, params, state.header).then(({ data }) => {
      commit('settingConstant', data);
    });
  },
};

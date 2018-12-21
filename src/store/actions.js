import http from '../services';
import api from '../services/config';

export default {
  getEnum({ commit, state }, type = '') {
    const params = {
      type,
    };
    http(api.urlConfig.job.getEnum, params, state.header).then((data) => {
      commit('settingEnum', data);
    });
  },
  getConstant({ commit, state }, type = '') {
    const params = {
      type,
    };
    http(api.urlConfig.job.getConstant, params, state.header).then((data) => {
      commit('settingConstant', data);
    });
  },
};

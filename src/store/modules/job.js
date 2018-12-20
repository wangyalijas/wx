import setting from '@/services/config';
import api from '@/services/index';

const state = {
  disX: null,
  tableData: null,
};

const getters = {
  handleCurrentDisX({ disX }) {
    return disX;
  },
  handleTableData({ tableData }) {
    return tableData || [];
  },
};

const mutations = {
  settingCurrentDisX(state, payload) {
    state.disX = payload;
  },
  settingTableData(state, payload) {
    state.tableData = payload;
  },
};

const actions = {
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
  getJobList(state, params) {
    return new Promise((resolve, reject) => {
      api(setting.urlConfig.getJobList, params).then((data) => {
        console.log('%c%s', 'color:blue', '=======> 获取职位列表');
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

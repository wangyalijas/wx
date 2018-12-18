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

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

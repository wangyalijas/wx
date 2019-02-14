/* eslint-disable */
export default {
  settingEnum(state, data) {
    state.enum = data;
  },
  settingConstant(state, data) {
    state.constant = data;
  },
  getOpenIdUserId(state, data) {
    state.header = data;
  },
  handleIsSchool(state, data) {
    state.isSchool = data;
  },
  handleIsRouter(state, data) {
    state.isRouterFlag = data;
  },
};

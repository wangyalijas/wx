import CreatePersistedState from 'vuex-persistedstate';

import Vue from 'vue';
import Vuex from 'vuex';


import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import modules from './modules/index';

Vue.use(Vuex);


const vuexPersisted = new CreatePersistedState({
  key: 'vuex',
  storage: window.sessionStorage,
});

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
  plugins: [vuexPersisted],
});

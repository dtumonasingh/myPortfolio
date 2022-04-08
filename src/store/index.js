import { createStore } from 'vuex';
import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

const store = createStore({
  state() {
    return {
      mutations,
      actions,
      getters,
    };
  },
});

export default store;

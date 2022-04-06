import { createStore } from 'vuex';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

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

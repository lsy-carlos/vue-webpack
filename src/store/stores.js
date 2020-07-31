export default {
  state: {
    routerPath: "/home",
  },
  getters: {
    routerPath: (state) => state.routerPath,
  },
  mutations: {
    set_state_common(state, obj) {
      Object.keys(obj).map((val) => {
        state[val] = obj[val];
      });
    },
  },
};

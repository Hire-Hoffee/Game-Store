export default {
  namespaced: true,
  state() {
    return {
      userToken: localStorage.getItem("userToken") || null,
    };
  },
  getters: {
    getUserToken: (state) => state.userToken,
  },
  mutations: {
    updateUserToken(state, newValue) {
      state.userToken = newValue;
    },
  },
  actions: {},
};

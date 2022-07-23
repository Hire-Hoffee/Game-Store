export default {
  namespaced: true,
  state() {
    return {
      userToken: localStorage.getItem("userToken") || null,
      userRole: localStorage.getItem("userRole") || null,
    };
  },
  getters: {
    getUserToken: (state) => state.userToken,
    getUserRole: (state) => state.userRole,
  },
  mutations: {
    updateUserToken(state, newValue) {
      state.userToken = newValue;
    },
    updateUserRole(state, newValue) {
      state.userRole = newValue;
    },
  },
  actions: {},
};

export default {
  state: {
    errorInfo: "",
  },
  getters: {
    getErrorInfo(state) {
      return state.errorInfo;
    },
  },
  mutations: {
    updateError(state, newErrorInfo) {
      state.errorInfo = newErrorInfo;
    },
  },
  actions: {},
};

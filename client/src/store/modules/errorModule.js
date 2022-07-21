export default {
  namespaced: true,
  state() {
    return {
      errorInfo: "",
      showError: false,
    };
  },
  getters: {
    getErrorInfo: (state) => state.errorInfo,
    getShowError: (state) => state.showError,
  },
  mutations: {
    updateError(state, newValue) {
      state.errorInfo = newValue;
      state.showError = true;
      setTimeout(() => {
        state.showError = false;
      }, 10000);
    },
  },
  actions: {},
};

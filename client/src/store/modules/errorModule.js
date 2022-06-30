export default {
  state: {
    errorInfo: "",
    showError: false,
  },
  getters: {
    getErrorInfo(state) {
      return state.errorInfo;
    },
    getShowError(state) {
      return state.showError;
    },
  },
  mutations: {
    updateError(state, newErrorInfo) {
      state.errorInfo = newErrorInfo;
      state.showError = true;
      setTimeout(() => { state.showError = false; }, 10000)
    },
  },
  actions: {},
};

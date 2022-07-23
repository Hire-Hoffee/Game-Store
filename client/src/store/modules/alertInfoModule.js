export default {
  namespaced: true,
  state() {
    return {
      errorInfo: null,
      alertInfo: null,
      alertColor: null,
    };
  },
  getters: {
    getErrorInfo: (state) => state.errorInfo,
    getAlertInfo: (state) => state.alertInfo,
    getAlertColor: (state) => state.alertColor,
  },
  mutations: {
    updateError(state, newValue) {
      state.errorInfo = newValue;
      state.alertInfo = null;
      state.alertColor = "bg-red-600";
      setTimeout(() => {
        state.errorInfo = null;
      }, 7000);
    },
    updateAlert(state, newValue) {
      state.alertInfo = newValue;
      state.errorInfo = null;
      state.alertColor = "bg-green-600";
      setTimeout(() => {
        state.alertInfo = null;
      }, 5000);
    },
    refreshInfo(state, newValue) {
      state.errorInfo = newValue;
      state.alertInfo = newValue;
    },
  },
  actions: {},
};

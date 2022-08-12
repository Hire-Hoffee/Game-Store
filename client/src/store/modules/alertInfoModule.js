export default {
  namespaced: true,
  state() {
    return {
      errorInfo: null,
      alertInfo: null,
      alertColor: null,
      borderWidth: 100,
    };
  },
  getters: {
    getErrorInfo: (state) => state.errorInfo,
    getAlertInfo: (state) => state.alertInfo,
    getAlertColor: (state) => state.alertColor,
    getBorderWidth: (state) => state.borderWidth,
  },
  mutations: {
    updateError(state, newValue) {
      state.errorInfo = newValue;
      state.alertInfo = null;
      state.alertColor = "bg-red-600";

      const timerId = setInterval(() => {
        state.borderWidth -= 0.1;
      }, 10);
      setTimeout(() => { 
        state.errorInfo = null;
        clearInterval(timerId); 
        state.borderWidth = 100;
        console.log('stop'); 
      }, 10000);
    },
    updateAlert(state, newValue) {
      state.alertInfo = newValue;
      state.errorInfo = null;
      state.alertColor = "bg-green-600";

      const timerId = setInterval(() => {
        state.borderWidth -= 0.2;
      }, 10);
      setTimeout(() => { 
        state.alertInfo = null;
        clearInterval(timerId); 
        state.borderWidth = 100;
        console.log('stop'); 
      }, 5000);
    },
    refreshInfo(state, newValue) {
      state.errorInfo = newValue;
      state.alertInfo = newValue;
    },
  },
  actions: {},
};

export default {
  namespaced: true,
  state() {
    return {
      colorMode: localStorage.getItem("colorMode") || "light"
    };
  },
  getters: {
    getColorMode: (state) => state.colorMode,
  },
  mutations: {
    updateColorMode(state, newValue) {
      state.colorMode = newValue;
    },
  },
  actions: {},
};

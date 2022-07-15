export default {
  state() {
    return {
      isLoading: false,
    };
  },
  getters: {
    getLoadingStatus: (state) => state.isLoading,
  },
  mutations: {
    updateLoadingStatus(state, newValue) {
      state.isLoading = newValue;
    },
  },
  actions: {},
};

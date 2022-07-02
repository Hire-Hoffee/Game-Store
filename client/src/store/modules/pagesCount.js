export default {
  state() {
    return {
      totalPages: null,
      currentPage: null,
    };
  },
  getters: {
    getTotalPages: (state) => state.totalPages,
    getCurrentPage: (state) => state.currentPage,
  },
  mutations: {
    updateTotalPages(state, newValue) {
      state.totalPages = newValue;
    },
    updateCurrentPage(state, newValue) {
      state.currentPage = newValue;
    },
  },
  actions: {},
};

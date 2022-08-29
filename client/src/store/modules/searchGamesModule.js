export default {
  namespaced: true,
  state() {
    return {
      foundGames: null,
    };
  },
  getters: {
    getFoundGames: (state) => state.foundGames,
  },
  mutations: {
    updateFoundGames(state, newValue) {
      state.foundGames = newValue;
    },
  },
  actions: {},
};

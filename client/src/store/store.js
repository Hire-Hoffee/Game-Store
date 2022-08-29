import { createStore } from "vuex";
import alertInfoModule from "./modules/alertInfoModule";
import pagesCountModule from "./modules/pagesCountModule";
import isLoadingModule from "./modules/isLoadingModule";
import authModule from "./modules/authModule";
import themeModule from "./modules/themeModule";
import searchGamesModule from "./modules/searchGamesModule";

const store = createStore({
  modules: {
    alertInfoModule,
    pagesCountModule,
    isLoadingModule,
    authModule,
    themeModule,
    searchGamesModule,
  },
});

export default store;

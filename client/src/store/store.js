import { createStore } from "vuex";
import alertInfoModule from "./modules/alertInfoModule";
import pagesCountModule from "./modules/pagesCountModule";
import isLoadingModule from "./modules/isLoadingModule";
import authModule from "./modules/authModule";
import themeModule from "./modules/themeModule";

const store = createStore({
  modules: {
    alertInfoModule,
    pagesCountModule,
    isLoadingModule,
    authModule,
    themeModule
  },
});

export default store;

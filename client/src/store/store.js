import { createStore } from "vuex";
import alertInfoModule from "./modules/alertInfoModule";
import pagesCountModule from "./modules/pagesCountModule";
import isLoadingModule from "./modules/isLoadingModule";
import authModule from "./modules/authModule";

const store = createStore({
  modules: {
    alertInfoModule,
    pagesCountModule,
    isLoadingModule,
    authModule,
  },
});

export default store;

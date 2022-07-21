import { createStore } from "vuex";
import errorModule from "./modules/errorModule";
import pagesCountModule from "./modules/pagesCountModule";
import isLoadingModule from "./modules/isLoadingModule";

const store = createStore({
  modules: {
    errorModule,
    pagesCountModule,
    isLoadingModule,
  },
});

export default store;

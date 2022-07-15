import { createStore } from "vuex";
import errorModule from "./modules/errorModule";
import pagesCount from "./modules/pagesCount";
import isLoadingModule from "./modules/isLoadingModule";

const store = createStore({
  modules: {
    errorModule,
    pagesCount,
    isLoadingModule
  },
});

export default store;

import { createStore } from "vuex";
import errorModule from "./modules/errorModule";
import pagesCount from "./modules/pagesCount";

const store = createStore({
  modules: {
    errorModule,
    pagesCount
  },
});

export default store;

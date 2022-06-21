import { createStore } from "vuex";
import errorModule from "./modules/errorModule";

const store = createStore({
  modules: {
    errorModule,
  },
});

export default store;

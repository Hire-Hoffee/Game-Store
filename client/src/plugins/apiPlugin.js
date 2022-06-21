import API from "../services";

const apiPlugin = {
  install(app) {
    app.config.globalProperties.$API = API;
  },
};

export default apiPlugin;

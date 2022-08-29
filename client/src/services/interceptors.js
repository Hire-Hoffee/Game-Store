import store from "../store/store";

const requestInterceptor = (config) => {
  if (!config.headers["Cancel-Loading"]) {
    store.commit("isLoadingModule/updateLoadingStatus", true);
  }
  config.headers["Authorization"] =
    "Bearer " + localStorage.getItem("userToken") || null;
  return config;
};

const responseInterceptor = (response) => {
  store.commit("isLoadingModule/updateLoadingStatus", false);
  if (response.headers["update-token"]) {
    localStorage.setItem("userToken", response.headers["update-token"]);
  }
  return response;
};

const errorInterceptor = (error) => {
  if (error.response.headers["token-expired"]) {
    store.dispatch("authModule/clearAuthData");
  }
  return Promise.reject(error);
};

export { requestInterceptor, responseInterceptor, errorInterceptor };

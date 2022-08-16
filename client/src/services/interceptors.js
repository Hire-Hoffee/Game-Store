import store from "../store/store";

const requestInterceptor = (config) => {
  store.commit("isLoadingModule/updateLoadingStatus", true);
  config.headers["Authorization"] = "Bearer " + localStorage.getItem("userToken") || null;
  return config;
};

const responseInterceptor = (response) => {
  store.commit("isLoadingModule/updateLoadingStatus", false);
  if (response.headers["update-token"]) {
    localStorage.setItem("userToken", response.headers["update-token"]);
  }
  return response;
};

export { requestInterceptor, responseInterceptor };

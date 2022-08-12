import store from "../store/store";

const reqIntercept = (config) => {
  store.commit("isLoadingModule/updateLoadingStatus", true);
  config.headers["Authorization"] = "Bearer " + localStorage.getItem("userToken") || null;
  return config;
};

const resIntercept = (response) => {
  store.commit("isLoadingModule/updateLoadingStatus", false);
  if (response.headers["update-token"]) {
    localStorage.setItem("userToken", response.headers["update-token"]);
  }
  return response;
};

export { reqIntercept, resIntercept };

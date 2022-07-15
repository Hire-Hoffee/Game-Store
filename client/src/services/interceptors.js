import store from "../store/store";

const reqIntercept = (config) => {
  store.commit("updateLoadingStatus", true);
  return config;
};

const resIntercept = (response) => {
  store.commit("updateLoadingStatus", false);
  return response;
};

export { reqIntercept, resIntercept };

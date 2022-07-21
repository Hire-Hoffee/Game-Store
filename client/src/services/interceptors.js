import store from "../store/store";

const reqIntercept = (config) => {
  store.commit("isLoadingModule/updateLoadingStatus", true);
  return config;
};

const resIntercept = (response) => {
  store.commit("isLoadingModule/updateLoadingStatus", false);
  return response;
};

export { reqIntercept, resIntercept };

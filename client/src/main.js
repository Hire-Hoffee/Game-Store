import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import reuseComponents from "./components/ui/reuseComponents";
import API from "./services";
import "./assets/css/main.css";

const app = createApp(App);

app.config.globalProperties.$API = API;

app.use(router);

reuseComponents.forEach((component) =>
  app.component(component.name, component)
);

app.mount("#app");

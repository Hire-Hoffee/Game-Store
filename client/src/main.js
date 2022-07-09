import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import reuseComponents from "./components/UI/reuseComponents";
import store from "./store/store";
import apiPlugin from "./plugins/apiPlugin";
import "./assets/css/main.css";

const app = createApp(App);

app.use(apiPlugin);
app.use(store);
app.use(router);

reuseComponents.forEach((component) =>
  app.component(component.name, component)
);

app.mount("#app");

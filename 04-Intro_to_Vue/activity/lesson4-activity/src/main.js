import { createApp } from "vue";
import { createBootstrap } from "bootstrap-vue-next";
import App from "./App.vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "./main.scss";

const app = createApp(App);
app.use(createBootstrap());
app.mount("#app");
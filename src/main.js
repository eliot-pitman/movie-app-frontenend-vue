import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
// const app = createApp({});
// import VueInputAutowidth from "vue-input-autowidth";
// app.use(VueInputAutowidth);

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

createApp(App).use(router).mount("#app");

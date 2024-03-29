import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import * as Vue from "vue"; // in Vue 3
import axios from "axios";
import VueAxios from "vue-axios";
import { createPinia } from "pinia";
const pinia = createPinia();

library.add(fas, far);
dom.watch();

const app = createApp(App).use(pinia).use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(VueAxios, axios);
app.mount("#app");

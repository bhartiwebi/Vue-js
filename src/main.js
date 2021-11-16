
import { createApp} from "vue";
import router from "./routes";
import App from "./App.vue";
import VueAxios from "vue-axios";
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm' ;
// import 'bootstrap-vue/dist/bootstrap-vue.css';



// Vue.config.productionTip = false
// import Vue from 'vue'

import axios from "axios";
const app = createApp(App).use(router);
app.use(VueAxios, axios);
// app.use(BootstrapVue);
app.mount("#app");

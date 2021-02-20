import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "@/plugins/vuetify"; // path to vuetify export
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuex from "vuex";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./custom.css";

// npm WARN bootstrap@4.5.3 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.

// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";
// Import the plugin here
import { Auth0Plugin } from "./auth";
// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  },
});

Vue.config.productionTip = false;
// install BootstrapVue
Vue.use(BootstrapVue);
// optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(Vuex);
Vue.prototype.$store = store;

// a Vue instance is required for every Vue app
// the Vue instance will accept an options object
// that contains info about our app, such as the DOM
// element that the Vue instance will be mounted on,
// data the instance will use, functions that run at
// some point during the instance's lifecycle, and more
new Vue({
  // Vue instance uses router
  router,
  // renders the app with the App template
  render: (h) => h(App),
  //then mounts it to the DOM element with the id of app
}).$mount("#app");

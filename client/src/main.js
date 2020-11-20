import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuex from "vuex";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./custom.css";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
// import VueFormulate from "@braid/vue-formulate";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);

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
const VueFormulate = require("@braid/vue-formulate");
Vue.use(VueFormulate.default);
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

<template>
  <div id="app">
    <div class="page" v-if="getSpinner">
      <b-spinner class="spinner" variant="primary" key="primary"></b-spinner>
    </div>
    <div id="nav">
      <Nav />
      <!-- router-link and router-view is how our app will handle routing -->
      <!-- when this link is clicked, app.vue is still rendered but router-view will be replaced with whatever route is active -->
      <!-- this is how we will reuse the same layout and navbar across the entire application -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>

    <div class="button-block">
      <br />
      <button
        type="button"
        v-if="!$auth.isAuthenticated"
        @click="login"
        class="btn btn-secondary btn-lg"
      >
        Sign in to see personalized risk assessment
      </button>
      <br />
      <h3 v-if="$auth.isAuthenticated">Welcome, {{ $auth.user.name }}!</h3>
      <br />
    </div>

    <!-- router-view/ is the router to the Home.vue contains the dashboard from the Main.vue component located at the /components folder -->
    <router-view />
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from "./components/partials/Nav.vue";
import Footer from "./components/partials/Footer.vue";
import { mapGetters } from "vuex";
export default {
  name: "app",
  components: {
    Nav,
    Footer,
  },
  computed: {
    ...mapGetters(["getSpinner"]),
  },
  methods: {
    // user login
    login() {
      this.$auth.loginWithRedirect();
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 60px;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}

.page {
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  z-index: 25;
  width: 100%;
  height: 100%;
}

.spinner {
  position: relative;
  top: 50%;
}

@media (max-with: 400px) {
  .button-block {
    margin-top: 30px;
  }
}
</style>

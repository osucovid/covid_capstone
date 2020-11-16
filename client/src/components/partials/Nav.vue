<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
      <b-navbar-brand
        ><router-link to="/"
          >COVID-19 Risk Assessment Tool</router-link
        ></b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!-- <b-nav-item href="#">Dashboard</b-nav-item> -->
          <b-nav-item><router-link to="/">Dashboard</router-link></b-nav-item>
          <b-nav-item
            ><router-link to="/todaysdata"
              >Today's Assessment Data</router-link
            ></b-nav-item
          >
          <!-- <b-nav-item href="#">About</b-nav-item> -->
          <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit.prevent="search">
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Only works from user settings page"
              v-model="searchText"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              User
            </template>
            <b-dropdown-item href="#">
              <div v-if="!$auth.loading">
                <!-- show login when not authenticated -->
                <a
                  v-if="!$auth.isAuthenticated"
                  @click="login"
                  class="button is-dark"
                  ><strong>Profile</strong></a
                >
                <!-- show logout when authenticated -->
                <a v-if="$auth.isAuthenticated" class="button is-dark"
                  ><strong
                    ><router-link to="/profile">Profile</router-link></strong
                  ></a
                >
              </div>
            </b-dropdown-item>
            <b-dropdown-item href="#"><router-link to="/settings">Settings</router-link></b-dropdown-item>
            <b-dropdown-item href="#">
              <div v-if="!$auth.loading">
                <!-- show login when not authenticated -->
                <a
                  v-if="!$auth.isAuthenticated"
                  @click="login"
                  class="button is-dark"
                  ><strong>Sign in</strong></a
                >
                <!-- show logout when authenticated -->
                <a
                  v-if="$auth.isAuthenticated"
                  @click="logout"
                  class="button is-dark"
                  ><strong>Log out</strong></a
                >
              </div>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
    search() {
      console.log(this.searchText);
      this.$store.dispatch("search", { text: this.searchText });
    },
  },
  data() {
    return {
      searchText: "",
    };
  },
};
</script>

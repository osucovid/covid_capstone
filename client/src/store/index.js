import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // const store = new Vuex.Store({
  state: {
    users: [],
    displayUsers: [],
    rows: 0,
    showSpinner: false,
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_ROWS(state, rows) {
      state.rows = rows;
    },
    SET_DISPLAY_USERS(state, displayUsers) {
      state.displayUsers = displayUsers;
    },
    SET_SPINNER(state, spinner) {
      state.showSpinner = spinner;
    },
  },
  actions: {
    async fetchData({ commit }) {
      commit("SET_SPINNER", true);
      return new Promise((resolve) => {
        setTimeout(async () => {
          const res = await fetch("users.json");
          const val = await res.json();
          resolve(val);
          commit("SET_SPINNER", false);
        }, 1000);
      });
    },
    updatePagination({ commit, dispatch }, { myJson, currentPage, perPage }) {
      commit("SET_USERS", myJson);
      commit("SET_ROWS", myJson.length);
      dispatch("paginate", { currentPage, perPage });
    },
    async fetchUsers({ dispatch }) {
      const myJson = await dispatch("fetchData");
      // commit("SET_USERS", myJson);
      // const displayUsers = myJson.slice(0, 3);
      // commit("SET_DISPLAY_USERS", displayUsers);
      // commit("SET_ROWS", myJson.length);
      dispatch("updatePagination", { myJson, currentPage: 1, perPage: 3 });
      return myJson;
    },
    async paginate({ commit, state }, { currentPage, perPage }) {
      const start = (currentPage - 1) * perPage;
      const users = state.users.slice(start, start + 3);
      commit("SET_DISPLAY_USERS", users);
    },
    async search({ dispatch }, { text }) {
      const myJson = await dispatch("fetchData");
      const values = myJson.filter((val) => {
        return val.name.toLowerCase().includes(text.toLowerCase());
      });

      dispatch("updatePagination", {
        myJson: values,
        currentPage: 1,
        perPage: 3,
      });
    },
  },
  getters: {
    getUsers(state) {
      // users(state) {
      return state.users;
    },
    getRows(state) {
      return state.rows;
    },
    getDisplayUsers(state) {
      return state.displayUsers;
    },
    getSpinner(state) {
      return state.showSpinner;
    },
  },
  modules: {},
});

// Vue.prototype.$store = store;

// module.exports = store;

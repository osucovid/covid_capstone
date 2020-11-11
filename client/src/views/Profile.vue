<template>
  <div>
    <div>
      <img :src="$auth.user.picture" />
      <h2>Username: {{ $auth.user.name }}</h2>
      <p>Email: {{ $auth.user.email }}</p>
    </div>

    <div>
      <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
    </div>

    Enter or edit personal details

    <b-container>
      <b-row align-v="center">
        <!-- users.json is being loaded from the public folder until the db connection to mongodb is ready -->
        <!-- <user-info-card /> -->
        <user-info-card
          v-for="user in getDisplayUsers"
          :key="user.id"
          :name="user.name"
          :id="user.id"
        >
          {{ user.id }}
        </user-info-card>
      </b-row>
      <b-pagination
        v-model="currentPage"
        :total-rows="getRows"
        :per-page="perPage"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
        @input="paginate(currentPage)"
      ></b-pagination>
    </b-container>
  </div>
</template>

<script>
// import UserProfile from '@/components/UserProfile.vue'
import UserInfoCard from "@/components/UserInfoCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  async mounted() {
    this.getRecords();
  },
  data() {
    return {
      currentPage: 1,
      perPage: 3,
    };
  },
  components: {
    "user-info-card": UserInfoCard,
  },
  computed: {
    ...mapGetters(["getRows", "getDisplayUsers"]),
  },
  // // mounted hook
  // mounted() {
  //   // easier to test fetchData here
  //   // can mock fetchData functions and returnable variables
  //   this.fetchData();
  // },
  // data() {
  //   // no error handling at the moment - let vue do it for now
  //   // console.log("what");
  //   return {
  //     // users: [],
  //     displayUsers: [],
  //     currentPage: 1,
  //     rows: 1,
  //     perPage: 3,
  //   };
  // },
  methods: {
    // async fetchData() {
    //   //this.$store is part of Vuex
    //   await this.$store.dispatch("fetchUsers");
    //   console.log("test", this.$store.getters.users);
    //   // const res = await fetch("users.json");
    //   // const val = await res.json();
    //   // this.users = val;
    //   // this.displayUsers = val.slice(0, 3);
    //   this.displayUsers = this.users.slice(0, 3);

    //   this.rows = this.users.length;
    //   console.log(this.jobs);
    paginate(currentPage) {
      this.$store.dispatch("paginate", { currentPage, perPage: this.perPage });
    },
    async getRecords() {
      await this.$store.dispatch("fetchUsers");
    },
  },
};
</script>

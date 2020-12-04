<template>
  <div>
    <b-card-group deck>
      <b-card
        bg-variant="light"
        title="Traveling Recommendation"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          <p><img :src="require('../../assets/globe.svg')" :width="75" /></p>
          <p v-if="reco == 'great'">
            <b-icon
              icon="hand-thumbs-up"
              variant="success"
              style="width: 75px; height: 75px;"
              animation="throb"
              font-scale="4"
            ></b-icon>
          </p>
          <p v-if="reco == 'high'">
            <b-icon
              icon="exclamation-triangle-fill"
              variant="danger"
              style="width: 75px; height: 75px;"
              animation="throb"
              font-scale="4"
            ></b-icon>
          </p>
          {{ message }}
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted"></small>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import PostService from "../../DashboardService";
export default {
  name: "RiskStatusCard3",
  props: {
    // msg: String
  },
  components: {},
  data() {
    return {
      posts: "",
      message: "",
      reco: "",
    };
  },
  async created() {
    try {
      let values = [];
      values = await PostService.getPosts();
      let i;
      for (i = 0; i < values.length; i++) {
        if (values[i].email == this.$auth.user.email) {
          this.posts = values[i];
        }
      }
    } catch (err) {
      this.error = err.message;
    }

    if (
      this.posts.form.travel_type == "international" ||
      this.posts.travel_type == "domestic"
    ) {
      this.message =
        "Please try to refrain from traveling unless absolutely necessary. Traveling can cause a greater spread of COVID, both in your local community and the areas you traveled to.";
      this.reco = "high";
    } else {
      this.message =
        "You are doing a great job! Please continue to not travel, as traveling can cause the unnecessary spread of COVID.";
      this.reco = "great";
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>

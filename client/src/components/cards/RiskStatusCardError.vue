<template>
  <div>
    <b-card-group deck>
      <b-card bg-variant="light" title="Risk Status" img-alt="Image" img-top>
        <b-card-text>
          <h3>
            Not enough info for Recommendations.
          </h3>

          <b-icon
            icon="emoji-neutral"
            style="width: 150px; height: 150px;"
            variant="danger"
            animation="throb"
          ></b-icon>
          <p>
            <strong
              ><a href="/mydata"
                >Fill in your data in the assessment form</a
              ></strong
            >!
          </p>
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
  name: "RiskStatusCardError",
  props: {
    // msg: String
  },
  components: {},
  data() {
    return {
      posts: "",
      message: "",
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
          this.location = values[i].location;
        }
      }
    } catch (err) {
      this.error = err.message;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>

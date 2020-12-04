<template>
  <div>
    <div>
      <br />
      <h2>Data as of: {{ new Date().toLocaleDateString() }}</h2>

      <!---<img
        :src="require('../assets/graph.svg')"
        :width="800"
        :padding-bottom="25"
      />--->
    </div>

    <div>
      <br />
      <h2>Your Risk Assessment</h2>
      <br />

      <RiskCalc />

      <br />
      <h2>Customized Recommendations</h2>
      <br />

      <div class="risk_assess">
        <RiskStatusCard1 />
        <RiskStatusCard2 />
        <RiskStatusCard3 />
      </div>

      <b-card-group deck>
        <!-- <b-card bg-variant="light" title="Risk Status" img-alt="Image" img-top>
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </b-card-text>
          <template v-slot:footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card> -->

        <!-- <b-card bg-variant="light" title="Title" img-alt="Image" img-top>
          <b-card-text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </b-card-text>
          <template v-slot:footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card> -->

        <!-- <b-card bg-variant="light" title="Title" img-alt="Image" img-top>
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </b-card-text>
          <template v-slot:footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card> -->
      </b-card-group>
      <br />

      <br />
    </div>
  </div>
</template>

<script src="http://d3js.org/d3.v6.min.js" charset="utf-8"></script>

<script>
import PostService from "../DashboardService";
import * as d3 from "d3";
import RiskStatusCard1 from "@/components/cards/RiskStatusCard1.vue";
import RiskStatusCard2 from "@/components/cards/RiskStatusCard2.vue";
import RiskStatusCard3 from "@/components/cards/RiskStatusCard3.vue";
import RiskStatusCardError from "@/components/cards/RiskStatusCardError.vue";
import RiskCalc from "@/components/cards/RiskCalc.vue";

export default {
  data() {
    return {
      posts: "",
    };
  },
  mounted() {},
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
  },
  name: "Dashboard",
  components: {
    RiskStatusCard1,
    RiskStatusCard2,
    RiskStatusCard3,
    RiskStatusCardError,
    RiskCalc,
  },
};
</script>

<style scoped></style>

<style>
.chart div {
  font: 10px sans-serif;
  background-color: steelblue;
  text-align: right;
  padding: 3px;
  margin: 1px;
  color: white;
}
.container-chart {
  /* width: 50%; */
  margin: auto;
}
.risk_assess {
  display: flex;
}
.risk_assess .card-deck {
  /* min-width: 80%; */
}

@media (max-width: 1000px) {
  .risk_assess {
    display: block;
  }
}
</style>

<template>
  <div>
    <div>
      <br />
      <h2>Data as of: {{ new Date().toLocaleDateString() }}</h2>
      <img
        :src="require('../assets/graph.svg')"
        :width="800"
        :padding-bottom="25"
      />
    </div>

    <div>
      <br />
      <h2>Your Risk Assessment</h2>
      <br />

      <div class="risk_assess">
        <RiskStatusCard />
        <RiskStatusCard />
        <RiskStatusCard />
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
import * as d3 from "d3";
import RiskStatusCard from "@/components/cards/RiskStatusCard.vue";

export default {
  data() {
    return {};
  },
  mounted() {},
  name: "Dashboard",
  components: {
    RiskStatusCard,
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
</style>

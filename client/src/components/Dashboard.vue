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
      <b-card-group deck>
        <b-card bg-variant="light" title="Risk Status" img-alt="Image" img-top>
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </b-card-text>
          <template v-slot:footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card>

        <b-card bg-variant="light" title="Title" img-alt="Image" img-top>
          <b-card-text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </b-card-text>
          <template v-slot:footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card>

        <b-card bg-variant="light" title="Title" img-alt="Image" img-top>
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </b-card-text>
          <template v-slot:footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card>
      </b-card-group>
      <br />

 <form>

  <!--- Input section for various health conditions --->
  <input type="checkbox" id="condition1">
  <label for="condition1"> I have Cancer</label><br>

  <input type="checkbox" id="condition2">
  <label for="condition2"> I have Chronic Kidney Disease</label><br>

  <input type="checkbox" id="condition3">
  <label for="condition3"> I have COPD</label><br>

  <input type="checkbox" id="condition4">
  <label for="condition4"> I have Heart Condition(s)</label><br>

  <input type="checkbox" id="condition5">
  <label for="condition5"> I am Immunocompromised</label><br>

  <input type="checkbox" id="condition6">
  <label for="condition6"> I am Obese</label><br>

  <input type="checkbox" id="condition7">
  <label for="condition7"> I have Sickle Cell Disease</label><br>

  <input type="checkbox" id="condition8">
  <label for="condition8"> I am a Smoker</label><br>

  <input type="checkbox" id="condition9">
  <label for="condition9"> I have Type 2 Diabetes</label><br>

</form>

<div id="bubbles"></div>

      <br />
    </div>
  </div>

</template>

<script src="http://d3js.org/d3.v6.min.js" charset="utf-8"></script>

<script>
import * as d3 from 'd3'
export default {
  data () {
    return {}
  },
  mounted () {

  },
  name: "Dashboard",
};

</script>

<style scoped>
</style>

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
</style>

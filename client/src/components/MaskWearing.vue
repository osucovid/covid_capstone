<template>
<div>

<h2>How often do you wear a mask?</h2>
<form>
<input type="radio" name="percent" id="onehundred">
  <label for="onehundred"> 100% of the time</label><br>

  <input type="radio" name="percent" id="seventyfive">
  <label for="seventyfive"> 75% of the time</label><br>

  <input type="radio" name="percent" id="fifty">
  <label for="fifty"> 50% of the time</label><br>

  <input type="radio" name="percent" id="twentyfive">
  <label for="twentyfive"> 25% of the time</label><br>

  <input type="radio" name="percent" id="zero">
  <label for="zero"> 0% of the time</label><br>
</form>

<div id="pie_chart"></div>

      <br />
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
// create dimensions of chart
var width = 350
var height = 350
var margin = 50

// note that pie chart is half the height of width/height
var radius = Math.min(width, height) / 2 - margin

//make svg object
var svg = d3.select("#pie_chart")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

//var data = {a: 9, b: 20, c:30, d:8, e:12}
var a = 50
var b = 50
var data = {a, b}

// coordinate colors w/ the other charts

var color = d3.scaleOrdinal()
  .domain(data)
  .range(["#29f237", "#999999"])

function compute() {
// Compute the position of each group on the pie:
var pie = d3.pie()
  .value(function(d) {return d.value; })
var data_ready = pie(d3.entries(data))

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('whatever')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(color(d.data.key)) })
  .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 1)
}

compute();

d3.select("#onehundred").on("change",update);
update();

d3.select("#seventyfive").on("change",update);
update();

d3.select("#fifty").on("change",update);
update();

d3.select("#twentyfive").on("change",update);
update();

d3.select("#zero").on("change",update);
update();

function update() {
    if(d3.select("#onehundred").property("checked")) {
    // note the syntax needed for IDs that have space(s) in them
    a = 100
    data = {a}

    compute()
  }

    if(d3.select("#seventyfive").property("checked")) {
    // note the syntax needed for IDs that have space(s) in them
    a = 75
    b = 25
    data = {a, b}

    compute()
  }  

    if(d3.select("#fifty").property("checked")) {
    // note the syntax needed for IDs that have space(s) in them
    a = 50
    b = 50
    data = {a, b}

    compute()
  }

    if(d3.select("#twentyfive").property("checked")) {
    // note the syntax needed for IDs that have space(s) in them
    a = 25
    b = 75
    data = {a, b}

    compute()
  }

    if(d3.select("#zero").property("checked")) {
    // note the syntax needed for IDs that have space(s) in them
    a = 0
    b = 100
    data = {a, b}

    compute()
  }

}

  },
  name: "MaskWearing",
};

</script>

<style scoped>
</style>



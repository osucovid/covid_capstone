<template>
<div>

<h2>How old are you?</h2>
  
<p>

<!--- Text and span HTML shown to user. They can manipulate the display until it shows their proper age --->
  <label for="radius" style="display: inline-block; width: 240px; text-align: right">
      Age = <span id="radvalue">…</span>
  </label>

  <input type="range" min="20" max="125" id="radius">

</p>
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
var width = 600;
var height = 300;

// append svg to body, then circle to svg 
var holder = d3.select("body")
      .append("svg")
      .attr("width", width)    
      .attr("height", height); 

holder.append("circle")
  .attr("cx", 300)
  .attr("cy", 150) 
  .style("fill", "gray")   
  //.style("stroke", "blue") 
  .attr("r", 120);


//update circle radius if user wants to change it
d3.select("#radius").on("input", function() {
  update(+this.value);
});

// default start
update(60);
updateColor();

// update the radius and colors as the user changes input
// note that I added +20 to each of the # elements, for aesthetic reasons. Remember to subtract 20 when transferring user data.
function update(radius) {

  d3.select("#radvalue").text(radius-20);
  d3.select("#radius").property("value", radius);

  holder.selectAll("circle") 
    .attr("r", radius);

  // if the user is under 45, they are in the green/low risk zone
  if(radius < 65) {
    holder.selectAll("circle") 
    .style("fill", "green");
  }

  // if the user is aged between 45 and 64, they are in the yellow/mild risk zone
    if(radius > 64 && radius < 85) {
    holder.selectAll("circle") 
    .style("fill", "yellow");
  } 

  // if the user is aged between 65 and 74, they are in the orange/moderate risk zone
    if(radius >= 85 && radius <= 94) {
    holder.selectAll("circle") 
    .style("fill", "orange");
  }  

  // if the user is 75 or older, they are in the red/high risk zone
  // Note: will play around with the text later, it's not working
    if(radius >= 95) {
    holder.selectAll("circle") 
    .style("fill", "red")
    .attr("dy", ".2em")
    .style("text-anchor", "middle")
    .attr("fill", "white")
    .append("text").text("High Risk");
  } 

}

// I should refactor this code later. For now, its main purpose is to make the circle gray if no age is chosen yet.
function updateColor() {
    if(radius <= 64) {
    holder.selectAll("circle") 
    .style("fill", "green");
  }

    if(radius >= 65 && radius <= 84) {
    holder.selectAll("circle") 
    .style("fill", "yellow");
  } 

    if(radius >= 85 && radius <= 94) {
    holder.selectAll("circle") 
    .style("fill", "orange");
  }  

    if(radius >= 95) {
    holder.selectAll("circle") 
    .style("fill", "red")
    .attr("dy", ".2em")
    .style("text-anchor", "middle")
    .attr("fill", "white")
    .append("text").text("High Risk");
  } 

  else {
    holder.selectAll("circle") 
    .style("fill", "gray");
  }
}

  },
  name: "MaskWearing",
};

</script>

<style scoped>
</style>



<template>
  <div>
    <h3>How often do you wear a mask?</h3>
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
        <svg width="300" height="300"></svg>  
  </div>
</template>

<script src="https://d3js.org/d3.v4.js"></script>

<script>
import * as d3 from 'd3'
export default {
  data () {
    return {}
  },
  mounted () {
  
        // Selecting SVG using d3.select() 
        var svg = d3.select("svg")
           .on("click", function(event, d) {
             console.log(d); 
             console.log(d3.pointer(event));
          })
        
        function compute(x,y) {  
        // Creating Pie generator 

        var data = [x,y]; 

        var pie = d3.pie(); 
  
        // Creating arc 
        var arc = d3.arc() 
                    .innerRadius(0) 
                    .outerRadius(100); 
  
        let g = svg.append("g") 
                   .attr("transform", "translate(150,120)"); 
  
        // Grouping different arcs 
        var arcs = g.selectAll("arc") 
                    .data(pie(data)) 
                    .enter() 
                    .append("g"); 
  
        // Appending path  
        arcs.append("path") 
            .attr("fill", (data, i)=>{ 
                let value=data.data; 
                if (i === 0) {
                  return "#29f237"
                }
                return "#999999"; 
            }) 
            .attr("d", arc); 
          
        // Adding data to each arc 
        arcs.append("text") 
            .attr("transform",(d)=>{  
                    return "translate("+  
                    arc.centroid(d) + ")";  
            }) 
            .text(function(d){ 
               return d.data;  
               }); 
        }

        compute(75,25);

        //d3.select("#fifty").on("input",compute(50,50));
}
}
</script>
<style scoped>
</style>

<style>
.chart rect {
  fill: steelblue;
}
.chart text {
  fill: white;
  font: 10px sans-serif;
  text-anchor: end;
}
 .chart div {
  font: 10px sans-serif;
  background-color: green;
  text-align: right;
  padding: 3px;
  margin: 1px;
  color: white;
}
</style>
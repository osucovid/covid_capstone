<template>
<div>
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
      <br />

<div id="bubbles"></div>
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

    /*hardcoded diseases. note that in this case the count #s are just for the bubble size and aren't of significance*/
var dataset = {
            "children": [{"Name":"Cancer","Count":6000,"id":"a"},
                {"Name":"Chronic Kidney Disease","Count":9000,"id":"b"},
                {"Name":"COPD","Count":11000,"id":"c"},
                {"Name":"Heart Conditions","Count":13000,"id":"d"},
                {"Name":"Immunocompromised","Count":11000,"id":"fff","id":"e"},
                {"Name":"Obesity","Count":7000,"id":"f"},
                {"Name":"Sickle Cell Disease","Count":9000,"id":"g"},
                {"Name":"Smoking","Count":7000,"id":"h"},
                {"Name":"Type 2 Diabetes","Count":8000,"id":"i"}]
        };

        /* create size of diagram - may need to change to be mobile compatible */
        var diameter = 600;
        var color = d3.scaleOrdinal(d3.schemeCategory20);

        var bubble = d3.pack(dataset)
            .size([diameter+20, diameter+20])
            .padding(5);

        /* use select to append and manipulate DOM elements */
        var svg = d3.select("#bubbles")
            .append("svg")
            .attr("width", diameter+300)
            .attr("height", diameter)
            .attr("class", "bubble");

        var nodes = d3.hierarchy(dataset)
            .sum(function(d) { return d.Count; });

        /* add nodes from data set */
        var node = svg.selectAll(".node")
            .data(bubble(nodes).descendants())
            .enter()
            .filter(function(d){
                return  !d.children
            })
            .append("g")
            .attr("class", "node")
            .attr("transform", function(d) {
                return "translate(" + d.x + "," + d.y + ")";
            });

        /* note that title can be read when hovering over bubble */
        node.append("title")
            .text(function(d) {
                return d.data.Name;
            });

        /* manipulate bubble CSS */
        node.append("circle")
            .attr("r", function(d) {
                return d.r;
            })
            .style("fill", function(d,i) {
                return color(i);
            })
            .attr("id", function(d) {
              // note - this works: return "a" + guid()
              // IDs shouldn't start with digit
                return d.data.Name;
            });

        // append text on bubble
        node.append("text")
            .attr("dy", ".2em")
            .style("text-anchor", "middle")
            .attr("fill", "white")
            .text(function(d) {
                return d.data.Name;
            })
            .attr("font-size", function(d){
                return d.r/5;
            });

        d3.select(self.frameElement)
            .style("height", diameter + "px");

// when the input range changes update the circle 
// might want to refactor this later
d3.select("#nRadius").on("input", function() {
  update(+this.value);
});

//update(45);
d3.select("#condition1").on("change",updateColor);
updateColor();
d3.select("#condition2").on("change",updateColor2);
updateColor2();
d3.select("#condition3").on("change",updateColor3);
updateColor();
d3.select("#condition4").on("change",updateColor4);
updateColor2();
d3.select("#condition5").on("change",updateColor5);
updateColor();
d3.select("#condition6").on("change",updateColor6);
updateColor2();
d3.select("#condition7").on("change",updateColor7);
updateColor();
d3.select("#condition8").on("change",updateColor8);
updateColor2();
d3.select("#condition9").on("change",updateColor9);
updateColor();


//NOTE: I moved the update radius functions to test4.html since I think it makes more sense to have two separate visualizations - age and conditions
// update the radius
function update(nRadius) {

  // adjust the text on the range slider
  // NOTE: remember that I added 20 for aesthetic effect. when transferring user data, remember to subtract 20 to get user age!
  d3.select("#rad-value").text(nRadius-20);
  d3.select("#nRadius").property("value", nRadius);

  // update the circle radius
  svg.selectAll("circle") 
    .attr("r", nRadius);
}

// update the circle color based on condition status if checked
// might want to refactor this later
function updateColor() {
    if(d3.select("#condition1").property("checked")) {
    d3.select("#Cancer").style("fill", "orange")
    /**d3.select("circle").style("fill", "green");*/
    //.style("stroke", "green")
  }

  else {
    d3.select("#Cancer").style("fill", function(d) {
      return color(0)});
  }

  /*else {
    svg.selectAll("circle") 
    .style("stroke", "red")
    .style("fill", "red");
  }*/
}

function updateColor2() {
    if(d3.select("#condition2").property("checked")) {
    // note the syntax needed for IDs that have space(s) in them
    d3.select("[id='Chronic Kidney Disease']").style("fill", "orange")
  }

    else {
    d3.select("[id='Chronic Kidney Disease']").style("fill", function(d) {
      return color(1)});
  }
}

function updateColor3() {
    if(d3.select("#condition3").property("checked")) {
    // note the syntax needed for IDs that have space(s) in them
    d3.select("#COPD").style("fill", "orange")
  }

    else {
    d3.select("#COPD").style("fill", function(d) {
      return color(2)});
  }
}

function updateColor4() {
    if(d3.select("#condition4").property("checked")) {
    // note the syntax needed for IDs that have space(s) in them
    d3.select("[id='Heart Conditions']").style("fill", "orange")
  }

    else {
    d3.select("[id='Heart Conditions']").style("fill", function(d) {
      return color(3)});
  }
}

function updateColor5() {
    if(d3.select("#condition5").property("checked")) {
    // note the syntax needed for IDs that have space(s) in them
    d3.select("#Immunocompromised").style("fill", "orange")
  }

    else {
    d3.select("#Immunocompromised").style("fill", function(d) {
      return color(4)});
  }
}

function updateColor6() {
    if(d3.select("#condition6").property("checked")) {
    // note the syntax needed for IDs that have space(s) in them
    d3.select("[id='Obesity']").style("fill", "orange")
  }

    else {
    d3.select("#Obesity").style("fill", function(d) {
      return color(5)});
  }
}

function updateColor7() {
    if(d3.select("#condition7").property("checked")) {
    // note the syntax needed for IDs that have space(s) in them
    d3.select("[id='Sickle Cell Disease']").style("fill", "orange")
  }

    else {
    d3.select("[id='Sickle Cell Disease']").style("fill", function(d) {
      return color(6)});
  }
}

function updateColor8() {
    if(d3.select("#condition8").property("checked")) {
    // note the syntax needed for IDs that have space(s) in them
    d3.select("#Smoking").style("fill", "orange")
  }

    else {
    d3.select("#Smoking").style("fill", function(d) {
      return color(7)});
  }
}

function updateColor9() {
    if(d3.select("#condition9").property("checked")) {
    // note the syntax needed for IDs that have space(s) in them
    d3.select("[id='Type 2 Diabetes']").style("fill", "orange")
  }

    else {
    d3.select("[id='Type 2 Diabetes']").style("fill", function(d) {
      return color(8)});
  }
}

  },
  name: "Dashboard",
};

</script>

<style scoped>
</style>
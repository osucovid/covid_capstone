<template>
    <div>
        <h4>
            Image of Risk Graph Here (within /components/partials)
        </h4>
            <div class="graph">
              <h5>
                Graph Title 
              </h5>
              <div class="graph-details">
              <h6>
                Graph Details 
              </h6>
              </div>
            </div>
          <div v-for="graph in graphs" :graph="graph" :key="graph.id"> 
            <router-link :to="'/graph/'+ graph.id">
              <RiskGraph :graph="graph" />
            </router-link>
            </div>
    </div>
</template>

<script>
export default {
    // name: 'RiskGraph'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.graph {
  background-image: url('https://miro.medium.com/max/700/1*X0-nArb4Fb75aDAj0t_l5Q.png');
  height: 200px;
  background-position: center;
  background-size:50%;
  background-repeat: no-repeat;
  text-align: center;
  
}

.graph-details {
  // background-color: #151515;
  color: blue;
  font-size: .75em;
  padding: 20px 10px;
  // position: absolute;
  top: 0;
  right: 0;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
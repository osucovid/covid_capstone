<template>
    <div>
        <h3>
        Risk Status Displayed Here (within /components)
        </h3>
        <div>
            <RiskGraph />
        </div>
        <div>
            <RiskGraph />
        </div>
    </div>      
</template>



<script>
import RiskGraph from '@/components/partials/RiskGraph.vue'

export default {
  name: 'RiskStatus',
  props: {
    // msg: String
  },
  components: {
      RiskGraph
  },
  data() {
    return {
      graph: {},
      graphs: [
        {
          id: 1,
          name: 'Graph Number One',
          category: 'CovidRisk - Category 1',
          description: 'Graph Number One Description',
          date: '11-01-2020',
          time: '1300'
        },
        {
          id: 2,
          name: 'Graph Number One',
          category: 'CovidRisk - Category 1',
          description: 'Graph Number One Description',
          date: '11-01-2020',
          time: '1300'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// h3 {
//   margin: 40px 0 0;
// }
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
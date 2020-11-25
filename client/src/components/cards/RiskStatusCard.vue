<template>
  <div>
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
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "RiskStatusCard",
  props: {
    // msg: String
  },
  components: {},
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>

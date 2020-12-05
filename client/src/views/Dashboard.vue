<template>
  <div class="home">
    <!-- Main is Main.vue which contains the Dashboard with the graph and Risk Assessment -->
    <Dashboard />
    <!-- <JsonMap /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from "@/components/Dashboard.vue";
// import JsonMap2 from "@/components/JsonMap2.vue";

export default {
  name: "Home",
  components: {
    Dashboard,
    // JsonMap,
  },
};
</script>

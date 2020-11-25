<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- Main is Main.vue which contains the Dashboard with the graph and Risk Assessment -->
    <Dashboard />
    <MaskWearing />
    <MedicalConditions />
    <Age />
    <!-- <Map /> -->
    <!-- <RiskStatus /> -->
    <JsonMap2 />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// Main contains the main dashbord
import Dashboard from "@/components/Dashboard.vue";
// import RiskStatus from "@/components/RiskStatus.vue";
// import Map from "@/components/Map.vue";
import JsonMap2 from "@/components/JsonMap2.vue";
import MaskWearing from "@/components/MaskWearing.vue";
import Age from "@/components/Age.vue";
import MedicalConditions from "@/components/MedicalConditions.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
    Dashboard,
    MaskWearing,
    MedicalConditions,
    Age,
    // RiskStatus,
    // Map,
    JsonMap2,
  },
};
</script>

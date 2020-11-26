<template>
  <div class="todaysdata">
    <h1>My Data</h1>
    <div class="form-container">
      <h2 style="color: red">
        THIS IS FOR TESTING UNTIL THE BACKEND IS CONNECTED WITH USER DATA
      </h2>
      My Data Page showing previously entered data
      <!-- <PostComponent /> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// Main contains the main dashbord
// import PostComponent from "@/components/PostComponent.vue";

export default {
  name: "MyData",
  components: {
    // PostComponent,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.input_type {
  position: relative;
  margin: 0 auto;
  width: 40%;
  outline: solid 1px black;
}

.form-container {
  width: 1180px;
  margin: 0 auto;
}

.work-form {
  width: 55%;
  margin: 15px auto;
}
</style>

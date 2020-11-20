<template>
  <div class="todaysdata">
    <h1>Today's Assessment Data</h1>

    <h2>User type</h2>
    <b-form-group
      label="Individual radios for testing / different forms will be shown for first time users and preexisting users"
    >
      <b-form-radio
        v-model="selected"
        name="some-radios"
        value="First Time User"
        >First Time User</b-form-radio
      >
      <b-form-radio
        v-model="selected"
        name="some-radios"
        value="Preexisting User"
        >Preexisting User</b-form-radio
      >
    </b-form-group>

    <div class="mt-3">
      Selected: <strong>{{ selected }}</strong>
    </div>

    <template v-if="selected === 'First Time User'">
      <label>Username</label>
      <input placeholder="Enter your username" />

      <div class="input_type">
        <formulate-input
          label="Change an input type"
          type="radio"
          :options="types"
          v-model="type"
        />
        <formulate-input
          label="Covid Risk Factors"
          :type="type"
          name="factors"
          :options="{
            diabetes: 'Diabetes',
            heartprob: 'Heart Problems',
            nomask: 'I do not wear a mask care',
          }"
          value="diabetes"
          error-behavior="live"
          validation="required|matches:diabetes"
          validation-name="Testing 1, 2, 3"
        />
      </div>
    </template>
    <template v-else>
      <DailyForm />
    </template>

    <PostComponent />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// Main contains the main dashbord
import PostComponent from "@/components/PostComponent.vue";
import DailyForm from "@/components/DailyForm.vue";

export default {
  name: "TodaysData",
  components: {
    PostComponent,
    DailyForm,
  },
  data() {
    return {
      loginType: "username",
      selected: "First Time User",
      type: "select",
      types: {
        select: "Select list",
        radio: "Radio list",
        text: "Text field",
        textarea: "Text area",
        checkbox: "checkbox",
      },
    };
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
</style>

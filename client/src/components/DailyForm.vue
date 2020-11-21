<template>
  <div class="dailyform">
    <!-- <h2>Sign Up for an Account</h2> -->
    <!-- <b-progress :value="value" :max="max" show-progress animated></b-progress>
      <b-progress class="mt-2" :max="max" show-value>
      </b-progress> -->

    Add form elements related to travel, activities, social distancing efforts
    here. (Delete email + symptoms labels later)

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="How often do you wear a mask?">
        <b-form-radio-group v-model="form.checked" id="radio-1">
          <b-form-radio v-model="selected" value="0">0%</b-form-radio>
          <b-form-radio v-model="selected" value="25">25%</b-form-radio>
          <b-form-radio v-model="selected" value="50">50%</b-form-radio>
          <b-form-radio v-model="selected" value="75">75%</b-form-radio>
          <b-form-radio v-model="selected" value="100">100%</b-form-radio>
        </b-form-radio-group>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.mask" id="checkboxes-4">
          <b-form-checkbox value="asympomatic"
            >I currently do not have COVID19 symptoms.</b-form-checkbox
          >
          <b-form-checkbox value="symptomatic"
            >I currently DO have COVID19 symptoms.</b-form-checkbox
          >
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary" @click="randomValue"
        >Submit</b-button
      >

      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    <div id="mapContainer"></div>
  </div>
</template>

<script>
export default {
  name: "DailyForm",
  data() {
    return {
      form: {
        email: "",
        name: "",
        pLocation: null,
        checked: [],
      },
      pLocations: [
        { text: "Select One", value: null },
        "Home",
        "Work",
        "Inconsistent",
        "Not Sure",
      ],
      show: true,
      value: 45,
      max: 100,
      type: "selected",
      selected: "",
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.pLocation = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    randomValue() {
      this.value = Math.random() * this.max;
    },
  },
};
</script>

<style scoped>
.dailyform {
  width: 50%;
  margin: 0 auto;
}
</style>

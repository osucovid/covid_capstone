<template>
  <div class="todaysdata">
    <h1>Today's Assessment Data</h1>
    <div class="form-container">
      <h2>User type</h2>
      <h3 style="color: red">
        THIS IS FOR TESTING UNTIL THE BACKEND IS CONNECTED WITH USER DATA
      </h3>
      <b-form-group
        label="Individual radios for testing / different forms will be shown for first time users and preexisting users"
      >
        <b-form-radio v-model="selected" name="some-radios" value="First-time"
          >First Time User</b-form-radio
        >
        <b-form-radio v-model="selected" name="some-radios" value="Returning"
          >Preexisting User</b-form-radio
        >
      </b-form-group>

      <div class="mt-3">
        Selected: <strong>{{ selected }}</strong>
      </div>

      <template v-if="selected === 'First-time'">
        <div class="first-time">
          <!-- <formulate-input> not <FormulateInput> as stated in the docs-->
          <!-- <formulate-form> not <FormulateForm> as stated in the docs-->
          <formulate-form class="login-form" v-model="formValues">
            <h2 class="form-title">
              COVID19 Risk Assessment Form
            </h2>
            <p>
              Fill out the following form to receive a personalized risk
              assessment
            </p>
            <formulate-input
              name="name"
              type="text"
              label="Your name"
              placeholder="Pre-filled with data from Auth0 or remove entirely?"
              validation="required"
            />
            <formulate-input
              name="email"
              type="email"
              label="Email address"
              placeholder="Pre-filled with data from Auth0 or remove entirely?"
              validation="required|email"
            />
            <!-- <div class="double-wide">
            <formulate-input
              name="password"
              type="password"
              label="Password"
              placeholder="Your password"
              validation="required"
            />
            <formulate-input
              name="password_confirm"
              type="password"
              label="Confirm your password"
              placeholder="Confirm password"
              validation="required|confirm"
              validation-name="Confirmation"
            />
          </div> -->
            <formulate-input type="submit" label="Register" />
            <pre class="code" v-text="formValues" />
          </formulate-form>
        </div>

        <div class="work-form">
          <!-- <formulate-input
            v-model="workBool"
            type="checkbox"
            label="Do you currently work?"
          /> -->
          <b-button v-b-toggle.collapse-1 variant="primary"
            >Click here if you are currently employed</b-button
          >
          <b-collapse id="collapse-1" class="mt-2">
            <b-card>
              <p class="card-text"><WorkplaceForm /></p>
              <!-- <b-button v-b-toggle.collapse-1-inner size="sm"
                >Toggle Inner Collapse</b-button
              >
              <b-collapse id="collapse-1-inner" class="mt-2">
                <b-card>Hello!</b-card>
              </b-collapse> -->
            </b-card>
          </b-collapse>
        </div>
        <div class="daily_form">
          <b-button v-b-toggle.collapse-2 variant="primary"
            >Click here if you wear a mask for COVID</b-button
          >
          <b-collapse id="collapse-2" class="mt-2">
            <b-card>
              <p class="card-text"><DailyForm /></p>
              <!-- <b-button v-b-toggle.collapse-1-inner size="sm"
                >Toggle Inner Collapse</b-button
              >
              <b-collapse id="collapse-1-inner" class="mt-2">
                <b-card>Hello!</b-card>
              </b-collapse> -->
            </b-card>
          </b-collapse>
        </div>
      </template>

      <template v-else-if="selected === 'Returning'"> </template>

      <PostComponent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// Main contains the main dashbord
import PostComponent from "@/components/PostComponent.vue";
import DailyForm from "@/components/DailyForm.vue";
import WorkplaceForm from "@/components/WorkplaceForm";

export default {
  name: "TodaysData",
  components: {
    PostComponent,
    DailyForm,
    WorkplaceForm,
  },
  data() {
    return {
      type: "selected",
      selected: "First-time",
      formValues: {},
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

.login-form {
  padding: 2em;
  border: 1px solid #a8a8a8;
  border-radius: 0.5em;
  /* max-width: 500px; */
  box-sizing: border-box;
}
.form-title {
  margin-top: 0;
}
.login-form::v-deep .formulate-input .formulate-input-element {
  max-width: none;
}
@media (min-width: 420px) {
  .double-wide {
    display: flex;
  }
  .double-wide .formulate-input {
    flex-grow: 1;
    width: calc(50% - 0.5em);
  }
  .double-wide .formulate-input:first-child {
    margin-right: 0.5em;
  }
  .double-wide .formulate-input:last-child {
    margin-left: 0.5em;
  }
}

.form-container {
  width: 1180px;
  margin: 0 auto;
}

.first-time {
  width: 55%;
  margin: 15px auto;
  background-color: white;
  /* text-align: left; */
  /* padding: 2em; */
  /* border: 1px solid #a8a8a8;
  border-radius: 0.5em; */
  box-sizing: border-box;
}

.work-form {
  width: 55%;
  margin: 15px auto;
}
</style>

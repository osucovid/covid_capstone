<template>
  <div class="todaysdata">
    <h1>Today's Assessment Data</h1>

    <h2>User type</h2>
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
      <label>Username</label>
      <input placeholder="Enter your username" />

      <div class="first_time">
        <!-- <formulate-input> not <FormulateInput> as stated in the docs-->
        <!-- <formulate-form> not <FormulateForm> as stated in the docs-->
        <formulate-form class="login-form" v-model="formValues">
          <h2 class="form-title">Register</h2>
          <p>
            Description goes here
          </p>
          <formulate-input
            name="name"
            type="text"
            label="Your name"
            placeholder="Your name"
            validation="required"
          />
          <formulate-input
            name="email"
            type="email"
            label="Email address"
            placeholder="Email address"
            validation="required|email"
          />
          <div class="double-wide">
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
          </div>
          <formulate-input type="submit" label="Register" />
          <pre class="code" v-text="formValues" />
        </formulate-form>
      </div>
    </template>
    <template v-else-if="selected === 'Returning'">
      <DailyForm />
      <WorkplaceForm />
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

.todaysdata {
}

.first_time {
  width: 50%;
  margin: 0 auto;
}
</style>

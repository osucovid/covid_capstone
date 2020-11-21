<template>
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

<script>
export default {
  name: "WorkplaceForm",
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
.dailyform {
  width: 50%;
  margin: 0 auto;
}
</style>

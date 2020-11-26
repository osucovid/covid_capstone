<template>
  <div class="container">
    <h1>New User Form for Personalized Risk Assessment</h1>
    <div class="new_user_form">
      <article class="form-container">
        <!-- <formulate-input> not <FormulateInput> as stated in the docs-->
        <!-- <formulate-form> not <FormulateForm> as stated in the docs-->
        <formulate-form v-model="formValues">
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
        </formulate-form>
      </article>
      <article class="employed_form">
        <b-button v-b-toggle.collapse-1 variant="primary"
          >Click here if you are currently employed</b-button
        >
        <b-collapse id="collapse-1" class="mt-2">
          <b-card>
            <p class="card-text"><WorkplaceForm /></p>
          </b-card>
        </b-collapse>
      </article>
      <article class="daily_form">
        <b-button v-b-toggle.collapse-2 variant="primary"
          >Click here if you wear a mask for COVID</b-button
        >
        <b-collapse id="collapse-2" class="mt-2">
          <b-card>
            <p class="card-text"><DailyForm /></p>
          </b-card>
        </b-collapse>
      </article>
      <pre class="code" v-text="formValues" />
    </div>
  </div>
</template>

<script>
import DailyForm from "@/components/DailyForm.vue";
import WorkplaceForm from "@/components/WorkplaceForm";

export default {
  name: "NewUserForm",
  components: {
    DailyForm,
    WorkplaceForm,
  },
  props: {
    // form,
  },
  data() {
    return {
      formValues: {},
    };
  },
};
</script>

<style>
.container {
  width: 1180px;
  margin: 0 auto;
  position: relative;
}

.employed_form,
.new_user_form {
  margin: 10px 0;
}

.new_user_form {
  width: 100%;
  margin: 15px auto;
  background-color: white;
  /* text-align: left; */
  /* padding: 2em; */
  /* border: 1px solid #a8a8a8;
  border-radius: 0.5em; */
  box-sizing: border-box;
  padding: 2em;
  border: 1px solid #a8a8a8;
  border-radius: 0.5em;
}

.login-form {
  padding: 2em;
  border: 1px solid #a8a8a8;
  border-radius: 0.5em;
  /* max-width: 500px; */
  width: 100%;
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
</style>

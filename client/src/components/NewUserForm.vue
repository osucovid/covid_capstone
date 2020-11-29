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

          <!-- Start Personal Details -->
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
            help="We'll never share your email with anyone else."
            placeholder="Pre-filled with data from Auth0 or remove entirely?"
            validation="required|email"
          />
          <!-- End Personal Details -->

          <!-- Start Basic Details Form -->
          <div class="basic_details_form inputs">
            <h2>Basic Details</h2>
            <p>
              Add form elements related to travel, activities, social distancing
              efforts here. (Delete email + symptoms labels later)
            </p>
            <!-- <b-card no-body class="overflow-hidden" style="max-width: 540px;">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    src="https://picsum.photos/400/400/?image=20"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title="Horizontal Card">
                    <b-card-text>
                      This is a wider card with supporting text as a natural
                      lead-in to additional content. This content is a little
                      bit longer.
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card> -->
            <b-card>
              <formulate-input
                name="mask_wearing_percentage"
                type="radio"
                label="How often do you wear a mask?"
                :options="{
                  0: 'Never',
                  25: '25% of the time',
                  50: '50% of the time',
                  75: '75% of the time',
                  100: '100% of the time',
                }"
                validation="required"
              />
            </b-card>
            <formulate-input
              name="covid_symptom_check"
              type="radio"
              label="Do you currently have COVID19 symptoms?"
              :options="{
                yes: 'Yes',
                no: 'No',
              }"
              validation="required"
            />
            <formulate-input
              name="health_conditions_check"
              type="checkbox"
              label="Do you have any of the following health conditions?"
              :options="{
                cancer: 'I have Cancer',
                ckd: 'I have Chronic Kidney Disease',
                copd: 'I have COPD',
                heart: 'I have Heart Condition(s)',
                immuno: 'I am Immunocompromised',
                obsese: 'I am Obese',
                scd: 'I have Sickle Cell Disease',
                smoker: 'I am a Smoker',
                type2d: 'I have Type 2 Diabetes',
                none: 'I have no health conditions',
              }"
            />
          </div>
          <!-- End Basic Details Form -->

          <!-- Start Workplace Form -->
          <div class="employed_form inputs">
            <b-button v-b-toggle.collapse-1 variant="primary"
              >Click here if you are currently employed</b-button
            >
            <b-collapse id="collapse-1" class="mt-2">
              <h2>Employment Details</h2>
              <p>Fill out the following form about your employment.</p>
              <formulate-input
                name="workplace_type"
                type="select"
                label="Workplace Type"
                placeholder="Select a workpalce type"
                :options="{
                  remote: 'Remote',
                  atOffice: 'At the office',
                  halfhalf: 'Partial Remote, Partial At the office',
                }"
                validation="required"
              />
              <formulate-input
                name="contact_frequency"
                type="radio"
                label="Contact Frequency"
                :options="{
                  infrequent: 'Infrequent',
                  somewhat_frequent: 'At the office',
                  frequent: 'Frequent',
                  very_frequent: 'Very frequent',
                }"
                validation="required"
              />
              <formulate-input
                name="contact_type"
                type="radio"
                label="Contact Type"
                :options="{
                  no_contact:
                    'Do not require contact with people known to be, or suspected of being, infected with SARS-CoV-2',
                  some_contact:
                    'Jobs that require frequent/close contact with people who may be infected, but who are not known to have or suspected of having COVID-19.',
                  high_contact:
                    'Healthcare delivery and support staff (hospital staff who must enter patients’ rooms) exposed to known or suspected COVID-19 patients.',
                  very_high_contact:
                    'Jobs with a very high potential for exposure to known or suspected sources of SARS-CoV-2 during specific medical, postmortem, or laboratory procedures.',
                }"
                validation="required"
              />
            </b-collapse>
          </div>
          <!-- End Workplace Form -->

          <pre class="code" v-text="formValues" />

          <formulate-input type="submit" label="Submit Form" />
        </formulate-form>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewUserForm",
  components: {},
  props: {
    // form,
  },
  data() {
    return {
      formValues: {},
    };
  },
  methods: {
    seeJson(payload) {
      this.json = payload;
    },
  },
};
</script>

<style lang="scss">
.inputs {
  background-color: white;
  max-width: 42em;
  padding: 2em;
  margin: 6.5em auto 2em auto;
  border-radius: 0.25em;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.25);
}

.formulate-input-group-item {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5em;
  padding: 0.5em;
  position: relative;

  /* This makes the whole respond like a label to clicks */
  label::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }

  &[data-has-value] {
    background-color: #e2f4ec;
  }
}
</style>

<style>
.card-body {
  background-color: #fff;
}
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
  width: 80%;
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
.basic_details_form {
  border-top: 2px dashed green;
  padding-top: 30px;
}
.employed_form {
  border-top: 2px dashed green;
  padding-top: 30px;
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
.card-text.workplace-form {
  display: none;
}
.formulate-input[data-classification="box"] .formulate-input-wrapper {
  display: inline-flex;
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

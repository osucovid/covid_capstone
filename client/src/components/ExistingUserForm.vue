<template>
  <div class="container">
    <h1>Edit My Data for Personalized Risk Assessment</h1>
    <div class="new_user_form">
      <article class="form-container">
        <!-- <formulate-input> not <FormulateInput> as stated in the docs-->
        <!-- <formulate-form> not <FormulateForm> as stated in the docs-->
        <formulate-form v-model="formValues">
          <img
            :src="require('../assets/form-icon.svg')"
            :width="150"
          />
          <h2 class="form-title">
            COVID-19 Risk Assessment Form
          </h2>
          <p>
            Edit or update the following form to receive a personalized risk
            assessment
          </p>
          <!-- Start Personal Details -->
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
            help="We'll never share your email with anyone else."
            placeholder="Your email address"
            validation="required|email"
          />
          <div class="location_finder">
            <!-- <script
              type="application/javascript"
              defer
              src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAdX1xOMHIaR8I9j_1L1fiFHClnsZyItPM&libraries=places"
            ></script> -->
            Your Address
            <input
              type="text"
              ref="search"
              v-model="location"
              class="form-control"
              placeholder="Enter Your Address"
            />
          </div>
          <formulate-input
            label="How old are you?"
            type="range"
            name="age"
            min="0"
            max="100"
            show-value="27"
            validation="required|min:10|max:90"
            error-behavior="live"
          />

          <!-- End Personal Details -->

          <!-- Start Daily Details Form -->
          <div class="basic_details inputs">
          <img
            :src="require('../assets/heartbeat.svg')"
            :width="150"
          />          
            <h2>Basic Details</h2>
            <p>
              Enter basic details about your health and routines
            </p>
            <formulate-input
              name="mask_wearing_percentage"
              type="select"
              label="How often do you wear a mask?"
              placeholder="Select one"
              :options="{
                0: 'Never',
                25: '25% of the time',
                50: '50% of the time',
                75: '75% of the time',
                100: '100% of the time',
              }"
              validation="required"
            />

            <formulate-input
              name="covid_symptom_check"
              type="select"
              label="Do you currently have COVID-19 symptoms?"
              placeholder="Select one"
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
                copd: 'I have COPD (Chronic obstructive pulmonary disease)',
                heart: 'I have Heart Condition(s)',
                immuno: 'I am Immunocompromised',
                obsese: 'I am Obese',
                scd: 'I have Sickle Cell Disease',
                smoker: 'I am a Smoker',
                type2d: 'I have Type 2 Diabetes',
                none: 'I have none of these high-risk health conditions',
              }"
              validation="required"
            />
          </div>
          <!-- End Basic Details Form -->

          <!-- Start Social Distancing Details Form -->
          <div class="social_distancing inputs">
          <img
            :src="require('../assets/social-distancing.svg')"
            :width="150"
          />
            <h2>Social Distancing Details</h2>
            <p>
              Answer the following questions about your social distancing
              efforts
            </p>

            <formulate-input
              name="social_distancing_q1"
              type="select"
              label="Do you avoid contact with people at higher risk for severe illness from COVID-19?"
              placeholder="Select one"
              :options="{
                1: 'Always',
                2: 'Mostly',
                3: 'Usually',
                4: 'Sometimes',
                5: 'Never',
              }"
              validation="required"
            />

            <formulate-input
              name="social_distancing_q10"
              type="select"
              label="How often do you see your family and/or friends who live outside of your household?"
              placeholder="Select one"
              :options="{
                1: 'Never',
                2: 'Once a month',
                3: 'Once a week',
                4: 'Most days',
                5: 'Everyday',
              }"
              validation="required"
            />
            <formulate-input
              name="social_distancing_q2"
              type="radio"
              label="When using public transit, do you try to keep at least 6 feet from other passengers and transit operators?"
              :options="{
                yes: 'Yes',
                no: 'No',
              }"
              validation="required"
            />
            <formulate-input
              name="social_distancing_q3"
              type="radio"
              label="When using rideshares or taxis, do you avoid pooled rides where multiple passengers are picked up?"
              :options="{
                yes: 'Yes',
                no: 'No',
              }"
              validation="required"
            />
            <formulate-input
              name="social_distancing_q4"
              type="radio"
              label="When using rideshares or taxis, do you sit in the back seat in larger vehicles so you can remain at least 6 feet away from the driver?"
              :options="{
                yes: 'Yes',
                no: 'No',
              }"
              validation="required"
            />
            <formulate-input
              name="social_distancing_q5"
              type="radio"
              label="When running errands, do you only visit stores selling household essentials in person when you absolutely need to?"
              :options="{
                yes: 'Yes',
                no: 'No',
              }"
              validation="required"
            />
            <formulate-input
              name="social_distancing_q15"
              type="radio"
              label="When running errands, do you stay at least 6 feet away from others who are not from your household while shopping and in lines?"
              :options="{
                yes: 'Yes',
                no: 'No',
              }"
              validation="required"
            />
            <formulate-input
              name="social_distancing_q6"
              type="radio"
              label="Do you use drive-thru, curbside pick-up, or delivery services to limit face-to-face contact with others?"
              :options="{
                yes: 'Yes',
                no: 'No',
              }"
              validation="required"
            />
            <formulate-input
              name="social_distancing_q7"
              type="radio"
              label="Do you stay socially connected with friends and family who don’t live in your home by calling, using video chat, or staying connected through social media?"
              :options="{
                yes: 'Yes',
                no: 'No',
              }"
              validation="required"
            />
            <formulate-input
              name="social_distancing_q8"
              type="radio"
              label="If meeting others in person (e.g., at small outdoor gatherings, yard, or driveway gathering with a small group of friends or family members), do you stay at least 6 feet from others who are not from your household?"
              :options="{
                yes: 'Yes',
                no: 'No',
              }"
              validation="required"
            />
            <formulate-input
              name="social_distancing_q9"
              type="radio"
              label="If you are in a crowded space, do you try to keep 6 feet of space between yourself and others at all times, and wear a mask?"
              :options="{
                yes: 'Yes',
                no: 'No',
              }"
              validation="required"
            />
          </div>
          <!-- End Basic Details Form -->

          <!-- Start Workplace Form -->
          <div class="employed_form inputs">
            <b-button v-b-toggle.collapse-1 variant="primary"
              >Click here if you are currently employed</b-button
            >
            <b-collapse id="collapse-1" class="mt-2">
              <img
                :src="require('../assets/worker.svg')"
                :width="150"
              />
              <h2>Employment Details</h2>
              <p>Fill out the following form about your employment</p>
              <formulate-input
                name="employment_type"
                type="select"
                label="Employment Type"
                placeholder="Select an employment type"
                :options="{
                  halfTime: 'Half-time',
                  fullTime: 'Full-time',
                  onCall: 'On-call or freelance',
                  none: 'Not Applicable'
                }"
                validation="required"
              />
              <formulate-input
                label="How many hours a day do you spend away from home?"
                type="range"
                name="hours"
                min="0"
                max="24"
                show-value="8"
                validation="required|min:0|max:24"
                error-behavior="live"
              />
              <formulate-input
                name="workplace_type"
                type="select"
                label="Workplace Type"
                placeholder="Select a workplace type"
                :options="{
                  remote: 'Remote (working from home)',
                  atOffice: 'At the office',
                  halfhalf: 'Partially remote, partially at the office',
                  none: 'Not Applicable'
                }"
                validation="required"
              />
              <formulate-input
                name="contact_frequency"
                type="select"
                label="Contact Frequency"
                placeholder="Select frequency type"
                :options="{
                  noContact: 'None',
                  infrequent:
                    'Infrequent - I do not have frequent close contact with coworkers, customers, or the public)',
                  frequent:
                    'Frequent - I have contact with the general public (e.g., in schools, high population density work environments, and some high-volume retail settings)',
                }"
                validation="required"
              />
              <formulate-input
                name="people_encountered"
                type="select"
                placeholder="Select one"
                label="How many people do you encounter on an average day? "
                :options="{
                  1: 'None',
                  2: '1-5',
                  3: '6-10',
                  4: '11-20',
                  5: '20 or more',
                }"
                validation="required"
              />
              <formulate-input
                name="contact_type"
                type="checkbox"
                label="Contact Type"
                placeholder="Select one"
                :options="{
                  no_contact:
                    'My work does not require contact with people known to be, or suspected of being, infected with SARS-CoV-2',
                  some_contact:
                    'My work requires some frequent/close contact with people who may be infected, but who are not known to have or suspected of having COVID-19.',
                  high_contact:
                    'I work in healthcare and/or with healthcare delivery and support staff (hospital staff who must enter patients’ rooms) exposed to known or suspected COVID-19 patients.',
                  very_high_contact:
                    'My job includes a very high potential for exposure to known or suspected sources of SARS-CoV-2 during specific medical, postmortem, or laboratory procedures.',
                }"
                validation="required"
              />
            </b-collapse>
          </div>
          <!-- End Workplace Form -->

          <!-- Start Student Form -->
          <div class="student_form inputs">
            <b-button v-b-toggle.collapse-3 variant="primary"
              >Click here if you are currently in school</b-button
            >
            <b-collapse id="collapse-3" class="mt-2">
              <img
                :src="require('../assets/school.svg')"
                :width="150"
              />
              <h2>School Details</h2>
              <p>
                Fill out the following form about your details related to
                school
              </p>
              <formulate-input
                name="school_type"
                type="select"
                label="Are your classes remote or in-person?"
                placeholder="Select one"
                :options="{
                  remote: 'Remote',
                  inPerson: 'In-person',
                  halfnhalf: 'Half and half',
                  none: 'Not Applicable',
                }"
                validation="required"
              />
              <formulate-input
                label="How many hours a day do you spend away from home?"
                type="range"
                name="hours"
                min="0"
                max="24"
                value="8"
                show-value="8"
                validation="required|min:0|max:24"
                error-behavior="live"
              />
              <formulate-input
                name="school_contact_frequency"
                type="select"
                label="Contact Frequency with Other Students"
                placeholder="Select one"
                :options="{
                  noContact: 'None',
                  infrequent: 'Infrequent ',
                  frequent: 'Frequent ',
                }"
                validation="required"
              />
              <formulate-input
                name="school_people_encountered"
                type="select"
                label="How many people do you encounter on an average day? "
                placeholder="Select one"
                :options="{
                  1: 'None',
                  2: '1-5',
                  3: '6-10',
                  4: '11-20',
                  5: '20 or more',
                }"
                validation="required"
              />
            </b-collapse>
          </div>
          <!-- End Student Form -->

          <!-- Start Travel Form -->
          <div class="travel_form inputs">
            <b-button v-b-toggle.collapse-2 variant="primary"
              >Click here if you have traveled domestically or internationally in the
              last 14 days</b-button
            >
            <b-collapse id="collapse-2" class="mt-2">
              <img
                :src="require('../assets/globe.svg')"
                :width="150"
              />
              <h2>Travel Details</h2>
              <p>
                Fill out the following form about your recent travel, if
                applicable
              </p>
              <formulate-input
                name="travel_type"
                type="radio"
                label="Travel Type"
                placeholder="Select a travel type"
                :options="{
                  domestic: 'Domestic',
                  international: 'International',
                  none: 'N/A',
                }"
                validation="required"
              />
              <formulate-input
                name="travel_details_social_distancing"
                type="radio"
                label="During your travels, did you practice social distancing (maintain a distance of 6 feet)?"
                :options="{
                  yes: 'Yes',
                  no: 'No',
                  none: 'N/A',
                }"
                validation="required"
              />
              <formulate-input
                name="travel_details_wear_mask"
                type="radio"
                label="During your travels, did you wear a face covering?"
                :options="{
                  yes: 'Yes',
                  no: 'No',
                  none: 'N/A',
                }"
                validation="required"
              />
              <formulate-input
                name="travel_details"
                type="radio"
                label="During your travels, did you wash your hands frequently?"
                :options="{
                  yes: 'Yes',
                  no: 'No',
                  none: 'N/A',
                }"
                validation="required"
              />
              <formulate-input
                name="travel_from"
                type="checkbox"
                label="Were you in situations with potentially higher risk of exposure such as"
                :options="{
                  travel_from:
                    'Travel from another country, a U.S. state, or a county (according to state data) where COVID-19 transmission is high or increasing',
                  social_gathering:
                    'Attendance at large social or mass gatherings',
                  cruise_ship:
                    'Travel on a cruise ship or river boat',
                  none: `Not applicable, I didn't travel`,
                }"
              />
            </b-collapse>
          </div>
          <!-- End Workplace Form -->

          <!-- JSON below used for testing

          <pre class="code" v-text="formValues" />
          <pre class="code" v-text="location" />-->

          <formulate-input
            type="submit"
            label="Submit Form"
            v-on:click="submit"
          />
        </formulate-form>
      </article>
    </div>
  </div>
</template>

<script>
import PostService from "../DashboardService";
export default {
  name: "ExistingUserForm",
  components: {},
  props: {},
  data() {
    return {
      formValues: {},
      location: "",
    };
  },
  async mounted() {
    window.checkAndAttachMapScript(this.getAddress);
  },
  async created() {
    try {
      let values = [];
      values = await PostService.getPosts();
      let i;
      for (i = 0; i < values.length; i++) {
        if (values[i].email == this.$auth.user.email) {
          this.formValues = values[i].form;
          this.location = values[i].location;
        }
      }
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    // seeJson(payload) {
    //   this.json = payload;
    // },
    getAddress() {
      let autocomplete = new window.google.maps.places.Autocomplete(
        this.$refs.search
      );
      var vm = this;
      autocomplete.addListener("place_changed", function() {
        let place = autocomplete.getPlace();
        vm.location = place.formatted_address;
      });
    },
    submit() {
      PostService.updatePost(this.formValues, this.location);
      try {
        let values = [];
        values = PostService.getPosts();
        let i;
        for (i = 0; i < values.length; i++) {
          if (values[i].email == this.$auth.user.email) {
            this.formValues = values[i].form;
          }
        }
      } catch (err) {
        this.error = err.message;
      }
      this.$router.push("/dashboard");
    },
    navigate() {
      this.$router.push("/dashboard");
    },
  },

  // metaInfo() {
  //   return {
  //     script: [
  //       {
  //         src: `https://maps.googleapis.com/maps/api/js?key=AIzaSyAdX1xOMHIaR8I9j_1L1fiFHClnsZyItPM&libraries=places`,
  //         async: true,
  //         defer: true,
  //         // callback: () => this.MapsInit(), // will declare it in methods
  //       },
  //     ],
  //   };
  // },
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
.location_finder .input {
  position: relative;
  width: 100%;
}
.card-body {
  background-color: #fff;
}
.container {
  width: 1180px;
  margin: 0 auto;
  position: relative;
}
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
  padding-top: 30px;
}
.employed_form {
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
  margin-top: 20px;
  margin-bottom: 15px;
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
.location_finder .form-control {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.3em;
  border: 1px solid #cecece;
  box-sizing: border-box;
  background-color: transparent;
  font-size: 0.9em;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  padding: 0.75em;
  display: block;
  width: 80%;
  font-weight: 400;
  line-height: 1.2em;
  margin: 0 auto;
  height: 100%;
}
.location_finder {
  display: block;
  line-height: 1.5;
  font-size: 0.9em;
  font-weight: 600;
  margin-bottom: 25px;
}
.formulate-input[data-classification="box"] .formulate-input-element {
  overflow: visible;
}
</style>

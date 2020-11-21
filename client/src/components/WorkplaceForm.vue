<template>
  <div class="container">
    <div class="workplace_form">
      <!-- <formulate-input> not <FormulateInput> as stated in the docs-->
      <!-- <formulate-form> not <FormulateForm> as stated in the docs-->
      <formulate-form v-model="values" :schema="schema" />
      <pre class="code" v-text="values" />
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkplaceForm",
  data() {
    return {
      values: {},
      schema: [
        {
          component: "h3",
          children: "Workplace Risk Factors",
        },
        {
          type: "select",
          label: "Workplace",
          name: "workplace_type",
          placeholder: "Select a workplace type",
          options: {
            remote: "Remote",
            atOffice: "At the office",
            halfhalf: "Partial Remote, Partial At the office",
          },
          validation: "required",
        },
        {
          component: "div",
          class: "flex-wrapper",
          children: [
            {
              name: "contact_frequency",
              label: "Contact frequency",
              type: "checkbox",
              options: {
                infrequent: "Infrequent",
                somewhat_frequent: "Somewhat Frequent",
                frequent: "Frequent",
                very_frequent: "Very frequent",
              },
            },
            {
              name: "contact_type",
              label: "Contact Type",
              type: "checkbox",
              options: {
                no_contact:
                  "Do not require contact with people known to be, or suspected of being, infected with SARS-CoV-2",
                some_contact:
                  "Jobs that require frequent/close contact with people who may be infected, but who are not known to have or suspected of having COVID-19.",
                high_contact:
                  "Healthcare delivery and support staff (hospital staff who must enter patients’ rooms) exposed to known or suspected COVID-19 patients.",
                very_high_contact:
                  "Jobs with a very high potential for exposure to known or suspected sources of SARS-CoV-2 during specific medical, postmortem, or laboratory procedures.",
              },
            },
          ],
        },
        {
          type: "submit",
          label: "Submit workplace risk factors",
        },
      ],
    };
  },
};
</script>

<style scoped>
.workplace_form {
  /* width: 50%;
  margin: 0 auto; */
}
</style>

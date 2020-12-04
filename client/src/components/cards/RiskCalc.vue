<template>
  <div>
    <b-card-group deck>
      <b-card bg-variant="light" title="Overall Risk" img-alt="Image" img-top>
        <b-card-text>
          <h2>{{ riskStatus }}</h2>
          <p v-if="riskStatus == 'Low'">
            <b-icon
              icon="exclamation-circle-fill"
              variant="success"
              style="width: 150px; height: 150px;"
              animation="fade"
            ></b-icon>
          </p>
          <p v-if="riskStatus == 'Moderate'">
            <b-icon
              icon="exclamation-circle-fill"
              variant="warning"
              style="width: 150px; height: 150px;"
              animation="fade"
            ></b-icon>
          </p>
          <p v-if="riskStatus == 'High'">
            <b-icon
              icon="exclamation-circle-fill"
              variant="danger"
              style="width: 150px; height: 150px;"
              animation="fade"
            ></b-icon>
          </p>

          <strong>{{ pointsMessage }}</strong>
          <br />
          <div class="main_message">
            {{ message }}
          </div>
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted"></small>
        </template>
      </b-card>
    </b-card-group>

    <b-card-group deck class="small_cards">
      <b-card bg-variant="light" title="Age Risk" img-alt="Image" img-top>
        <b-card-text>
          <div class="small_risk_card" v-if="this.ageLevel == 'high'">
            <img :src="require('../../assets/old-woman.svg')" :width="75" />
            <b-icon
              icon="exclamation-circle-fill"
              variant="danger"
              style="width: 75px; height: 75px;"
            ></b-icon>
          </div>
          <div class="small_risk_card" v-if="this.ageLevel == 'mod'">
            <img :src="require('../../assets/old-woman.svg')" :width="75" />
            <b-icon
              icon="exclamation-circle-fill"
              variant="warning"
              style="width: 75px; height: 75px;"
            ></b-icon>
          </div>
          <div class="small_risk_card" v-if="this.ageLevel == 'low'">
            <img :src="require('../../assets/old-woman.svg')" :width="75" />
            <b-icon
              icon="exclamation-circle-fill"
              variant="success"
              style="width: 75px; height: 75px;"
            ></b-icon>
          </div>
          {{ ageMessage }}
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted"></small>
        </template>
      </b-card>

      <b-card
        bg-variant="light"
        title="Mask Wearing Risk"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          <div class="small_risk_card" v-if="this.maskLevel == 'mild'">
            <img :src="require('../../assets/face-mask.svg')" :width="75" />
            <b-icon
              icon="exclamation-circle-fill"
              variant="secondary"
              style="width: 75px; height: 75px;"
            ></b-icon>
          </div>
          <div class="small_risk_card" v-if="this.maskLevel == 'mod'">
            <img :src="require('../../assets/face-mask.svg')" :width="75" />
            <b-icon
              icon="exclamation-circle-fill"
              variant="warning"
              style="width: 75px; height: 75px;"
            ></b-icon>
          </div>
          <div class="small_risk_card" v-if="this.maskLevel == 'low'">
            <img :src="require('../../assets/face-mask.svg')" :width="75" />
            <b-icon
              icon="exclamation-circle-fill"
              variant="success"
              style="width: 75px; height: 75px;"
            ></b-icon>
          </div>
          {{ maskMessage }}
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted"></small>
        </template>
      </b-card>

      <b-card
        bg-variant="light"
        title="Pre-existing Medical Conditions Risk"
        img-alt="Image"
        img-top
        class=""
      >
        <b-card-text>
          <div v-if="this.medLevel == 'high'">
            <img :src="require('../../assets/heartbeat.svg')" :width="75" />
            <b-icon
              icon="exclamation-circle-fill"
              variant="danger"
              style="width: 75px; height: 75px;"
            ></b-icon>
          </div>
          <div v-if="this.medLevel == 'low'">
            <img :src="require('../../assets/heartbeat.svg')" :width="75" />
            <b-icon
              icon="exclamation-circle-fill"
              variant="success"
              style="width: 75px; height: 75px;"
            ></b-icon>
          </div>
          {{ medMessage }}
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted"></small>
        </template>
      </b-card>

      <b-card
        bg-variant="light"
        title="Social Distancing Risk"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          <div class="small_risk_card" v-if="this.socialLevel == 'mild'">
            <img
              :src="require('../../assets/social-distancing.svg')"
              :width="75"
            />
            <b-icon
              icon="exclamation-circle-fill"
              variant="secondary"
              style="width: 75px; height: 75px;"
            ></b-icon>
          </div>
          <div class="small_risk_card" v-if="this.socialLevel == 'mod'">
            <img
              :src="require('../../assets/social-distancing.svg')"
              :width="75"
            />
            <b-icon
              icon="exclamation-circle-fill"
              variant="warning"
              style="width: 75px; height: 75px;"
            ></b-icon>
          </div>
          <div class="small_risk_card" v-if="this.socialLevel == 'low'">
            <img
              :src="require('../../assets/social-distancing.svg')"
              :width="75"
            />
            <b-icon
              icon="exclamation-circle-fill"
              variant="success"
              style="width: 75px; height: 75px;"
            ></b-icon>
          </div>
          {{ socialMessage }}
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted"></small>
        </template>
      </b-card>
    </b-card-group>

    <b-card-group deck>
      <b-card bg-variant="light" title="Work Risk" img-alt="Image" img-top>
        <b-card-text>
          <div class="small_risk_card" v-if="this.workLevel == 'mild'">
            <img :src="require('../../assets/worker.svg')" :width="75" />
            <b-icon
              icon="exclamation-circle-fill"
              variant="secondary"
              style="width: 75px; height: 75px;"
            ></b-icon>
          </div>
          <div class="small_risk_card" v-if="this.workLevel == 'mod'">
            <img :src="require('../../assets/worker.svg')" :width="75" />
            <b-icon
              icon="exclamation-circle-fill"
              variant="warning"
              style="width: 75px; height: 75px;"
            ></b-icon>
          </div>
          <div class="small_risk_card" v-if="this.workLevel == 'low'">
            <img :src="require('../../assets/worker.svg')" :width="75" />
            <b-icon
              icon="exclamation-circle-fill"
              variant="success"
              style="width: 75px; height: 75px;"
            ></b-icon>
          </div>

          {{ workMessage }}
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted"></small>
        </template>
      </b-card>

      <b-card bg-variant="light" title="School Risk" img-alt="Image" img-top>
        <b-card-text>
          <div class="small_risk_card" v-if="this.schoolLevel == 'high'">
            <img :src="require('../../assets/school.svg')" :width="75" />
            <b-icon
              icon="exclamation-circle-fill"
              variant="danger"
              style="width: 75px; height: 75px;"
            ></b-icon>
          </div>
          <div class="small_risk_card" v-if="this.schoolLevel == 'mild'">
            <img :src="require('../../assets/school.svg')" :width="75" />
            <b-icon
              icon="exclamation-circle-fill"
              variant="secondary"
              style="width: 75px; height: 75px;"
            ></b-icon>
          </div>
          <div class="small_risk_card" v-if="this.schoolLevel == 'mod'">
            <img :src="require('../../assets/school.svg')" :width="75" />
            <b-icon
              icon="exclamation-circle-fill"
              variant="warning"
              style="width: 75px; height: 75px;"
            ></b-icon>
          </div>
          <div class="small_risk_card" v-if="this.schoolLevel == 'low'">
            <img :src="require('../../assets/school.svg')" :width="75" />
            <b-icon
              icon="exclamation-circle-fill"
              variant="success"
              style="width: 75px; height: 75px;"
            ></b-icon>
          </div>

          {{ schoolMessage }}
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted"></small>
        </template>
      </b-card>

      <b-card bg-variant="light" title="Travel Risk" img-alt="Image" img-top>
        <b-card-text>
          <div class="small_risk_card" v-if="this.travelLevel == 'high'">
            <img :src="require('../../assets/globe.svg')" :width="75" />
            <b-icon
              icon="exclamation-circle-fill"
              variant="danger"
              style="width: 75px; height: 75px;"
            ></b-icon>
          </div>
          <div class="small_risk_card" v-if="this.travelLevel == 'mild'">
            <img :src="require('../../assets/globe.svg')" :width="75" />
            <b-icon
              icon="exclamation-circle-fill"
              variant="secondary"
              style="width: 75px; height: 75px;"
            ></b-icon>
          </div>
          <div class="small_risk_card" v-if="this.travelLevel == 'mod'">
            <img :src="require('../../assets/globe.svg')" :width="75" />
            <b-icon
              icon="exclamation-circle-fill"
              variant="warning"
              style="width: 75px; height: 75px;"
            ></b-icon>
          </div>
          <div class="small_risk_card" v-if="this.travelLevel == 'low'">
            <img :src="require('../../assets/globe.svg')" :width="75" />
            <b-icon
              icon="exclamation-circle-fill"
              variant="success"
              style="width: 75px; height: 75px;"
            ></b-icon>
          </div>

          {{ travelMessage }}
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted"></small>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import PostService from "../../DashboardService";
export default {
  name: "RiskStatusCard1",
  props: {
    // msg: String
  },
  components: {},
  data() {
    return {
      posts: "",
      message: "",
      ageMessage: "",
      maskMessage: "",
      medMessage: "",
      socialMessage: "",
      workMessage: "",
      schoolMessage: "",
      travelMessage: "",
      pointsMessage: "",
      riskStatus: "",
      medLevel: "",
      ageLevel: "",
      maskLevel: "",
      socialLevel: "",
      workLevel: "",
      schoolLevel: "",
      travelLevel: "",
    };
  },
  async created() {
    try {
      let values = [];
      values = await PostService.getPosts();
      let i;

      for (i = 0; i < values.length; i++) {
        if (values[i].email == this.$auth.user.email) {
          this.posts = values[i];
        }
      }

      // POINTS ALLOTMENT

      var totalPoints = 0;
      var highRiskCategories = 0;

      // AGE CALCULATIONS

      if (this.posts.form.age >= 75) {
        totalPoints += 50;
        this.ageMessage =
          "You are at very high risk because you are over the age of 74.";
        highRiskCategories += 1;
        this.ageLevel = "high";
      }

      if (this.posts.form.age >= 65 && this.posts.form.age < 75) {
        totalPoints += 20;
        this.ageMessage =
          "You are at high risk because you are between the ages of 65 and 74.";
        highRiskCategories += 1;
        this.ageLevel = "high";
      }

      if (this.posts.form.age >= 45 && this.posts.form.age < 65) {
        totalPoints += 10;
        this.ageMessage =
          "You are at moderate risk since you are between the ages of 45 and 64.";
        this.ageLevel = "mod";
      }

      if (this.posts.form.age < 45) {
        this.ageMessage =
          "You are at low risk since you are under the age of 45.";
        this.ageLevel = "low";
      }

      console.log(" age points: " + totalPoints);

      // MASK WEARING CALCULATIONS

      if (this.posts.form.mask_wearing_percentage <= 50) {
        totalPoints += 10;
        this.maskMessage =
          "You are at moderate risk since you rarely wear a face mask while in public.";
        this.maskLevel = "mod";
      }

      if (this.posts.form.mask_wearing_percentage == 75) {
        totalPoints += 5;
        this.maskMessage =
          "You are at mild risk since you do not always wear a mask while in public.";
        this.maskLevel = "mild";
      }

      if (this.posts.form.mask_wearing_percentage == 100) {
        this.maskMessage =
          "You are at low risk since you always wear a mask while in public.";
        this.maskLevel = "low";
      }

      console.log(" mask points: " + totalPoints);

      // medical conditions calculation. If the user has ANY of the listed conditions, give them 50 pts.

      if (this.posts.form.health_conditions_check[0] != "none") {
        totalPoints += 50;
        this.medMessage =
          "You are high risk because you listed one or more high-risk medical conditions.";
        this.medLevel = "high";
        highRiskCategories += 1;
      }

      if (this.posts.form.health_conditions_check[0] == "none") {
        this.medMessage =
          "You are at low risk because you didn't list any high-risk medical conditions associated with serious COVID-19 cases.";
        this.medLevel = "high";
      }

      console.log(" med points: " + totalPoints);

      // SOCIAL DISTANCING QUESTIONS. Note that this section has a total of 10 points, stored in socialPoints, which will be added to the totalPoints variable at the end. Not all form questions are here since a few don't affect covid risk, imo.

      var socialPoints = 0;

      if (
        this.posts.form.social_distancing_q1 != "1" &&
        this.posts.form.social_distancing_q1 != "2"
      ) {
        socialPoints += 2;
      }

      console.log(" q1 social: " + socialPoints);

      if (this.posts.form.social_distancing_q10 != "1") {
        socialPoints += 2;
      }

      console.log(" q10 social: " + socialPoints);

      if (this.posts.form.social_distancing_q2 == "no") {
        socialPoints += 2;
      }

      console.log(" q2 social: " + socialPoints);

      if (this.posts.form.social_distancing_q3 == "no") {
        socialPoints += 2;
      }

      console.log(" q3 social: " + socialPoints);

      if (this.posts.form.social_distancing_q4 == "no") {
        socialPoints += 2;
      }

      console.log(" q4 social: " + socialPoints);

      if (this.posts.form.social_distancing_q5 == "no") {
        socialPoints += 2;
      }

      console.log(" q5 social: " + socialPoints);

      if (this.posts.form.social_distancing_q6 == "no") {
        socialPoints += 2;
      }

      console.log(" q6 social: " + socialPoints);

      if (this.posts.form.social_distancing_q7 == "no") {
        socialPoints += 2;
      }

      console.log(" q7 social: " + socialPoints);

      if (this.posts.form.social_distancing_q8 == "no") {
        socialPoints += 2;
      }

      console.log(" q8 social: " + socialPoints);

      if (this.posts.form.social_distancing_q9 == "yes") {
        socialPoints += 2;
      }

      console.log(" q9 social: " + socialPoints);

      // END OF SOCIAL QUESTIONS. Now add points and reveal socialMessage.

      totalPoints += socialPoints;

      if (socialPoints >= 10) {
        this.socialMessage =
          "You are at moderate risk because you are not taking measures to socially distance from people outside of your household.";
        this.socialLevel = "mod";
      }

      if (socialPoints < 10 && socialPoints > 0) {
        this.socialMessage =
          "You are at mild risk because you only adhere to social distancing norms sometimes.";
        this.socialLevel = "mild";
      }

      if (socialPoints == 0) {
        this.socialMessage =
          "You are at low risk because you adhere to all social distancing norms.";
        this.socialLevel = "low";
      }

      // WORK QUESTIONS - points will be stored in workPoints then added to totalPoints

      var workPoints = 0;

      if (
        this.posts.form.workplace_type != "remote" &&
        this.posts.form.workplace_type != "none"
      ) {
        workPoints += 5;
      }

      console.log(" workPoints q1: " + workPoints);

      if (this.posts.form.contact_frequency == "frequent") {
        workPoints += 5;
      }

      console.log(" workPoints q2: " + workPoints);

      if (
        this.posts.form.people_encountered == "3" ||
        this.posts.form.people_encountered == "4" ||
        this.posts.form.people_encountered == "5"
      ) {
        workPoints += 5;
      }

      console.log(" workPoints q3: " + workPoints);

      if (
        this.posts.form.contact_type == "high_contact" ||
        this.posts.form.contact_type == "very_high_contact"
      ) {
        workPoints += 5;
      }

      console.log(" workPoints q4: " + workPoints);

      totalPoints += workPoints;

      if (workPoints >= 5) {
        this.workMessage =
          "You are at moderate risk because of your work situation, which includes contact with many people and/or people potentially ill with COVID-19.";
        this.workLevel = "mod";
      }

      if (workPoints == 0) {
        this.workMessage =
          "You are at low risk due to your work situation, which has limited or no contact with others.";
        this.workLevel = "low";
      }

      // SCHOOL QUESTIONS

      var schoolPoints = 0;

      if (this.posts.form.school_type == "inPerson") {
        schoolPoints += 5;
      }

      console.log(" schoolPoints q1: " + schoolPoints);

      if (this.posts.form.school_type == "halfnhalf") {
        schoolPoints += 2;
      }

      console.log(" schoolPoints q2: " + schoolPoints);

      if (this.posts.form.school_contact_frequency == "frequent") {
        schoolPoints += 5;
      }

      console.log(" schoolPoints q3: " + schoolPoints);

      if (
        this.posts.form.school_people_encountered != "0" &&
        this.posts.form.school_people_encountered != "1"
      ) {
        schoolPoints += 5;
      }

      console.log(" schoolPoints q4: " + schoolPoints);

      totalPoints += schoolPoints;

      if (schoolPoints >= 5) {
        this.schoolMessage =
          "You are at moderate risk due to your school situation, which includes contact with a significant number of other people.";
        this.schoolLevel = "mod";
      }

      if (schoolPoints == 0) {
        this.schoolMessage =
          "You are low risk due to your school situation, which includes little to no contact with others.";
        this.schoolLevel = "low";
      }

      // TRAVEL QUESTIONS

      var travelPoints = 0;

      // I'll give more points for international travel because flights are sometimes longer

      if (this.posts.form.travel_type == "domestic") {
        travelPoints += 10;
      }

      console.log(" travel q1: " + travelPoints);

      if (this.posts.form.travel_type == "international") {
        travelPoints += 15;
      }

      console.log(" travel q2: " + travelPoints);

      if (this.posts.form.travel_details_social_distancing == "no") {
        travelPoints += 5;
      }

      console.log(" travel q3: " + travelPoints);

      if (this.posts.form.travel_details_wear_mask == "no") {
        travelPoints += 5;
      }

      console.log(" travel q4: " + travelPoints);

      if (this.posts.form.travel_details == "no") {
        travelPoints += 5;
      }

      console.log(" travel q5: " + travelPoints);

      // How to make sure people who don't select one don't get docked for this question? At this point, it doesn't matter that much in the travel calculation.

      /*if(this.posts.form.travel_from) {
          travelPoints += 15;
        }

        console.log(" travel q6: " + travelPoints);*/

      totalPoints += travelPoints;

      if (travelPoints > 10) {
        this.travelMessage =
          "You are at high risk for traveling without taking safety precautions.";
        highRiskCategories += 1;
        this.travelLevel = "high";
      }

      if (travelPoints == 10) {
        this.travelMessage =
          "You are at moderate risk due to travel, although you mitigate some of your risk by taking precautions.";
        this.travelLevel = "mod";
      }

      if (travelPoints == 0) {
        this.travelMessage = "You are at low risk due to lack of travel.";
        this.travelLevel = "low";
      }
    } catch (err) {
      this.error = err.message;
    }

    // used for testing

    //console.log("this.posts.form.health_conditions_check[0]"" + JSON.stringify(this.posts.form.health_conditions_check[0]));

    console.log(
      "highRiskCategories: " +
        highRiskCategories +
        "this.posts.form.age: " +
        this.posts.form.age +
        " this.posts.form.mask_wearing_percentage " +
        this.posts.form.mask_wearing_percentage +
        " this.posts.form.social_distancing_q10 " +
        this.posts.form.social_distancing_q10 +
        " this.posts.form.social_distancing_q1 " +
        this.posts.form.social_distancing_q1 +
        " this.posts.form.social_distancing_q2 " +
        this.posts.form.social_distancing_q2 +
        " this.posts.form.social_distancing_q3 " +
        this.posts.form.social_distancing_q3 +
        "this.posts.form.social_distancing_q4 " +
        this.posts.form.social_distancing_q4 +
        " this.posts.form.social_distancing_q5 " +
        this.posts.form.social_distancing_q5 +
        " this.posts.form.social_distancing_q6 " +
        this.posts.form.social_distancing_q6 +
        " this.posts.form.social_distancing_q7 " +
        this.posts.form.social_distancing_q7 +
        " this.posts.form.social_distancing_q8 " +
        this.posts.form.social_distancing_q8 +
        " this.posts.form.social_distancing_q9 " +
        this.posts.form.social_distancing_q9 +
        "this.posts.form.contact_frequency " +
        this.posts.form.contact_frequency +
        " this.posts.form.people_encountered " +
        this.posts.form.people_encountered +
        " this.posts.form.contact_type " +
        this.posts.form.contact_type +
        " this.posts.form.school_contact_frequency " +
        this.posts.form.school_contact_frequency +
        " this.posts.form.school_people_encountered " +
        this.posts.form.school_people_encountered +
        " this.posts.form.travel_details_social_distancing " +
        this.posts.form.travel_details_social_distancing +
        " this.posts.form.travel_details " +
        this.posts.form.travel_details +
        " this.posts.form.travel_details " +
        this.posts.form.travel_details
    );

    this.pointsMessage = "Your Points Total: " + totalPoints;

    if (highRiskCategories > 0 || totalPoints >= 100) {
      this.message =
        "Overall your risk for catching and/or having a serious case of COVID-19 is high, because of your age, medical history, and/or risky behavior. See below for suggestions about how to lower your risk level. Consult your doctor and/or the resources in the About page.";

      this.riskStatus = "High";
    }

    if (highRiskCategories == 0 && totalPoints >= 25 && totalPoints < 100) {
      this.message =
        "Overall your risk for catching and/or having a serious case of COVID-19 is moderate, because of your age, medical history, and/or risky behavior. See below for suggestions about how to lower your risk level. Consult your doctor and/or the resources in the About page.";

      this.riskStatus = "Moderate";
    }

    if (highRiskCategories == 0 && totalPoints < 25) {
      this.message =
        "Overall your risk for catching and/or having a serious case of COVID-19 is low, because of your age, medical history, and/or risky behavior. Great job! There may be suggestions below about how to lower your risk level even further.";

      this.riskStatus = "Low";
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
.main_message {
  margin-top: 20px;
}
.main_message {
  font-size: 25px;
}
.card-text {
  font-size: 22px;
}
.card-text h2 {
  font-weight: 800;
  font-size: 60px;
}
.card-deck .card {
  margin-bottom: 30px;
}
.card-body img {
  display: inline-block;
  overflow: visible;
  vertical-align: -0.15em;
  margin-right: 15px;
}
.small_cards .b-icon.bi {
  margin-left: 15px;
}
.small_risk_card {
  margin: 20px 0;
}
</style>

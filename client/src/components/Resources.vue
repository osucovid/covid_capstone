<template>
  <div>
    <br />
    <div id="container">
      <div id="text">
        <hr />
        <hr />
        <img :src="require('../assets/question.svg')" :width="75" />
        <h2>Need Help Using Our Site?</h2>
        <p>
          Go to our How-To Guide for help in making the most of this health
          tool.
        </p>
        <b-button v-b-toggle.sidebar-1>Check How-To Guide</b-button>
        <b-sidebar id="sidebar-1" width="360px" title="Reference Guide" shadow>
          <div class="px-3 py-2 text-left">
            <strong>How do I use the Risk Assessment Tool?</strong>
            <ol>
              <li>
                Sign up for an account by clicking on the "Sign in to see
                personalized risk assessment" button found on the home page, or
                go to the navigation bar at top and click User > Sign In. You
                will be directed to enter in your email address.
              </li>
              <li>
                You will then fill out a user form, to establish risk variables
                such as age and pre-existing medical conditions. You will also
                answer questions regarding your social distancing and other
                activities you have done in the last month. This will give us a
                picture of your routine and present health.
              </li>
              <li>
                Go to the dashboard and see your results. You will be offered
                recommendations as to how you can reduce your risk of developing
                a serious case of COVID-19.
              </li>
              <li>
                If there are changes in your lifestyle, habits, or have traveled
                recently, you can go back to the "My Data" page and edit your
                details to get an updated and recalculated risk assessment.
              </li>
            </ol>
            <strong>What technologies does your site use?</strong>
            <p>
              We use JavaScript, HTML, CSS, NodeJS, Git, Express, MySQL, VueJS,
              MongoDB, d3.js, and Auth0.
            </p>
            <strong>What is your data policy?</strong>
            <p>
              User data is stored in MongoDB and auth0. None of your data will
              be sold to advertisers or to third parties.
            </p>
          </div>
        </b-sidebar>
        <hr />
        <hr />
      </div>
    </div>
    <br />
    <div id="break"></div>
    <br />
    <div id="container">
      <div id="text">
        <h1>About Our Website</h1>

        <p>
          Our project's goal is to
          <strong>inform users about their COVID-19 risk</strong> and
          <strong>give them feedback about how they might lower it</strong>. We
          distill data from numerous reputable sources, including public health
          departments, academics, and researchers.
        </p>

        <p>
          This app was created for Oregon State University's CS467 capstone
          course.
        </p>

        <p>
          On this page, you can learn more about the pandemic and resources for
          further study. Note that this page was last updated in December 2020.
        </p>
      </div>
    </div>
    <br />
    <div id="break"></div>
    <br />
    <div id="container">
      <div id="text">
        <h2>Did You Know?</h2>

        <div id="card-container">
          <div id="card">
            <img :src="require('../assets/coronavirus.svg')" :width="75" />
            <p>
              There are many coronaviruses out there and
              <strong>the majority are harmless to humans</strong>. Only four
              types are known to cause colds and two others create severe lung
              infections.
            </p>
          </div>

          <div id="card">
            <img :src="require('../assets/face-mask.svg')" :width="75" />
            <p>
              Each month, 129 billion face masks and 65 billion gloves are used
              globally. If the world's masks manufactured already were stitched
              with the masks projected to be produced,
              <strong>we could cover the landmass of Switzerland</strong>.
            </p>
          </div>

          <div id="card">
            <img :src="require('../assets/inhaler.svg')" :width="75" />
            <p>
              <strong
                >Asthma is not one of the top chronic health problems</strong
              >
              found in patients who died from COVID-19. Only five percent of
              deaths were of patients who had asthma.
            </p>
          </div>
        </div>
      </div>
    </div>

    <br />
    <div id="break"></div>
    <br />
    <div id="container">
      <div id="text">
        <h1>Helpful Resources</h1>
        <div id="card-container">
          <div id="card">
            <h2>Data Sources Consulted</h2>
            <ul>
              <li>
                <a href="https://c3.ai/products/c3-ai-covid-19-data-lake/"
                  >C3 AI COVID-19 Data Lake</a
                >
              </li>
              <li>
                <a href="https://github.com/nychealth/coronavirus-data/"
                  >NYC Department of Health and Mental Hygiene - Github</a
                >
              </li>
              <li>
                <a
                  href="https://www.nytimes.com/interactive/2020/07/17/upshot/coronavirus-face-mask-map.html"
                  >The New York Times - "A Detailed Map of Who Is Wearing Masks
                  in the U.S."</a
                >
              </li>
              <li>
                <a href="https://github.com/CSSEGISandData/COVID-19"
                  >Johns Hopkins University - COVID-19 Data Repository by the
                  Center for Systems Science and Engineering (CSSE)</a
                >
              </li>
              <li>
                <a
                  href="https://www.npr.org/sections/health-shots/2020/09/01/816707182/map-tracking-the-spread-of-the-coronavirus-in-the-u-s"
                  >NPR - "Coronavirus Is Surging: How Severe Is Your State's
                  Outbreak?"</a
                >
              </li>
              <li>
                <a href="https://covid19.gleamproject.org/mobility"
                  >MOBS Lab - "Mobility, commuting, and contact patterns across
                  the United States during the COVID-19 outbreak"</a
                >
              </li>
              <li>
                <a
                  href="https://github.com/nytimes/covid-19-data/tree/master/mask-use"
                  >The New York Times - Mask-Wearing Survey Data Github
                  Repository</a
                >
              </li>
              <li>
                <a
                  href="https://covid19risk.biosci.gatech.edu/?fbclid=IwAR12N-iq8qvN1mK76391IoQY2dI5_v4pbUlyQpQ_WCCKdpIQJotSa9RMQZo"
                  >Georgia Institute of Technology - COVID-19 Event Risk
                  Assessment Planning Tool</a
                >
              </li>
              <li>
                <a
                  href="https://www.osha.gov/SLTC/covid-19/hazardrecognition.html"
                  >Occupational Safety and Health Administration - COVID-19 -
                  Hazard Recognition
                </a>
              </li>
              <li>
                <a
                  href="https://www.cdc.gov/coronavirus/2019-ncov/php/risk-assessment.html"
                  >CDC - Public Health Guideline for Potential COVID-19 Exposure
                  Associated with International or Domestic Travel
                </a>
              </li>
              <li>
                <a
                  href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html"
                  >CDC - Public Health Guidance for Community-Related Exposure
                </a>
              </li>
              <li>
                <a
                  href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html"
                  >CDC - How to Protect Yourself & Others
                </a>
              </li>
            </ul>

            <h2>Research Articles Consulted</h2>
            <ul>
              <li>
                <a
                  href="https://www.healthaffairs.org/doi/full/10.1377/hlthaff.2020.00818"
                  >Health Affairs: "Community Use Of Face Masks And COVID-19:
                  Evidence From A Natural Experiment..."</a
                >
              </li>
              <li>
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7314683/"
                  >Elsevier Public Health Emergency Collection: "Mask use during
                  COVID-19: A risk adjusted strategy"</a
                >
              </li>
              <li>
                <a
                  href="https://www.sciencedirect.com/science/article/pii/S2468042720300117"
                  >Infectious Disease Modelling: "To mask or not to mask:
                  Modeling the potential for face mask use by the general
                  public..."</a
                >
              </li>
            </ul>
          </div>
          <div id="card">
            <h2>Health Recommendations</h2>
            <ul>
              <li>
                <a
                  href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                  >World Health Organization - Advice for the public, Country
                  and technical guidance</a
                >
              </li>
              <li>
                <a
                  href="https://www1.nyc.gov/site/doh/covid/covid-19-prevention-and-care.page"
                  >NYC Health Department - "COVID-19: Prevention and Groups at
                  Higher Risk"</a
                >
              </li>
              <li>
                <a
                  href="https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/coronavirus-mask/art-20485449"
                  >Mayo Clinic - COVID-19: How much protection do face masks
                  offer?</a
                >
              </li>
              <li>
                <a
                  href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html"
                  >Centers for Disease Control and Prevention - People with
                  Certain Medical Conditions</a
                >
              </li>
            </ul>

            <h2>Did You Know Credits</h2>
            <ul>
              <li>
                <a
                  href="https://www.nytimes.com/2020/04/16/health/coronavirus-asthma-risk.html"
                  >The New York Times - "Asthma Is Absent Among Top Covid-19
                  Risk Factors, Early Data Shows"</a
                >
              </li>
              <li>
                <a
                  href="https://www.doctorswithoutborders.org/covid19#What%20is%20a%20coronavirus?"
                  >Doctors Without Borders - COVID-19: Our Global Response</a
                >
              </li>
              <li>
                <a
                  href="https://www.scientificamerican.com/article/covid-19-has-worsened-the-ocean-plastic-pollution-problem/"
                  >Scientific American - "COVID-19 Has Worsened the Ocean
                  Plastic Pollution Problem"</a
                >
              </li>
            </ul>

            <h2>Map Data</h2>
            <ul>
              <li>
                <a
                  href="https://data.sfgov.org/COVID-19/COVID-19-Testing-Locations/dtit-7gp4"
                >
                  DataSF | COVID-19 Testing Locations
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <br />
    <div id="break"></div>
    <br />
    <div id="container">
      <div id="text">
        <h1>Website Credits</h1>

        <div id="card-container">
          <div id="card">
            <h2>Icons</h2>
            <ul>
              <li>
                By
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  title="Freepik"
                  >Freepik</a
                >,
                <a href="https://www.flaticon.com/authors/surang" title="surang"
                  >surang</a
                >,
                <a
                  href="https://www.flaticon.com/authors/vectors-market"
                  title="Vectors Market"
                  >Vectors Market</a
                >
                from
                <a href="https://www.flaticon.com/" title="Flaticon"
                  >www.flaticon.com</a
                >
              </li>
            </ul>
          </div>

          <div id="card">
            <h2>Share on Social Networks</h2>
            <p>Like our site? Share it:</p>
            <share-it
              :icons="true"
              :targets="['twitter', 'facebook', 'linkedin', 'reddit']"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import shareIt from "vue-share-it";

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/snippet-\w*/];

Vue.use(shareIt);

export default {
  name: "Resources",
};
</script>

<style>
ul {
  display: inline-block;
  text-align: left;
}

@media only screen and (min-width: 360px) {
  #container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  #text {
    padding: 25px;
    background-color: #ddd;
    flex-basis: 85%;
  }

  #card-container {
    display: flex;
  }

  #card {
    flex-grow: 1;
    padding: 30px;
    border: 10px solid #ddd;
    background-color: #eee;
  }
}

#break {
  flex-basis: 100%;
  height: 0;
}

@media only screen and (max-width: 350px) {
  #container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  #text {
    padding: 25px;
    background-color: #ddd;
  }

  #card-container {
    display: flex;
    flex-wrap: wrap;
  }

  #card {
    flex-grow: 1;
    padding: 30px;
    border: 10px solid #ddd;
    background-color: #eee;
  }
}

@media only screen and (min-width: 1000px) {
  #container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  #text {
    padding: 25px;
    background-color: #ddd;
    flex-basis: 60%;
  }

  #card-container {
    display: flex;
  }

  #card {
    flex-grow: 1;
    padding: 30px;
    border: 10px solid #ddd;
    background-color: #eee;
  }
}
</style>

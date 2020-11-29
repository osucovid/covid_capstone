<template>
  <div class = "main">
    <hr>
    <hr>
    <img
      :src="require('../assets/question.svg')"
      :width="75"
    />
    <h2>Need Help Using Our Site?</h2>
    <p>Go to our How-To Guide for help in making the most of this health tool.</p>
    <b-button v-b-toggle.sidebar-1>Check How-To Guide</b-button>
    <b-sidebar id="sidebar-1" width="360px" title="Reference Guide" shadow>
      <div class="px-3 py-2 text-left">
          <strong>How do I use the Risk Assessment Tool?</strong>
          <ol>
            <li>Sign up for account by clicking on the "Sign in to see personalized risk assessment" button found on the home page. You will be directed to enter in your email address.</li>
            <li>You will then fill out a user form, to establish risk variables such as age and pre-existing medical conditions.</li>
            <li>Fill out a Daily Data form - see the link in the navigation bar. You will be asked about what activities you have done in the last month. This will give us a picture of your routine.</li>
            <li>Go to the dashboard and see your results. You will be offered recommendations as to how you can reduce your risk of developing a serious case of COVID-19.</li>
          </ol>  
          <strong>What technologies does your site use?</strong>
          <p>We use JavaScript, d3.js, HTML, CSS, NodeJS, Git, Express, MySQL, VueJS, MongoDB, and Auth0.</p>
          <strong>What is your data policy?</strong>
          <p>User data is stored in MongoDB and auth0. None of your data will be sold to advertisers or to third parties.</p>
      </div>
    </b-sidebar>
    <hr>
    <hr>
  </div>
</template>

<script>
  export default {
    name: 'Guide'
  }
</script>

<style scoped>
ul, li{
  text-align: left;
}

.main {
  background-color: #ddd;
}

</style>
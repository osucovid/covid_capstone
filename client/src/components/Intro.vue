<template>
  <div id = "container">
  <div id = "text">
    <h1>Curious about your risk for catching <strong>COVID-19</strong>?</h1>

      <p>With so much brand new (and often conflicting) information about the COVID-19 pandemic, people are overwhelmed with the amount of data and advice provided by the media.</p>

      <p><strong>Fill out a few questions and our app will help you evaluate your risk for COVID-19 based on your past and present behavior.</strong> We will compare your activity with publicly available data and current recommendations from researchers and public health departments.</p>

      <p><strong><a href="/todaysdata">Begin by registering for account or filling out a daily assessment form</a></strong>!</p>
  </div>

  <div id = "break"></div>

  <div id = "text">
  <h2>It's easy to get your assessment!</h2>

  <div id = "card-container">
  <div id = "card">
    <img
      :src="require('../assets/form-icon.svg')"
      :width="75"
    />
    <p>Fill out questions about your medical history, social distancing efforts, and recent activity.</p>
  </div>

  <div id = "card">
    <img
      :src="require('../assets/bar-chart.svg')"
      :width="75"
    />
    <p>Get instantaneous results about how you compare to high-risk COVID patients.</p>
  </div>

  <div id = "card">
    <img
      :src="require('../assets/stethoscope.svg')"
      :width="75"
    />
    <p>Learn more about the pandemic and how to lower your risk, in consultation with your doctors.</p>
  </div>
  </div>
  </div>
  </div>
</template>

<style>

@media only screen and (min-width: 600px) {

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

#break {
  flex-basis: 100%;
  height: 0;
}

@media only screen and (max-width: 600px) {

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

</style>
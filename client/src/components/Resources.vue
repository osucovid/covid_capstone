<template>
<div>
  <div id = "container">
  <div id = "text">
    <h1>About Our Website</h1>

      <p>Our project's goal is to inform users about their COVID-19 risk and give them feedback about how they might lower it. We hope to distill data from numerous reputable sources, including public health departments, academics, and researchers.</p>

      <p>This app was created for Oregon State University's CS467 capstone course.</p>

      <p>On this page, you can learn more about the pandemic and resources for further study.</p>

  </div>
  </div>
  <br />
  <div id = "break"></div>
  <br />
  <div id = "container">
  <div id = "text">
  <h2>Did you know?</h2>

  <div id = "card-container">
  <div id = "card">
    <img
      :src="require('../assets/form-icon.svg')"
      :width="75"
    />
    <p>Fact #1</p>
  </div>

  <div id = "card">
    <img
      :src="require('../assets/bar-chart.svg')"
      :width="75"
    />
    <p>Fact #2</p>
  </div>

  <div id = "card">
    <img
      :src="require('../assets/stethoscope.svg')"
      :width="75"
    />
    <p>Fact #3</p>
  </div>
  </div>
  </div>
</div>

<br />
  <div id = "break"></div>
<br />
  <div id = "container">
  <div id = "text">
  <h1>Helpful Resources</h1>
  <p>To list here...</p>
  </div>
  </div>

<br />
  <div id = "break"></div>
<br />
  <div id = "container">
  <div id = "text">
  <h1>Website Credits</h1>
  <p>To list here...</p>
  </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'Resources'
  }
</script>

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
<template>
  <div class="nav_footer">
    <b-navbar toggleable="lg" type="light" variant="light">
      <!-- <pre>Created for CS467 at Oregon State University, Fall 2020</pre> -->
      Created for CS467 at Oregon State University, Fall 2020
      <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="css">
@media (max-width: 600px) {
  .nav_footer {
    font-size: 14px;
  }
}
@media (max-width: 430) {
  .nav_footer {
    font-size: 11px;
    text-align: left;
  }
}
</style>

<template>
  <div class="about">
    <Guide />
    <Resources />
  </div>
</template>

<script>
import Resources from "@/components/Resources.vue";

export default {
  name: "About",
  components: {
    Resources,
  },
};
</script>

<template>
  <div class="about">
    <Guide />
    <Resources />
  </div>
</template>

<script>
import Guide from '@/components/Guide.vue'
import Resources from '@/components/Resources.vue'

export default {
  name: "About",
  components: {
    Resources,
    Guide
  },
};
</script>
